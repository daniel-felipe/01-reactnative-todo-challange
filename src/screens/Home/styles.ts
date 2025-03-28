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
    flex: 1,
    paddingHorizontal: 24,
  },
  inputWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
    marginTop: -27,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 20,
  },
  created: {
    flexDirection: 'row',
    gap: 8,
  },
  createdText: {
    fontFamily: fontFamily.bold,
    color: colors.blue.base,
  },
  done: {
    flexDirection: 'row',
    gap: 8,
  },
  doneText: {
    fontFamily: fontFamily.bold,
    color: colors.purple.base,
  },
  counter: {
    paddingHorizontal: 8,
    paddingBlock: 2,
    borderRadius: 999,
    backgroundColor: colors.gray['400'],
    color: colors.gray['200'],

    fontFamily: fontFamily.bold,
    fontSize: 12,
  },
})
