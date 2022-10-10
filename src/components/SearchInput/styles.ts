import { TextInput, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 48px;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 4px;
  padding: 14px 16px;
  align-items: center;
  flex-direction: row;
  margin-top: 28px;
`;

export const Input = styled(TextInput)`
  flex: 1;
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.black};
  line-height: ${RFValue(16)}px;
`;

export const SearchButton = styled(TouchableOpacity)`
  width: 24px;
  height: 24px;
`;