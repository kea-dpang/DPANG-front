import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Checkbox from "@mui/material/Checkbox";
import { DELETE_CartItem } from "@api/cart";
import { Controller, useFormContext } from "react-hook-form";

const CartItem = ({ item, updateQuantity, updateChecked }) => {
  // console.log("item 체크 좀 할게요~~:", item.itemId);
  /* 체크박스 확인 */
  const {
    control,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useFormContext();
  /////////////////////////////////////////
  // console.log("item itme itme: ", item);
  const [quantity, setQuantity] = useState(item.quantity);
  const [totalPrice, setTotalPrice] = useState({});
  const [checked, setChecked] = useState(false);

  ////////////////////////////////////////////
  useEffect(() => {
    // setValue(`price${item.itemId}`, item.price * quantity);
    // setValue("price", { id: item.itemId, price: item.price * quantity });
    setValue(`price${item.itemId}`, item.price * quantity);
    setValue(`num${item.itemId}`, quantity);
  }, [quantity]);
  // useEffect(() => {
  //   updateItemPrice(item.itemId, item.price * quantity);
  // }, [quantity]);
  ////////////////////////////////////////////

  useEffect(() => {
    console.log("totalPrice:", totalPrice);
  }, [totalPrice]);

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
  }, [quantity]);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    // updateTotalPrice();
    updateTotalPrice(item.itemId, item.price * (quantity + 1));
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      // updateTotalPrice();
      updateTotalPrice(item.itemId, item.price * (quantity - 1));
    }
  };

  /* 상품 삭제 */
  const handleDelete = () => {
    DELETE_CartItem(item.itemId)
      .then((data) => {
        console.log("상품삭제했당: ", data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Content>
      <Controller
        name={String(item.itemId)}
        control={control}
        render={({ field }) => (
          <>
            <Checkbox {...field} type="checkbox" />
            <div>
              <ItemImg src={item.image} alt={item.name} />
            </div>
            <ItemInfo>
              <ItemBox>
                <p className="cm-SBold16 col-Black">{item.name}</p>
                <DeleteButton onClick={handleDelete}>
                  <p className="cm-SRegular16 col-Black">삭제</p>
                </DeleteButton>
              </ItemBox>

              <ItemState>
                <ButtonGroup>
                  {/* 감소 */}
                  <Button onClick={handleDecrease}>
                    <RemoveIcon fontSize="small" />
                  </Button>
                  {/* 감소, 증가 결과 */}
                  <CountBox>
                    <p className="cm-SRegular16 col-Black">{quantity}</p>
                  </CountBox>
                  {/* 증가 */}
                  <Button onClick={handleIncrease}>
                    <AddIcon fontSize="small" />
                  </Button>
                </ButtonGroup>

                <p className="cm-SBold16 col-Black">
                  {/* {item.price * quantity}원 */}
                  {Number(item.price * quantity).toLocaleString("ko-KR")}원
                </p>
              </ItemState>
            </ItemInfo>
          </>
        )}
      />
    </Content>
  );
};

export default CartItem;

const Content = styled.div`
  box-sizing: border-box;
  padding: 2rem 2rem;
  background: var(--light-grey, #f4f4f4);
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1.375rem;
`;

const ItemImg = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 0.5rem;
`;

const ItemInfo = styled.div`
  width: 60rem;
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
`;

const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const DeleteButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid var(--semi-light-grey, #cfcfcf);
  border-radius: 0.1875rem;
`;

const ItemState = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CountBox = styled.div`
  width: 2.7rem;
  background: var(--light-grey, #f4f4f4);
  border: 1px solid var(--semi-light-grey, #cfcfcf);
  display: flex;
  justify-content: center;
  align-items: center;
`;
