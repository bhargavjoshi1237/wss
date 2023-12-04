import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Create Supabase client
const supabase = createClient('https://jfqepsctuctrnuwwfuqr.supabase.co', 'YOUR_SUPABASE_KEY');

function Appo() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

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
