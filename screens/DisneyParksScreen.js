import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Header from '../components/Header';
import ParkCard from '../components/ParkCard';
import HollywoodScreen from './HollywoodScreen';
import StartScreen from './StartScreen';

const DisneyParksScreen = props => {

    const [loadMagic, setLoadMagic] = useState(false);
    const [loadHollywood, setLoadHollywood] = useState(false);
    const [loadAnimal, setLoadAnimal] = useState(false);
    const [loadEpcot, setLoadEpcot] = useState(false);
    const [loadStart, setLoadStart] = useState(false);

    const loadParksHandler = (load) => {
        if (load === "magic") {
            setLoadMagic(true);
            setLoadHollywood(false);
            setLoadAnimal(false);
            setLoadEpcot(false);
            setLoadStart(false);
        } else if (load === "hollywood") {
            setLoadMagic(false);
            setLoadHollywood(true);
            setLoadAnimal(false);
            setLoadEpcot(false);
            setLoadStart(false);
        } else if (load === "animal") {
            setLoadMagic(false);
            setLoadHollywood(false);
            setLoadAnimal(true);
            setLoadEpcot(false);
            setLoadStart(false);
        } else if (load === "epcot") {
            setLoadMagic(false);
            setLoadHollywood(false);
            setLoadAnimal(false);
            setLoadEpcot(true);
            setLoadStart(false);
        } else if (load === "start") {
            setLoadMagic(false);
            setLoadHollywood(false);
            setLoadAnimal(false);
            setLoadEpcot(false);
            setLoadStart(true);
        }
    }

    let content =   <View style={styles.container}>
                        <Header title="Plan Your Theme Park Experience!" />
                        <Text style={styles.selectPark}>Select Your Disney World Park</Text>
                        <ParkCard style={styles.parkCardContainer} parkName={"Magic Kingdom"} loadParksPage={loadParksHandler} pageSelection={"magic"}>
                            <Text>Magic Kingdom</Text>
                        </ParkCard>
                        <ParkCard style={styles.parkCardContainer} parkName={"Hollywood Studios"} loadParksPage={loadParksHandler} pageSelection={"hollywood"}>
                            <Text>Hollywood Studios</Text>
                        </ParkCard>
                        <ParkCard style={styles.parkCardContainer} parkName={"Animal Kingdom"} loadParksPage={loadParksHandler} pageSelection={"animal"}>
                            <Text>Animal Kingdom</Text>
                        </ParkCard>
                        <ParkCard style={styles.parkCardContainer} parkName={"Epcot"} loadParksPage={loadParksHandler} pageSelection={"epcot"}>
                            <Text>Epcot</Text>
                        </ParkCard>
                    </View>;

    if (loadMagic) {
        content = <Text>Magic Kingdom</Text>;
    } else if (loadHollywood) {
        //content = <Text>Hollywood Studios</Text>
        content = <HollywoodScreen />
    } else if (loadAnimal) {
        content = <Text>Animal Kingdom</Text>
    } else if (loadEpcot) {
        content = <Text>Epcot</Text>
    } // else if (loadStart) {
    //     content = <View style={styles.container}>
    //     <Header title="Plan Your Theme Park Experience!" />
    //     <Text style={styles.selectPark}>Select Your Park</Text>
    //     <ParkCard style={styles.parkCardContainer} parkName={"Disney World"} loadParksPage={loadParksHandler} pageSelection={"disneyParks"}>
    //       <Text>Disney World</Text>
    //     </ParkCard>
    //     <ParkCard style={styles.parkCardContainer} parkName={"Universal Studios Orlando"} loadParksPage={loadParksHandler} pageSelection={"universalParks"}>
    //       <Text>Universal Studios Orlando</Text>
    //     </ParkCard>
    //   </View>;
    // }

    return content;
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

export default DisneyParksScreen;