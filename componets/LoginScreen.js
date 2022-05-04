import React from 'react';
import {
    ImageBackground,
    View,
    Text,
    ScrollView,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

const LoginScreen = ({navigation}) => {
    const image = {
        uri: 'https://i.pinimg.com/564x/bf/d6/9a/bfd69ab729bdc7b81b4fcc29249f5b21.jpg',
    };

    return (
        <ImageBackground source={image} style={{width: '100%', height: '100%'}}>
            <ScrollView>
                <View style={{margin: 100}}>
                    <View>
                        <Text style={styles.heyappcenter}>Hey APP</Text>
                    </View>
                    <TextInput style={styles.textinputStyle} placeholder="Email" />

                    <TextInput style={styles.textinputStyle} placeholder=" Password" />
                    <Text
                        style={{
                            alignSelf: 'center',
                            marginTop: 10,
                            fontWeight: 'bold',
                        }}>
                        Forget Password?
                    </Text>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.textcolor}> Login </Text>
                    </TouchableOpacity>

                    <Text
                        style={{
                            alignSelf: 'center',
                            marginTop: 10,
                            fontWeight: 'bold',
                        }}>
                        Signup
                    </Text>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    heyappcenter: {
        marginTop: 100,
        marginBottom: 30,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#b22222',
        // resizeMode: 'contain',
        alignSelf: 'center',
        flex: 1,
    },
    textinputStyle: {
        width: 300,
        height: 40,
        alignSelf: 'center',
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 15,
        fontSize: 16,
        margin: 10,
    },
    button: {
        height: 40,
        width: 300,
        backgroundColor: '#DDDDDD',
        alignSelf: 'center',
        marginTop: 40,
        borderRadius: 15,
        borderColor: '#ccc',
    },
    textcolor: {
        top: 10,
        color: '#b22222',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});
export default LoginScreen;
