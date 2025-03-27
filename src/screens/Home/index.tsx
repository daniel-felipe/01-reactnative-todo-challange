import { Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { styles } from './styles'

import logo from '@/assets/logo.png'

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
      </View>
      <Text>Todo App</Text>
    </SafeAreaView>
  )
}
