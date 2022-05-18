import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RiseOfResistance = () => {
    
    return (
        <View style={styles.rideView}>
            <Text style={styles.rideTitle}>Star Wars: Rise of the Resistance</Text>
            <Image source={require('../assets/kylo.jpg')} style={styles.image}  />
            <Text style={styles.rideDesc}>We will always encourage everyone to start off their morning by attempting to acquire a Boarding Pass
                via the My Disney Experience app. Current distribution times are 7:00am and 1:00pm, with access to the 1:00 distribution
                time limited to guests currently inside Hollywood Studios. Rise of the Resistance is the most immersive ride in all of
                Disney and is likely the best "dark ride" in Orlando. While getting a boarding pass can sometimes be difficult, we strongly
                urge anyone paying admission to try and reserve their spot in the virtal queue.
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

export default RiseOfResistance;