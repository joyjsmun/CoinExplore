import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
display:grid`;
const List = styled.div``;
const Item = styled.div`
margin-bottom:20px;
`;
const Title = styled.div`
font-size: 18px;
font-weight: 400;
margin-bottom:10px;
`


const PricesPresenter = ({showPricesList,error,loading}) => loading? (<Container>loading....</Container>):

<Container>
{showPricesList && showPricesList.length > 0 && <List>{showPricesList.map(price =>{
    return <Item id={price.id}>
        <Title>{price.name} / {price.symbol} : ${price.quotes.USD.price} </Title></Item>
})}</List>}
</Container> 

PricesPresenter.prototype={
    showPricesList:PropTypes.array,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired
}

export default PricesPresenter;