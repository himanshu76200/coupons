import React from 'react'
import { StyleSheet, TextInput, Text, View } from 'react-native'

const Input = ({ label, value, onChangeText }) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={styles.inputStyle}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        height: 20,
        width: 100,
        color: '#000',
        paddingHorizontal: 5,
        fontSize: 15,
        lineHeight: 17,
        flex: 2
    },
    labelStyle: {
        fontSize: 13,
        paddingLeft: 20,
        flex: 1,
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    // textInputStyle: {
    //     height: 20,
    //     width: 100
    // }
})

export default Input;
