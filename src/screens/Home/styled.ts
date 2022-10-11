import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { ScrollView } from "react-native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${({theme}) => theme.colors.gray};
`;

export const Header = styled.View`
  width: 100%;
  height: 100px;
  background-color: ${({theme}) => theme.colors.black};
  padding: 12px 20px;
  align-items: flex-start;
`;

export const Content = styled(ScrollView)`
  width: 100%;
  padding: 20px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.font.medium};
  font-size: ${RFValue(24)}px;
  color: ${({theme}) => theme.colors.black};
`;

export const TableList = styled.View`
  width: 100%;
  margin-top: 20px;
`;

export const TableHeader = styled.View`
  width: 100%;
  height: 47px;
  background-color: ${({theme}) => theme.colors.primary};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const TableHeaderRow = styled.View`
  width: 100%;
  height: 47px;
  padding: 12px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TableHeaderRowItem = styled.Text`
  font-family: ${({theme}) => theme.font.medium};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.white};
  text-transform: uppercase;
`;

export const Icon = styled.View`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
`;

export const TableItemWrapper= styled.View`
  width: 100%;
  height: 47px;
  background-color: ${({theme}) => theme.colors.white};
  padding: 14px 15px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2px;
`;

export const TableRow = styled.TouchableOpacity`
width: 100%;
height: 68px;
padding: 14px 15px;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

export const TableRowItem= styled.Text``;

export const LoadingContent = styled.View`
  flex: 1;
  margin-top: 80px;
`;

