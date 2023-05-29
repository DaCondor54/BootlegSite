import styled from "styled-components";



const SortingSection = () => {
    return (<SortingSectionWrapper>
        <SortingButton>Best</SortingButton>
        <SortingButton>Hot</SortingButton>
        <SortingButton>New</SortingButton>
        <SortingButton>Top</SortingButton>
    </SortingSectionWrapper>);
};

const SortingSectionWrapper = styled.div`
    display: flex;
    align-items: center;
`;


const SortingButton = styled.button`
    padding:10px;
    border-radius : 20px;
    color: var(--font-color);
    font-size: 25px;
    font-weight: bold;
    background-color: var(--primary-color);
    border: none;

    &:hover {
        background-color: var(--secondary-color);
    }
`;

export default SortingSection;