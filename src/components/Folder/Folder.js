import React from 'react';
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

//Styling
import styled from 'styled-components';
const FOLDER = styled.button`
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
  color: #5f5f5f;
`;

const Folder = (props) => {
  const history = useHistory();
  return (
    <FOLDER
      className='Folder'
      onClick={() => history.push(`/folder/${props.id}`)}
    >
      <TITLE>{props.title}</TITLE>
    </FOLDER>
  );
};

Folder.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

Folder.defaultProps = {
  id: 0,
  title: 'untitled',
};

export default Folder;
