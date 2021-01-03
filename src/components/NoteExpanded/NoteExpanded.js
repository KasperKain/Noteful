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
  const note = useContext(NoteContext).notes.find(
    (note) => note.id === props.match.params.noteID
  );

  return (
    <EXPANDED className='NoteExpanded'>
      <Note title={note.name} id={note.id} />
      <NoteDetail message={note.content} />
    </EXPANDED>
  );
};

export default NoteExpanded;
