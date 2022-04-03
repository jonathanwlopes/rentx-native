import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { CarDetails, Home, Scheduling, SchedulingComplete, SchedulingDetails } from "../screens"

const { Navigator, Screen } = createNativeStackNavigator()

export const StackRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
    </Navigator>
  )
}
