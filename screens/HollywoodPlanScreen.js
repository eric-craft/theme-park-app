import React from 'react';
import { View, Button, Text, StyleSheet, Image, ScrollView } from 'react-native';

import Header from '../components/Header';
import RiseOfResistance from '../rides/RiseOfResistance';
import RunawayRailway from '../rides/RunawayRailway';
import Saucers from '../rides/Saucers';
import Slinky from '../rides/Slinky';
import Smugglers from '../rides/Smugglers';
import StarTours from '../rides/StarTours';
import ToyStoryMania from '../rides/ToyStoryMania';
import Muppets from '../rides/Muppets';
import MouseEars from '../components/MouseEars';
import Tower from '../rides/Tower';
import Rock from '../rides/Rock';

const HollywoodPlanScreen = props => {
    // Small children, no thrill seeking, no preference, yes family friendly
    const plan1 = <Text>Mickey and Minnie's Runaway Railway... Toy Story Land (Slinky, then Mania, then Saucers) ... Lunch ... 
        Star Wars (Smuggler's Run) ... MuppetVision 3D ... Star Tours
    </Text>;

    // Small children, SW preference
    const plan2 = <Text>Mickey and Minnie's Runaway Railway... Star Wars (Smuggler's Run) ... Toy Story Land (Slinky, then Mania, then Saucers) ... 
         Lunch ... MuppetVision 3D ... Star Tours ... 
    </Text>;

    // No small children, thrill seekers, no pref, yes FF
    const plan3 = <Text>Tower of Terror ... Rock Coaster ... Mickie and Minnie ... Slinky ... Mania ... Saucers ...
        Smuggler's ... Muppet ... Star Tours
    </Text>

    // No small children, no thrill seekers, no pref, yes FF
    const plan4 = <Text>Mickey and Minnie's Runaway Railway... Toy Story Land (Slinky, then Mania, then Saucers) ... Lunch ... 
    Star Wars (Smuggler's Run) ... MuppetVision 3D ... Star Tours ... THRILL SEEKERS at the end</Text>

    // No small children, thrill seekers, SW pref, yes FF
    const plan5 = <Text>Tower of Terror ... Rock Coaster ... Mickie and Minnie ... Smuggler's ... Lunch ... Toy Story Land (Slinky, then Mania, then Saucers) 
         ... MuppetVision 3D ... Star Tours </Text>

    // No small children, no thrill seekers, SW pref, yes FF
    const plan6 = <Text>Mickie and Minnie ... Star Tours ... Smuggler's ... Toy Story Land ... Muppet ... Thrill Seekers at end</Text>

    // No small children, thrill seekers, TS pref, yes FF
    const plan7 = <Text>Tower... ROCK ... Minnie ... Toy Story ... Star Wars ... Muppets ... Star Tours</Text>

    // No small children, no thrill seekers, TS pref, yes FF
    // same as plan4

    // No small children, thrill seekers, no pref, no FF
    const plan8 = <Text>Tower... ROCK... Slinky... Smuggler's... Star Tours ... Mickie ... Mania</Text>

    // No small children, thrill seekers, SW pref, no FF
    const plan9 = <Text>Star Tours ... Smugglers ... Slinky ... Tower ... Rock ... Mickie ... Mania</Text>

    // No small children, thrill seekers, TS pref, no FF
    const plan10 = <Text>Tower ... Rock ... Slinky ... Smuggler's ... Star Tours ... Mickie ... Mania</Text>

    let content = <View></View>;

    if (props.q1 && props.q3 !== "prefSW") {
        content = (<ScrollView>
            <View style={styles.container}>
                <Header title="Your Hollywood Studios Itinerary"  />
                <RiseOfResistance />
                <MouseEars />
        
                <RunawayRailway />
                <MouseEars />
        
                <Slinky />
                <MouseEars />
        
                <ToyStoryMania />
                <MouseEars />
        
                <Saucers />
                <MouseEars />
        
                <Smugglers />
                <MouseEars />
        
                <Muppets />
                <MouseEars />
        
                <StarTours />
                
            </View>
            </ScrollView>);
    } else if (props.q1 && props.q3 == "prefSW") {
        content = (<ScrollView>
            <View style={styles.container}>
                <Header title="Your Hollywood Studios Itinerary"  />
                {/*}
                <RideTitle />
                <RidePic />
                <RideDescrip /> */}
                <RiseOfResistance />
                <MouseEars />
        
                <RunawayRailway />
                <MouseEars />

                <Smugglers />
                <MouseEars />
        
                <Slinky />
                <MouseEars />
        
                <ToyStoryMania />
                <MouseEars />
        
                <Saucers />
                <MouseEars />
        
                <Muppets />
                <MouseEars />
        
                <StarTours />
                
            </View>
            </ScrollView>);
    } else if (!props.q1 && props.q2 && props.q3 !== "prefSW" && props.q4) {
        content = (<ScrollView>
            <View style={styles.container}>
                <Header title="Your Hollywood Studios Itinerary"  />
                {/*}
                <RideTitle />
                <RidePic />
                <RideDescrip /> */}
                <RiseOfResistance />
                <MouseEars />

                <Tower />
                <MouseEars />

                <Rock />
                <MouseEars />
        
                <RunawayRailway />
                <MouseEars />
        
                <Slinky />
                <MouseEars />
        
                <ToyStoryMania />
                <MouseEars />
        
                <Saucers />
                <MouseEars />
        
                <Smugglers />
                <MouseEars />
        
                <Muppets />
                <MouseEars />
        
                <StarTours />
                
            </View>
            </ScrollView>);
    } else if (!props.q1 && !props.q2 && props.q3 !== "prefSW" && props.q4) {
        content = (<ScrollView>
            <View style={styles.container}>
                <Header title="Your Hollywood Studios Itinerary"  />
                {/*}
                <RideTitle />
                <RidePic />
                <RideDescrip /> */}
                <RiseOfResistance />
                <MouseEars />
        
                <RunawayRailway />
                <MouseEars />
        
                <Slinky />
                <MouseEars />
        
                <ToyStoryMania />
                <MouseEars />
        
                <Saucers />
                <MouseEars />
        
                <Smugglers />
                <MouseEars />
        
                <Muppets />
                <MouseEars />
        
                <StarTours />
                <MouseEars />

                <Tower />
                <MouseEars />

                <Rock />
                
            </View>
            </ScrollView>);
    } else if (!props.q1 && props.q2 && props.q3 == "prefSW" && props.q4) {
        content = (<ScrollView>
            <View style={styles.container}>
                <Header title="Your Hollywood Studios Itinerary"  />
                {/*}
                <RideTitle />
                <RidePic />
                <RideDescrip /> */}
                <RiseOfResistance />
                <MouseEars />

                <Tower/>
                <MouseEars />

                <Rock />
                <MouseEars />
        
                <RunawayRailway />
                <MouseEars />

                <Smugglers />
                <MouseEars />
        
                <Slinky />
                <MouseEars />
        
                <ToyStoryMania />
                <MouseEars />
        
                <Saucers />
                <MouseEars />
        
                <Muppets />
                <MouseEars />
        
                <StarTours />
                
            </View>
            </ScrollView>);
    } else if (!props.q1 && !props.q2 && props.q3 == "prefSW" && props.q4) {
        content = (<ScrollView>
            <View style={styles.container}>
                <Header title="Your Hollywood Studios Itinerary"  />
                {/*}
                <RideTitle />
                <RidePic />
                <RideDescrip /> */}
                <RiseOfResistance />
                <MouseEars />
        
                <RunawayRailway />
                <MouseEars />

                <StarTours />
                <MouseEars />

                <Smugglers />
                <MouseEars />
        
                <Slinky />
                <MouseEars />
        
                <ToyStoryMania />
                <MouseEars />
        
                <Saucers />
                <MouseEars />
        
                <Muppets />
                <MouseEars />

                <Tower />
                <MouseEars />

                <Rock />
        
                
            </View>
            </ScrollView>);
    } else if (!props.q1 && props.q2 && props.q3 == "prefTS" && props.q4) {
        content = (<ScrollView>
            <View style={styles.container}>
                <Header title="Your Hollywood Studios Itinerary"  />
                {/*}
                <RideTitle />
                <RidePic />
                <RideDescrip /> */}
                <RiseOfResistance />
                <MouseEars />

                <Tower />
                <MouseEars />

                <Rock />
                <MouseEars />
        
                <RunawayRailway />
                <MouseEars />
        
                <Slinky />
                <MouseEars />
        
                <ToyStoryMania />
                <MouseEars />
        
                <Saucers />
                <MouseEars />
        
                <Smugglers />
                <MouseEars />
        
                <Muppets />
                <MouseEars />
        
                <StarTours />
                
            </View>
            </ScrollView>);
    } else if (!props.q1 && !props.q2 && props.q3 == "prefTS" && props.q4) {
        content = (<ScrollView>
            <View style={styles.container}>
                <Header title="Your Hollywood Studios Itinerary"  />
                {/*}
                <RideTitle />
                <RidePic />
                <RideDescrip /> */}
                <RiseOfResistance />
                <MouseEars />
        
                <RunawayRailway />
                <MouseEars />
        
                <Slinky />
                <MouseEars />
        
                <ToyStoryMania />
                <MouseEars />
        
                <Saucers />
                <MouseEars />
        
                <Smugglers />
                <MouseEars />
        
                <Muppets />
                <MouseEars />
        
                <StarTours />
                <MouseEars />

                <Tower />
                <MouseEars />

                <Rock />
                
            </View>
            </ScrollView>);
    } else if (!props.q1 && props.q2 && props.q3 !== "prefSW" && !props.q4) {
        content = (<ScrollView>
            <View style={styles.container}>
                <Header title="Your Hollywood Studios Itinerary"  />
                {/*}
                <RideTitle />
                <RidePic />
                <RideDescrip /> */}
                <RiseOfResistance />
                <MouseEars />

                <Tower />
                <MouseEars />

                <Rock />
                <MouseEars />

                <Slinky />
                <MouseEars />
        
                <Smugglers />
                <MouseEars />

                <StarTours />
                <MouseEars />

                <RunawayRailway />
                <MouseEars />
        
                <ToyStoryMania />
                
            </View>
            </ScrollView>);
    } else if (!props.q1 && props.q2 && props.q3 == "prefSW" && !props.q4) {
        content = (<ScrollView>
            <View style={styles.container}>
                <Header title="Your Hollywood Studios Itinerary"  />
                {/*}
                <RideTitle />
                <RidePic />
                <RideDescrip /> */}
                <RiseOfResistance />
                <MouseEars />

                <StarTours />
                <MouseEars />

                <Smugglers />
                <MouseEars />

                <Slinky />
                <MouseEars />

                <Tower />
                <MouseEars />

                <Rock />
                <MouseEars />
        
                <RunawayRailway />
                <MouseEars />
        
                <ToyStoryMania />
                
            </View>
            </ScrollView>);
    } else if (!props.q1 && props.q2 && props.q3 == "prefTS" && !props.q4) {
        content = (<ScrollView>
            <View style={styles.container}>
                <Header title="Your Hollywood Studios Itinerary"  />
                {/*}
                <RideTitle />
                <RidePic />
                <RideDescrip /> */}
                <RiseOfResistance />
                <MouseEars />

                <Tower />
                <MouseEars />

                <Rock />
                <MouseEars />

                <Slinky />
                <MouseEars />

                <Smugglers />
                <MouseEars />

                <StarTours />
                <MouseEars />
        
                <RunawayRailway />
                <MouseEars />
        
                <ToyStoryMania />
                
            </View>
            </ScrollView>);
    }

    return content;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
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

export default HollywoodPlanScreen;