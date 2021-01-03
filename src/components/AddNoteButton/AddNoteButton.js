import React from 'react';
import { useHistory } from 'react-router-dom';

//Styling
import styled from 'styled-components';
const BUTTON = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 30rem;
  height: 100px;
  min-height: 100px;
  padding: 10px;

  background-color: rgba(250, 250, 255, 0.911);
  box-shadow: 3px 5px 8px 1px rgba(0, 0, 0, 0.473);

  cursor: pointer;
`;

const TITLE = styled.h2`
  color: #666666;
`;

const AddNoteButton = () => {
  const history = useHistory();

  return (
    <BUTTON onClick={() => history.push('/AddNote')} className='AddNoteButton'>
      <TITLE>ADD NOTE</TITLE>
    </BUTTON>
  );
};

export default AddNoteButton;
