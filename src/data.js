const endPoint = 'https://shielded-fjord-67243.herokuapp.com';

export const GetAllNotes = () => {
  return fetchData(`${endPoint}/notes`);
};

export const GetAllFolders = () => {
  return fetchData(`${endPoint}/folders`);
};

export const DeleteNote = (id) => {
  return fetchData(`${endPoint}/notes/${id}`, {
    method: 'DELETE',
    'Content-Type': 'application/json',
  });
};

export const DeleteFolder = (id) => {
  return fetchData(`${endPoint}/folders/${id}`, {
    method: 'DELETE',
    'Content-Type': 'application/json',
  });
};

export const AddNote = (newNote) => {
  const note = JSON.stringify(newNote);

  return fetchData(`${endPoint}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: note,
  });
};

export const AddFolder = (newFolder) => {
  const folder = JSON.stringify(newFolder);

  return fetchData(`${endPoint}/folders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: folder,
  });
};

const fetchData = (...args) => {
  return fetch(...args)
    .then((response) => checkAndHandleError(response))
    .then((jsonResponse) => jsonResponse)
    .catch((err) => console.log(err));
};

const checkAndHandleError = (response) => {
  if (!response.ok) {
    let err = {
      code: response.code,
      message: response.statusText,
    };

    throw new Error(err.message);
  } else {
    return response.json();
  }
};
