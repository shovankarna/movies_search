import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  // NavBtn,
  // NavBtnLink
} from './NavbarElement';

class Navbar extends Component {

  render() {
    return (
      <>
        <Nav>
          {/* <NavbarContainer> */}
          <NavLink to='/'>
            CineDB
          </NavLink>
          <Bars onClick={this.props.toggle} />
          <NavMenu>
            <NavLink to='/movie' >
              Movies
            </NavLink>
            <NavLink to='/tvshow' >
              Tv Show
            </NavLink>
            <NavLink to='/anime' >
              Anime
            </NavLink>
            <NavLink to='/about' >
              About
            </NavLink>
          </NavMenu>
          {/* <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn> */}
          {/* </NavbarContainer> */}
        </Nav>
      </>
    );
    // return (
    //   <div className="navbar">
    //     <Link className='menu-item1' to='/'>MovieMafia</Link>
    //     <Bars />
    //     <Link className='menu-item2' to='/movie'>Movies</Link>
    //     <Link className='menu-item2' to='/tvshow'>Tv Show</Link>
    //     <Link className='menu-item2' to='/anime'>Anime</Link>
    //     <Link className='menu-item2' to='/about'>About</Link>
    //   </div>
    // );
  }
}

// function Navbar() {
//   return (
//     <div className="navbar">
//       <Link className='menu-item1' to='/'>MovieMafia</Link>
//       <Link className='menu-item2' to='/movie'>Movies</Link>
//       <Link className='menu-item2' to='/tvshow'>Tv Show</Link>
//       <Link className='menu-item2' to='/anime'>Anime</Link>
//       <Link className='menu-item2' to='/about'>About</Link>
//     </div>
//   );
// }

export default Navbar;