import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import ValidationMessage from '../ValidationMessage/ValidationMessage';

import { AddFolder } from '../../data';
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

const AddFolderForm = () => {
  const addFolderContext = useContext(NoteContext).addFolder;
  const [title, setTitle] = useState();
  const [message, setMessage] = useState();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validateForm(title);
    if (err) {
      setMessage(err);
    } else {
      const newFolder = {
        id: Math.floor(1 + Math.random() * 10000),
        name: title,
      };

      AddFolder(newFolder).then(() => {
        addFolderContext(newFolder);
        history.push('/');
      });
    }
  };

  const validateForm = (t, b) => {
    if (!t || t.length < 3) {
      return 'Title must be atleast 3 characters long';
    }
  };

  return (
    <FORM className='AddFolderForm' onSubmit={handleSubmit}>
      <WRAPPER>
        <TITLE>Folder Title</TITLE>
        <input
          type='text'
          name='title'
          placeholder='Title'
          onChange={(e) => setTitle(e.target.value)}
        />
      </WRAPPER>
      <BUTTON type='submit'>Submit</BUTTON>
      <ValidationMessage message={message} />
    </FORM>
  );
};

export default AddFolderForm;
