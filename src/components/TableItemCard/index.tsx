import React, { useState } from 'react';
import { CaretDown, CaretUp } from 'phosphor-react-native';
import { format, formatDistanceToNow, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import theme from '../../styles/theme';

import {
  TableItemWrapper,
  TableRow,
  TableItemImage,
  TableItemName,
  Icon,
  MoreCard,
  MoreCardItem,
  MoreCardTitle,
  MoreCardAbout,
} from './styes';

interface UserInfoProps {
  id?: number;
  name: string;
  profile_image?: string;
  office?: string;
  admission_date?: string;
  phone?: string;
}

interface TableItemCardProps {
  data: UserInfoProps;
}

export function TableItemCard({ 
  data
}: TableItemCardProps) {
  const [selected, setSelected] = useState(false);

  function handleSelected() {
    setSelected(!selected)
  }

  // Formatação da Data
  const newDate = parseISO(data.admission_date);
  const formattedDate = format(newDate,'dd/MM/yyyy', {
      locale: ptBR
    }
  );

  // Formatação do Número de telefone
  const formattedNumber = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;
  var phoneNumber = data.phone.replace(/[^0-9]/g, "").slice(0, 11);
  const newPhoneNumber = phoneNumber.replace(formattedNumber, "+55 ($1) $2-$3");

  return (
    <TableItemWrapper 
      onPress={handleSelected}
      activeOpacity={0.7}
    >
      <TableRow>
        <TableItemImage source={{ uri: data.profile_image }}  />
        <TableItemName>{data.name}</TableItemName>
        <Icon>
          {selected ? (
            <CaretUp size={24} color={theme.colors.primary} />
          ): (
            <CaretDown size={24} color={theme.colors.primary} />
          )}
        </Icon>
      </TableRow>

      {selected ? (
        <MoreCard>
          <MoreCardItem>
            <MoreCardTitle>Cargo</MoreCardTitle>
            <MoreCardAbout>{data.office}</MoreCardAbout>
          </MoreCardItem>
          <MoreCardItem>
            <MoreCardTitle>Data de admissão</MoreCardTitle>
            <MoreCardAbout>{formattedDate}</MoreCardAbout>
          </MoreCardItem>
          <MoreCardItem>
            <MoreCardTitle>Telefone</MoreCardTitle>
            <MoreCardAbout>{newPhoneNumber}</MoreCardAbout>
          </MoreCardItem>
        </MoreCard>
      ) : (
        <></>
      )}
    </TableItemWrapper>
  );
}