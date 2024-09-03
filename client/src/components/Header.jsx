import { Button, Navbar, TextInput } from 'flowbite-react';
import React from 'react';
import { Link , useLocation} from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'


export default function Header() {
    const path = useLocation().pathname;
  return (
    <Navbar className='border-b-4'>
      <Link to='/' className='self-center whitespace-nowrap  font-semibold text-sm  sm:text-xl dark:text-white'>
        <span className='px-1 py-1 text-white bg-gradient-to-r from-purple-900 via-amber-800 to-red-500 rounded-md  '>Nuredin's</span> Blog
      </Link>
      <form action="">
        <TextInput 
        type='text'
        placeholder='search...'
        rightIcon={AiOutlineSearch}
        className='hidden lg:inline'

        
        />
      </form>
      <Button className='w-12 h-10  lg:hidden' color='gray' pill>
        <AiOutlineSearch/>
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 sm:inline  ' color='gray' pill>
            <FaMoon/>

        </Button>

        <Link to='/signin'>
        <Button className='h-10' gradientDuoTone="purpleToBlue">
            Sign In

        </Button>
        



        
        
        </Link>
        <Navbar.Toggle/>

      </div>
      <Navbar.Collapse >
            <Navbar.Link active = {path === '/'} as={'div'}>
                <Link to='/'>Home</Link>
            </Navbar.Link>
            <Navbar.Link active = {path === '/about'} as={'div'}>
                <Link to='/about'>About</Link>
            </Navbar.Link>
            <Navbar.Link active = {path === '/projects'} as={'div'}>
                <Link to='/projects'>Projects</Link>
            </Navbar.Link>
         
        </Navbar.Collapse>
    </Navbar>
  );
}
