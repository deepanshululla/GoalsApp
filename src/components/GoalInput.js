import React, {useState} from 'react';
import {StyleSheet, View, Button, TextInput, Modal} from 'react-native';


const GoalInput = (props) => {

    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };
    const onGoalEnter = () => {
        props.addGoalHandler(enteredGoal);
        setEnteredGoal('')
    }
    const onGoalCancel= () => {
        setEnteredGoal('')
        props.setVisible(false);
    }

    return (
        <Modal visible={props.visible} animationType={"slide"}>
            <View style={styles.inputContainer}>

                <TextInput style={styles.textInput}
                           onChangeText={goalInputHandler}
                           placeholder={"Enter Goal"}
                           value={enteredGoal}/>

            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button
                        title={"Add"} onPress={onGoalEnter} color={"green"}/>
                </View>
                <View style={styles.button}>
                    <Button
                        title={"Cancel"} onPress={onGoalCancel} color={"red"}/>
                </View>


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
        width: '80%',
        marginBottom:10
    },
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonContainer : {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '80%',
        marginLeft: 40
    },
    button: {
        flex: 1,
        width: '40%',
        margin:10,
        fontSize: 30
    }
});

export default GoalInput;
