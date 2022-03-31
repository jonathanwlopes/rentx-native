import * as S from "./styles"
import { SvgProps } from "react-native-svg"

interface AccessoryProps {
  name: string
  icon: React.FC<SvgProps>
}

export const Accessory = ({ name, icon: Icon }: AccessoryProps) => {
  return (
    <S.Container>
      <Icon width={32} height={32} />
      <S.Name>{name}</S.Name>
    </S.Container>
  )
}
