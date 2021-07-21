import React, { useState } from 'react'
import { View, Text } from 'react-native';
import PromoCodeScreen from './src/screens/PromoCodeScreen';
import LoginScreen from './src/screens/LoginScreen';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <View>
      {loggedIn ? <PromoCodeScreen /> : <LoginScreen setLoggedIn={setLoggedIn} />}
    </View>
  )
}

export default App
