import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginPage, ListPage, AccountPage} from './pages';
import {NavigationContainer} from '@react-navigation/native';
import Provider from './context/Provider';
import Icon from 'react-native-vector-icons/FontAwesome';
import I18n from 'react-native-i18n';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const tabBarLabelStyle = {
  fontSize: 14,
  fontWeight: '500',
  color: 'black',
}

I18n.fallbacks = true;

I18n.translations = {
  'en': require('./translations/en.json'),
  'tr': require('./translations/tr.json'),
};

function Home() {
  return (
    <Tab.Navigator initialRouteName="ListPage"  screenOptions={{tabBarHideOnKeyboard:true}}>
      <Tab.Screen
        name="ListPage"
        component={ListPage}
        options={{
          tabBarLabel: 'List',
          tabBarLabelStyle: tabBarLabelStyle,
          tabBarIcon: ({tintColor, focused}) =>
            focused ? (
              <Icon name="list-ul" size={20} color={'black'} />
            ) : (
              <Icon name="list-ul" size={15} color={'black'} />
            ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="AccountPage"
        component={AccountPage}
        options={{
          tabBarLabel: 'Account',
          tabBarLabelStyle:tabBarLabelStyle,
          tabBarIconStyle: {
            backgroundColor: 'red',
          },
          tabBarIcon: ({tintColor, focused}) =>
            focused ? (
              <Icon name="user" size={20} color={'black'} />
            ) : (
              <Icon name="user" size={15} color={'black'} />
            ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function Rotuer() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Rotuer;
