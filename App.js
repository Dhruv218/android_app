
import * as React from 'react';
import { View, Text,Button,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Create_invoice from './src/components/second_page';
import Invoice_history from './src/components/first_page';

const Stack = createNativeStackNavigator();
const ProfilePicture = () => {
  return (
    <>
      <Image
        source={require('./src/image/profile_img.png')} 
        style={{ width: 30, height: 30, borderRadius: 50 }}
      />
      </>
  );
};
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerStyle: {
            backgroundColor: '#1C85E8',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#FFFFFF', 
          headerRight: () => <ProfilePicture />,
        }} >
        <Stack.Screen style={{backgroundColor:"#FFFFFF"}} name="Invoices" component={Invoice_history} />
        <Stack.Screen name="Invoice" component={Create_invoice} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
