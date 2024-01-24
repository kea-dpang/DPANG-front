import React, { useState } from 'react';
import TempItemData from '../../../assets/datas/UserCartData';
import CartItem from './CartItem';
import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import '../../../styles/fonts.css'

const CartList = () => {
  const [brandSelection, setBrandSelection] = useState({});

  const handleBrandSelection = (brand, selected) => {
    setBrandSelection(prevState => ({
      ...prevState,
      [brand]: selected,
    }));
  };

  const BrandPrice = brand => {
    let totalPrice = 0;
    TempItemData.filter(item => item.brand === brand && brandSelection[brand]).forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  return (
    <Box
    sx={{
        '& > :not(style)': { m: 0, width: '74.8125rem' },
        background: 'var(--light-grey, #F4F4F4)',

        display: 'flex',
        flexDirection: 'column',
        gap: '1.375rem',
    }}
    >
      {TempItemData.map(item => (
        <div key={item.id}>
          <Box display="flex" alignItems="center">
            <Checkbox
              checked={brandSelection[item.brand]}
              onChange={e => handleBrandSelection(item.brand, e.target.checked)}
            />
            <p className="cm-SRegular16 col-Black">{item.brand}</p>
          </Box>

          {item.brand === brandSelection && (
            <div>
              <CartItem item={item} />
            </div>
          )}

          {brandSelection[item.brand] && (
            <p className="cm-SRegular16 col-Black">{BrandPrice(item.brand)}원</p>
          )}
        </div>
      ))}
    </Box>
  );
};

export default CartList;
