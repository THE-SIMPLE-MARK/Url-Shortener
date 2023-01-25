import { safeCompare } from "@/utils/safeCompare"
import { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "@/prisma/prisma"
import { init } from "@paralleldrive/cuid2"

export default async function CreateLink(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method !== "POST")
    return response.status(405).send({
      code: 405,
      message: "Only the POST method is allowed on this route.",
    })

  const authToken = request.headers?.authorization
  if (!authToken)
    return response.status(400).send({
      code: 400,
      message: "No bearer token was provided in the authorization header.",
    })

  if (!safeCompare(authToken, `Bearer ${process.env.AUTH_TOKEN}`))
    return response.status(401).send({
      code: 401,
      message: "An invalid authorization token was provided.",
    })

  const url = request.headers?.url
  if (!url || typeof url !== "string")
    return response.status(400).send({
      code: 400,
      message: 'Expected HTTP header "url" with a value type of "String".',
    })

  const domain = process.env.DOMAIN || `https://${process.env.VERCEL_URL}`

  // check if the link already exists
  // if it does then just send that one
  const linkExists = await prisma.link.findUnique({
    where: {
      originalUrl: url,
    },
    select: {
      shortId: true,
    },
  })
  if (linkExists)
    return response.status(200).send({
      code: 200,
      message: "The link has already been created.",
      shortUrl: `${domain}/${linkExists.shortId}`,
    })

  // create new link and send it
  const shortCuidGenerator = init({ length: 10 }) // 50% odds of collision after ~51,386,368 ids
  const shortId = shortCuidGenerator()

  await prisma.link.create({
    data: {
      shortId: shortId,
      originalUrl: url,
    },
  })

  response.status(201).send({
    code: 201,
    message: "Successfully created",
    shortUrl: `${domain}/${shortId}`,
  })
}
