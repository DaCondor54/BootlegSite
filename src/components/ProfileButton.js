import styled from "styled-components";
import redditLogo from '../images/reddit-logo.png'
import CaretDown from '../images/caret-down.svg';
import Image from "./Image";

const ProfileButton = () => {
    return (
        <ProfileButtonWrapper>
            <ProfileContainer>
                <ProfileInfoContainer>
                    <Image src={redditLogo} alt="profile"></Image>
                    <ProfileText>
                        <ProfileUsername>Username</ProfileUsername>
                        <ProfileKarma>Karma</ProfileKarma>
                    </ProfileText>
                </ProfileInfoContainer>
                <DropDownButton>
                    <CaretDownImage src={CaretDown} alt={"caret down"}></CaretDownImage>
                </DropDownButton>
            </ProfileContainer>
        </ProfileButtonWrapper>
    );
}

const ProfileButtonWrapper = styled.div`
    display:flex;
    color : var(--font-color);
    justify-content: center;
    align-items: center;
    
`;

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    gap : 10px;
`;

const DropDownButton = styled.button`

`;

const ProfileInfoContainer = styled.div`
    display: flex;
    align-items: center;
    flex: 1 1 ;
`;

const CaretDownImage = styled.img`
    height: 20px;
    aspect-ratio : 1 /1 ;
`;

const ProfileText = styled.span`
    vertical-align: baseline;
`;

const ProfileUsername = styled.div`

`;

const ProfileKarma = styled.div`

`;

export default ProfileButton;