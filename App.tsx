import { Home } from '@/screens/Home'
import { colors } from '@/styles/colors'

import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter'
import { StatusBar } from 'react-native'

export default function App() {
  useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.gray['700']}
      />
      <Home />
    </>
  )
}
