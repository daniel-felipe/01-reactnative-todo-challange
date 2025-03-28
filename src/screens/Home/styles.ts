import { StyleSheet } from 'react-native'

import { colors, fontFamily } from '@/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray['600'],
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: 170,
    backgroundColor: colors.gray['700'],
  },
  main: {
    paddingHorizontal: 24,
  },
  inputWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
    marginTop: -27,
  },
  input: {
    flex: 1,
    height: 54,
    padding: 16,
    borderRadius: 8,
    backgroundColor: colors.gray['500'],
    borderWidth: 1,
    borderColor: colors.gray['700'],
    fontSize: 16,
    fontFamily: fontFamily.regular,
  },
})
