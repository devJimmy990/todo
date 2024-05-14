import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

export default function BtnNoteCard({ value, bgColor, onPress }) {
    return (
        <Button
            mode="contained"
            style={[styles.btn, { backgroundColor: bgColor }]}
            onPress={onPress} >
            {value}
        </Button >
    );
}

const styles = StyleSheet.create({
    btn: {
        width: '45%',
        fontSize: 20,
        marginHorizontal: 10,

    }
});