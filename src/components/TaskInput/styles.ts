import { StyleSheet } from 'react-native'

import { colors, fontFamily } from '@/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 54,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    fontFamily: fontFamily.regular,
    backgroundColor: colors.gray['500'],
    borderColor: colors.gray['700'],
    color: colors.gray['100'],
  },
})
