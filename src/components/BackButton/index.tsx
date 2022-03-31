import * as S from "./styles"
import { BorderlessButtonProps } from "react-native-gesture-handler"
import { MaterialIcons } from "@expo/vector-icons"
import { useTheme } from "styled-components"

interface BackButtonProps extends BorderlessButtonProps {
  color?: string
}

export const BackButton = ({ color, ...rest }: BackButtonProps) => {
  const theme = useTheme()

  return (
    <S.Container {...rest}>
      <MaterialIcons name="chevron-left" size={24} color={color ? color : theme.colors.text} />
    </S.Container>
  )
}
