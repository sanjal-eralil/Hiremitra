import React from "react";
import "./ResumeShortlist.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const ResumeShortlist = () => {

  const [inputType, setInputType] = useState('text');
    const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const[file2,setFile2]=useState(null);
  const [file, setFile] = useState(null);

  const handleInputChange = (e) => {
    setInputType(e.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
   
  const handleFile2Change = (event) => {
    setFile2(event.target.files2[0]);
  };
  const handleText1Change = (event) => {
    setText1(event.target.value);
  };

  const handleText2Change = (event) => {
    setText2(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('text1', text1);
    formData.append('file', file);

  
    if (inputType === 'text') {
      formData.append('text2', text2);
    } else if (inputType === 'file') {
      formData.append('file2', file2);
    }

    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    try {
      const response = await fetch('http://localhost:8000/upload/', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      console.log('Data submitted successfully:', result);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };


  return (
    <div className="addUser">
      <h5 >Upload Resume</h5>
      <form className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="name">Skill-1:</label>
          <input
            type="text"
            id="text1"
            value={text1}
            onChange={handleText1Change}
            name="name"
            autoComplete="off"
            placeholder="Enter your primary skillset"
          />
          <label htmlFor="email">Job description</label>

          <div>
        <label>
          <input 
            type="radio" 
            value="text" 
            checked={inputType === 'text'} 
            onChange={handleInputChange} 
          />
          Enter text
        </label>
        <label>
          <input 
            type="radio" 
            value="file" 
            checked={inputType === 'file'} 
            onChange={handleInputChange} 
          />
          Upload file
        </label>
      </div>

      {inputType === 'text' && (
        <div>
          <label htmlFor="text">Enter text:</label>
          <input 
            type="text" 
            id="text" 
            value={text1} 
            onChange={handleText2Change} 
            placeholder="Enter job description"
          />
        </div>
      )}

      {inputType === 'file' && (
        <div>
          <label htmlFor="file">Upload file:</label>
          <input 
            type="file" 
            id="file" 
            onChange={handleFile2Change} 
          />
        </div>
      )}










         
          <label htmlFor="fileUpload" >Resume:</label>
          <input
          
            type="file"
             id="fileUpload" 
             name="fileUpload"
             onChange={handleFileChange}
          />
          <button type="submit" className="btn btn-secondary" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
      </form>
      
     
    </div>
  );
};

export default ResumeShortlist;
