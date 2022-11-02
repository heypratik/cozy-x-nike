import styled from "styled-components";
const {motion} = require('framer-motion')

export const CartWrapper = styled(motion.div) `
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0,0,0,0.4);
    z-index: 100;
    display: flex;
    justify-content: flex-end;
`

export const CartStyle = styled(motion.div) `
    width: 35%;
    background-color: #f1f1f1;
    padding: 2rem 3rem;
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;

    @media only screen and (max-width: 767px) {
    /* phones */
    width: 80%;
    padding: 1rem 1.5rem;
}
`

export const Card = styled(motion.div) `
display: flex;
align-items: center;
justify-content: space-between;
border-radius: 1rem;
overflow: hidden;
background: white;
padding: 1rem;
margin: 2rem 0rem;
img {
    width: 8rem;
 }

 @media only screen and (max-width: 767px) {
    /* phones */
    img {
    width: 5rem;
 }
 justify-content: flex-start;
}
`

export const CardInfo = styled(motion.div) `
    width: 50%;
    div {
        display: flex;
        flex-direction: space-between;
    }

    @media only screen and (max-width: 767px) {
    /* phones */
    h3 {
        font-size: 15px;
        padding-left: 20px;
        margin-bottom: 10px;
    }
}

`

export const Empty = styled(motion.div) `
    position: absolute;
    top: 0;
    transform: translate(-50%, 0%);
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    height: 100%;
\    h1 {
        font-size: 1.5rem;
        padding: 2rem;
    }
    svg {
        font-size: 5rem;
        color: var(--secondary);
    }
`

export const Checkout = styled(motion.div)`
    button {
        background: var(--primary);
        padding: 1rem 2rem;
        width: 100%;
        color: white;
        margin-top: 2rem;
        cursor: pointer;
    }
`

export const Cards = styled(motion.div) ``