import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const RunawayRailway = () => {
    
    return (
        <View style={styles.rideView}>
            <Text style={styles.rideTitle}>{"Mickey & Minnie's Runaway Railway"}</Text>
            <Image source={require('../assets/mickie-minnie.jpg')} style={styles.image}  />
            <Text style={styles.rideDesc}>Runaway Railway is consistenly the park's longest wait, and for good reason. Brand-new technology
                brings a unique style never-before-seen in a Disney parks ride, and it's the first ride to feature Mickey and friends. Runaway
                Railway is located front and center after entering the park, so it's usually best to jump on board as early as possible!
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

export default RunawayRailway;