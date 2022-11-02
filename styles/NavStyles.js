import styled from "styled-components";

export const NavStyles =  styled.div `
    min-height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    a {
        font-size: 1.2rem;
    }

    @media only screen and (max-width: 767px) {
    /* phones */
    a {
        font-size: 0.8rem;
    }
}
` 

export const NavItems = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    div {
        margin-left: 3rem;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h3 {
        font-size: 0.8rem;
        padding: 0.25rem;
    }
    svg {
        font-size: 1.2rem;
    }
    span {
        background: #ff2626;
        color: white;
        width: 1.3rem;
        height: 1.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        font-size: 0.75rem;
        position: absolute;
        right: -10%;
        top: -30%;
        pointer-events: none;
    }
 
`