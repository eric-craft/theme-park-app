import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Header from './components/Header';
import ParkCard from './components/ParkCard';
import DisneyParksScreen from './screens/DisneyParksScreen';
import StartScreen from './screens/StartScreen';

export default function App() {

  const [onStartScreen, setOnStartScreen] = useState(true);
  const [onDisneyParks, setOnDisneyParks] = useState(false);
  const [onUniversalParks, setOnUniversalParks] = useState(false);

  const loadParksHandler = (load) => {
    if (load === "disneyParks") {
      setOnDisneyParks(true);
      setOnStartScreen(false);
      setOnUniversalParks(false);
    } else if (load === "universalParks") {
      setOnDisneyParks(false);
      setOnStartScreen(false);
      setOnUniversalParks(true);
    }
  }


// This is the Start Screen
  let content = <View style={styles.container}>
                  <Header title="Plan Your Theme Park Experience!" />
                  <Text style={styles.selectPark}>Select Your Park</Text>
                  <ParkCard style={styles.parkCardContainer} parkName={"Disney World"} loadParksPage={loadParksHandler} pageSelection={"disneyParks"}>
                    <Text>Disney World</Text>
                  </ParkCard>
                  <ParkCard style={styles.parkCardContainer} parkName={"Universal Studios Orlando"} loadParksPage={loadParksHandler} pageSelection={"universalParks"}>
                    <Text>Universal Studios Orlando</Text>
                  </ParkCard>
                </View>;

  if (onDisneyParks) {
    content = <DisneyParksScreen />;
    
  }

  return content;
}

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
