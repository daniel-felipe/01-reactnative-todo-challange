import { StyleSheet } from 'react-native'

import { colors, fontFamily } from '@/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.gray['400'],
    paddingBlock: 48,
    paddingInline: 20,
  },
  wrapper: {
    flex: 1,
    fontSize: 14,
    marginTop: 16,
  },
  title: {
    color: colors.gray['300'],
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 19.6,
  },
})
