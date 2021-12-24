import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firbase";
import { useNavigate } from "react-router-dom";

const CreatePost = ({isAuth}) => {
  const [blogTitle, setBlogTitle] = useState("");
  const [blogpost, setBlogPost] = useState("");

  const postCollectionRef = collection(db, "post");
  let navigate = useNavigate();
  const createPost = async () => {
    await addDoc(postCollectionRef, {
      blogTitle,
      blogpost,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/")
  };
  useEffect(() => {
     if(!isAuth){
         navigate("/signin")
     }
  }, []);
  return (
    <div className="createpostmain">
      <h1>Create A Post</h1>
      <div className="titlepost">
        <label>Title:</label>
        <br />
        <input
          placeholder="Title..."
          onChange={(e) => setBlogTitle(e.target.value)}
        />
      </div>
      <div className="textareadiv">
        <label>Post:</label>
        <textarea
          className="textarea"
          placeholder="Post.."
          onChange={(e) => setBlogPost(e.target.value)}
        ></textarea>
        <div>
          <button onClick={createPost} >Submit Post</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
