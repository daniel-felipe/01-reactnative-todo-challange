import { StyleSheet } from 'react-native'

import { colors } from '@/styles/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray['700'],
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: 170,
  },
})
