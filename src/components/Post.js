import styled from "styled-components";
import arrow from '../images/up-arrowsvg.svg';
import Image from "./Image";
import redditLogo from '../images/reddit-logo.png'

const Post = ({postData, ChangeUpVote}) => {
    

    return (
        <PostWrapper>
            <PostVotesContainer>
            <ArrowUpImage onClick={()=> ChangeUpVote(postData.id, postData.upVotes + 1)} style={{transform:"rotate(180deg)"}} src={arrow} alt={"down arrow"}></ArrowUpImage>
            <UpVotes>{postData.upVotes}</UpVotes>
            <ArrowUpImage onClick={()=> ChangeUpVote(postData.id, postData.upVotes - 1)} src={arrow} alt={"up arrow"}></ArrowUpImage>
            </PostVotesContainer>
            <PostPadding>
                <PostHeader>
                    <ServerImage src={redditLogo} alt="server"></ServerImage>
                    <ServerTitle>r/SomeServer</ServerTitle>
                    <PostedByInfo>Posted by u/{postData.user} 8 hours ago</PostedByInfo>
                </PostHeader>
                <PostTitle>{postData.title}</PostTitle>
                {
                    postData.type == 'image'
                    ?<PostImage src={postData.image} alt={"spies"}></PostImage>
                    :<PostDescription>{postData.description}</PostDescription>
                }
                <PostActions>
                    <ActionButton>{postData.comments.length} comments</ActionButton>
                    <ActionButton>Share</ActionButton>
                </PostActions>
            </PostPadding>
        </PostWrapper>
    );
};


const PostWrapper = styled.div`    
    ${'' /* height:300px; */}
`;

const PostVotesContainer = styled.div`
    position: absolute;
    width:40px;
    font-color: var(--font-color);
    display:flex;
    flex-direction: column;
`;

const PostPadding = styled.div`
    padding:10px;
    padding-left: 50px;
    display:flex;
    flex-direction:column;    
    gap: 5px;
`;

const PostHeader = styled.div`
    display:flex;
    align-items:center;
    gap:5px;
`;

const PostTitle = styled.div`
    font-weight:bold;
    font-size: 25px;
    color: var(--font-color);
`;

const PostImage = styled(Image)`
    height:auto;
    padding: 5px 30px;
    aspect-ratio : auto;
`;

const PostDescription = styled.div`
    padding: 5px 0px;
    height: auto;
    color: var(--font-color);
`;

const ServerImage = styled(Image)`
    height:25px;
    padding:0px;    
`;

const ServerTitle = styled.div`
    font-weight:bold;
    font-size:15px;
    color:var(--font-color);
`;

const PostedByInfo = styled.div`
    font-size:15px;
    color:var(--secondary-font-color);
`;

const PostActions = styled.div`

`;

const ArrowUpImage = styled(Image)`
    height:40px;
    &:hover{
        filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(110deg) brightness(98%) contrast(108%);
    }    
`;

const UpVotes = styled.div`
    font-weight:bold;
    font-size: 20px;
    color: var(--font-color);
    text-align:center;

`;

const ActionButton = styled.button`
    padding:10px;
    border-radius : 20px;
    color: var(--font-color);
    font-size: 15px;
    font-weight: bold;
    background-color: var(--primary-color);
    border: none;

    &:hover {
        background-color: var(--secondary-color);
    }
`;

export default Post;