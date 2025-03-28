import { Image, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { PlusCircle } from 'phosphor-react-native'

import logo from '@/assets/logo.png'
import { Button } from '@/components/Button'
import { TaskInput } from '@/components/TaskInput'
import { colors } from '@/styles/theme'

import { styles } from './styles'

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
      </View>
      <View style={styles.main}>
        <View style={styles.inputWrapper}>
          <TaskInput />
          <Button>
            <PlusCircle size={16} color={colors.white} />
          </Button>
        </View>

        <View style={styles.info}>
          <View style={styles.created}>
            <Text style={styles.createdText}>Criadas</Text>
            <Text style={styles.counter}>0</Text>
          </View>

          <View style={styles.done}>
            <Text style={styles.doneText}>Concluídas</Text>
            <Text style={styles.counter}>0</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
