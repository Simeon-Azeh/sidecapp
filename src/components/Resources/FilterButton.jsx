// src/components/FilterButton.jsx
import React, { useState } from 'react';
import { DatePicker, Select } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { IoIosArrowDown } from "react-icons/io";

const { RangePicker } = DatePicker;
const { Option } = Select;

const FilterButton = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    yearRange: [],
    discipline: '',
    subject: '',
    paper: ''
  });
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDateChange = (dates) => {
    setFilters(prev => ({ ...prev, yearRange: dates }));
  };

  const handleDisciplineChange = (value) => {
    setFilters(prev => ({ ...prev, discipline: value }));
  };

  const handleSubjectChange = (value) => {
    setFilters(prev => ({ ...prev, subject: value }));
  };

  const handlePaperChange = (value) => {
    setFilters(prev => ({ ...prev, paper: value }));
  };

  const handleFilterApply = () => {
    onFilter(filters);
    setDropdownVisible(false); // Close the dropdown on apply
  };

  return (
    <div className="relative inline-block font-poppins">
      <button 
        className="px-4 py-2 bg-[#9835ff] text-white rounded flex items-center"
        onClick={() => setDropdownVisible(!dropdownVisible)}
      >
        Filter <IoIosArrowDown className="ml-1" />
      </button>
      {dropdownVisible && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-300 border-solid rounded-lg shadow-lg z-50 p-4">
          <div className="mb-4">
            <RangePicker onChange={handleDateChange} style={{ width: '100%' }} />
          </div>
          <div className="mb-4">
            <Select 
              placeholder="Discipline" 
              onChange={handleDisciplineChange} 
              style={{ width: '100%' }}
            >
              <Option value="science">Science</Option>
              <Option value="arts">Arts</Option>
              <Option value="technology">Technology</Option>
              <Option value="specialization">Specialization</Option>
            </Select>
          </div>
          <div className="mb-4">
            <Select 
              placeholder="Subject" 
              onChange={handleSubjectChange} 
              style={{ width: '100%' }}
            >
              <Option value="all">All Subjects</Option>
              <Option value="physics">Physics</Option>
              <Option value="chemistry">Chemistry</Option>
              <Option value="biology">Biology</Option>
              <Option value="computer_science">Computer Science</Option>
            </Select>
          </div>
          <div className="mb-4">
            <Select 
              placeholder="Paper" 
              onChange={handlePaperChange} 
              style={{ width: '100%' }}
            >
              <Option value="p1">P1</Option>
              <Option value="p2">P2</Option>
              <Option value="p3">P3</Option>
            </Select>
          </div>
          <div className="flex justify-end">
            <button 
              className="px-4 py-2 bg-[#9835ff] text-white rounded" 
              onClick={handleFilterApply}
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
