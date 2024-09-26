import React from 'react';
import useFetch from '../../hooks/credits';
import {FlatList, Text} from 'native-base';
import {ActivityIndicator} from 'react-native';
import {CreditContainer, CreditText} from './styles';
import {useCredit, Credit} from '../../context/CreditContext';

export const CreditList = () => {
  const {selectedCredit, setSelectedCredit} = useCredit();
  const {
    data: credits,
    loading: loadingCredits,
    error: errorCredits,
  } = useFetch('https://mock.apidog.com/m1/499449-0-default/credits');

  if (loadingCredits) {
    return <ActivityIndicator size="large" color="0000ff" />;
  }

  if (errorCredits) {
    return <Text>{errorCredits}</Text>;
  }

  const handlePress = (credit: Credit) => {
    setSelectedCredit(credit);
  };

  return (
    <FlatList
      data={credits}
      renderItem={({item, index}) => {
        const isSelected =
          selectedCredit?.id === item.id &&
          selectedCredit?.amount === item.amount;
        return (
          <CreditContainer
            key={`${item.id}-${index}`}
            onPress={() => handlePress(item)}
            backgroundColor={
              isSelected ? 'rgba(45, 100, 237, 0.8)' : 'rgba(45, 100, 237, 0.5)'
            }>
            <CreditText>Credito{item.id}</CreditText>
            <CreditText>${item.amount}</CreditText>
          </CreditContainer>
        );
      }}
    />
  );
};
