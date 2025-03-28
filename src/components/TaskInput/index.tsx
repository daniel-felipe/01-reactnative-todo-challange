import { useState } from 'react'
import { TextInput } from 'react-native'

import { colors } from '@/styles/theme'

import { styles } from './styles'

export function TaskInput() {
  const [isInputFocused, setIsInputFocused] = useState(false)

  function handleInputFocus() {
    setIsInputFocused(true)
  }

  function handleInputBlur() {
    setIsInputFocused(false)
  }

  return (
    <TextInput
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor={colors.gray['300']}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      style={[
        styles.container,
        isInputFocused && { borderColor: colors.purple.dark },
      ]}
    />
  )
}
