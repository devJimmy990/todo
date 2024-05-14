import { createContext, useCallback, useMemo, useState } from "react";

export const notesContext = createContext();

export default function NotesContextProvider({ children }) {
    const [notes, setNotes] = useState([]);
    const [deletedNotes, setDeletedNotes] = useState([]);

    const addNewNote = useCallback((note) => {
        setNotes([...notes, note]);
    })

    const updateNote = (id, name, value) => {
        if (name === "isDelete") {

            setDeletedNotes([...deletedNotes, id]);
            setNotes([...notes.filter((n) => n.id !== id)]);
        }
        else if (name === "update") {
            setNotes([...notes.map((n) => n.id === id ?
                { ...n, title: value["title"], content: value["content"] } : n)]);
        }
        else
            setNotes([...notes.map((n) => n.id === id ? { ...n, [name]: value } : n)]);
    }
    const obj = useMemo(() => (
        { notes, addNewNote, updateNote, deletedNotes }
    ), [notes, addNewNote, updateNote, deletedNotes]
    );
    return (
        <notesContext.Provider value={obj}>
            {children}
        </notesContext.Provider>
    );
}