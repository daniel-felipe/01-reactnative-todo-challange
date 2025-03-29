import { Circle, Trash } from 'phosphor-react-native'
import { Text, TouchableOpacity, View } from 'react-native'

import { colors } from '@/styles/theme'

import { styles } from './styles'

export function Task() {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Circle size={24} color={colors.blue.base} />
        <Text style={styles.description}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
        </Text>
        <Trash size={24} color={colors.gray['300']} />
      </View>
    </TouchableOpacity>
  )
}
