import React from 'react'
import styled from 'styled-components'
import checkicon from '../../assets/images/uncheckicon.svg'
import itemimg from '../../assets/images/tempitemimg.png'
import carticon from '../../assets/images/carticon.png'
import Header from '../../components/common/HeaderBar/Index'

const WishList =()=> {

    return(

        <Wrap>
            <Header/>
            <WishTitleBox>❤️ 내가 찜한 상품</WishTitleBox>
            
            <WishListContainer>
            <ChoiceContainer>
                <CheckIcon src = {checkicon} />
                <ChoiceText>
                <p>전체선택</p>
                <p>(2/6)</p>
                </ChoiceText>
                <ChoiceText>
                <p>선택삭제</p>
                </ChoiceText>
            </ChoiceContainer>

            <ListContainer>
                <ListBox>
                    <List>
                    <CheckIcon src = {checkicon} />
                        <ItemInfo>
                        <ItemInfoContainer>
                        <Item src={itemimg}/>
                        <ItemdetailContainer>
                            <ItemName>[압구정주꾸미] 인기 볶음 6종</ItemName>
                            <ItemPriceContainer>
                                <FormerPrice>8,000원</FormerPrice>
                                <Discount>
                                <DiscountPercent>15%</DiscountPercent>
                                <DiscountPrice>7,565원</DiscountPrice>
                                </Discount>
                            </ItemPriceContainer>
                        </ItemdetailContainer>
                        </ItemInfoContainer>
                        <ButtonContainer>
                            <DeleteButton>삭제</DeleteButton>
                            <CartButton>
                                <CartIcon src = {carticon}/>
                                <p>담기</p>
                            </CartButton>
                        </ButtonContainer>
                        </ItemInfo>
                    </List>
                </ListBox>
                <ListBox>
                    <List>
                    <CheckIcon src = {checkicon} />
                        <ItemInfo>
                        <ItemInfoContainer>
                        <Item src={itemimg}/>
                        <ItemdetailContainer>
                            <ItemName>[압구정주꾸미] 인기 볶음 6종</ItemName>
                            <ItemPriceContainer>
                                <FormerPrice>8,000원</FormerPrice>
                                <Discount>
                                <DiscountPercent>15%</DiscountPercent>
                                <DiscountPrice>7,565원</DiscountPrice>
                                </Discount>
                            </ItemPriceContainer>
                        </ItemdetailContainer>
                        </ItemInfoContainer>
                        <ButtonContainer>
                            <DeleteButton>삭제</DeleteButton>
                            <CartButton>
                                <CartIcon src = {carticon}/>
                                <p>담기</p>
                            </CartButton>
                        </ButtonContainer>
                        </ItemInfo>
                    </List>
                </ListBox>
                <ListBox>
                    <List>
                    <CheckIcon src = {checkicon} />
                        <ItemInfo>
                        <ItemInfoContainer>
                        <Item src={itemimg}/>
                        <ItemdetailContainer>
                            <ItemName>[압구정주꾸미] 인기 볶음 6종</ItemName>
                            <ItemPriceContainer>
                                <FormerPrice>8,000원</FormerPrice>
                                <Discount>
                                <DiscountPercent>15%</DiscountPercent>
                                <DiscountPrice>7,565원</DiscountPrice>
                                </Discount>
                            </ItemPriceContainer>
                        </ItemdetailContainer>
                        </ItemInfoContainer>
                        <ButtonContainer>
                            <DeleteButton>삭제</DeleteButton>
                            <CartButton>
                                <CartIcon src = {carticon}/>
                                <p>담기</p>
                            </CartButton>
                        </ButtonContainer>
                        </ItemInfo>
                    </List>
                </ListBox>
                <ListBox>
                    <List>
                    <CheckIcon src = {checkicon} />
                        <ItemInfo>
                        <ItemInfoContainer>
                        <Item src={itemimg}/>
                        <ItemdetailContainer>
                            <ItemName>[압구정주꾸미] 인기 볶음 6종</ItemName>
                            <ItemPriceContainer>
                                <FormerPrice>8,000원</FormerPrice>
                                <Discount>
                                <DiscountPercent>15%</DiscountPercent>
                                <DiscountPrice>7,565원</DiscountPrice>
                                </Discount>
                            </ItemPriceContainer>
                        </ItemdetailContainer>
                        </ItemInfoContainer>
                        <ButtonContainer>
                            <DeleteButton>삭제</DeleteButton>
                            <CartButton>
                                <CartIcon src = {carticon}/>
                                <p>담기</p>
                            </CartButton>
                        </ButtonContainer>
                        </ItemInfo>
                    </List>
                </ListBox>
                <ListBox>
                    <List>
                    <CheckIcon src = {checkicon} />
                        <ItemInfo>
                        <ItemInfoContainer>
                        <Item src={itemimg}/>
                        <ItemdetailContainer>
                            <ItemName>[압구정주꾸미] 인기 볶음 6종</ItemName>
                            <ItemPriceContainer>
                                <FormerPrice>8,000원</FormerPrice>
                                <Discount>
                                <DiscountPercent>15%</DiscountPercent>
                                <DiscountPrice>7,565원</DiscountPrice>
                                </Discount>
                            </ItemPriceContainer>
                        </ItemdetailContainer>
                        </ItemInfoContainer>
                        <ButtonContainer>
                            <DeleteButton>삭제</DeleteButton>
                            <CartButton>
                                <CartIcon src = {carticon}/>
                                <p>담기</p>
                            </CartButton>
                        </ButtonContainer>
                        </ItemInfo>
                    </List>
                </ListBox>
                <ListBox>
                    <List>
                    <CheckIcon src = {checkicon} />
                        <ItemInfo>
                        <ItemInfoContainer>
                        <Item src={itemimg}/>
                        <ItemdetailContainer>
                            <ItemName>[압구정주꾸미] 인기 볶음 6종</ItemName>
                            <ItemPriceContainer>
                                <FormerPrice>8,000원</FormerPrice>
                                <Discount>
                                <DiscountPercent>15%</DiscountPercent>
                                <DiscountPrice>7,565원</DiscountPrice>
                                </Discount>
                            </ItemPriceContainer>
                        </ItemdetailContainer>
                        </ItemInfoContainer>
                        <ButtonContainer>
                            <DeleteButton>삭제</DeleteButton>
                            <CartButton>
                                <CartIcon src = {carticon}/>
                                <p>담기</p>
                            </CartButton>
                        </ButtonContainer>
                        </ItemInfo>
                    </List>
                </ListBox>
            </ListContainer>
            </WishListContainer>

        </Wrap>

    )

}
export default WishList;



const Wrap = styled.div`
    width: 100vw;
    align-items: center;
    min-width: 1550px;
    display: flex;
    flex-direction: column;
`;

const WishTitleBox=styled.div`

    display: flex;
    width: 96.25rem;
    padding: 3.125rem 11.875rem;
    justify-content: center;
    align-items: center;
    gap: var(--hi, 0.625rem);
    color: var(--navy, #043277);
    font-family: "Pretendard Variable";
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25rem; /* 66.667% */
    letter-spacing: 0.1875rem;


`;

const WishListContainer = styled.div`

    display: flex;
    flex-direction: column;
`;

const ChoiceContainer = styled.div`

    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.6875rem;

`;

const CheckIcon = styled.img`

    width: 1.5rem;
    height: 1.5rem;

`;

const ChoiceText = styled.div`

    display: flex;
    align-items: flex-start;
    gap: 0.4375rem;
    color: #1A0B5B;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

`;


const ListContainer = styled.div`

    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const ListBox = styled.div`

    display: flex;
    padding: 1.25rem 0rem;
    align-items: flex-start;
    gap: 45.0625rem;
    border-bottom: 1px solid var(--semi-light-grey, #CFCFCF);
`;

const List =  styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.4375rem;
`;


const ItemInfoContainer = styled.div`

    width: 17.4375rem;
    height: 5.3125rem;
    display: flex;
    flex-direction: raw;

`;

const ItemInfo = styled.div`
    display: flex;
    height: 5.3125rem;
    justify-content: center;
    align-items: flex-start;
    gap: 45.0625rem;
`;


const Item = styled.img`

    width: 4.0625rem;
    height: 5.3125rem;
    flex-shrink: 0;
    border-radius: 0.1875rem;

`;

const ItemdetailContainer = styled.div`

    display: flex;
    flex-direction: column;
    width: 17.4375rem;
    height: 5.3125rem;
`;

const ItemName = styled.p`

    color: #000;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 125% */

`;

const ItemPriceContainer = styled.div`

    display: flex;
    flex-direction: raw;
`;

const FormerPrice = styled.p`

    color: var(--semi-light-grey, #CFCFCF);
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 142.857% */
    text-decoration: line-through;

`;

const Discount = styled.div`

    display: flex;
    width: 6.375rem;
    height: 1.25rem;
    justify-content: center;
    align-items: center;
    gap: 0.8125rem;
    flex-shrink: 0;

`;

const DiscountPercent = styled.p`
color: var(--orange, #FA622F);
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25rem; /* 125% */
`;

const DiscountPrice = styled.p`

    color: var(--black, #000);
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.25rem; /* 125% */

`;


const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.875rem;
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
    background: #FFF;
`;

const CartButton = styled.button`

    display: flex;
    flex-direction: raw;
    width: 6.5rem;
    height: 2.21875rem;
    justify-content: center;
    align-items: center;
    gap: 0.3125rem;
    border-radius: 0.1875rem;
    border: 1px solid var(--navy, #043277);
    background: #FFF;color: var(--navy, #043277);
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 125% */

`;

const CartIcon = styled.img`

    width: 1.375rem;
    height: 1.375rem;
    flex-shrink: 0;

`;
