import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
            <img src={require('../../assets/movielogo.png')} alt="logo" height={44} width={36}/>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/home" activeStyle> 
                Home
            </NavLink>
            <NavLink to="/series" activeStyle> 
                Series
            </NavLink>
            <NavLink to="/movies" activeStyle> 
                Movies
            </NavLink>
            <NavLink to="/newandpopular" activeStyle> 
                New and Popular
            </NavLink>
            <NavLink to="/mylist" activeStyle> 
                My List
            </NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn> 
      </Nav>  
    </>
  );
};

export default Navbar