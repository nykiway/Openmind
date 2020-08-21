import React from 'react';
import { Link } from 'react-router-dom'

class MeditationItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const meditation = this.props;

    return (
      <div>
        {meditation}
      </div>
    )
  }
}

export default MeditationItem;