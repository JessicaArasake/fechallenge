import styled from 'styled-components';
import {Box, Heading, Text, Button} from 'native-base';

export const Container = styled(Box)`
  flex: 1;
  text-align: left;
  margin: 15px;
`;

export const Header = styled(Heading)`
  margin-bottom: 10px;
`;

export const Subtitle = styled(Text)`
  color: #798089;
  font-size: 14px;
`;

export const TextContainer = styled(Box)`
  width: 80%;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled(Button)`
  margin-top: 30px;
  height: 50px;
  background-color: #2d64ed;
`;

export const ButtonText = styled(Text)`
  font-weight: semi-bold;
  color: white;
  font-size: 15px;
`;
