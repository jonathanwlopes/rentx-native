import * as S from "./styles"
import { Accessory, BackButton, Button, ImageSlider } from "../../components"
import { useNavigation, useRoute } from "@react-navigation/native"
import { AppRoutesProps } from "../../@types/navigate"
import { CarDTO } from "../../dtos/CardDTO"
import { getAccessoryIcon } from "../../utils/getAccessoryIcon"

interface Params {
  car: CarDTO
}

export const CarDetails = () => {
  const navigation = useNavigation<AppRoutesProps>()
  const route = useRoute()
  const { car } = route.params as Params

  function handleConfirmRental() {
    navigation.navigate("Scheduling")
  }

  function handleBack() {
    navigation.goBack()
  }

  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={handleBack} />
      </S.Header>

      <S.CarImages>
        <ImageSlider imagesUrl={car.photos} />
      </S.CarImages>

      <S.Content>
        <S.Details>
          <S.Description>
            <S.Brand>{car.brand}</S.Brand>
            <S.Name>{car.name}</S.Name>
          </S.Description>

          <S.Rent>
            <S.Period>{car.rent.period}</S.Period>
            <S.Price>R$ {car.rent.price}</S.Price>
          </S.Rent>
        </S.Details>

        <S.Accessories>
          {car.accessories.map((accessory) => (
            <Accessory key={accessory.type} name={accessory.name} icon={getAccessoryIcon(accessory.type)} />
          ))}
        </S.Accessories>

        <S.About>{car.about}</S.About>
      </S.Content>

      <S.Footer>
        <Button title="Escolher período do aluguel" onPress={handleConfirmRental} />
      </S.Footer>
    </S.Container>
  )
}
