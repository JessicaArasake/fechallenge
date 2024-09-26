import React from 'react';
import {Modal} from 'native-base';
import {
  ButtonContainer,
  ButtonText,
  Footer,
  Header,
  ModalContainer,
  Subtitle,
} from './styles';
import {CreditList} from '../CreditList';
import {useNavigation} from '@react-navigation/native';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalCredits = ({isOpen, onClose}: ModalProps) => {
  const navigation = useNavigation();

  const handleSelectCredit = () => {
    onClose();
    navigation.navigate('CreditDetails');
  };

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      <Modal.Content borderRadius={'2xl'}>
        <Modal.Header borderBottomWidth={0}>
          <Header>Felicidades!</Header>
          <Subtitle>Econtramos estos creditos perfectos para ti:</Subtitle>
        </Modal.Header>
        <Modal.Body>
          <CreditList />
        </Modal.Body>
        <Footer borderTopWidth={0}>
          <ButtonContainer onPress={handleSelectCredit}>
            <ButtonText>Selecionar credito</ButtonText>
          </ButtonContainer>
        </Footer>
      </Modal.Content>
    </ModalContainer>
  );
};
