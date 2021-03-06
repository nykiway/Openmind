import React, { useState, useEffect, useRef, usePrevious } from 'react';
import ProfileNav from '../sub_navs/profile_nav';
import ListItem from './list_item';

const Lists = ({ lists, userId, fetchLists, createList}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showListModal, setShowListModal] = useState(false);

  useEffect(() => {
    fetchLists();
    return () => {
      fetchLists();
    }
  }, [lists.length])

  const handleSubmit = (e) => {
    e.preventDefault();
    let newList = {
      userId: userId,
      title: title,
      description: description
    }

    createList(newList).then(setShowListModal(!showListModal));
  };

  const toggleNewList = (e) => {
    e.preventDefault();
    setShowListModal(!showListModal);
  }

  return (
    <div>
      <ProfileNav />
      <div className="nav-wrapper">
        <div className="nav-lists"></div>
      </div>
      <div className="list-hero">
        <img
        className="list-hero-image"
        src={
          "https://openmind-seeds.s3-us-west-1.amazonaws.com/images/hero_images/HS-MAY2019-BLOG_Mindfulness-BLOG-HERO-1440x512-FINAL.jpg"
        }
        />
      </div>
      <div className="lists-container">
        <button 
          className="add-meditation-button"
          onClick={toggleNewList}
          >
          Create New List
        </button>
      {showListModal ? (
        <div className="list-modal">
          <h1>Create a New List</h1>
          <form>
            <input
              type="text"
              placeholder="List Name"
              name="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              />
              <br />
            <input
              type="text"
              placeholder="List Description"
              value={description}
              name="description"
              onChange={e => setDescription(e.target.value)}
              />
            <button 
              type="submit"
              value="Submit"
              onClick={handleSubmit}
              > Add List
            </button>
          </form>
          </div>
        ) : null}
        {lists.map((list, idx) => {
          return (
            <ListItem list={list} key={idx}/>
          )}
        )}
      </div>
    </div>
  )

}

export default Lists;