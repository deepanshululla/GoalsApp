import React, {useState} from 'react';
import {Text, StyleSheet, View, Button, TextInput, FlatList} from 'react-native';


const GoalItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>
                {props.item}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        margin: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1

    },
})

export default GoalItem;
