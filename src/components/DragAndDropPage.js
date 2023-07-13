import React, { useState } from 'react';
import FileUploader from './FileUploader';
import { useNavigate } from 'react-router-dom';

const DragAndDropPage = () => {
const navigate =  useNavigate()
    const [selectedHeader, setSelectedHeader] = useState('');
    const [excelData, setExcelData] = useState(null);
  
    const handleFileUpload = (parsedData) => {
      setExcelData(parsedData);
      setSelectedHeader('');
    };
  
    const handleHeaderSelect = (e) => {
      setSelectedHeader(e.target.value);
    };
  
    const handleSubmit = () => {
      if (excelData && selectedHeader) {
        const formData = new FormData();
        const jsonData = JSON.stringify(excelData);
  
        formData.append('file', new Blob([jsonData], { type: 'application/json' }));
        formData.append('selectedHeader', selectedHeader);
  
        fetch('<YOUR_SERVER_ENDPOINT>', {
          method: 'POST',
          body: formData,
        })
          .then((response) => {
            // Handle the response from the server
          })
          .catch((error) => {
            // Handle any errors that occur during the fetch request
          });
          navigate("/dashboard")
      }
    };
  
    return (
      <div className="bg-gray-200 py-8">
        <div className=" mx-auto md:px-20 px-5">
          
          <FileUploader onFileUpload={handleFileUpload} handleHeaderSelect={handleHeaderSelect} />
  
      
          {selectedHeader && (
            <div className="mt-4 flex justify-center">
              <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          )}
  
        </div>
      </div>
    );
  };

export default DragAndDropPage;
