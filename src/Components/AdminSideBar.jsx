import React from 'react'
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { Link } from 'react-router-dom';
function AdminSideBar() {
  return (
    <>
     <Sidebar aria-label="Default sidebar example" className='h-200'>
      <SidebarItems>
        <SidebarItemGroup >
          {/* <SidebarItem className='mb-6 mt-4' href="#" icon={HiChartPie}>
            Dashboard
          </SidebarItem> */}
         <Link to={'/adminhomepage'}>
             <SidebarItem className='mb-6' href="#" icon={HiUser}>
            Profile
            </SidebarItem>
         </Link >
        <Link to={'/adminprojectadd'}>
              <SidebarItem className='mb-6' href="#" icon={HiViewBoards}  >
                Projects
              </SidebarItem>
        </Link>
         <Link to={'/inbox'}>
              <SidebarItem className='mb-6' href="#" icon={HiInbox} >
                Inbox
              </SidebarItem>
         </Link>
         
      
      <Link to={'/'}>
              <SidebarItem className='mb-6' href="#" icon={HiArrowSmRight}>
                  Log Out
              </SidebarItem>
      </Link>
        
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
    </>
  )
}

export default AdminSideBar