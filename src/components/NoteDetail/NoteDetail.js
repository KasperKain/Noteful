import React from 'react';

import PropTypes from 'prop-types';

const NoteDetail = (props) => {
  return <div className='NoteDetail'>{props.message}</div>;
};

NoteDetail.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NoteDetail;
