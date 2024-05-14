import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function BtnNoteAction({ value, icon, onPress }) {
    return (
        <Button
            icon={icon}
            mode="contained"
            style={styles.btn}
            onPress={onPress} >
            {value}
        </Button >
    );
}

const styles = StyleSheet.create({
    btn: {
        width: '60%',
        marginBottom: 16,
        alignSelf: 'center'
    }
});