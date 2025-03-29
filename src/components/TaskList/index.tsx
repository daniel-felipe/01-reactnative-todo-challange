import { ScrollView, View } from 'react-native'
import { Task } from '../Task'

export function TaskList() {
  return (
    <ScrollView>
      <Task />
    </ScrollView>
  )
}
