import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  // Function to handle file selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFile(selectedFile);
  };

  // Function to upload the file to the server
  const handleFileUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      setUploadStatus('Please select a file to upload.');
      return;
    }

    // Create a FormData object to hold the file
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:3000/api/v1/user/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body:{
          "username":"rishabh17846",
          "email":"riushabh@gmail.com",
          "firstname":"Rishabh ",
          "lastname":"Sharma",
          "date_of_birth":"2024-10-14T15:30:00.000Z",
          "phone_number":"9811114217",
          "password":"Rs1234567"
          }
          
      });

      if (response.status === 200) {
        setUploadStatus('File uploaded successfully!');
        console.log('File URL:', response); // Access the uploaded file's URL
      }
    } catch (error) {
      setUploadStatus('Error uploading file. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>File Upload</h2>
      <form onSubmit={handleFileUpload}>
        <input type="file" onChange={handleFileChange} accept="image/*,.pdf" />
        <button type="submit">Upload</button>
      </form>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default FileUpload;
