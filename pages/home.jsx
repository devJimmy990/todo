import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo vector icons library

import ListNotes from '../components/list.notes';
import { useNavigation } from '@react-navigation/native';
import routes from '../util/routes';
import { notesContext } from '../controller/notes.context';

export default function HomePage() {
    const { navigate } = useNavigation();
    const { notes, deletedNotes } = useContext(notesContext);
    handleAddNote = () => {
        navigate(routes.note);
    }
    useEffect(() => {
    }, [notes])
    return (
        <View style={styles.container}>
            {notes.length === 0 && <Text style={styles.empty}>Todo list is empty</Text>}

            {notes.length > 0 &&
                <Text style={styles.header}>
                    You had completed: {notes.filter((note) => note.isDone).length} of {notes.length}
                </Text>
            }
            {notes.length > 0 && <ListNotes notes={notes} />}

            <TouchableOpacity style={styles.fab} onPress={handleAddNote}>
                <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'stretch',
    },
    fab: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 50,
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        margin: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    empty: {
        flex: 1,
        fontSize: 18,
        color: 'gray',
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});