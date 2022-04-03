import * as S from "./styles"
import { Accessory, BackButton, Button, ImageSlider } from "../../components"
import { Feather } from "@expo/vector-icons"
import speedSvg from "../../assets/speed.svg"
import accelerationSvg from "../../assets/acceleration.svg"
import forceSvg from "../../assets/force.svg"
import gasolineSvg from "../../assets/gasoline.svg"
import exchangeSvg from "../../assets/exchange.svg"
import peopleSvg from "../../assets/people.svg"
import { RFValue } from "react-native-responsive-fontsize"
import { useTheme } from "styled-components"
import { useNavigation } from "@react-navigation/native"
import { AppRoutesProps } from "../../@types/navigate"

interface SchedulingDetailsProps {}

export const SchedulingDetails = ({}: SchedulingDetailsProps) => {
  const theme = useTheme()
  const navigation = useNavigation<AppRoutesProps>()

  function handleConfirmRental() {
    navigation.navigate("SchedulingComplete")
  }

  return (
    <S.Container>
      <S.Header>
        <BackButton onPress={() => {}} />
      </S.Header>

      <S.CarImages>
        <ImageSlider imagesUrl={["https://picsum.photos/300/300"]} />
      </S.CarImages>

      <S.Content>
        <S.Details>
          <S.Description>
            <S.Brand>Lamborghini</S.Brand>
            <S.Name>Huracan</S.Name>
          </S.Description>

          <S.Rent>
            <S.Period>Ao dia</S.Period>
            <S.Price>R$ 580</S.Price>
          </S.Rent>
        </S.Details>

        <S.Accessories>
          <Accessory name="380Km/h" icon={speedSvg} />
          <Accessory name="3.2s" icon={accelerationSvg} />
          <Accessory name="800 HP" icon={forceSvg} />
          <Accessory name="Gasolina" icon={gasolineSvg} />
          <Accessory name="Auto" icon={exchangeSvg} />
          <Accessory name="2 pessoas" icon={peopleSvg} />
        </S.Accessories>

        <S.RentalPeriod>
          <S.CalendarIcon>
            <Feather name="calendar" size={RFValue(24)} color={theme.colors.background_secondary} />
          </S.CalendarIcon>

          <S.DateInfo>
            <S.DateTitle>DE</S.DateTitle>
            <S.DateValue>18/06/2021</S.DateValue>
          </S.DateInfo>

          <Feather name="chevron-right" size={RFValue(10)} color={theme.colors.text} />

          <S.DateInfo>
            <S.DateTitle>ATÉ</S.DateTitle>
            <S.DateValue>18/06/2021</S.DateValue>
          </S.DateInfo>
        </S.RentalPeriod>

        <S.RentalPrice>
          <S.RentalPriceLabel>TOTAL</S.RentalPriceLabel>
          <S.RentalPriceDetails>
            <S.RentalPriceQuota>R$ 580 x3 diárias</S.RentalPriceQuota>
            <S.RentalPriceTotal>R$ 2.900</S.RentalPriceTotal>
          </S.RentalPriceDetails>
        </S.RentalPrice>
      </S.Content>

      <S.Footer>
        <Button title="Alugar agora" onPress={handleConfirmRental} color={theme.colors.success} />
      </S.Footer>
    </S.Container>
  )
}
