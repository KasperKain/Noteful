import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { DeleteNote } from '../../data';
import { NoteContext } from '../../NoteContext';

//Styling
import styled from 'styled-components';
const NOTE = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 30rem;
  height: 100px;
  min-height: 100px;
  padding: 10px;
  margin: 5px;

  background-color: rgba(250, 250, 255, 0.911);
  box-shadow: 3px 5px 8px 1px rgba(0, 0, 0, 0.473);
`;

const TITLE = styled.h1`
  color: #666666;
  padding: 10px;
`;

const DELETE_BTN = styled.button`
  color: #0e0d3b;
  width: 30%;
  border: 1px solid rgba(0, 0, 0, 0.473);

  cursor: pointer;
`;

const GOTO_BTN = styled.button`
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.178);
  }
`;

const Note = (props) => {
  const deleteNoteContext = useContext(NoteContext).deleteNote;
  const history = useHistory();

  const deleteNote = () => {
    DeleteNote(props.id).then((note) => {
      history.push('/');
      deleteNoteContext(props.id);
    });
  };

  return (
    <NOTE>
      <GOTO_BTN onClick={() => history.push(`/note/${props.id}`)}>
        <TITLE>{props.title}</TITLE>
      </GOTO_BTN>
      <DELETE_BTN onClick={deleteNote}>Delete</DELETE_BTN>
    </NOTE>
  );
};

Note.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

Note.defaultProps = {
  id: 0,
  title: 'untitled',
};

export default Note;
