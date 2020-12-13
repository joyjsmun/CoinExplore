import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
display: flex;
flex-direction:column;
`

const List = styled.div`

`;
const Item = styled.div`
margin-bottom:20px;
`;
const Title = styled.div`
font-size: 18px;
font-weight: 400;
margin-bottom:10px;
`

const Desc = styled.div`
font-size: 13px;
font-weight: 300;
margin-bottom:10px;
`
const Link = styled.div`
font-size: 13px;
font-weight: 300;
margin-bottom:10px;
`

// {showPricesList && showPricesList.length > 0 && <div>{showPricesList.map(price => price.id)}</div>}

const ExchangesPresenter = ({ showExchanges, error, loading }) =>loading ? (<Container>loading....</Container>) : (
    <Container>
          {showExchanges && showExchanges.length > 0 && <List>{showExchanges.map(exchange => {
            console.log(exchange);
          return <Item id={exchange.id}>
            <Title>{exchange.name}</Title>
            <Desc>{exchange.description}</Desc>
            {/* <div>
            {(exchange.links.website) === null ? (
                <div>no website</div>
              ) :(
                <div>{exchange.links.website}</div>
              )}
              </div> */}
            </Item>
          }
          )}</List>}
    </Container>
  );

ExchangesPresenter.prototype = {
  showExchanges: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default ExchangesPresenter;
