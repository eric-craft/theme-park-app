import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ParkCard = props => {
     return (
        <TouchableOpacity style={{...styles.parkCard, ...props.style}} onPress={() => props.loadParksPage(props.pageSelection)} >
            <View>
                <Text>{props.parkName}</Text>
            </View>
        </TouchableOpacity>
     );
    // return <Button title={props.parkName.toString()} style={{...styles.parkCard, ...props.style}} />
};

const styles = StyleSheet.create({
    parkCard: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        borderRadius: 10,
        borderWidth: 1,
        width: '80%',
    }
});

export default ParkCard;