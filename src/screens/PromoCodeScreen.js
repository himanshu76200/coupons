import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Picker, ScrollView } from 'react-native'
import Header from "../components/Header";
import DatePicker from 'react-native-date-picker';
import { Button } from 'react-native-paper';
import firestore from "@react-native-firebase/firestore";

const PromoCodeScreen = () => {
    const [couponName, setCouponName] = useState('');
    const [discountType, setDiscountType] = useState('percent')
    const [discountValue, setDiscountValue] = useState('');
    const [dateFrom, setDateFrom] = useState(new Date());
    const [dateTo, setDateTo] = useState(new Date());

    const saveToDb = () => {
        firestore()
            .collection('coupons')
            .add({
                couponName,
                discountType,
                discountValue,
                dateFrom,
                dateTo
            })
            .then(() => {
                console.log('coupon added')
            })
    }

    return (
        <ScrollView>
            <Header headerText="Create Promo Code" />
            <Text style={styles.text}>Coupon Name</Text>
            <TextInput
                placeholder="Enter Coupon Name"
                defaultValue={couponName}
                onChangeText={setCouponName}
                style={styles.textInputStyle}
            />

            <Text style={styles.text}>Discount Type</Text>
            <Picker
                selectedValue={discountType}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue) => setDiscountType(itemValue)}
            >
                <Picker.Item label="Percent" value="percent" />
                <Picker.Item label="Value" value="value" />
            </Picker>

            <Text style={styles.text}>Discount {discountType}</Text>
            <TextInput
                placeholder={`Enter Discount ${discountType}`}
                defaultValue={discountValue}
                onChangeText={setDiscountValue}
                style={styles.textInputStyle}
            />

            <Text style={styles.text}>Validity</Text>

            <Text style={styles.subText}>Valid From</Text>
            <DatePicker
                date={dateFrom}
                onDateChange={setDateFrom}
                androidVariant='nativeAndroid'
            />

            <Text style={styles.subText}>Valid To</Text>
            <DatePicker
                date={dateTo}
                onDateChange={setDateTo}
                androidVariant='nativeAndroid'
            />

            <Button mode="contained" style={styles.buttonStyle}
                onPress={() => saveToDb()}>
                Save
            </Button>
        </ScrollView>
    )
}

export default PromoCodeScreen

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        marginHorizontal: 10,
        marginTop: 10
    },
    subText: {
        fontSize: 15,
        marginHorizontal: 10,
    },
    textInputStyle: {
        height: 60,
        marginHorizontal: 10,
    },
    buttonStyle: {
        paddingVertical: 5,
        marginHorizontal: 150,
        marginBottom: 10
    },
    datePickerContainer: {
        paddingVertical: 20,
        display: 'flex',
        justifyContent: 'space-between',
    },
    datePickerButton: {
        width: 180,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    datePickerStyle: {
        marginRight: 200,
    }
})
