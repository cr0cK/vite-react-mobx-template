import clsx from 'clsx'

export interface ParagraphText
  extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

export function Paragraph(props: ParagraphText) {
  const { children, className, ...rest } = props

  return (
    <p className={clsx('text-base mb-4', className)} {...rest}>
      {children}
    </p>
  )
}
