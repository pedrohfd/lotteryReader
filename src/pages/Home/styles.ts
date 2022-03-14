import { RFValue } from 'react-native-responsive-fontsize'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  background: ${({ theme }) => theme.colors.dark_500};
  flex: 1;
  align-items: center;

  padding-top: ${RFValue(10)}px;
`

export const Title = styled.Text`
  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.orange_500};

  margin-bottom: 65%;
`
