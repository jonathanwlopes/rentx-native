import * as S from "./styles"

interface ButtonProps {
  title: string
  color?: string
}

export const Button = ({ title, color, ...rest }: ButtonProps) => {
  return (
    <S.Container {...rest} color={color} >
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
