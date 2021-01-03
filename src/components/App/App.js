import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import MainList from '../MainList/MainList';
import NoteExpanded from '../NoteExpanded/NoteExpanded';
import AddNoteForm from '../AddNoteForm/AddNoteForm';
import AddFolderForm from '../AddFolderForm/AddFolderForm';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import { NoteProvider } from '../../NoteContext';

//Styling
import styled from 'styled-components';
const DIV = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #8c9797;
`;

const MAIN_CONTAINER = styled.div`
  overflow: hidden;
  display: flex;
  height: 100%;
  width: 100%;

  padding: 20px;
`;

const App = () => {
  return (
    <DIV className='App'>
      <Header />
      <ErrorBoundary>
        <NoteProvider>
          <MAIN_CONTAINER className='PageContainer'>
            <Route path='/' exact strict component={NavBar} />
            <Route path='/' exact strict component={MainList} />

            <Route path='/folder/:folderID' component={NavBar} />
            <Route path='/folder/:folderID' component={MainList} />

            <Route path='/note/:noteID' component={NavBar} />
            <Route path='/note/:noteID' component={NoteExpanded} />

            <Route path='/AddNote' component={AddNoteForm} />
            <Route path='/AddFolder' component={AddFolderForm} />
          </MAIN_CONTAINER>
        </NoteProvider>
      </ErrorBoundary>
    </DIV>
  );
};

export default App;
