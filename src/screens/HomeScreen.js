import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import GoalItem from "../components/GoalItem";
import GoalInput from "../components/GoalInput";
import {cos} from "react-native-reanimated";


const HomeScreen = ({navigation}) => {
    const [goals, setGoals] = useState([]);
    const addGoalHandler = (goalTitle) => {
        setGoals(currentGoals => [...currentGoals,
            {
                id: Math.random().toString(),
                value: goalTitle
            }]);
    };
    const removeGoalHandler = goalId => {
        setGoals(
            currentGoals => {
                return currentGoals.filter((goal) => goal.id !== goalId)
            }
        )
    }
    return (
        <View style={styles.homeScreen}>
            <GoalInput addGoalHandler={addGoalHandler}/>
            <View style={styles.goalsList}>
                <FlatList
                    keyExtractor={goal => goal + Math.random().toString()}
                    data={goals}
                    renderItem={({item}) => {
                        return (<GoalItem title={item.value}
                                          id={item.id}
                                         onDelete={()=>removeGoalHandler(item.id)}/>)
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
    homeScreen: {
        padding: 30,
    },
    goalsList: {
        padding: 30
    }
});

export default HomeScreen;
