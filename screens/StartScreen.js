import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Header from '../components/Header';
import ParkCard from '../components/ParkCard';

const StartScreen = props => {
    return (
        <View style={styles.container}>
            <Header title="Plan Your Theme Park Experience!" />
            <Text style={styles.selectPark}>Select Your Park</Text>
            <ParkCard style={styles.parkCardContainer} parkName={"Disney World"}>
            <Text>Disney World</Text>
            </ParkCard>
            <ParkCard style={styles.parkCardContainer} parkName={"Universal Studios Orlando"}>
            <Text>Universal Studios Orlando</Text>
            </ParkCard>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
      },
      selectPark: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 22
      },
      parkCardContainer: {
        marginTop: 20,
        alignItems: 'center'
      }
});

export default StartScreen;