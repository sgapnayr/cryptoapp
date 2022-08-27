import styled from "styled-components";

/* APP HEADER */
export const AppHeader = styled.div`
    display: flex;
    padding: 1vh 0 0 0;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    text-shadow: 1px 1px 12px rgba(0, 0, 0, 0.3);
`

/* COIN CHARTS */
export const CoinCharts = styled.div`
    box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem 0 0 0;
    border-radius: 5px;
    width: 90%;
    background: white;
    transition: .2s all ease-in-out;
    &:hover {
        transform: scale(1.01);
        box-shadow: 1px 1px 13px rgba(0, 0, 0, 0.3);
    }
`

export const Charts = styled.div`
    height: 25vh;
    width: 35vw;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

/* COIN TABLE */
export const CoinTable = styled.div`
    border-radius: 5px;
    padding: 0 0 1rem 0;
    margin: 2rem .5rem -1rem .5rem;
    box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.3);
    width: 85%;
    height: 50vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: white;
    transition: .2s all ease-in-out;
    &:hover {
        transform: scale(1.01);
        box-shadow: 1px 1px 13px rgba(0, 0, 0, 0.3);
    }
`

export const ListHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: .5rem 0;
`

export const CoinHeader = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    width: 90%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    font-weight: bold;
    margin: .5vh 0 .5vh 0;
`

export const CoinList = styled.div`
    width: 90%;
    overflow: scroll;
`

export const CoinContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    transition: .2s all ease-in-out;
    cursor: pointer;
    border-bottom: 1px solid rgba(0,0,0,.2);
    box-shadow: 1px 1px 10px rgba(0,0,0,.1);

    &:hover{
        background: rgb(190, 190, 190);
        color: white;
        text-shadow: 1px 1px 10px rgba(0,0,0,.4);
        border-radius: 5px;
        box-shadow: 1px 1px 12px rgba(0,0,0,.4);
        border-bottom: 1px solid rgba(0,0,0,.1);
    }
`

export const CoinDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledInput = styled.input`
    width: 100%;
    padding: 1.5vh 5vw;
    margin: 0vh 0 1vw;
    box-shadow: 1px 1px 10px rgba(0,0,0,.4);
    border: 1px solid rgba(0,0,0,.2);
    text-align: center;
    border-radius: 5px;
    outline: none;
    transition: .2s all ease-in-out;

    &:hover {
        background: rgba(190, 190, 190, .2);
        box-shadow: 1px 1px 12px rgba(0,0,0,.5);
        border: 1px solid rgba(0,0,0,.1);
        transform: scale(1.05)
    }
`

export const StyledForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
`