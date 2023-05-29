import styled from "styled-components";


const SearchBar = () => {
    return (
        <SearchBarWrapper>
            <SearchArea>
                <SearchForm>
                    <LabelWrapper htmlFor="search">🔎</LabelWrapper>
                    <SearchBarInput
                        placeholder="Search Bootleg"
                        name="search"
                    ></SearchBarInput>
                </SearchForm>
            </SearchArea>
        </SearchBarWrapper>
    );
};

const SearchBarWrapper = styled.div`
    
`;

const SearchArea = styled.div`
    border-radius: 20px;
    background-color: var(--secondary-color);
    padding: 10px;
    display: flex;
    align-items: center;
    caret-color: transparent;

`;

const SearchBarInput = styled.input`    
    background-color: inherit;
    padding:0;
    font-size: 25px;
    border:none;

    &:focus {
        outline: none;
        caret-color: var(--font-color);
    }
`;

const SearchForm = styled.form`

`;

const LabelWrapper = styled.label`
    padding: 10px;
    font-size: 25px;
    caret-color: transparent;
`

export default SearchBar;