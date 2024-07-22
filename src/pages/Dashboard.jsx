import React from 'react';
import Sidebar, { SidebarItem, DropdownItem } from '../components/Dashboard/Sidebar';
import { MdDashboardCustomize, MdPeople, MdAccessTime, MdReport, MdSettings, MdBook, MdHelp, MdMessage, MdExtension } from 'react-icons/md';

function Dashboard() {
  return (
    <div className="flex">
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

      <div className="flex-1">
        <div className="p-6">
          {/* Main content here */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
