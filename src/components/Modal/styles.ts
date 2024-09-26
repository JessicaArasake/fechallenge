import styled from 'styled-components';
import {Button, Modal, Text} from 'native-base';

export const ModalContainer = styled(Modal)`
  display: flex;
  border-radius: 50px;
  width: 100%;
`;

export const Header = styled(Text)`
  margin: 8px 0;
  font-size: 22px;
  font-weight: bold;
  border-bottom-width: 0;
`;

export const Subtitle = styled(Text)`
  color: #798089;
  font-size: 14px;
`;

export const ButtonContainer = styled(Button)`
  height: 50px;
  color: white;
  background-color: #2d64ed;
  width: 100%;
`;

export const ButtonText = styled(Text)`
  font-weight: semi-bold;
  color: white;
  font-size: 15px;
`;

export const Footer = styled(Modal.Footer)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 35px;
`;
