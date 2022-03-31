import * as S from "./styles"

interface ImageSliderProps {
  imagesUrl: string[]
}

export const ImageSlider = ({ imagesUrl }: ImageSliderProps) => {
  return (
    <S.Container>
      <S.ImageIndexes>
        <S.ImageIndex active={true} />
        <S.ImageIndex active={false} />
        <S.ImageIndex active={false} />
        <S.ImageIndex active={false} />
      </S.ImageIndexes>

      <S.CarImageWrapper>
        <S.CarImage source={{ uri: imagesUrl[0] }} resizeMode="contain" />
      </S.CarImageWrapper>
    </S.Container>
  )
}
