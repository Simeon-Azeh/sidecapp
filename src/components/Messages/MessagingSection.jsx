import React from 'react';
import { MdCall, MdMoreVert } from 'react-icons/md';
import { FaPlus, FaSmile } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import TypingEffect from './TypingEffect';
import avartarone from '../../../public/images/avatartwo.avif';

const MessagingSection = ({ selectedChat }) => (
  <div className="bg-white border rounded p-4 w-2/5 flex flex-col">
    <div className="flex items-center justify-between border-b pb-2 mb-4">
      <div className="flex items-center gap-2">
        <img src={selectedChat.profilePicture} alt={selectedChat.name} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <h2 className="font-semibold text-[#404660]">{selectedChat.name}</h2>
          <p className="text-sm text-gray-500">{selectedChat.onlineStatus ? 'Online' : `Last online  ${selectedChat.time}`}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <MdCall size={24} className='text-[#9835ff] cursor-pointer' />
        <MdMoreVert size={24} className='text-gray-500 cursor-pointer' />
      </div>
    </div>
    <div className="flex-1 overflow-y-auto h-96">
      {/* Demo Chat Messages */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <img src={selectedChat.profilePicture} alt={selectedChat.name} className="w-8 h-8 rounded-full object-cover" />
          <div className="bg-slate-50 p-2 rounded-lg">
            <p className='text-[#404660]'>{selectedChat.messagePreview}</p>
            <span className="text-xs text-gray-500">{selectedChat.time}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 self-end">
          <div className="bg-[#9835ff] text-white p-2 rounded-lg">
            <p>Alright, thank you!</p>
            <span className="text-xs text-gray-200">2:46 PM</span>
          </div>
          <div className='w-8'>
          <img src={avartarone} className='w-full object-cover rounded-full'/>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img src={selectedChat.profilePicture} alt={selectedChat.name} className="w-8 h-8 rounded-full object-cover" />
          <div className="bg-gray-100 p-2 rounded-lg">
            <p className='text-[#404660]'>Are you coming to the meeting tomorrow?</p>
            <span className="text-xs text-gray-500">2:47 PM</span>
          </div>
        </div>
        <div className="flex items-center gap-2 ">
        <img src={selectedChat.profilePicture} alt={selectedChat.name} className="w-8 h-8 rounded-full object-cover" />
          <TypingEffect />
         
        </div>
      </div>
    </div>
    <div className="mt-4 flex items-center gap-2 border-t pt-2">
      <FaPlus size={30} className='text-[#9835ff] border p-1 rounded bg-slate-50 cursor-pointer' />
      <input type="text" placeholder="Type your message here..." className="flex-1  rounded p-1 px-4 outline-none" />
      <FaSmile size={30} className='text-[#9835ff] border p-1 rounded bg-slate-50 cursor-pointer' />
      <IoMdSend size={32} className="bg-[#9835ff] rounded-full p-1 text-white px-auto cursor-pointer" />
    </div>
  </div>
);

export default MessagingSection;
