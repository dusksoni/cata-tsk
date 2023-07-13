import React, { useState } from "react";
import * as XLSX from "xlsx";
import HeaderDropdown from "./HeaderDropdown";

const FileUploader = ({ onFileUpload, handleHeaderSelect }) => {
  const [excelData, setExcelData] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileChange = (e) => {
    setIsDragOver(false);
    const file = e.target.files[0];
    setSelectedFile(file);
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event?.target?.result);
      const workbook = XLSX?.read(data, { type: "array" });
      const worksheet = workbook?.Sheets[workbook?.SheetNames[0]];
      const parsedData = XLSX?.utils?.sheet_to_json(worksheet, { header: 1 });

      setExcelData(parsedData);
      onFileUpload(parsedData);
    };

    reader.readAsArrayBuffer(file);
  };

  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  return (
    <div className="mt-4">
      <div
        className=" flex justify-center  "
        onDragEnter={handleDragEnter}
        
        onDragLeave={handleDragLeave}
        onDragEnd={handleDragLeave}
      >
        <label
          htmlFor={"file"}
          className={` ${isDragOver? "border-green-600": "border-blue-300"} relative cursor-pointer rounded-2xl bg-white text-xs  h-80 border-2 border-dashed border-blue-300  md:w-1/2 w-full  `}
        >
          <div class="absolute left-[50%] bottom-[50%] break-words w-[200px]" style={{ transform: "translate(-50%, 50%)"}}>
            {isDragOver  ? (
              <p className=" text-2xl text-green-600">Drop the file here...</p>
            ) : (
              <p className=" text-2xl text-blue-300">
                Upload a file or Drag and drop an Excel file here
              </p>
            )}
          </div>

          <input
            onChange={handleFileChange}
            type="file"
            id="file"
            className="border-regal-blue relative rounded-lg  h-80   w-full"
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          />
        </label>
      </div>
      {excelData && (
        <div className="mt-4">
          <HeaderDropdown
            headers={excelData[0]}
            handleHeaderSelect={handleHeaderSelect}
          />
        </div>
      )}
      {excelData && (
        <div className="mt-4 ">
          <h2>Preview:</h2>
          <div className="overflow-auto rounded-lg">
            <table className="table-auto min-w-full leading-normal overflow-x-auto bg-white ">
              <thead className="">
                <tr className="px-5 py-3 bg-[#0B4A7B] border-b-2 border-gray-200  text-center text-xs font-medium text-white uppercase tracking-wider">
                  {excelData[0].map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {excelData.slice(1).map((row, index) => (
                  <tr
                    key={index}
                    className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-2/5"
                  >
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="text-gray-500 ">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
