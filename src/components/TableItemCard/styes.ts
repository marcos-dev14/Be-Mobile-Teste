import { Image, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const TableItemWrapper= styled(TouchableOpacity)`
  width: 100%;
  background-color: ${({theme}) => theme.colors.white};
  align-items: center;
  margin-bottom: 2px;
`;

export const TableRow = styled.View`
width: 100%;
height: 60px;
padding: 14px 16px;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

export const TableItemImage = styled(Image)`
  width: 34px;
  height: 34px;
  border-radius: 24px;
`;

export const TableItemName = styled.Text`
  font-family: ${({theme}) => theme.font.regular};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.black};
`;

export const Icon = styled.View`
`;

export const MoreCard = styled.View`
  width: 100%;
  height: 160px;
  padding: 14px 16px;
`;

export const MoreCardItem = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const MoreCardTitle = styled.Text`
  font-family: ${({theme}) => theme.font.medium};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.black};
`;

export const MoreCardAbout = styled.Text`
  font-family: ${({theme}) => theme.font.regular};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.black};
`;