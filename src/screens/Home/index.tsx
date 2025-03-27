import { Image, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { colors } from '@/styles/theme'

import { styles } from './styles'

import logo from '@/assets/logo.png'

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
      </View>
      <View style={styles.main}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={colors.gray['300']}
          style={styles.input}
        />
      </View>
    </SafeAreaView>
  )
}
