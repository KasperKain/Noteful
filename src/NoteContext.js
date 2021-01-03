import React, { useState, useEffect, createContext } from 'react';
import { GetAllNotes, GetAllFolders } from './data';
export const NoteContext = createContext();

export const NoteProvider = (props) => {
  const [notes, setNotes] = useState([]);
  const [folders, setFolders] = useState([]);
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const addNote = (note) => {
    const newNotes = notes;
    newNotes.push(note);
    setNotes(newNotes);
  };

  const addFolder = (folder) => {
    const newFolders = folders;
    newFolders.push(folder);
    setFolders(newFolders);
  };

  const refreshNotes = () => {
    GetAllNotes().then((notes) => setNotes(notes));
    GetAllFolders().then((folders) => setFolders(folders));
  };

  const stateData = {
    notes: notes,
    folders: folders,
    deleteNote: deleteNote,
    addNote: addNote,
    addFolder: addFolder,
  };

  useEffect(() => {
    refreshNotes();
  }, []);

  return (
    <NoteContext.Provider value={stateData}>
      {props.children}
    </NoteContext.Provider>
  );
};
