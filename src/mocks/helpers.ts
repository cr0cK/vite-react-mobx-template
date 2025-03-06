import type { Maybe } from '@/libs/helpers/types'

/**
 * Generates a random integer between min and max (inclusive).
 */
export function getRandomInt(min: number, max: number): number {
  // Ensure min is an integer
  const floorMin = Math.ceil(min)
  // Ensure max is an integer
  const floorMax = Math.floor(max)

  // Generate a random integer in the range [floorMin, floorMax]
  return Math.floor(Math.random() * (floorMax - floorMin + 1)) + floorMin
}

/**
 * Delay the return of data to mimic backend responses.
 */
export function delayResponse<TError, TData>(
  err: Maybe<TError>,
  data: Maybe<TData>
): Promise<Maybe<TData>> {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        if (err) {
          reject(err)
          return
        }

        resolve(data)
      },
      getRandomInt(200, 1000)
    )
  })
}
