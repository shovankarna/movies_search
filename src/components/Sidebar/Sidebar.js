import React from 'react';
import {
    SidebarContainer,
    CloseIcon, Icon,
    // SideBtnWrap,
    SidebarLink,
    // SidebarRoute,
    SidebarWrapper,
    SidebarMenu,
} from './SidebarElement';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer  isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            {/* <SidebarWrapper> */}
                <SidebarMenu>
                    <SidebarLink to='/movie' >Movies</SidebarLink>
                    <SidebarLink to='/tvshow' >Tv Show</SidebarLink>
                    <SidebarLink to='/anime' >Anime</SidebarLink>
                    <SidebarLink to='/about' >About </SidebarLink>
                </SidebarMenu>
            {/* </SidebarWrapper> */}
        </SidebarContainer>
    )
}

export default Sidebar
