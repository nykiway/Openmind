import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { openModal, closeModal } from '../../../actions/modal_actions';
import {
  fetchMeditations,
  fetchMeditation
} from '../../../actions/meditation_actions';

import { fetchCurrentMeditation } from '../../../actions/current_meditation_actions'

const DiscoverSearch = ({ fetchMeditations, meditations, openModal, fetchCurrentMeditation }) => {
  const [defaultText, setDefaultText] = useState("search for meditations...")
  const [searchInput, setSearchInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    fetchMeditations();
  }, [])

  const searchedMeditations = () => {
    const meditationsArray = [];
    for (let i = 0; i < meditations.length; i++) {
      let meditation = meditations[i];
      let meditationName = meditation.name;
      let meditationCategories = meditation.categories;

      if (meditationName.includes(searchInput.toLowerCase()) || meditationCategories.includes(searchInput.toLowerCase())) {
        meditationsArray.push(meditation);
      }
    }

    if (meditationsArray[23] !== undefined) {
      const firstMeditation = meditationsArray.slice(0, 23);
      return firstMeditation;
    } else {
      return meditationsArray;
    }
  }

  const handleClick = (meditationId) => {
    openModal('meditation');
    fetchCurrentMeditation(meditationId);
  }


  const triggerDropdown = () => {
    setShowDropdown(!showDropdown);
  }

  const update = (e) => {
      setSearchInput(e.currentTarget.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const searchedMeds = searchedMeditations(); 
      return (

        <div>
          <form 
            onSubmit={handleSubmit}
            className="search-form"
            >
            <div className="search-div">
            <i id="search-icon" className="fas fa-search"></i>
            </div>
            <input
              type="text"
              value={searchInput}
              onClick={triggerDropdown}
              onChange={update}
              onFocus={(e) => e.target.placeholder = ""} // removes placeholder text
              onBlur={(e) => e.target.placeholder = "ie. sleep, anxiety, etc..."}
              className="search-input"
              placeholder={`ie. sleep, anxiety, etc...`}
            />

          </form>
          {showDropdown ? (
            <div className="search-dropdown">
              {searchedMeds.length < 1 ? (
                <div>
                  <p>No Meditations match your search</p>
                </div>
              ) : (
                <div className="medtiations-search-container">
                  <ul className="meditations-search-list">
                    {searchedMeds.map((meditation, idx) => {
                      return <li 
                        key={idx}
                        onClick={() => handleClick(meditation.id)}
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
            <button className="sleep" value="sleep" onClick={update}>Sleep</button>
            <button className="relax" value="relax" onClick={update}>Relax</button>
            <button className="gratitude" value="gratitude" onClick={update}>Gratitude</button>
            <button className="work" value="work" onClick={update}>Work</button>
            <button className="anxiety" value="anxiety" onClick={update}>Anxiety</button>
          </div>

          <div className="meditations-container">
            <ul className="meditations-list">
              {searchedMeds.map((meditation) => (
                <li className="meditation-item" key={meditation.id}>
                  <button onClick={() => handleClick(meditation.id)} >
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