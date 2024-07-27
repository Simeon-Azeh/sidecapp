import React from 'react';

const ChatCard = ({ profilePicture, onlineStatus, name, messagePreview, time, newMessages, onClick }) => {
  // Function to truncate message preview
  const truncateMessage = (message, maxLength) => {
    return message.length > maxLength ? message.slice(0, maxLength) + '...' : message;
  };

  return (
    <div className="flex items-center gap-2 p-2 border-b cursor-pointer hover:bg-gray-100" onClick={onClick}>
      <div className="relative">
        <img src={profilePicture} alt={name} className="w-10 h-10 rounded-full object-cover" />
        {onlineStatus && <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full"></span>}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-[#404660]">{name}</h2>
          <span className="text-sm text-gray-500">{time}</span>
        </div>
        <p className="text-sm text-gray-500">{truncateMessage(messagePreview, 20)}</p>
      </div>
      {newMessages > 0 && (
        <div className="bg-[#9835ff] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
          {newMessages}
        </div>
      )}
    </div>
  );
};

export default ChatCard;
