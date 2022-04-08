import { CarDTO } from "../../dtos/CardDTO"

export interface AppRoutesProps {
  navigate: (screen: string, car?: { car: CarDTO }) => void
  goBack: () => void
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
