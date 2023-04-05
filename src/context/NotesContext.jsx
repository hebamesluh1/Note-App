import { createContext, useContext, useReducer, useEffect } from 'react';
import { randomColor } from '../utils/randomColor';

const notesContext = createContext(null);

const notesDispatchContext = createContext(null);


const initialState = JSON.parse(localStorage.getItem("note-app")) || [];

export function NotesProvider({ children }) {
    const [notes, dispatch] = useReducer(
        notesReducer,
        initialState
    );

    //save notes in local storage 
    useEffect(() => {
        localStorage.setItem(
            'note-app',
            JSON.stringify(notes)
        );
    }, [notes]);

    return (
        <notesContext.Provider value={notes}>
            <notesDispatchContext.Provider value={dispatch}>
                {children}
            </notesDispatchContext.Provider>
        </notesContext.Provider>
    );
}

export function useNotes() {
    return useContext(notesContext);
}

export function useNotesDispatch() {
    return useContext(notesDispatchContext);
}


const date = new Date();
function notesReducer(notes, action) {
    switch (action.type) {
        case 'added': {
            return [...notes, {
                id: action.id,
                text: action.text,
                date: date.toLocaleDateString(),
                color: randomColor()
            }];
        }
        case 'changed': {
            return notes.map(t => {
                if (t.id === action.note.id) {
                    return action.note;
                } else {
                    return t;
                }
            });
        }
        case 'deleted': {
            return notes.filter(t => t.id !== action.id);
        }
        default: return notes;
    }
}