import axios from "axios";
import React, { useState } from "react";

const upload = () => {
  const [selectedFile, setSelectedFile] = useState<any>(null);

  const handleFileChange = (e: any) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleFileUpload(selectedFile);
  };
  const handleFileUpload = async (file: any) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("http://localhost:8080/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button
          type="submit"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default upload;
