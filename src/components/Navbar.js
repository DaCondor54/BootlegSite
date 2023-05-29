import styled from 'styled-components';
import SearchBar from './Searchbar';
import ProfileButton from './ProfileButton';
import RedditLogo from '../images/reddit-logo.png'
import Image from './Image'

import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return(
        <NavbarWrapper>
            <HeaderContainers>
                <Image onClick={()=>navigate("/")} src={RedditLogo} alt="reddit"></Image>
                <Title  onClick={()=>navigate("/")}>BootLeg</Title>
            </HeaderContainers>
            <HeaderContainers>
                <SearchBar></SearchBar>
            </HeaderContainers>
            <HeaderContainers>
                <ProfileButton>

                </ProfileButton>
            </HeaderContainers>
        </NavbarWrapper>
    );
};

const NavbarWrapper = styled.div`
    display:flex;
    justify-content: space-between;
    background-color : var(--primary-color);
    align-items:center;
    position: sticky;
`;

const HeaderContainers = styled.div`
    display: flex;
`;

const Title = styled.h1`
    font-size: 25px;
    font-weight: bold;
    color: var(--font-color);
`;

export default Navbar;