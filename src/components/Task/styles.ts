import { StyleSheet } from 'react-native'

import { colors, fontFamily } from '@/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    height: 64,
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: colors.gray['500'],
    borderColor: colors.gray['400'],
  },
  description: {
    flex: 1,
    flexWrap: 'wrap',
    fontFamily: fontFamily.regular,
    fontSize: 14,
    lineHeight: 19.6,
    color: colors.gray['100'],
  },
})
