import styled from 'styled-components';
import {Pressable, Text} from 'native-base';

export const CreditContainer = styled(Pressable)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

export const CreditText = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  color: white;
`;
