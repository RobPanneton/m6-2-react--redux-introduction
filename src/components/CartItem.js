import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { removeItem, setQuantity } from "../actions";

const CartItem = ({ id, title, price, quantity, calcTotal }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <TopSection>
        <ItemName>{title}</ItemName>
        <CancelButton onClick={() => dispatch(removeItem(id))}>X</CancelButton>
      </TopSection>
      <BottomSection>
        <Quantity>Quantity:</Quantity>
        <QuantitySelect
          placeholder={quantity}
          onChange={(e) => {
            dispatch(setQuantity(id, e.target.value));
          }}
        ></QuantitySelect>
      </BottomSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 3px dashed #eaeaee;
  margin: 32px 16px;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 12px;
  color: #eaeaee;
`;

const ItemName = styled.p`
  font-size: 24px;
`;

const CancelButton = styled.button`
  border: none;
  background-color: transparent;
  color: #eaeaee;
  font-size: 24px;

  &:hover {
    cursor: pointer;
  }
`;

const BottomSection = styled.div`
  background-color: #663399;
  padding: 16px 12px;
`;

const Quantity = styled.span`
  font-size: 16px;
  color: #eaeaee;
  padding-right: 2px;
`;

const QuantitySelect = styled.input`
  width: 18px;
  height: 24px;
`;

export default CartItem;
