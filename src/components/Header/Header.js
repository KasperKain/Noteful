import React from 'react';
import { Link } from 'react-router-dom';

//Styling
import styled from 'styled-components';
const HEADER = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 100%;
  height: 10rem;

  padding-left: 5rem;
  background-color: #4a484d;
`;

const TITLE = styled.h1`
  color: white;
  padding: 8px;
  border: 1px solid #b6b6b6;
`;

class Header extends React.Component {
  render() {
    return (
      <HEADER className='Header'>
        <Link to='/'>
          <TITLE>Noteful</TITLE>
        </Link>
      </HEADER>
    );
  }
}

export default Header;
