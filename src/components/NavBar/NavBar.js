import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import Folder from '../Folder/Folder';
import AddFolderButton from '../AddFolderButton/AddFolderButton';
import { NoteContext } from '../../NoteContext';
import ExitFolderButton from '../ExitFolderButton/ExitFolderButton';

//Styling
import styled from 'styled-components';
const Aside = styled.aside`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  height: 100%;
`;

const UL = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1rem;

  list-style: none;

  width: 100%;
  padding: 20px;
`;

const NavBar = (props) => {
  const folders = useContext(NoteContext).folders;
  const notes = useContext(NoteContext).notes;

  const renderFolders = (id, noteID) => {
    let foldersToRender = [];

    if (noteID) {
      const noteFolderId = notes.filter((note) => note.id === noteID)[0]
        .folderId;

      foldersToRender = folders.filter((folder) => folder.id === noteFolderId);
    } else {
      foldersToRender = folders.filter(
        (folder) => !id || !noteID || folder.id === id
      );
    }

    return foldersToRender.map((folder) => (
      <Folder key={folder.id} id={folder.id} title={folder.name} />
    ));
  };

  const renderBackButton = () => {
    if (props.match.params.folderID) {
      return <ExitFolderButton />;
    }
  };

  return (
    <Aside item className='NavBar'>
      <UL direction='row'>
        {renderFolders(props.match.params.folderID, props.match.params.noteID)}
        <Route path='/' exact component={AddFolderButton} />
        {renderBackButton()}
      </UL>
    </Aside>
  );
};

export default NavBar;
