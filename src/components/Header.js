import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = ({ headerText }) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{headerText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#483c9c',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        paddingVertical: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 30,
        color: 'white',
    },
})

export default Header

