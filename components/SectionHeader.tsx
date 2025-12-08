type SectionHeaderProps = {
  label?: string
}

export default function SectionHeader({ label }: SectionHeaderProps) {
  return <div>{label ?? 'SectionHeader placeholder'}</div>
}
