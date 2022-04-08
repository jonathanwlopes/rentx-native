import React, { useEffect, useState } from "react"

import * as S from "./styles"
import { StatusBar } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import Logo from "../../assets/logo.svg"
import { Car, Load } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { AppRoutesProps } from "../../@types/navigate"
import { api } from "../../services/api"
import { CarDTO } from "../../dtos/CardDTO"

interface HomeProps {}

export const Home = ({}: HomeProps) => {
  const navigation = useNavigation<AppRoutesProps>()
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setLoading] = useState(true)

  function handleCarDetails(car: CarDTO) {
    navigation.navigate("CarDetails", { car })
  }

  async function fetchCars() {
    try {
      const response = await api.get("/cars")
      setCars(response.data)
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCars()
  }, [])

  return (
    <S.Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <S.Header>
        <S.HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <S.TotalCars>Total de 12 carros</S.TotalCars>
        </S.HeaderContent>
      </S.Header>

      {loading ? (
        <Load />
      ) : (
        <S.CardList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Car data={item} onPress={() => handleCarDetails(item)} />}
        />
      )}
    </S.Container>
  )
}
