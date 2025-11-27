import { IoIosMoon } from "react-icons/io";
import { IoSunnySharp } from "react-icons/io5";
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

function Header({setTheme,theme}) {
    console.log(theme);
    
    const changetheme = ()=>{
      if(theme){
      setTheme(false)
    }
    else{
setTheme(true)
    }
  }
  return (
   <>


 <Navbar fluid  className={theme?"bg-[#0f1720] text-white fixed w-full":" w-full fixed"} >
      <NavbarBrand  href="#">
       
        <span className="self-center whitespace-nowrap text-2xl font-bold">John Babu</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#home" id="home" className={theme?"text-white self-center whitespace-nowrap text-xl font-bold":"self-center whitespace-nowrap text-xl font-bold"}>
          Home
        </NavbarLink>
        <NavbarLink  href="#about" id="about" className={theme?"text-white self-center whitespace-nowrap text-xl font-bold":"self-center whitespace-nowrap text-xl font-bold"}>
          About
        </NavbarLink>
        <NavbarLink href="#"className={theme?"text-white self-center whitespace-nowrap text-xl font-bold":"self-center whitespace-nowrap text-xl font-bold"}>Services</NavbarLink>
        <NavbarLink href="#"className={theme?"text-white self-center whitespace-nowrap text-xl font-bold":"self-center whitespace-nowrap text-xl font-bold"}>Projects</NavbarLink>
        <NavbarLink href="#"className={theme?"text-white self-center whitespace-nowrap text-xl font-bold":"self-center whitespace-nowrap text-xl font-bold"}>Contact</NavbarLink>
        <Button className="text-center"  onClick={changetheme}>{theme?<IoSunnySharp/>: <IoIosMoon/>}</Button>
      </NavbarCollapse>
      
    </Navbar>

   </>
  )
}

export default Header