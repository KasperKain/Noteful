import React, { useContext } from 'react';
import Note from '../Note/Note';
import NoteDetail from '../NoteDetail/NoteDetail';
import { NoteContext } from '../../NoteContext';

//Styling
import styled from 'styled-components';
const EXPANDED = styled.div`
  flex: 4;
`;

const NoteExpanded = (props) => {
  const notes = useContext(NoteContext).notes;
  const note = notes.find((note) => note.id == props.match.params.noteID);

  return (
    <EXPANDED className='NoteExpanded'>
      <Note title={note.title} id={note.id} />
      <NoteDetail message={note.body} />
    </EXPANDED>
  );
};

export default NoteExpanded;
