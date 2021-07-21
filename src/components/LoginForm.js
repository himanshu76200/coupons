import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Text, ActivityIndicator } from 'react-native'
import { Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const LoginForm = ({ setLoggedIn }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState('false');

    const handleSubmit = () => {
        setLoading(true);
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log("user Successfully logged in")
                setLoggedIn(true)
                setLoading(false);
            })
            .catch(error => {
                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
                console.error(error);
                setLoading(false);
            });
    }

    return (
        <View style={styles.containerStyle}>

            <Text style={styles.text}>Email</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Enter Email"
                defaultValue={email}
                onChangeText={setEmail}
            />

            <Text style={styles.text}>Password</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Enter Password"
                secureTextEntry={true}
                defaultValue={password}
                onChangeText={setPassword}
            />

            <Button mode="contained" style={styles.buttonStyle}
                onPress={() => handleSubmit()}>
                LOGIN
            </Button>

            {loading ? <ActivityIndicator /> : null}

        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    containerStyle: {
        marginVertical: 100,
        marginHorizontal: 30,
        marginTop: 150,
    },
    text: {
        fontSize: 25,
        marginTop: 10,
        marginBottom: 5,
    },
    textInput: {
        fontSize: 20,

    },
    buttonStyle: {
        marginVertical: 10,
        paddingVertical: 10,
        marginHorizontal: 100,
        marginBottom: 10
    },
})
