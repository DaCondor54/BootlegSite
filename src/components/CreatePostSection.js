import styled from "styled-components";
import redditLogo from '../images/reddit-logo.png';
import linkSVG from '../images/link-svgrepo-com.svg'
import pictureSVG from '../images/picture-svgrepo-com.svg'
import Image from "./Image";
import { useNavigate } from "react-router-dom";


const CreatePostSection = () => {
    const navigate = useNavigate();
    return (
        <CreatePostSectionWrapper>
            <Image src={redditLogo} alt="reddit"></Image>
            <CreatePostInputSection onClick={()=>navigate("/submit")}>
                <CreatePostInput>
                    Something
                </CreatePostInput>                
            </CreatePostInputSection>
            
            <CreatePostButton>
            <ButtonImage src={linkSVG} alt="link"></ButtonImage>

            </CreatePostButton>
            <CreatePostButton>
            <ButtonImage src={pictureSVG} alt="pic"></ButtonImage>

            </CreatePostButton>
        </CreatePostSectionWrapper>
    );
};


const CreatePostSectionWrapper = styled.div`
    display: flex;
    align-items:center;
`;

const CreatePostInputSection = styled.div`
    flex: 1 1;
    padding:5px;
`;

const CreatePostInput = styled.div`
    background-color: var(--secondary-color);
    border-radius:20px;    
    padding: 15px;
`;

const CreatePostButton = styled.button`
    margin:0;
    padding:0;
    background-color:inherit;
    border:none;
`;

const ButtonImage = styled(Image)`
    height:40px;
    filter: invert(53%) sepia(5%) saturate(115%) hue-rotate(156deg) brightness(96%) contrast(89%);
`;


export default CreatePostSection;


