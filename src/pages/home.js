import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firbase";

const Home = () => {
  const [allpost, setAllPost] = useState([]);
  const postCollectionRef = collection(db, "post");

  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(postCollectionRef);
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setAllPost(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPost();
  },[postCollectionRef,setAllPost]);

  const deletePost = async (id) => {
    const postDoc = doc(db, "post", id);
    await deleteDoc(postDoc);
  };
  return (
    <div>
      {allpost.map((post) => {
        return (
          <>
            <div className="homemaindiv">
              <div className="hometitle">
                {/* <label className="labelstart">Title : </label> */}
                <h2> {post.blogTitle}</h2>
              </div>
              <div className="homepost">
                {/* <label className="labelstart">Blog : </label> */}
                <p> {post.blogpost}</p>
                <div className="deletebutton">
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>

              <div className="homeauthor">
                {/* <label className="labelstart" >Author : </label> */}
                <p>written by.... @{post.author.name}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Home;
