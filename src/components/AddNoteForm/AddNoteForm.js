import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import ValidationMessage from '../ValidationMessage/ValidationMessage';

import { AddNote } from '../../data';
import { NoteContext } from '../../NoteContext';

//Styling
import styled from 'styled-components';

const FORM = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const WRAPPER = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding: 10px;
`;

const TITLE = styled.label`
  color: white;
  text-align: center;
`;

const BUTTON = styled.button`
  width: 6rem;
  height: 2rem;
  color: black;
`;

const AddNoteForm = () => {
  const addNoteContext = useContext(NoteContext).addNote;
  const foldersContext = useContext(NoteContext).folders;
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [folderId, setFolderId] = useState(foldersContext[0].id);
  const [message, setMessage] = useState();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validateForm(title, body);
    if (err) {
      setMessage(err);
    } else {
      const newNote = {
        id: Math.floor(1 + Math.random() * 10000).toString(),
        name: title,
        folderId: folderId,
        content: body,
      };
      AddNote(newNote).then(() => {
        addNoteContext(newNote);
        history.push('/');
      });
    }
  };

  const validateForm = (t, b) => {
    if (!t || t.length < 3) {
      return 'Title must be atleast 3 characters long';
    } else if (!b || b.length < 3) {
      return 'Body must be atleast 3 characters long';
    }
  };

  const buildFolderOptions = () => {
    return foldersContext.map((folder) => (
      <option key={folder.id} name={folder.id} value={folder.id}>
        {folder.name}
      </option>
    ));
  };

  return (
    <FORM className='AddNoteForm' onSubmit={handleSubmit}>
      <WRAPPER>
        <TITLE htmlFor='title'>Title</TITLE>
        <input
          type='text'
          name='title'
          id='title'
          placeholder='Title'
          onChange={(e) => setTitle(e.target.value)}
        />
      </WRAPPER>
      <WRAPPER>
        <TITLE htmlfor='folders'>Select Folder</TITLE>
        <select
          name='folders'
          id='folders'
          onChange={(e) => setFolderId(e.target.value)}
        >
          {buildFolderOptions()}
        </select>
      </WRAPPER>
      <WRAPPER>
        <TITLE htmlfor='body'>Content</TITLE>
        <textarea
          name='body'
          id='body'
          placeholder='Content'
          onChange={(e) => setBody(e.target.value)}
        />
      </WRAPPER>
      <BUTTON type='submit'>Submit</BUTTON>
      <ValidationMessage message={message} />
    </FORM>
  );
};

export default AddNoteForm;
