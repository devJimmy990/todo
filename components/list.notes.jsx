import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import NoteCard from './card.note';

export default function ListNotes({ notes }) {

    return (
        <View style={styles.container}>
            <FlatList
                contentContainerStyle={styles.content}
                data={notes}
                renderItem={({ item }) => <NoteCard note={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    content: {
        flexGrow: 1,
        alignItems: 'stretch',
        marginHorizontal: 10
    }
});
