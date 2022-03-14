import styled from 'styled-components/native'

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.dark_500};
`

export const ButtonList = styled.FlatList`
  margin-top: 10px;
  margin-bottom: 70px;
`
