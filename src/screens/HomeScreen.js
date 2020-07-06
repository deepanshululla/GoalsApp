import React, {useState} from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import GoalItem from "../components/GoalItem";
import GoalInput from "../components/GoalInput";


const HomeScreen = ({navigation}) => {
    const [goals, setGoals] = useState([]);
    const addGoalHandler = (goalItem) => {
        setGoals(goals => [...goals, {id: Math.random().toString(), value: goalItem}]);
    };
    return (
        <View style={styles.homeScreen}>
            <GoalInput addGoalHandler={addGoalHandler}/>
            <View style={styles.goalsList}>
                <FlatList
                    keyExtractor={goal => goal+Math.random().toString()}
                    data={goals}
                    renderItem={({item}) => {
                        return <GoalItem item={item.value}/>
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
