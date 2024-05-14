import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Checkbox, MD3Colors, Icon } from 'react-native-paper';
import { notesContext } from '../controller/notes.context';
import { Ionicons } from '@expo/vector-icons';
import BtnNoteCard from './buttons/btn.note_card';
import routes from '../util/routes';
import { useNavigation } from '@react-navigation/native';
export default function NoteCard({ note: { id, title, content, isDone, isDelete } }) {
    const { navigate } = useNavigation();
    const { updateNote } = useContext(notesContext);

    const handleUpdateNote = (name, value) => {
        updateNote(id, name, value);
    }

    const handleCheckboxToggle = (type) =>
        handleUpdateNote(
            type === 'Done' ? 'isDone' : 'isDelete',
            type === 'Done' ? !isDone : !isDelete
        );
    return (
        <Pressable onPress={() => navigate(routes.note, { note: { id, title, content } })}>
            <View style={styles.card}>
                <View style={styles.contentContainer}>
                    <View style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row' }}>
                        {isDone && <Ionicons name="checkmark-done-circle" size={28} color="green" />}
                        <Text style={[styles.title, isDone && { textDecorationLine: 'line-through' }]}>{title}</Text>
                    </View>
                    <Text style={styles.content}>{content}</Text>
                </View>
                <View style={styles.checkboxContainer}>
                    <BtnNoteCard value={isDone ? "UnDone" : "Done"} bgColor={isDone ? "orange" : "green"} onPress={() => handleCheckboxToggle('Done')} />
                    <BtnNoteCard value="Delete" bgColor="red" onPress={() => handleCheckboxToggle('Delete')} />
                </View>
            </View>
        </Pressable>
    );
}


const styles = StyleSheet.create({
    card: {
        padding: 15,
        elevation: 10,
        width: '100%',
        borderRadius: 10,
        marginVertical: 10,
        backgroundColor: '#fff',
    },
    contentContainer: {
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        marginBottom: 5,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: 'italic',
    },
    content: {
        fontSize: 16,

    },
    checkboxContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',

    }
});
