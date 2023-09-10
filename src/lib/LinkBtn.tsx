interface Props {
  link: string
  icon: string
  text: string
}

export default function LinkBtn({ link, icon, text }: Props) {
  const iconClass = `ph-duotone ph-${icon}`

  return (
    <a className="btn btn--link" href={ link } title={ text }>
      <i className={ iconClass }></i>
    </a>
  )
}