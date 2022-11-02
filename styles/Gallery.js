import styled from "styled-components";

export const Gallery = styled.div `
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    grid-gap: 2rem; */
    display: flex;
    margin:10px 0px;

    @media only screen and (max-width: 767px) {
    /* phones */
    display: flex;
    flex-direction: column;
    margin:10px 0px;
}
`