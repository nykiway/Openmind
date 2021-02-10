import React, { useState, useEffect, useRef, usePrevious } from 'react';
import ProfileNav from '../sub_navs/profile_nav';

const Lists = ({ lists, userId, fetchLists, createList, deleteList }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showListModal, setshowListModal] = useState(false);

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

    createList(newList);
  };

  const toggleNewList = (e) => {
    e.preventDefault();
    setshowListModal(!showListModal)
  }

  return (
    <div>
      <ProfileNav />
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
          >Create New List</button>
      </div>
      {showListModal ? (
        <div className="list-modal">
          <h1>Create a new List</h1>
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
      <div className="list-list">
        {lists.map((list, idx) => {
            return (
              <div key={idx} className="list-content">  
                <div className="list-item-container">
                      {list !== undefined ? (
                    <div className="list-item">
                      <div>
                          <h1 className="list-name">{list.title}</h1>
                          <h1 className="list-details">{list.description}</h1>
                      </div>

                    <div className="list-icons">
                      <i id="list-play" className="fas fa-play list-icon-play"></i>
                      <i
                        listid={list.id}
                        className="fas fa-edit list-icon-edit"
                        // onClick={updateList(list.id)}
                        ></i>
                      <i
                        listid={list.id}
                        className="fas fa-times list-icon-times"
                        onClick={(e) => {
                          e.preventDefault();
                          deleteList(list.id)
                        }}
                        ></i>
                    </div>
                  </div>
                        ) : null}
                </div>
              </div>
            )}
          )}
        </div>
      </div>
  )

}

export default Lists;