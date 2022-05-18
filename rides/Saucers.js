import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Saucers = () => {
    
    return (
        <View style={styles.rideView}>
            <Text style={styles.rideTitle}>{"Alien Swirling Saucers"}</Text>
            <Image source={require('../assets/saucers.jpg')} style={styles.image}  />
            <Text style={styles.rideDesc}>Swirling Saucers Ride Desc
            </Text>
        </View>
        
    );
};

const styles = StyleSheet.create({
    rideView: {
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 5
    },
    rideTitle: {
        fontSize: 30,
        textAlign: 'center',
        marginVertical: 20
    },
    image: {
        borderRadius: 200,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: 'black',
        height: 135,
        width: 135
    },
    rideDesc: {
        marginVertical: 20,
        textAlign: 'center',
        marginHorizontal: 25,
        fontSize: 18,
        borderBottomColor: 'black',
        borderBottomWidth: 2
    }
});

export default Saucers;