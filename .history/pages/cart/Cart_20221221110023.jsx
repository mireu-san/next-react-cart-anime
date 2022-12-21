import React, { useContext } from "react";
import { ItemsList } from "../../components/ItemsList";
import { DataContext } from "../../components/context/DataContext";
import { CartItem } from "./CartItem";

import styled from "styled-components"

// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";

export const Cart = ({ itemsList }) => {
  const { cartItems, checkoutTotalSum } = useContext(DataContext);
  const totalAmount = checkoutTotalSum();

  const router = useRouter();

  return (
    <div className="cart">
      <div>
        <h1>Your Items</h1>
      </div>
      <div className="cartItems">
        {ItemsList.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          } else {
            return null;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p><b><h2> Estimated One-time Expenses </h2></b></p>
          <h1>${totalAmount}</h1>
          <button className="exploreButton" onClick={() => router.push("/")}> Explore Other Items <b>(다른 아이템 둘러보기)</b> </button>
          <h3>To remove, decrement the quantity of your love to ZERO by pressing dislike button.</h3>
          <h3>목록에서 아이템을 없애려면, Dislike 버튼을 눌러 호감도를 0으로 만드세요.</h3>
        </div>
      ) : (
        <h2> 계속 하려면 '좋아요' 버튼을 눌러서 추가 하세요. </h2>
      )}
    </div>
  );
};

const CartStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


@media only screen and (max-width: 600px) {
    margin-top: 0px;
  }
`;

const CartItemStyle = styled.div`
  /* width: 700px; */
  width: 100%;
  margin-right: 10px;
  font-size: 30px;

  height: 300px;
  display: flex;
  align-items: center;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  margin: 30px;

p {
  margin: 0;
}

img {
  width: 300px;
  margin: 20px;
}

.cartDescription {
  width: 100%;
  margin-right: 10px;
  font-size: 30px;
}
`



@media only screen and (max-width: 600px) {
  .cartItem {
    width: 300px;
    height: 450px;

    display: flex;
    flex-direction: column;
  }

  .cartItem img {
      width: 270px;
      margin-bottom: 10px;
      margin-left: 15px;
      border-radius: 10px;
  }

  .cartDescription {
      width: 300px;
      height: 200px;
  }
}

.countUpdator input {
  width: 40px;
  text-align: center;
  font-weight: bolder;
}

.checkout button {
  width: 150px;
  height: 50px;
  background-color: rgb(19, 19, 19);
  color: white;
  border: none;
  border-radius: 8px;
  margin: 10px;
  cursor: pointer;
}

.exploreButton {
  background-color: black;
  transition: background-color 0.5s ease;
}

.exploreButton:hover {
  background-color: gray;
}