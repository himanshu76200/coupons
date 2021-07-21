import React from 'react'
import { View, Text } from 'react-native'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'

const LoginScreen = ({ setLoggedIn }) => {
    return (
        <View>
            <Header headerText="Authentication" />
            <LoginForm setLoggedIn={setLoggedIn} />
        </View>
    )
}

export default LoginScreen
