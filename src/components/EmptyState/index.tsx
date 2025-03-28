import { Image, Text, View } from 'react-native'

import clipboardImg from '@/assets/clipboard.png'
import { fontFamily } from '@/styles/theme'

import { styles } from './styles'

export function EmptyState() {
  return (
    <View style={styles.container}>
      <Image source={clipboardImg} width={56} />
      <View style={styles.wrapper}>
        <Text style={[styles.title, { fontFamily: fontFamily.bold }]}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.title}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  )
}
