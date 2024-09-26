import styled from 'styled-components';
import {Box, Text, Button} from 'native-base';

export const Container = styled(Box)`
  flex: 1;
  text-align: left;
  margin: 15px;
`;

export const Subtitle = styled(Text)`
  color: #798089;
  font-size: 14px;
  margin-top: 10px;
`;

export const TextContainer = styled(Box)`
  width: 100%;
  margin-bottom: 50px;
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

export const CreditContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: rgba(45, 100, 237, 0.5);
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 0 10px;
`;

export const CreditText = styled(Text)`
  font-weight: bold;
  color: white;
  font-size: 15px;
`;

export const CreditTitle = styled(Text)`
  margin-bottom: 10px;
  color: #798089;
`;
