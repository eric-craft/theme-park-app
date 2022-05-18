import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Alert } from 'react-native';
//import MultipleChoice from 'react-native-multiple-choice-picker';
//import QuizQuestion from '../components/QuizQuestion';
import { CheckBox } from 'react-native-elements';
import Header from '../components/Header';
import HollywoodPlanScreen from './HollywoodPlanScreen';

const HollywoodScreen = () => {

    const [yesChecked, setYesChecked] = useState(false);
    const [noChecked, setNoChecked] = useState(false);
    const [thrillYesChecked, setThrillYesChecked] = useState(false);
    const [thrillNoChecked, setThrillNoChecked] = useState(false);
    const [prefSWChecked, setPrefSWChecked] = useState(false);
    const [prefTSChecked, setPrefTSChecked] = useState(false);
    const [noPreference, setNoPrefChecked] = useState(false);
    const [ffYesChecked, setFFYesChecked] = useState(false);
    const [ffNoChecked, setFFNoChecked] = useState(false);
    const [q1checked, setq1checked] = useState(false);
    const [q2checked, setq2checked] = useState(false);
    const [q3checked, setq3checked] = useState(false);
    const [q4checked, setq4checked] = useState(false);
    const [loadHollywoodPlan, setLoadHollywoodPlan] = useState(false);
    const [q3FinalChoice, setq3FinalChoice] = useState('');

  

    const checkHandler = (choice) => {
        if (choice === "yes" && !yesChecked) {
            setYesChecked(!yesChecked);
            setNoChecked(false);
            setq1checked(!yesChecked);
        } else if (choice === "no" && !noChecked) {
            setNoChecked(!noChecked);
            setYesChecked(false);
            setq1checked(!noChecked);
        } else if (choice === "thrillYes" && !thrillYesChecked) {
            setThrillYesChecked(!thrillYesChecked);
            setThrillNoChecked(false);
            setq2checked(!thrillYesChecked);
        } else if (choice === "thrillNo" && !thrillNoChecked) {
            setThrillNoChecked(!thrillNoChecked);
            setThrillYesChecked(false);
            setq2checked(!thrillNoChecked);
        } else if (choice === "prefSW" && !prefSWChecked) {
            setPrefSWChecked(!prefSWChecked);
            setPrefTSChecked(false);
            setNoPrefChecked(false);
            setq3checked(!prefSWChecked);
            setq3FinalChoice(choice);
        } else if (choice === "prefTS" && !prefTSChecked) {
            setPrefTSChecked(!prefTSChecked);
            setPrefSWChecked(false);
            setNoPrefChecked(false);
            setq3checked(!prefTSChecked);
            setq3FinalChoice(choice);
        } else if (choice === "noPreference" && !noPreference) {
            setNoPrefChecked(!noPreference);
            setPrefSWChecked(false);
            setPrefTSChecked(false);
            setq3checked(!noPreference);
            setq3FinalChoice(choice);
        } else if (choice === "ffYes" && !ffYesChecked) {
            setFFYesChecked(!ffYesChecked);
            setFFNoChecked(false);
            setq4checked(!ffYesChecked);
        } else if (choice === "ffNo" && !ffNoChecked) {
            setFFYesChecked(false);
            setFFNoChecked(!ffNoChecked);
            setq4checked(!ffNoChecked);
        }

    }

    function checkAllAlert(message) {
        Alert.alert(message.toString());
    };

    
    const planDayButtonHandler = () => {
        if (q1checked && q2checked && q3checked && q4checked) {
            setLoadHollywoodPlan(true);
        } else {
            //Alert.alert('Please Answer All Questions So We Can Best Plan Your Day!', [{text: 'OK', style: 'cancel', }]);
            checkAllAlert('Please Answer All Questions So We Can Best Plan Your Day!');
            return;
        }
    };

    let content = <ScrollView bounces='false'>
    <View style={styles.container}>
    <Header title="Customize Your Hollywood Studios Experience" />
        <View style={styles.question}>
        <Text style={styles.text}>Will you be accompanied by small children (at or below the 40" height requirement)</Text>
        <CheckBox
            title='Yes'
            onPress={() => checkHandler("yes")}
            checked={yesChecked}
            style={styles.checkBox}
        />
        <CheckBox
            title='No'
            onPress={() => checkHandler("no")}
            checked={noChecked}
            style={styles.checkBox}
        />
        </View>

        <View style={styles.question}>
        <Text style={styles.text}>Is your party interested in Hollywood Studios' more "thrill-seeking" attractions?</Text>
        <CheckBox
            title='Yes'
            onPress={() => checkHandler("thrillYes")}
            checked={thrillYesChecked}
            style={styles.checkBox}
        />
        <CheckBox
            title='No'
            onPress={() => checkHandler("thrillNo")}
            checked={thrillNoChecked}
            style={styles.checkBox}
        />
        </View>

        {/*This is the following question if the User says they are not interested in thrill seeking attractions*/}
        <View style={styles.question}>
        <Text style={styles.text}>Does your party prioritize a visit to one of 'Star Wars: Galaxy's Edge' or 'Toy Story Land'?</Text>
        <CheckBox
            title="Star Wars: Galaxy's Edge"
            onPress={() => checkHandler("prefSW")}
            checked={prefSWChecked}
            style={styles.checkBox}
        />
        <CheckBox
            title="Toy Story Land"
            onPress={() => checkHandler("prefTS")}
            checked={prefTSChecked}
            style={styles.checkBox}
        />
        <CheckBox
            title='No Preference'
            onPress={() => checkHandler("noPreference")}
            checked={noPreference}
            style={styles.checkBox}
        />
        </View>

        {/*This is the following question if the User says they are interested in thrill seeking attractions*/}
        <View style={styles.question}>
        <Text style={styles.text}>Is your party still interested in the more "family-friendly" attractions?</Text>
        <CheckBox
            title="Yes"
            onPress={() => checkHandler("ffYes")}
            checked={ffYesChecked}
            style={styles.checkBox}
        />
        <CheckBox
            title="No"
            onPress={() => checkHandler("ffNo")}
            checked={ffNoChecked}
            style={styles.checkBox}
        />
        </View>
        <View styles={styles.question}>
        <Button title="PLAN MY DAY" onPress={planDayButtonHandler.bind(this)} style={styles.button} />
        </View>
        <View style={styles.whitespace}></View>
    </View>
    </ScrollView>;

    if (loadHollywoodPlan) {
        content = <HollywoodPlanScreen q1={yesChecked} q2={thrillYesChecked} q3={q3FinalChoice} q4={ffYesChecked} />;
    }

    return content;
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    checkBox: {
        width: 100,
        marginVertical: 15
    },
    button: {
        marginVertical: 50,
        backgroundColor: 'black'
    },
    question: {
        marginVertical: 18,
        textAlign: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        margin: 15,
        fontSize: 18
    },
    whitespace: {
        margin: 25
    }
});

export default HollywoodScreen;