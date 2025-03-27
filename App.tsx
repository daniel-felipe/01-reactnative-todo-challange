import { Home } from '@/screens/Home'

import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter'

export default function App() {
  useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  return <Home />
}
