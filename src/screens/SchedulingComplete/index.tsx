import * as S from "./styles"
import { StatusBar, useWindowDimensions } from "react-native"
import LogoSvg from "../../assets/logo_background_gray.svg"
import DoneSvg from "../../assets/done.svg"
import { ConfirmButton } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { AppRoutesProps } from "../../@types/navigate"

interface SchedulingCompleteProps {}

export const SchedulingComplete = ({}: SchedulingCompleteProps) => {
  const { width } = useWindowDimensions()
  const navigation = useNavigation<AppRoutesProps>()

  function handleConfirm() {
    navigation.navigate("Home")
  }

  return (
    <S.Container>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <LogoSvg width={width} />
      <S.Content>
        <DoneSvg width={80} height={80} />
        <S.Title>Carro Alugado</S.Title>
        <S.Message>
          Agora você só precisa ir {"\n"}
          até a concessionária da REENTX {"\n"}
          pegar o seu automóvel {"\n"}
        </S.Message>
      </S.Content>

      <S.Footer>
        <ConfirmButton title="OK" onPress={handleConfirm} />
      </S.Footer>
    </S.Container>
  )
}
