import * as S from "./styles"
import { StatusBar } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import Logo from "../../assets/logo.svg"
import { Car } from "../../components"

interface HomeProps {}
export const Home = ({}: HomeProps) => {
  const carDataOne = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    thumbnail: "https://picsum.photos/300/300",
  }

  return (
    <S.Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <S.Header>
        <S.HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <S.TotalCars>Total de 12 carros</S.TotalCars>
        </S.HeaderContent>
      </S.Header>

      <S.CardList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Car data={carDataOne} />}
      ></S.CardList>
    </S.Container>
  )
}
