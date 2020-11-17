import React, { useEffect } from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getStoreItemArray, calculateTotal } from "../reducers";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);
  const total = useSelector(calculateTotal);

  return (
    <Wrapper>
      <HeaderText>
        <YourCart>Your Cart</YourCart>
        {1 === 2 && <NumItems>Item</NumItems>}
        {1 === 3 && <NumItems>Item</NumItems>}
      </HeaderText>
      {storeItems &&
        storeItems.map((item) => {
          return (
            <CartItem
              id={item.id}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
            />
          );
        })}

      <TotalAndPurchase>
        <PriceInfo>
          <Total>Total: </Total>
          {(!total || total === 0) && <Price>$0</Price>}
          {total > 0 && <Price>${total / 100}</Price>}
        </PriceInfo>
        <Purchase>Purchase</Purchase>
      </TotalAndPurchase>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: purple;
  height: 100%;
  width: 360px;
`;

const HeaderText = styled.div`
  padding: 32px 0 32px 24px;
  color: #eaeaee;
`;

const YourCart = styled.h1`
  margin: 0;
`;

const NumItems = styled.p``;

const TotalAndPurchase = styled.div`
  padding: 0 24px;
  color: #eaeaee;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PriceInfo = styled.div``;

const Total = styled.span`
  margin-right: 4px;
`;

const Price = styled.span`
  font-weight: bold;
`;

const Purchase = styled.button`
  background-color: #ff406e;
  border-radius: 12px;
  border: none;
  color: #eaeaee;
  padding: 10px 24px;
`;

export default Cart;
