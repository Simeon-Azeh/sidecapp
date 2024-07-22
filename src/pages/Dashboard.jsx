import React from 'react';
import Sidebar, { SidebarItem, DropdownItem } from '../components/Sidebar';
import { MdDashboardCustomize, MdPeople, MdAccessTime, MdReport, MdSettings, MdBook, MdHelp, MdMessage, MdExtension } from 'react-icons/md';
import Navbar from '../components/Navbar';
import { FaBook, FaChalkboardTeacher, FaCertificate } from 'react-icons/fa';
import Card from '../components/Dashboard/Card';
import ProfileContainer from '../components/Dashboard/ProfileContainer';
import ResponsiveTable from '../components/Dashboard/ResponsiveTable';

function Dashboard() {
  return (
    <div className="flex h-screen">
        <div className='z-40'>
        <Sidebar>
        <SidebarItem icon={<MdExtension size={20} />} text="Discover" />
        <SidebarItem icon={<MdDashboardCustomize size={20} />} text="Dashboard" active alert/>
        <SidebarItem icon={<MdBook size={20} />} text="Courses">
          <DropdownItem text="Arts" />
          <DropdownItem text="Science" />
          <DropdownItem text="Tech" />
          <DropdownItem text="Specialization" />
        </SidebarItem>
        <SidebarItem icon={<MdHelp size={20} />} text="Resources">
          <DropdownItem text="Questions" />
          <DropdownItem text="Solutions" />
          <DropdownItem text="Test" />
        </SidebarItem>
        <SidebarItem icon={<MdPeople size={20} />} text="Tutors">
          <DropdownItem text="Science" />
          <DropdownItem text="Arts" />
          <DropdownItem text="Tech" />
          <DropdownItem text="Specialization" />
        </SidebarItem>
        <SidebarItem icon={<MdMessage size={20} />} text="Messages" />
        <SidebarItem icon={<MdExtension size={20} />} text="IQ Link" />
        <hr className='my-4'/>
        <SidebarItem icon={<MdSettings size={20} />} text="Settings" />
        <SidebarItem icon={<MdHelp size={20} />} text="Support" />
      </Sidebar>
        </div>
    

      <div className="flex-1 overflow-y-auto">
        <div className="sticky top-0 z-10">
        <Navbar />
        </div>
        <div className='flex flex-col px-4 md:flex-row p-6'>
            <div className='w-full md:w-[70%] px-8'>
            <div className="flex flex-col md:flex-row gap-4">
      <Card
        icon={FaBook}
        bgColor="border-[#9835ff] border bg-white"
        title="24"
        description="Enrolled Courses"
        detailsLink="/courses"
        IbgColor="bg-[#9835ff] text-white"
        BtnBgcolor="text-[#9835ff] "
      />
      <Card
        icon={FaChalkboardTeacher}
        bgColor="bg-white border"
        title="2"
        description="Saved Courses"
        detailsLink="/lessons"
        IbgColor="bg-emerald-400 text-white"
        BtnBgcolor="text-gray-400"
      />
      <Card
        icon={FaCertificate}
        bgColor="bg-white border"
        title="4"
        description="Certificates"
        detailsLink="/certificates"
        IbgColor="bg-fuchsia-500 text-white"
        BtnBgcolor="text-gray-400"
      />
    </div>
    <div>
        <ResponsiveTable />
    </div>
            </div>
            <div className='w-full px-7 mt-5 md:mt-0 md:px-0 md:w-[30%]'>
            <div>
                <ProfileContainer />
            </div>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
