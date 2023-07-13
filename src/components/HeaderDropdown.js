import React from 'react';

const HeaderDropdown = ({ headers, handleHeaderSelect }) => {
  return (
    <div>
      <label htmlFor="headerSelect">Select a Value:</label>
      <select id="headerSelect" className="block form-select rounded-lg" defaultValue="" onChange={handleHeaderSelect}>
        <option value="" disabled hidden>
          Select 
        </option>
        {headers.map((header, index) => (
          <option key={index} value={header}>
            {header}
          </option>
        ))}
      </select>
    </div>
  );
};

export default HeaderDropdown;
