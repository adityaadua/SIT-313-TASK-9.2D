import React, { useState } from "react";
import "firebase/firestore";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import "./Article.css";
import Image from "./Image";

const ArticleSection = () => {  
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [articleText, setArticleText] = useState("");
  const [tags, setTags] = useState("");

  // const db = firebase.firestore();

  const handlePost = () => {
    // Create a new document in the "articles" collection
    //   db.collection("articles").add({
    //   title: title,
    //   abstract: abstract,
    //   articleText: articleText,
    //   tags: tags.split(",").map(tag => tag.trim()), // Assuming tags are comma-separated
    //   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    // }) 
    // .then(() => {
    //   console.log("Document successfully written!");
      // Clear the input fields after a successful post
    //   setTitle("");
    //   setAbstract("");
    //   setArticleText("");
    //   setTags("");
    // })
    // .catch(error => {
    //   console.error("Error writing document: ", error);
    // });
  };

  return (
    <div className="Article">
      <h2 className="Feedback">What do you want to ask or share</h2>

      <label className="A1">Title</label>
      <input
        className="Title"
        type="text"
        placeholder="Enter a descriptive title."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Image />
      <label>Abstract</label>
      <textarea
        placeholder="Enter a 1-paragraph Abstract"
        value={abstract}
        onChange={(e) => setAbstract(e.target.value)}
      />

      <label>Article Text</label>
      <textarea
        placeholder="Enter a 1-paragraph Abstract"
        value={articleText}
        onChange={(e) => setArticleText(e.target.value)}
      />

      <label>Tags</label>
      <input
        className="Tags"
        type="text"
        placeholder="Please add up to three tags to describe what your article is about, e.g., Java"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <button className="post" onClick={handlePost}>Post</button>
    </div>
  );
};

export default ArticleSection;
