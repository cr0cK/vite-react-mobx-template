import clsx from 'clsx'

export interface HxProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

export function H1(props: HxProps) {
  const { children, className, ...rest } = props

  return (
    <h1 className={clsx('text-4xl font-bold mb-4', className)} {...rest}>
      {children}
    </h1>
  )
}

export function H2(props: HxProps) {
  const { children, className, ...rest } = props

  return (
    <h2 className={clsx('text-3xl font-bold mb-3', className)} {...rest}>
      {children}
    </h2>
  )
}

export function H3(props: HxProps) {
  const { children, className, ...rest } = props

  return (
    <h3 className={clsx('text-2xl font-semibold mb-2', className)} {...rest}>
      {children}
    </h3>
  )
}

export function H4(props: HxProps) {
  const { children, className, ...rest } = props

  return (
    <h4 className={clsx('text-xl font-semibold mb-2', className)} {...rest}>
      {children}
    </h4>
  )
}

export function H5(props: HxProps) {
  const { children, className, ...rest } = props

  return (
    <h5 className={clsx('text-lg font-medium mb-1', className)} {...rest}>
      {children}
    </h5>
  )
}

export function H6(props: HxProps) {
  const { children, className, ...rest } = props
  return (
    <h6 className={clsx('text-base font-medium mb-1', className)} {...rest}>
      {children}
    </h6>
  )
}
