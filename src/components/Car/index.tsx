import * as S from "./styles"
import GasolineSvg from "../../assets/gasoline.svg"

interface Car {
  brand: string
  name: string
  rent: {
    period: string
    price: number
  }
  thumbnail: string
}

interface CarProps {
  data: Car
}

export const Car = ({ data }: CarProps) => {
  return (
    <S.Container>
      <S.Details>
        <S.Brand>{data.brand}</S.Brand>
        <S.Name>{data.name}</S.Name>

        <S.About>
          <S.Rent>
            <S.Period>{data.rent.period}</S.Period>
            <S.Price>{`R$ ${data.rent.price}`}</S.Price>
          </S.Rent>

          <S.Type>
            <GasolineSvg />
          </S.Type>
        </S.About>
      </S.Details>

      <S.CardImage
        source={{
          uri: data.thumbnail,
        }}
      />
    </S.Container>
  )
}
