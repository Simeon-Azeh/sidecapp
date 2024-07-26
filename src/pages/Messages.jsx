import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar, { SidebarItem, DropdownItem } from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { MdDashboardCustomize, MdPeople, MdBook, MdSettings, MdHelp, MdOutlineDatasetLinked } from 'react-icons/md';
import { RiCompassDiscoverFill, RiArchiveDrawerFill } from "react-icons/ri";
import { IoMdChatbubbles } from "react-icons/io";
import TeamsSection from '../components/Messages/TeamsSection';
import ChatCard from '../components/Messages/ChatCard';
import MessagingSection from '../components/Messages/MessagingSection';
import SharedPhotos from '../components/Messages/SharedPhotos';
import SharedFiles from '../components/Messages/SharedFiles';


const chatData = [
    {
      profilePicture: 'https://img.freepik.com/free-photo/adult-holding-digital-tablet-typing-touch-screen-online-remote-work-business-man-using-modern-device-working-from-home-corporate-project-entrepreneur-with-technology_482257-35650.jpg?t=st=1722004371~exp=1722007971~hmac=40b0fe4d88558f1f8850cf0c71354ac996c9f4bce4bf0c5405dc15c9be525206&w=360',
      onlineStatus: true,
      name: 'Alain Michael',
      messagePreview: 'Hey, how are you?',
      time: 'Just now',
      newMessages: 3,
    },
    {
      profilePicture: 'https://img.freepik.com/free-photo/african-woman-successful-entrepreneur-wearing-glasses-face-portrait_53876-148050.jpg?t=st=1722008330~exp=1722011930~hmac=b8b34d51a927d9a39231e64526e5a1c0d7aa17f76aa7b095f8e594b98ec48bab&w=740',
      onlineStatus: false,
      name: 'Fonui',
      messagePreview: 'Are you coming to the mee...',
      time: '12 mins ago',
      newMessages: 0,
    },
    {
      profilePicture: 'https://img.freepik.com/premium-vector/businesswoman-avatar-cartoon-character-profile_18591-50579.jpg?w=740',
      onlineStatus: false,
      name: 'Faith Ama',
      messagePreview: 'You are to finish your a...',
      time: '30 mins ago',
      newMessages: 1,
    },
    {
      profilePicture: 'https://img.freepik.com/free-photo/portrait-man-cartoon-style_23-2151133887.jpg?t=st=1722008262~exp=1722011862~hmac=4558b97a15e5eafad03f9dce6d6709e89351160ed3e4e09adfbf29012b30918d&w=826',
      onlineStatus: false,
      name: 'Jesse2',
      messagePreview: 'please join our team.',
      time: '2:15 PM',
      newMessages: 0,
    },
    {
      profilePicture: 'https://img.freepik.com/free-vector/cloud-robotics-abstract-concept-illustration_335657-3801.jpg?t=st=1722008723~exp=1722012323~hmac=62ad5dfd2a0532064e38ef17d50462aff5739d944b7d63d869aa058287a4770f&w=740',
      onlineStatus: true,
      name: 'Sidec Bot',
      messagePreview: 'Here are some tips for you.',
      time: '1:15 PM',
      newMessages: 2,
    },
    {
      profilePicture: 'https://img.freepik.com/premium-photo/flat-no-picture-avatar-profile-picture_941097-35012.jpg?w=740',
      onlineStatus: false,
      name: 'Arrey Fred',
      messagePreview: 'Meeting tomorrow at 2 PM.',
      time: 'Yesterday',
      newMessages: 0,
    },
    // Add more chat data here
  ];
  

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(chatData[1]);

  return (
    <div className="flex h-screen">
      <div className="z-40">
        <Sidebar>
          <Link to="/discover">
            <SidebarItem icon={<RiCompassDiscoverFill size={20} />} text="Discover" />
          </Link>
          <Link to="/dashboard">
            <SidebarItem icon={<MdDashboardCustomize size={20} />} text="Dashboard" alert />
          </Link>
          <SidebarItem icon={<MdBook size={20} />} text="Courses">
            <Link to="/courses">
              <DropdownItem text="All" />
            </Link>
            <Link to="/courses/arts">
              <DropdownItem text="Arts" />
            </Link>
            <Link to="/courses/science">
              <DropdownItem text="Science" />
            </Link>
            <Link to="/courses/technology">
              <DropdownItem text="Technology" />
            </Link>
            <Link to="/courses/specialization">
              <DropdownItem text="Specialization" />
            </Link>
          </SidebarItem>
          <SidebarItem icon={<RiArchiveDrawerFill size={20} />} text="Resources">
            <Link to="/resources">
              <DropdownItem text="All" />
            </Link>
            <Link to="/resources/questions">
              <DropdownItem text="Questions" />
            </Link>
            <Link to="/resources/solutions">
              <DropdownItem text="Solutions" />
            </Link>
            <Link to="/resources/tests">
              <DropdownItem text="Test" />
            </Link>
          </SidebarItem>
          <SidebarItem icon={<MdPeople size={20} />} text="Tutors">
            <Link to="/tutors/science">
              <DropdownItem text="Science" />
            </Link>
            <Link to="/tutors/arts">
              <DropdownItem text="Arts" />
            </Link>
            <Link to="/tutors/tech">
              <DropdownItem text="Tech" />
            </Link>
            <Link to="/tutors/specialization">
              <DropdownItem text="Specialization" />
            </Link>
          </SidebarItem>
          <Link to="/messages">
            <SidebarItem icon={<IoMdChatbubbles size={20} />} text="Messages" alert active />
          </Link>
          <Link to="/iqlink">
            <SidebarItem icon={<MdOutlineDatasetLinked size={20} />} text="IQ Link" alert />
          </Link>
          <hr className='my-4' />
          <Link to="/settings">
            <SidebarItem icon={<MdSettings size={20} />} text="Settings" alert />
          </Link>
          <Link to="/support">
            <SidebarItem icon={<MdHelp size={20} />} text="Support" />
          </Link>
        </Sidebar>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>
        <div className="w-full mx-auto md:pl-16 font-poppins p-4 px-6">
          <div className="flex flex-col md:flex-row gap-2 h-screen">
            {/* First Container: Teams Section and Chat Cards */}
            <div className="bg-white p-4 border rounded w-full md:w-1/3">
              <div className="mb-2">
                <TeamsSection />
              </div>
              <div className="overflow-y-auto ">
                <h1 className="rounded font-medium bg-[#f9f9f9] p-2 text-[#404660]">My Chats</h1>
                <div className="flex flex-col gap-1 mt-4 h-96 overflow-y-auto">
                  {chatData.map((chat, index) => (
                    <ChatCard
                      key={index}
                      profilePicture={chat.profilePicture}
                      onlineStatus={chat.onlineStatus}
                      name={chat.name}
                      messagePreview={chat.messagePreview}
                      time={chat.time}
                      newMessages={chat.newMessages}
                      onClick={() => setSelectedChat(chat)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Second Container: Messaging Section */}
            <div className='bg-white p-4 border rounded w-full md:w-2/3'>
            <MessagingSection selectedChat={selectedChat} />

            </div>
          
            {/* Third Container: Shared Photos and Files */}
            <div className="bg-white p-4 border rounded w-full md:w-2/4">
              <SharedPhotos />
              <SharedFiles />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
