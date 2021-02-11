import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const ShowListMeditations = ({list}) => {
  return (
    <div>
      {list.meditationIds && list.meditationIds.map((meditationId) => {
        <h1>{meditationId}</h1>
      })}
    </div>
  )
}

export default ShowListMeditations

