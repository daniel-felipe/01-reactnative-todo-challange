import { Image, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { colors } from '@/styles/theme'

import { styles } from './styles'

import logo from '@/assets/logo.png'
import { Button } from '@/components/Button'
import { PlusCircle } from 'phosphor-react-native'
import { useState } from 'react'

export function Home() {
  const [isInputFocused, setIsInputFocused] = useState(false)

  function handleInputFocus() {
    setIsInputFocused(true)
  }

  function handleInputBlur() {
    setIsInputFocused(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
      </View>
      <View style={styles.main}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={colors.gray['300']}
            style={[
              styles.input,
              isInputFocused && { borderColor: colors.purple.dark },
            ]}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <Button>
            <PlusCircle size={16} color={colors.white} />
          </Button>
        </View>
      </View>
    </SafeAreaView>
  )
}
