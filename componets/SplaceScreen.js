import React, {Component} from 'react';
import {View, ImageBackground, Image, Text} from 'react-native';

var logo = require('../logo.png');

export default class SplaceScreen extends Component {
    constructor(props) {
        super(props);
        setTimeout(() => {
            this.props.navigation.navigate('Login');
        }, 2000);
    }
    render() {
        return (
            // <ImageBackground  style={{backgroundColor:'#EF5366',width: '100%', height: '100%'}}>
            // <View>
            //     <Text>Splace screen</Text>
            // </View>
            // </ImageBackground>
            <ImageBackground style={{backgroundColor: '#EF5366',width: '100%', height: '100%'}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={logo}  />
                </View>
            </ImageBackground>
        );
    }
}
