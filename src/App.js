import { NativeBaseProvider, Text, extendTheme } from "native-base";
import { theme } from "./styles/theme";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Text>Init commit</Text>
    </NativeBaseProvider>
  );
}
