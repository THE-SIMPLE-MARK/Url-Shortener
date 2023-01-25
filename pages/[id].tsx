import { NextApiRequest } from "next"
import { prisma } from "@/prisma/prisma"

export default function Hashpage() {
  return (
    <main>
      <h1>The requested link was not found.</h1>
    </main>
  )
}

export async function getServerSideProps(request: NextApiRequest) {
  const id = request.query.id as string

  const link = await prisma.link.findUnique({
    where: {
      shortId: id,
    },
  })

  if (link) {
    return {
      redirect: {
        destination: link.originalUrl,
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
