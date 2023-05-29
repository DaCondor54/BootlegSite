import styled from "styled-components";
import CreatePostSection from "./CreatePostSection";
import SortingSection from "./SortingSection";
import Post from "./Post";
import PostData from "../data/PostData";
import spy from '../images/spyfamily.webp';
import { useEffect, useRef } from "react";
import { collection, getDocs, updateDoc , doc } from "firebase/firestore"; 
import {firestore as db} from '../firebase-config'
import { useState } from "react";


let posts = [
    //new PostData('Spy X family best series', 'the best series ever', spy, 'condor', 'text')
];

const MainContent=  () => {
    const [numberPost, setNumberPost] = useState(posts.length)
    const firstRender = useRef(true);
    const [upvoteState, setUpvotes] = useState(0);

    useEffect(()=>{
        console.log('use effects called');
        if(firstRender.current){
            firstRender.current = false;
            return;
        }


         const fetchData = async ()=>{
            posts = [];
            const querySnapshot = await getDocs(collection(db, 'posts'));
            querySnapshot.forEach((doc)=>{
                console.log(doc.id, doc.data());   
                let data = doc.data();
                posts.push(
                    new PostData(data.title, data.description, data.image, data.user, data.type, data.upVotes, data.date, data.comments, doc.id)
                );          
            });
            setNumberPost(posts.length );
            console.log(posts.length )
        };
        fetchData();   
    }, []);
        
    const ChangeUpVote = async (id, upvotes) => {
        const docRef = doc(db, 'posts', id);

        const response = await updateDoc (docRef, {
            upVotes: upvotes
        });

        posts.forEach((val,index)=>{
            if(val.id == id){
                val.upVotes = upvotes;
            }
        });        
        console.log(response);
        setUpvotes(upvoteState + 1);
    };
    return (<NavBarPadding>
        <MainContentPadding>
            <MainContentWrapper>
                <SectionWrapper>
                    <CreatePostSection></CreatePostSection>
                </SectionWrapper>
                <SectionWrapper>
                    <SortingSection></SortingSection>
                </SectionWrapper>
                    {
                        (()=>{
                            let container = [];
                            posts.forEach((val, index)=>{
                                container.push(
                            <SectionWrapper>
                                    <Post ChangeUpVote={ChangeUpVote} key={index} postData={val}></Post>
                                </SectionWrapper>
                                );
                            });
                            return container;
                        })()
                    }                    
            </MainContentWrapper>
            <SideContentWrapper>
                <SideSectionWrapper>
                    Some Welcome
                </SideSectionWrapper>
                <SideSectionWrapper>
                    More info
                </SideSectionWrapper>
            </SideContentWrapper>
        </MainContentPadding>
    </NavBarPadding>);
}

const NavBarPadding = styled.div`
    ${'' /* padding-top: 70px; */}
    color: var(--font-color);
`;

const MainContentPadding = styled.div`
    padding: 20px;
    display:flex;
    justify-content: center;
    flex-direction:row;
    gap: 20px;
    
`;

const MainContentWrapper = styled.div`

`;

const SideContentWrapper = styled.div`

`;

const SectionWrapper = styled.div`
    background-color: var(--primary-color);
    width: 700px;
    margin-bottom: 16px;
    border-radius: 4px;
    border: 1px solid #343536;
    padding: 2px 10px;
`;

const SideSectionWrapper = styled(SectionWrapper)`
    width: 300px
`;

export  default MainContent;