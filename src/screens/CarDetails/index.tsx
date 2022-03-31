import * as S from "./styles"
import { Accessory, BackButton, ImageSlider } from "../../components"

import speedSvg from "../../assets/speed.svg"
import accelerationSvg from "../../assets/acceleration.svg"
import forceSvg from "../../assets/force.svg"
import gasolineSvg from "../../assets/gasoline.svg"
import exchangeSvg from "../../assets/exchange.svg"
import peopleSvg from "../../assets/people.svg"

interface CarDetailsProps {}

export const CarDetails = ({}: CarDetailsProps) => {
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

        <S.About>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vel nisi dignissimos eaque maxime et veniam error accusamus assumenda quas
          itaque quo quaerat, culpa sed impedit eum repudiandae ab non!
        </S.About>
      </S.Content>
    </S.Container>
  )
}
