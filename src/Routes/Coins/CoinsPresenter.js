import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div``;
const List = styled.div`
display:grid
`;
const Item = styled.div`
margin-bottom:20px;
`;
const Title = styled.div`
font-size: 18px;
font-weight: 400;
margin-bottom:10px;
`

// {showPricesList && showPricesList.length > 0 && <div>{showPricesList.map(price => price.id)}</div>}


const CoinsPresenter = ({showCoins,error,loading}) => loading? (<Container>loading....</Container>):

<Container>
    <List>{showCoins && showCoins.length > 0 && showCoins.map(coin => {
         
        return <Item id={coin.id}>
            <Title>#{coin.rank} {coin.name} / {coin.symbol}</Title>
        </Item>
    })}</List>
</Container> 

CoinsPresenter.prototype={
    showCoins:PropTypes.array,
    error:PropTypes.string,
    loading:PropTypes.bool.isRequired
}

export default CoinsPresenter;