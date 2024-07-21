import React from 'react';
import { SmileOutlined, SolutionOutlined, UserOutlined, BookOutlined, IdcardOutlined } from '@ant-design/icons';

const stepsData = [
  { title: 'Student Details', icon: <UserOutlined /> },
  { title: 'Verify Email', icon: <SolutionOutlined /> },
  { title: 'Choose Avatar', icon: <IdcardOutlined /> },
  { title: 'Select Course', icon: <BookOutlined /> },
  { title: 'Done', icon: <SmileOutlined /> },
];

const Steps = ({ current }) => {
  return (
    <div className="flex md:flex-col flex-row md:w-1/3 w-full">
      {stepsData.map((step, index) => (
        <div key={index} className="flex items-center mb-4 md:mb-0 md:flex-row flex-col">
          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${current === index ? 'bg-[#9835ff] text-white' : 'bg-gray-200 text-black'}`}>
            {step.icon}
          </div>
          <span className={`mt-2 md:mt-0 md:ml-4 ${current === index ? 'font-bold text-[#9835ff]' : 'text-black'}`}>{step.title}</span>
          {index !== stepsData.length - 1 && <div className="md:w-0 md:h-8 w-8 h-0 border-l-2 border-gray-200 md:border-l-0 md:border-t-2" />}
        </div>
      ))}
    </div>
  );
};

export default Steps;
