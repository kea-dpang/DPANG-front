import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React, {useState} from 'react';
import '../../../styles/fonts.css';
import styled from 'styled-components';
import { CheckBox } from '@mui/icons-material';
import items from '../../../assets/images/shirts.jpeg';

const CartItem = ({ product, updateTotalPrice, onProductSelect, onDelete }) => {
  const [quantity, setQuantity] = useState(1);



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

  return (
    <Box
    sx={{
        '& > :not(style)': { m: 0, width: '66.25rem' },
        background: 'var(--light-grey, #F4F4F4)',

        display: 'flex',
        flexDirection: 'raw',
        gap: '1.375rem',
    }}
    >
              <CheckBox
              checked={product.selected}
              />
              <ItemImg src={items} />
              <ItemInfo>
                <ItemName>
                    <ItemBox>
                    <p className="cm-SBold16 col-Black">소프 터틀넥 집업 beige(베이지) free</p>
                    </ItemBox>
                    <DeleteButton>
                        <p className="cm-SRegular16 col-Black">삭제</p>
                    </DeleteButton>
                </ItemName>
                <ItemState>
                    <p className="cm-SBold16 col-Black">36,000원</p>
                    <ButtonGroup>
                    <Button onClick={handleDecrease}>
                        <RemoveIcon />
                    </Button>
                    <p className="cm-SRegular16 col-Black">{quantity}</p>
                    <Button onClick={handleIncrease}>
                        <AddIcon />
                    </Button>
                    </ButtonGroup>
                    <p className="cm-SBold16 col-Black">{36000 * quantity}원</p>
                </ItemState>
              </ItemInfo>
    </Box>
  );
};

export default CartItem;


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
    gap: 35.5rem;
    flex-direction: raw;
`;

const ItemBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.25rem;
`;

const ItemState = styled.div`
    display: flex;
    align-items: center;
    gap: 42.4375rem;
    flex-direction: raw;
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
    border: 1px solid var(--semi-light-grey, #CFCFCF);
`;