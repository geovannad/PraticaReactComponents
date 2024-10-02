import styled from 'styled-components';

export const Div = styled.div`
    gap: 10px;
    margin: 20px;
`
export const Title = styled.h1`
    font-size: 18px;
    font-weight: 400;
`
export const Description = styled.h1`
    color: ${(prop) => prop.color};
    font-size: 18px;
    font-weight: 400;
`
export const BuyNow = styled.button`
    padding: 10px 15px;
    border-radius: 5px;
    border: 1px solid #3A8DA8 ;
    margin: 10px;
    background-color: transparent;
`

export const Image = styled.img`
    width: 205px;
    height: 333px;
`