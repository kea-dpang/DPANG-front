import styled from "styled-components";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Tempdata from "assets/data/user/UserWishData";
import Checkbox from '@mui/material/Checkbox';
import carticon from "assets/images/carticon.png";
import '../../../styles/fonts.css';


const List = () => {
    const [checked, setChecked] = useState({});
    const [disprice, setDisprice] = useState({});
    

    const updatePrice = () => {
        setDisprice(Tempdata.price() - (Tempdata.price() * (Tempdata.discount()/100)));
    };

    const handleChange = (selected) => {
        setChecked(selected);
    };

    

    return(

        <Wrap>
            <WishBox>
            <Content>
            <Checkbox checked={checked} onChange={(e) => handleChange(e.target.checked)} />
            <div>
                <Itemimg src={Tempdata.imgUrl} alt={Tempdata.name} />
            </div>
            <ItemInfo>
                <ItemName>
                    <p className="cm-SRegular16 col-Black">{Tempdata.name}</p>
                </ItemName>
                <ItemPrice>
                        <p className="cm-SRegular14 col-SemiLightGrey"
                        sx = {{  lineheight: "1.25rem", /* 142.857% */
                        textdecoration: "line-through"}}>{Tempdata.price}원</p>
                        <p className="cm-SBold16 col-Orange">{Tempdata.discount}%</p>
                        <p className="cm-SBold16 col-Black">{updatePrice}원</p>
                </ItemPrice>
            </ItemInfo>
            </Content>
            <ButtonContainer>
                <DeleteButton>
                    <p className="cm-SRegular16 col-Black">삭제</p>
                </DeleteButton>
                <CartButton>
                    <CartIcon src={carticon} />
                    <p className="cm-SRegular16 col-Navy">담기</p>
                </CartButton>
            </ButtonContainer>
            </WishBox>
        </Wrap>
        
    );
};

export default List;


const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 1.25rem 0rem;
    width: 71.9375rem;
    gap: 45.0625rem;

`;

const WishBox = styled.div`
    display: flex;
    padding: 1.25rem 0rem;
    align-items: center;
    justify-content: center;
    gap: 45.0625rem;
    border-bottom: 1px solid var(--semi-light-grey, #CFCFCF);
`;


const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1.25rem 0rem;
    align-items: flex-start;
    width: 20.3rem;
    gap: 1.44rem;
`;

const Itemimg = styled.img`
    width: 4.0625rem;
    height: 5.3125rem;
    flex-shrink: 0;
    border-radius: 0.1875rem;
`;

const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    justify-content: center;
    align-items: center;
    padding: 0.8rem 0rem;
`;

const ItemName = styled.div`
    diplay: flex;
`;

const ItemPrice = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.8125rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.88rem;
`;

const DeleteButton = styled.button`
    display: flex;
    width: 6.5rem;
    height: 2.21875rem;
    justify-content: center;
    align-items: center;
    gap: 0.3125rem;
    border-radius: 0.1875rem;
    border: 1px solid var(--semi-light-grey, #CFCFCF);
    background-color: #FFF;
`;

const CartButton = styled.button`
    display: flex;
    width: 6.5rem;
    height: 2.21875rem;
    justify-content: center;
    align-items: center;
    gap: 0.3125rem;
    border-radius: 0.1875rem;
    border: 1px solid var(--navy, #043277);
    flex-direction: row;
    background-color: #FFF;
`;

const CartIcon = styled.img`
    width: 1.375rem;
    height: 1.375rem;
    flex-shrink: 0;
`;



