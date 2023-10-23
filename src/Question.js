import {React, useState} from 'react';
import './Question.css';
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import SyntaxHighlighter from "react-syntax-highlighter";

const Question = ({ titleText, descriptionText, tagsPlaceholder, buttonText }) => {
  const [input, setInput] = useState("");
  return (

    <div className="Question">
      <h2 className='Feedback'>What do you want to share</h2>

      <label className='TitleLabel'>Title</label>
      <input className='Title' type="text" placeholder="Start your question with how, what, why, etc." />

      <label className='Class'>Describe your Problem</label>
      <textarea placeholder="Describe your problem!" />

      <label className='Class'>CODE</label>
      <textarea placeholder="CODE!!!!" value={input} onChange={(event) => { setInput(event.target.value) }} />

      <SyntaxHighlighter language="javascript" style={docco}>
        {input}
      </SyntaxHighlighter>

      <label className='Class'>Tags</label>
      <input className='Tags' type="text" placeholder="Please add up to 3 tags to describe what your question is about e.g., Java" />

      <button className="post">Post</button>
    </div>


  );
};

export default Question;
