interface Props {
  text: string
  icon: string
}

export default function Tag({ text, icon }: Props) {
  const iconClass = `ph-duotone ph-${icon}`
  
  return (
    <div className="tag">
      <i className={ iconClass }></i>
      <span className="tag__text">{ text }</span>
    </div>
  )
}