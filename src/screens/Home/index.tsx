import React from "react"
import { StatusBar } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import * as S from "./styles"
import Logo from "../../assets/logo.svg"

interface HomeProps {}
export const Home = ({}: HomeProps) => {
  return (
    <S.Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <S.Header>
        <S.HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <S.TotalCars>Total de 12 carros</S.TotalCars>
        </S.HeaderContent>
      </S.Header>
    </S.Container>
  )
}
