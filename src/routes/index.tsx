import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {CreditDetails} from '../screens/CreditDetails';
import {ModalCredits} from '../components/Modal';
import {Form} from '../screens/Form';

type RootStackParamList = {
  ModalCredits: undefined;
  CreditDetails: undefined;
  Form: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Form">
      <Stack.Screen
        name="Form"
        component={Form}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ModalCredits"
        component={ModalCredits}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreditDetails"
        component={CreditDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routes;
