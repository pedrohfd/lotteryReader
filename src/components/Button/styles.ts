import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const RNButton = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.orange_500};

  border-radius: 10px;
  margin: 10px auto;

  height: ${RFValue(80)}px;
  width: ${RFValue(300)}px;

  align-items: center;
  justify-content: center;
`

export const RNButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white_500};
  font-size: ${RFValue(24)}px;
  font-family: ${({ theme }) => theme.fonts.semiBold};
`
