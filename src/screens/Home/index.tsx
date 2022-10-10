import { useState, useEffect } from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  TextInput
} from 'react-native';

import LogoIcon from '../../assets/logo.svg';
import CircleIcon from '../../assets/circle.svg';

import { api } from '../../services/api';

import { Loading } from '../../components/Loading';
import { TableItemCard } from '../../components/TableItemCard';
import { SearchInput } from '../../components/SearchInput';

import { 
  Container, 
  Content, 
  Header, 
  Title,
  TableList,
  TableHeader,
  TableHeaderRow,
  TableHeaderRowItem,
  Icon,
  LoadingContent
} from "./styled";


interface EmployeesProps {
  id?: number;
  name: string;
  profile_image?: string;
  office?: string;
  admission_date?: string;
  phone?: string;
}

export function Home() {
  const [employees, setEmployees] = useState<EmployeesProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const response = await api.get(`employees`);
        setFilterList(response.data)
        
        if (searchText == '') {
          setEmployees(response.data);
        } else {
          setFilterList(
            employees.filter(item => {
              if(item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                return true;
              } else if (item.office.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                return true;
              } else if (item.phone.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                return true;
              } else {
                return false;
              }
            })
          )
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchEmployees();
  },[searchText])
  

  return (
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <LogoIcon 
            style={{
              marginTop: 30
            }}
          />
        </Header>
        
        <Content 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ 
            paddingBottom: 280 
          }}
        >
          <Title>Funcionários</Title>
          <SearchInput 
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
          />

          <TableList>
            <TableHeader>
              <TableHeaderRow>
                <TableHeaderRowItem>Foto</TableHeaderRowItem>
                <TableHeaderRowItem>Nome</TableHeaderRowItem>
                <Icon>
                  <CircleIcon />
                </Icon>
              </TableHeaderRow>
            </TableHeader>

            {
              loading ? (
                <LoadingContent>
                  <Loading />
                </LoadingContent>
              ) :
              <>
                {filterList.map((item) => {
                  return (
                    <TableItemCard data={item} key={item.id} />
                  )
                })}
              </>
            }
          </TableList>
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
}