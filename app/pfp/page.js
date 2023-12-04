"use client"
import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';



// Create Supabase client

const SUPABASE_URL = "https://jfqepsctuctrnuwwfuqr.supabase.co"
// const supabase = createClient(SUPABASE_URL, process.env.SUPABASE_KEY);

const supabase = createClient('https://jfqepsctuctrnuwwfuqr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmcWVwc2N0dWN0cm51d3dmdXFyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTYzMjU5MywiZXhwIjoyMDE1MjA4NTkzfQ.N3lWQ2JjdsQ4s-upUhrn8wyn-BuSafcvKKr-g-J4GiY');

function Appo() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };


  const { data, error } = supabase.storage
  .from('pfp')
  .createSignedUrl('pfp.jpg', 3600)

if (data) {
  console.log(data.signedUrl)
}


  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file');
      return;
    }

    const filePath = `pfp/${selectedFile.name}`;

    // Upload file using standard upload
    const { data, error } = await supabase.storage.from('pfp').upload(filePath, selectedFile);

    if (error) {
      console.error('Error uploading file:', error);
      // Handle error
    } else {
      console.log('File uploaded successfully:', data);
      // Handle success
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleFileChange}
        className="file-input file-input-bordered w-full max-w-xs"
      />
      <button onClick={handleUpload}>Upload File</button>
    </div>
  );
}

export default Appo;
