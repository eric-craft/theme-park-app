import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const MouseEars = () => {
    return (
        <View style={styles.mouseEars}>
            <Image source={require('../assets/mouseEars.png')} style={styles.mouseImage}  />
            <Image source={require('../assets/mouseEars.png')} style={styles.mouseImageSm}  />
            <Image source={require('../assets/mouseEars.png')} style={styles.mouseImage}  />
            <Image source={require('../assets/mouseEars.png')} style={styles.mouseImageSm}  />
        </View>
    );
};

const styles = StyleSheet.create({
    mouseImage: {
        height: 15,
        width: 15,
        marginVertical: 10
    },
    mouseImageSm: {
        height: 8,
        width: 8,
        marginVertical: 10
    },
    mouseEars: {
        alignItems: 'center'
    }
});

export default MouseEars;