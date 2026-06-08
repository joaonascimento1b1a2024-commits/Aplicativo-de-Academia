import { StatusBar } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { colors } from "./src/styles/colors";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <AppNavigator />
    </>
  );
}
