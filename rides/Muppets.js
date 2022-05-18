import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Muppets = () => {
    
    return (
        <View style={styles.rideView}>
            <Text style={styles.rideTitle}>{"Muppet*Vision 3D"}</Text>
            <Image source={require('../assets/muppet.jpg')} style={styles.image}  />
            <Text style={styles.rideDesc}>Muppets 3D Ride Desc
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

export default Muppets;