import React from 'react';
import {View, Image, StyleSheet, ImageBackground, Text, TextInput} from 'react-native';

var logo = require('../../assets/arrow_left.png');

const OtpScreen = () => {
    return(
        <View style={styles.bgcolor}>
            <Image style={styles.logo_ss} source={logo}/>
            <Text style={styles.welcome_ss} >Wellcome!</Text>
            <Text style={styles.text_ss} > HumT is a  community of people for lorem ipsum dolor sit amet</Text>
            <View style={styles.view_ss}>
                <TextInput style={styles.textinputStyle} placeholder="Email" />
                <Text style={styles.otp_ss} >An OTP will be send to your number</Text>
                <Text style={styles.send_otp_ss} >Send OTP</Text>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bgcolor:{
        backgroundColor: '#EF5366',
        width: '100%',
        height: '100%'
    },
    logo_ss:{
        height: 18,
        width: 20,
        marginTop: 39.67,
        marginLeft: 25
    },
    welcome_ss:{

        marginTop: 33.6,
        marginLeft: 25,
        color: '#ffffff',
        fontFamily: 'Montserrat, Bold',
        fontSize: 26,
    },
    text_ss:{
        marginTop: 29,
        marginLeft: 25,
        color: '#ffffff',
        marginRight: 25,
        fontSize: 15,
        fontFamily: 'Montserrat, SemiBold',
    },
    view_ss:{
        marginTop: 66,
        height: 526,
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        backgroundColor: '#ffffff',
    },
    textinputStyle: {
        width: 291,
        height: 55,
        marginLeft: 42,
        marginTop: 76,
        backgroundColor: '#fff',
        borderColor: '#E2E2E2',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 16,
        // inlineImageLeft
    },
    otp_ss: {
        marginLeft: 42,
        marginTop: 10,
        color: '#9D9D9D',
    }
    ,
    send_otp_ss:{
        fontSize:19,
        marginTop: 84,
        marginLeft: 42,
        fontWeight: 'bold',
    }
});

export default OtpScreen;