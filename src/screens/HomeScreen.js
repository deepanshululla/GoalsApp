import React, {useState} from 'react';
import {Text, StyleSheet, View, Button, TextInput, FlatList} from 'react-native';


const HomeScreen = ({navigation}) => {

    const [enteredGoal, setEnteredGoal] = useState('');
    const [goals, setGoals] = useState([]);

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };
    const addGoalHandler = () => {
        setGoals(goals => [...goals, enteredGoal]);
    };
    return (
        <View style={styles.homeScreen}>
            <View style={styles.GoalsAddView}>

                <TextInput style={styles.textInput}
                           onChangeText={goalInputHandler}
                           placeholder={"Enter Goal"}/>
                <Button
                    title={"Add"} onPress={addGoalHandler}/>

            </View>
            <View style={styles.goalsList}>
                <FlatList
                    keyExtractor={goal => goal}
                    data={goals}
                    renderItem={({item}) => {
                        console.log(item);
                        return (
                            <Text style={styles.listItem}>
                            {item}
                        </Text>)
                    }


                    }
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
    listItem: {
      padding:10,
        margin: 10,
      backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1

    },
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
    homeScreen: {
        padding: 30,
    },
    goalsList: {
        padding: 30
    }
});

export default HomeScreen;
