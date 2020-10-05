import React, { Component } from 'react';
import { connect } from "react-redux";
import { openModal, closeModal } from '../../../actions/modal_actions';
import {
  fetchMeditations,
  fetchMeditation
} from '../../../actions/meditation_actions';

import { fetchCurrentMeditation } from '../../../actions/current_meditation_actions'

class DiscoverSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultText: "search for meditations...",
      searchInput: "",
      showDropdown: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.triggerDropdown = this.triggerDropdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.fetchMeditations();
  }

  searchedMeditations() {
    const meditations = [];
    for (let i = 0; i < this.props.meditations.length; i++) {
      let meditation = this.props.meditations[i];
      let meditationName = meditation.name;
      let meditationCategories = meditation.categories;

      if (meditationName.includes(this.state.searchInput.toLowerCase()) || meditationCategories.includes(this.state.searchInput.toLowerCase())) {
        meditations.push(meditation);
      }
    }

    if (meditations[23] !== undefined) {
      const firstMeditation = meditations.slice(0, 23);
      return firstMeditation;
    } else {
      return meditations;
    }
  }

  handleClick(meditationId) {
    this.props.openModal('meditation');
    this.props.fetchCurrentMeditation(meditationId);
  }


  triggerDropdown() {
    this.setState({ showDropdown: !this.state.showDropdown });
  }

  update(e) {
      this.setState({ searchInput: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const meditations = this.searchedMeditations();

      return (
        <div>
          <form 
            onSubmit={this.handleSubmit}
            className="search-form"
            >
            <input
              type="text"
              value={this.state.searchInput}
              onClick={this.triggerDropdown}
              onChange={this.update}
              className="search-input"
              placeholder="ie. sleep, anxiety, etc..."
            />
          </form>
          {this.state.showDropdown ? (
            <div className="search-dropdown">
              {meditations.length < 1 ? (
                <div>
                  <p>No Meditations match your search</p>
                </div>
              ) : (
                <div className="medtiations-search-container">
                  <ul className="meditations-search-list">
                    {meditations.map((meditation, idx) => {
                      return <li 
                        key={idx}
                        onClick={() => this.handleClick(meditation.id)}
                        >
                          {meditation.name}
                        </li>
                    })}
                  </ul>
                </div>
              )}
            
            </div>
          ) : null}
          <div className="form-buttons">
            <button className="sleep" value="sleep" onClick={this.update}>Sleep</button>
            <button className="relax" value="relax" onClick={this.update}>Relax</button>
            <button className="gratitude" value="gratitude" onClick={this.update}>Gratitude</button>
            <button className="work" value="work" onClick={this.update}>Work</button>
            <button className="anxiety" value="anxiety" onClick={this.update}>Anxiety</button>
          </div>

          <div className="meditations-container">
            <ul className="meditations-list">
              {meditations.map((meditation) => (
                <li className="meditation-item" key={meditation.id}>
                  <button onClick={() => this.handleClick(meditation.id)} >
                    <p className="meditation-name">{meditation.name}</p>
                    <div className="meditation-circle">
                      <i className="fas fa-headphones" />
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>
      )
  }

}

const mapStateToProps = (state) => {
  return {
    meditations: Object.values(state.entities.meditations),
    currentMeditation: state.ui.currentMeditation,
    currentUser: state.entities.users[state.session.id],
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchMeditations: (data) => dispatch(fetchMeditations(data)),
  fetchMeditation: (id) => dispatch(fetchMeditation(id)),
  fetchCurrentMeditation: (id) => dispatch(fetchCurrentMeditation(id)),
  openModal: modal => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverSearch);