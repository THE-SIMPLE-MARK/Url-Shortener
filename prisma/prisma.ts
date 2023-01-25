import { PrismaClient } from "@prisma/client"
import { logger } from "../utils/logger.js"
import { blue } from "colorette"

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma
