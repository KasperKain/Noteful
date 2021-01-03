import React from 'react';

const ValidationMessage = (props) => {
  if (props.message) {
    return <div className='ValidationMessage'>{props.message}</div>;
  }

  return <></>;
};

export default ValidationMessage;
