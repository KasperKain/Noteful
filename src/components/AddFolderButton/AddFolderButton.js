import React from 'react';
import { useHistory } from 'react-router-dom';

//Styling
import styled from 'styled-components';
const BUTTON = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 3rem;

  background-color: white;
  box-shadow: 3px 5px 8px 1px rgba(0, 0, 0, 0.473);

  cursor: pointer;
`;

const TITLE = styled.h2`
  color: grey;
`;

const AddFolderButton = () => {
  const history = useHistory();

  return (
    <BUTTON onClick={() => history.push('/AddFolder')}>
      <TITLE>Add Folder</TITLE>
    </BUTTON>
  );
};

export default AddFolderButton;
