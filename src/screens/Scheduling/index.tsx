import { BackButton, Button, Calendar } from "../../components"
import { useTheme } from "styled-components"

import * as S from "./styles"
import ArrowSvg from "../../assets/arrow.svg"
import { StatusBar } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { AppRoutesProps } from "../../@types/navigate"

interface SchedulingProps {}

export const Scheduling = ({}: SchedulingProps) => {
  const theme = useTheme()
  const navigation = useNavigation<AppRoutesProps>()

  function handleConfirmRental() {
    navigation.navigate("SchedulingDetails")
  }

  return (
    <S.Container>
      <S.Header>
        <StatusBar barStyle={"light-content"} translucent backgroundColor="transparent" />
        <BackButton onPress={() => {}} color={theme.colors.text} />
        <S.Title>
          Escolha uma{"\n"}
          data de inicio e {"\n"}
          fim do aluguel
        </S.Title>

        <S.RentalPeriod>
          <S.DateInfo>
            <S.DateTitle>DE</S.DateTitle>
            <S.DateValue selected>18/03/2022</S.DateValue>
          </S.DateInfo>

          <ArrowSvg />

          <S.DateInfo>
            <S.DateTitle>Até</S.DateTitle>
            <S.DateValue selected={false}></S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>
      </S.Header>

      <S.Content>
        <Calendar />
      </S.Content>

      <S.Footer>
        <Button title="Confirmar" onPress={handleConfirmRental} />
      </S.Footer>
    </S.Container>
  )
}
