import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

var logo = require('../../assets/logo.png');

export default class SplaceScreen extends Component {
    constructor(props) {
        super(props);
        setTimeout(() => {
            this.props.navigation.navigate('Login');
        }, 2000);
    }
    render() {
        return (
            <View style={styles.bgcolor}>
                <View style={styles.imgstyle}>
                    <Image source={logo}  />

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    bgcolor:{
        backgroundColor: '#EF5366',
        width: '100%',
        height: '100%'
    },
    imgstyle:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
})