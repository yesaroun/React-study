import React, { useState } from "react";
import {
    doc,
    updateDoc,
    deleteDoc,
    } from 'firebase/firestore';
import { dbFirestore } from "fbase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Nweet = ({ nweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);

  const onDeleteClick = async () => {
    const ok = window.confirm("Do you want to delete this?");
    if(ok){
        await deleteDoc(doc(dbFirestore, "tweets", `${nweetObj.id}`));
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // 트위터 데이터 업데이트
    const NweetTextRef = doc(dbFirestore, "tweets", `${nweetObj.id}`);

    console.log(nweetObj)

    await updateDoc(NweetTextRef, {
        text: newNweet,
        createAt: Date.now(),
        createdId: nweetObj.createdId
        });
    
    setEditing(false)
  };
  
  const toggleEditing = () => setEditing((prev) => !prev);

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewNweet(value);
  };
  return (
    <div className="tweet__Container">
      {editing ? (
        <>
          <form onSubmit={onSubmit}
                className="tweetForm">
            <input
              type="text"
              placeholder="Edit your nweet"
              value={newNweet}
              required
              onChange={onChange}
              className="tweetForm__input"
            />
            <input
              type="submit"
              value="Update Nweet"
              className="tweetForm__btn"
            />
          </form>
          <button
            onClick={toggleEditing}
            className="tweetForm__btn"
          >Cancel</button>
        </>
      ) : (
        <>
          <h4>{nweetObj.text}</h4>
          {isOwner && (
            <>
              <button
                onClick={onDeleteClick}
                className="tweetHome__btn"
              ><FontAwesomeIcon
                icon={faTrash}
                size="1x"
              /></button>
              <button
                onClick={toggleEditing}
                className="tweetHome__btn"
              ><FontAwesomeIcon
                icon={faPencilAlt}
                size="1x"
              /></button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Nweet;