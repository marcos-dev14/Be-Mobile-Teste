import { TextInputProps } from 'react-native';
import SearchIcon from '../../assets/search.svg';

import { 
  Container, 
  Input, 
  SearchButton 
} from "./styles";

export function SearchInput({...rest }: TextInputProps) {
  return (
    <Container>
      <Input 
        placeholder="Pesquisar"
        {...rest} 
      />
      <SearchButton activeOpacity={0.7} >
        <SearchIcon />
      </SearchButton>
    </Container>
  );
}