import React, {useState} from 'react';
import {StyleSheet, View, Button, TextInput} from 'react-native';


const GoalInput = (props) => {

    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    return (

        <View style={styles.GoalsAddView}>

            <TextInput style={styles.textInput}
                       onChangeText={goalInputHandler}
                       placeholder={"Enter Goal"}
                       value={enteredGoal}/>
            <Button
                title={"Add"} onPress={() => props.addGoalHandler(enteredGoal)}/>

        </View>
    )
};

const styles = StyleSheet.create({
    textInput: {
        fontSize: 30,
        borderBottomColor: 'black',
        borderWidth: 1,
        paddingBottom: 10,
        width: '80%'
    },
    GoalsAddView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
});

export default GoalInput;
