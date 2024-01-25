import styled from "styled-components";
import React,{useState} from "react";
import CartList from '../../../pages/user/cartPage/CartList';
import TempItemData from '../../../assets/datas/UserCartData';
import Checkbox from '@mui/material/Checkbox';
import '../../../styles/fonts.css'
import Box from '@mui/material/Box';
import AddressBox from './Address/Index';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ListItemButton from '@mui/material/ListItemButton';



const OrderBox = () => {

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };

    return(

        <Wrap>
            <List
            sx={{ width: '100%', maxWidth: '84.875rem', alignItems: "center", justifyContent:"center", alignItems: "center"}}
            component="nav"

            >  
                <ListItemButton onClick={handleClick}
                    sx ={{width: '84.875rem', backgroundcolor: 'white', border: '1px solid #000',}}
                >
                    <ListItemText className="cm-SBold24 col-Black">배송지 정보</ListItemText>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ width: '84.875rem', minHeight: '37rem', justifyContent:"center", alignItems: "center", }}>
                        <AddressBox/>
                    </ListItemButton>
                    </List>
                </Collapse>
            </List>

            <List
            sx={{ width: '100%', maxWidth: '84.875rem', alignItems: "center", justifyContent:"center", alignItems: "center"}}
            component="nav"

            > 

            <ListItemButton onClick={handleClick}
                    sx ={{width: '84.875rem', backgroundcolor: 'white', border: '1px solid #000',}}
                >
                    <ListItemText className="cm-SBold24 col-Black">주문 정보</ListItemText>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ width: '84.875rem',display: 'flex', flexDirection: 'column' }}>
                        <CartList/>
                    </ListItemButton>
                    </List>
                </Collapse>
            </List>

      
        </Wrap>
    );
};

export default OrderBox;

const Wrap = styled.div`
    width: 100vw;
    max-width: 100%;
    box-sizing: border-box;
    min-width: 1550px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

