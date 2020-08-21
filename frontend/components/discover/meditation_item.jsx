import React from 'react';
import { Link } from 'react-router-dom'

class MeditationItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let meditations;

    if(this.props.meditations !== undefined) {
      return (
        <div>
          {meditation}
        </div>
      )
    }
  }
}

export default MeditationItem;