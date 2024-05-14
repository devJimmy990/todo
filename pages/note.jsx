import React, { useCallback, useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button, Surface } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import BtnNoteAction from '../components/buttons/btn.note';
import { notes } from '../util/notes';
import routes from '../util/routes';
import uuid from 'react-native-uuid';
import { notesContext } from '../controller/notes.context';

export default function NotePage() {
    const route = useRoute();
    const { navigate } = useNavigation();
    const { addNewNote, updateNote } = useContext(notesContext);
    const [isEdit, setIsEdit] = useState(false);
    const [note, setNote] = useState({ id: "", title: "", content: "", isDone: false, isDeleted: false });

    useEffect(() => {
        if (route.params?.note) {
            setIsEdit(true);
            setNote({ ...route.params.note });
        }
    }, [])
    const handleNoteActionPressed = () => {
        if (isEdit) {
            updateNote(note.id, "update",{ title: note.title, content: note.content });
        }
        else { addNewNote({ ...note, id: uuid.v4() }); }
        navigate(routes.home);
    };
    const handleIputChange =
        (name, value) => {
            setNote({ ...note, [name]: value });
        };
    return (
        <View style={{ padding: 16 }}>
            <TextInput
                label="Title"
                value={note.title}
                onChangeText={(value) => handleIputChange("title", value)}
                mode="outlined"
                style={{ marginBottom: 16 }}
            />
            <TextInput
                label="Content"
                value={note.content}
                onChangeText={(value) => handleIputChange("content", value)}
                multiline
                numberOfLines={4}
                mode="outlined"
                style={{ marginBottom: 16 }}
            />
            <BtnNoteAction
                value={isEdit ? 'Edit' : 'Add'}
                icon={isEdit ? 'pencil' : 'plus'}
                onPress={handleNoteActionPressed}
            />

        </View>
    );
}
