interface Props {
  isOpen: boolean
  onClick: Function
}

export default function ToggleBtn({ isOpen, onClick }: Props) {
  const icon = isOpen ? (
    <i className="ph-duotone ph-minus-square" title="close"></i>
  ) : (
    <i className="ph-duotone ph-plus-square" title="open"></i>
  )
  
  return <button onClick={() => onClick()} className="btn btn--toggle">{ icon }</button>
}