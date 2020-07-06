import React, {useState} from 'react';
import {StyleSheet, View, Button, TextInput, Modal} from 'react-native';


const GoalInput = (props) => {

    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    return (
        <Modal visible={props.visible} animationType={"slide"}>
            <View style={styles.inputContainer}>

                <TextInput style={styles.textInput}
                           onChangeText={goalInputHandler}
                           placeholder={"Enter Goal"}
                           value={enteredGoal}/>
                <Button
                    title={"Add"} onPress={() => props.addGoalHandler(enteredGoal)}/>

            </View>

        </Modal>

    )
};

const styles = StyleSheet.create({
    textInput: {
        fontSize: 30,
        borderBottomColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '80%'
    },
    inputContainer: {
        flex: 1,
        fontSize: 30,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },
});

export default GoalInput;
