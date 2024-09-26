import {FormControl, Input} from 'native-base';
import {
  Container,
  Header,
  Subtitle,
  TextContainer,
  ButtonContainer,
  ButtonText,
} from './styles';
import {ModalCredits} from '../../components/Modal';
import React, {useState} from 'react';

export const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isOpen, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const handleModal = () => {
    setOpen(true);
  };

  const isButtonDisabled = !name || !email;

  return (
    <Container>
      <TextContainer>
        <Header>Descubre tu credito</Header>
        <Subtitle>
          Llena el siguiente formulario para conocer los creditos que tenemos
          disponibles para ti.
        </Subtitle>
      </TextContainer>
      <FormControl>
        <FormControl.Label>Nombre</FormControl.Label>
        <Input placeholder="Nombre" onChangeText={value => setName(value)} />
        <FormControl.Label>Correo</FormControl.Label>
        <Input placeholder="Correo" onChangeText={value => setEmail(value)} />
      </FormControl>
      <ButtonContainer onPress={handleModal} isDisabled={isButtonDisabled}>
        <ButtonText>Descubrir creditos</ButtonText>
      </ButtonContainer>
      <ModalCredits isOpen={isOpen} onClose={onClose} />
    </Container>
  );
};
