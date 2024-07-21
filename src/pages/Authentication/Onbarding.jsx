import React, { useState } from 'react';
import { DatePicker, message } from 'antd';
import { SmileOutlined, SolutionOutlined, UserOutlined, BookOutlined, IdcardOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import moment from 'moment';
import avatarone from '../../../public/images/avatarone.png';
import avatarTwo from '../../../public/images/avatartwo.avif';
import avatarThree from '../../../public/images/avatarthree.svg';

const CustomStep = ({ step, index, current, setCurrent }) => (
  <div className={`flex flex-col items-center font-medium cursor-pointer mb-8 transition-colors ${current === index ? 'text-[#9835ff]' : 'text-gray-400'} md:items-start`}>
    <div
      className={`w-10 h-10 rounded-full flex items-center text-xl justify-center border ${current === index ? 'border-[#9835ff] border border-solid' : 'border-gray-300 border-solid'}`}
      onClick={() => setCurrent(index)}
    >
      {step.icon}
    </div>
    <span className={`mt-2 text-sm ${current === index ? 'text-[#9835ff]' : 'text-gray-600'} hidden md:block`}>{step.title}</span>
    {/* Removed vertical line */}
  </div>
);

const Onboarding = () => {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    country: '',
    city: '',
    dateOfBirth: null,
    verificationCode: Array(6).fill(''),
    avatar: '',
    educationalLevel: '',
    currentSchool: '',
    howSidecHelps: ''
  });

  const next = () => {
    if (validateFields()) {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDateChange = (date, dateString) => {
    setFormData({
      ...formData,
      dateOfBirth: dateString
    });
  };

  const handleAvatarSelect = (avatar) => {
    setFormData({
      ...formData,
      avatar
    });
  };

  const handleVerificationCodeChange = (e, index) => {
    const { value } = e.target;
    const newVerificationCode = [...formData.verificationCode];
    newVerificationCode[index] = value;
    setFormData({
      ...formData,
      verificationCode: newVerificationCode
    });
  };

  const validateFields = () => {
    const requiredFields = {
      0: ['firstname', 'lastname', 'country', 'city', 'dateOfBirth'],
      1: ['verificationCode'],
      2: ['avatar'],
      3: ['educationalLevel', 'currentSchool', 'howSidecHelps']
    };
    const fieldsToValidate = requiredFields[current];
    for (let field of fieldsToValidate) {
      if (!formData[field] || (Array.isArray(formData[field]) && formData[field].includes(''))) {
        message.error(`Please enter ${field}`);
        return false;
      }
    }
    return true;
  };

  const steps = [
    {
      title: 'Your Details',
      content: (
        <div>
          <form className="flex flex-col space-y-4">
            <div className='flex flex-col md:flex-row md:gap-4'>
              <div className='flex flex-col w-full'>
                <label className="block text-[#404660] font-medium text-sm mb-4">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  className="w-full font-normal text-[16px] p-2 border border-gray-300 rounded mt-1 outline-none text-gray-500"
                />
              </div>
              <div className='flex flex-col w-full'>
                <label className="block text-[#404660] font-medium text-sm mb-4">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="w-full font-normal text-[16px] p-2 border border-gray-300 rounded mt-1 outline-none text-gray-500"
                />
              </div>
            </div>
            <label className="block text-[#404660] font-medium text-sm">Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full font-normal text-[16px] p-2 border border-gray-300 rounded mt-1 outline-none text-gray-500"
            >
              <option value="">Select a country</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Kenya">Kenya</option>
              <option value="Rwanda">Rwanda</option>
            </select>
            <label className="block text-[#404660] font-medium text-sm">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full font-normal text-[16px] p-2 border border-gray-300 rounded mt-1 outline-none text-gray-500"
            />
            <label className="block text-[#404660] font-medium text-sm">Date of Birth</label>
            <DatePicker
              onChange={handleDateChange}
              className="mb-4 w-full p-2 border rounded"
              format="YYYY-MM-DD"
              value={formData.dateOfBirth ? moment(formData.dateOfBirth) : null}
            />
          </form>
        </div>
      ),
      icon: <UserOutlined />,
    },
    {
      title: 'Verify Email',
      content: (
        <div>
          <p className='mb-4 text-[#404660]'>A verification code has been sent to <span className='text-[#9835ff] font-medium'>simeon@gmail.com</span>, Please enter it below:</p>
          <div className="flex gap-2 mb-4">
            {formData.verificationCode.map((code, index) => (
              <input
                key={index}
                type="text"
                name={`verificationCode${index}`}
                value={code}
                onChange={(e) => handleVerificationCodeChange(e, index)}
                maxLength="1"
                className="w-12 h-12 text-center border border-gray-300 rounded outline-none"
              />
            ))}
          </div>
          <span className='text-[#404660] mr-4'>Didn't receive the code?</span>
          <button className="text-[#9835ff] underline">Click to resend</button>
        </div>
      ),
      icon: <SolutionOutlined />,
    },
    {
      title: 'Choose Avatar',
      content: (
        <div className="flex justify-around">
          {[avatarone, avatarTwo, avatarThree].map((avatar, index) => (
            <div
              key={index}
              className={`w-24 h-24 border rounded-full flex items-center justify-center cursor-pointer ${formData.avatar === avatar ? 'border-[#9835ff]' : 'border-gray-300'}`}
              onClick={() => handleAvatarSelect(avatar)}
            >
              <img src={avatar} alt={`avatar${index + 1}`} className="w-20 h-20 rounded-full" />
            </div>
          ))}
        </div>
      ),
      icon: <IdcardOutlined />,
    },
    {
      title: 'Educational Information',
      content: (
        <form className="flex flex-col">
          <label className="block text-[#404660] font-medium text-sm mb-4">Educational Level</label>
          <input
            type="text"
            name="educationalLevel"
            value={formData.educationalLevel}
            onChange={handleChange}
            className="w-full font-normal text-[16px] p-2 border border-gray-300 rounded mt-1 outline-none text-gray-500 mb-4"
          />
          <label className="block text-[#404660] font-medium text-sm mb-4">Current School</label>
          <input
            type="text"
            name="currentSchool"
            value={formData.currentSchool}
            onChange={handleChange}
            className="w-full font-normal text-[16px] p-2 border border-gray-300 rounded mt-1 outline-none text-gray-500 mb-4"
          />
          <label className="block text-[#404660] font-medium text-sm mb-2">How do you think Sidec will help you?</label>
          <textarea
            name="howSidecHelps"
            value={formData.howSidecHelps}
            onChange={handleChange}
            className="w-full font-normal text-[16px] p-2 border border-gray-300 rounded mt-1 outline-none text-gray-500"
          />
        </form>
      ),
      icon: <BookOutlined />,
    },
    {
      title: 'Done',
      content: (
        <div>
          <p>Welcome to Sidec! Watch this video to know how it works, or go to your dashboard.</p>
          <div className="relative pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/Zq8TpFSMxSM?si=XJpmhLcGiZUWrcly" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <Link to="/dashboard">
            <button className="bg-[#9835ff] text-white py-2 px-4 rounded mt-4">Go to Dashboard</button>
          </Link>
        </div>
      ),
      icon: <SmileOutlined />,
    },
  ];

  return (
    <div className="w-full md:w-4/5 mx-auto md:py-8 md:px-0 font-poppins">
      <div className="flex flex-col md:flex-row h-full bg-white items-start p-8 md:rounded-lg border">
        <div className="md:w-1/4 flex flex-col items-center md:items-start mb-8 md:mb-0">
          <div className="flex md:flex-col flex-row md:gap-0 gap-8 p-4 rounded">
            {steps.map((step, index) => (
              <CustomStep
                key={index}
                step={step}
                index={index}
                current={current}
                setCurrent={setCurrent}
              />
            ))}
          </div>
        </div>
        <div className="md:w-3/4 md:ml-8 w-full">
          <h2 className="text-xl font-semibold mb-4 text-[#404660]">{steps[current].title}</h2>
          <div>{steps[current].content}</div>
          <div className="steps-action mt-4 flex justify-between">
            {current > 0 && (
              <button className="border text-[#404660] py-2 px-4 rounded" onClick={prev}>
                Previous
              </button>
            )}
            {current < steps.length - 1 && (
              <button className="bg-[#9835ff] text-white py-2 px-4 rounded" onClick={next}>
                Next
              </button>
            )}
            {current === steps.length - 1 && (
              <button
                className="bg-[#9835ff] text-white py-2 px-4 rounded"
                onClick={() => message.success('Registration complete!')}
              >
                Done
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
