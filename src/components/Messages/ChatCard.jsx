// src/components/ChatCard.jsx
import React from 'react';
import { FaCircle } from 'react-icons/fa';

const ChatCard = ({ profilePicture, name, messagePreview, time, onlineStatus, newMessages }) => {
  return (
    <div className="flex items-center p-2 mb-2 bg-gray-50 rounded shadow-sm hover:bg-gray-100 cursor-pointer ">
      <div className="relative w-12 h-12">
        <img src={profilePicture} alt={`${name} profile`} className="w-full h-full rounded-full object-cover" />
        {onlineStatus && <FaCircle size={10} className="absolute bottom-1 right-0 text-green-400 " />}
      </div>
      <div className="ml-3 flex-1">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-semibold text-gray-700">{name}</h3>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <div className='flex items-center justify-between'>
        <p className="text-xs text-gray-500">{messagePreview}</p>
        {newMessages > 0 && <span className="text-xs bg-[#9835ff] text-white rounded-full px-2 py-0.5 ml-2">{newMessages}</span>}
        </div>
       
      </div>
    </div>
  );
};

export default ChatCard;
