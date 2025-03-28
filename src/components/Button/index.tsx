import { ReactNode } from 'react'
import { TouchableOpacity } from 'react-native'

import { styles } from './styles'

type Props = {
  children: ReactNode
}

export function Button({ children, ...props }: Props) {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      {children}
    </TouchableOpacity>
  )
}
