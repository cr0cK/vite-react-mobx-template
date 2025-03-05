import type { CSSObject } from '@emotion/react'
import { newBuildVariants } from '@productive-codebases/build-variants'

/**
 * Return configured newBuildVariants with CSSObject from styled-components.
 */
export function buildVariants<TProps extends object>(props: TProps) {
  return newBuildVariants<TProps, CSSObject>(props)
}
