import styled from "styled-components";
import {firestore as db} from '../firebase-config'
import {collection, addDoc} from 'firebase/firestore';

import { useState } from "react";


const PostForm = () => {
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');


    const PostSubmit = async (event)=>{
        event.preventDefault();
        try{
            const docRef = await addDoc(collection(db, "posts"), {
                title: title,
                description: description,
                image: '',
                user: 'condor',
                type: 'text',
                upVotes: 0,
                date: Date.now(),
                comments: []
            });
            console.log('Document written with ID', docRef.id);
        }catch(e){
            console.error('Error adding document', e);
        }
    }

    const OnTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const OnDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    return(
    <PostFormWrapper>
        <PostFormContent onSubmit={PostSubmit}>
            <PostTitle value = {title} onChange={OnTitleChange} placeholder="Title"></PostTitle>
            <PostContent value={description} onChange={OnDescriptionChange} placeholder="content (optional)" rows={10} ></PostContent>
            <ActionButtons>
                <SubmitButon>Post</SubmitButon>
            </ActionButtons>
        </PostFormContent>
    </PostFormWrapper>
    );
};

const PostFormWrapper = styled.div`
    padding: 5px;
`;

const PostFormContent = styled.form`
    display:flex;
    flex-direction:column;
    gap: 10px;
`;

const PostTitle = styled.input`
    padding:10px;
    background-color:inherit;
    border: 1px solid #343536;
    font-size: 20px;
    color var(--secondary-font-color);
`;

const PostContent = styled.textarea`
    background-color:inherit;
    border: 1px solid #343536;
    font-size: 15px;
    color var(--secondary-font-color);
    resize: vertical;
`;

const ActionButtons = styled.div`
    display:flex;
    justify-content:right;
`;

const SubmitButon = styled.button`
    border-radius: 20px;
    background-color: var(--font-color);
    font-size: 15px;
    padding:5px 10px;
`

export default PostForm;