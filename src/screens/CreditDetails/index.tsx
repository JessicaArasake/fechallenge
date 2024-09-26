import React from 'react';
import {
  ButtonContainer,
  ButtonText,
  Container,
  CreditContainer,
  CreditText,
  CreditTitle,
  Subtitle,
  TextContainer,
} from './styles';
import {useCredit} from '../../context/CreditContext';
import {Heading} from 'native-base';

export const CreditDetails = () => {
  const {selectedCredit} = useCredit();

  return (
    <Container>
      <TextContainer>
        <Heading>Acepta tu credito</Heading>
        <Subtitle>Confirma que has selecionado el credito deseado.</Subtitle>
      </TextContainer>
      <CreditTitle>Credito seleccionado:</CreditTitle>
      <CreditContainer>
        <CreditText>Credito {selectedCredit?.id}</CreditText>
        <CreditText>${selectedCredit?.amount}</CreditText>
      </CreditContainer>
      <ButtonContainer onPress={() => console.log('contratar')}>
        <ButtonText>Contratar</ButtonText>
      </ButtonContainer>
    </Container>
  );
};
