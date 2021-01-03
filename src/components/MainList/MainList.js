import React, { useContext } from 'react';
import Note from '../Note/Note';
import AddNoteButton from '../AddNoteButton/AddNoteButton';

import { NoteContext } from '../../NoteContext';

//Styling
import styled from 'styled-components';

const UL = styled.ul`
  flex: 4;

  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

const MainList = (props) => {
  const notes = useContext(NoteContext).notes;

  const renderNotes = (id) => {
    if (notes) {
      return notes
        .filter((note) => note.folderId === id || !id)
        .map((filteredNote) => (
          <Note
            key={filteredNote.id}
            id={filteredNote.id}
            title={filteredNote.name}
          />
        ));
    }
  };

  return (
    <UL>
      <AddNoteButton />
      {renderNotes(props.match.params.folderID)}
    </UL>
  );
};

export default MainList;
