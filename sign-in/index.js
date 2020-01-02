import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import img from '../assets/bg3.jpg'

const { width, height } = Dimensions.get('window');

class SignIn extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: 'white',
                    justifyContent: 'flex-end'
                }}
            >
                <View
                    style={{
                        ...StyleSheet.absoluteFill
                    }}
                >
                    <Image
                        source={img}
                        style={{ flex: 1, height: null, width: null }}
                    />
                </View>
                <View style={{ height: height / 3, justifyContent: 'center' }}>
                    <View
                        style={{
                            ...styles.button
                        }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>SIGN IN</Text>
                    </View>
                    <View
                        style={{
                            ...styles.button,
                            backgroundColor: '#2E71DC'
                        }}
                    >
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                            SIGN IN WITH FACEBOOK
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: 'white',
        height: 70,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5
    }
});
