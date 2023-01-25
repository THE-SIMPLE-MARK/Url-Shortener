import { timingSafeEqual } from "crypto"

/**
 * Safely compare 2 variables by their underlying bytes (wrapper for crypto.timingSafeEqual)
 * @param {Any} a
 * @param {Any} b
 */

export function safeCompare(a: any, b: any) {
  const aBuffer = Buffer.from(a)
  const bBuffer = Buffer.from(b)

  if (aBuffer.length !== bBuffer.length) return false

  return timingSafeEqual(aBuffer, bBuffer)
}
