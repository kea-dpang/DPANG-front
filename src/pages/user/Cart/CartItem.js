import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Checkbox from "@mui/material/Checkbox";
import { DELETE_CartItem } from "@api/cart";

const CartItem = ({ item, updateQuantity, updateChecked, deleteItem }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [totalPrice, setTotalPrice] = useState({});
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    updateChecked(item.id, newChecked);
  };

  const updateTotalPrice = () => {
    setTotalPrice(item.price * quantity);
  };

  useEffect(() => {
    updateQuantity(item.id, quantity);
  }, [item.id, quantity]);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    updateTotalPrice();
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      updateTotalPrice();
    }
  };

  const handleDelete = () => {
    DELETE_CartItem()
      .then((data) => {
        console.log("상품삭제했당: ", data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Content>
      <Checkbox
        checked={checked}
        onChange={(e) => handleCheckboxChange(e.target.checked)}
      />
      <div>
        <ItemImg src={item.image} alt={item.name} />
      </div>
      <ItemInfo>
        <ItemName>
          <ItemBox>
            <p className="cm-SBold16 col-Black">{item.name}</p>
          </ItemBox>
          <DeleteButton onClick={handleDelete}>
            <p className="cm-SRegular16 col-Black">삭제</p>
          </DeleteButton>
        </ItemName>
        <ItemState>
          <ButtonGroup>
            <Button onClick={handleDecrease}>
              <RemoveIcon fontSize="small" />
            </Button>
            <CountBox>
              <p className="cm-SRegular16 col-Black">{quantity}</p>
            </CountBox>
            <Button onClick={handleIncrease}>
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
          <p className="cm-SBold16 col-Black">{item.price * quantity}원</p>
        </ItemState>
      </ItemInfo>
    </Content>
  );
};

export default CartItem;

const Content = styled.div`
  width: 66.25rem;
  background: var(--light-grey, #f4f4f4);
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1.375rem;
`;

const ItemImg = styled.img`
  width: 6.875rem;
  height: 8.6875rem;
  border-radius: 0.9375rem;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.875rem;
`;

const ItemName = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 45rem;
  flex-direction: row;
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
`;

const ItemState = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 39rem;
  flex-direction: row;
  justify-content: center;
`;

const DeleteButton = styled.button`
  display: flex;
  width: 4.125rem;
  height: 2.1875rem;
  padding: 0rem 0.125rem;
  justify-content: center;
  align-items: center;
  gap: 0.3125rem;
  border-radius: 0.1875rem;
  border: 1px solid var(--semi-light-grey, #cfcfcf);
`;
const CountBox = styled.div`
  width: 2.7rem;
  background: var(--light-grey, #f4f4f4);
  border: 1px solid var(--semi-light-grey, #cfcfcf);
  display: flex;
  justify-content: center;
  align-items: center;
`;
