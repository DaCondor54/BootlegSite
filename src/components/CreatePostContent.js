import styled from "styled-components";
import PostForm from './PostForm';
import Image from './Image';
import redditLogo from '../images/reddit-logo.png'

const CreatePostContent = ()=> {
    return(
    <CreatePostContentWrapper>
        <CreatePostSection>
            <Title>Create a post</Title>
            <SectionWrapper>
                <ActionButtonContainer>
                    <ActionButton>Post</ActionButton>
                    <ActionButton>Image & Video</ActionButton>
                    <ActionButton>Link</ActionButton>
                </ActionButtonContainer>
                <PostForm></PostForm>
            </SectionWrapper>            
        </CreatePostSection>
        <SideContentSection>
        <SideSectionWrapper>
            <SideSectionTitle>
            <Image src={redditLogo} alt="reddit"></Image>
            Rules
            </SideSectionTitle><Separator ></Separator>
            <SideSectionItem>1. Remember the human</SideSectionItem><Separator ></Separator>
            <SideSectionItem>2. Behave like you would in real life</SideSectionItem><Separator ></Separator>
            <SideSectionItem>3. Look for the original source of content</SideSectionItem><Separator ></Separator>
            <SideSectionItem>4. Search for duplicates before posting</SideSectionItem><Separator ></Separator>
            <SideSectionItem>5. Read the community’s rules</SideSectionItem><Separator ></Separator>
        </SideSectionWrapper>

        </SideContentSection>
    </CreatePostContentWrapper>);
};


const CreatePostContentWrapper = styled.div`
    padding: 20px;
    display:flex;
    justify-content: center;
    flex-direction:row;
    gap: 20px;
    
`;

const CreatePostSection = styled.div`
    display:flex;
    flex-direction:column;
`;

const SideContentSection = styled.div`
    display:flex;
    flex-direction:column;
    padding: 30px 0px;
`;

const SectionWrapper = styled.div`
    background-color: var(--primary-color);
    width: 700px;
    margin-bottom: 16px;
    border-radius: 4px;
    border: 1px solid #343536;
    padding: 0px 0px;
`;

const SideSectionWrapper = styled(SectionWrapper)`
    padding:5px;
    width: 300px
`;

const Separator = styled.hr`
    border-color:var(--primary-color)
`

const SideSectionTitle = styled.h2`
    display:flex;
    align-items:center;
    color: var(--font-color);
    padding:0;
    margin:0;
`;

const SideSectionItem = styled.h3`
    color: var(--font-color);
    font-size: 15px;
`;


const Title = styled.h1`
    font-size: 25px;
    font-weight: bold;
    color: var(--font-color);
`;

const ActionButtonContainer = styled.div`
    display:flex;
`;

const ActionButton = styled.div`
    text-align:center;
    flex: 1 1;
    font-size: 25px;
    font-weight: bold;
    color: var(--font-color);
    padding:20px;
    border-bottom: 1px solid #343536;
    border-right: 1px solid #343536;

    &:hover {
        background-color:var(--secondary-color);
    }
`;

export default CreatePostContent;
