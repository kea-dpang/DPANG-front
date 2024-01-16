import React from 'react'
import styled from 'styled-components'
import checkicon from '../../assets/images/uncheckicon.svg'
import itemimg from '../../assets/images/tempitemimg.png'
import carticon from '../../assets/images/carticon.png'

const WishList =()=> {

    return(

        <MainContainer>

            <WishTitleBox>
            <h1 className='cm-MBold36 col-Navy'>❤️ 내가 찜한 상품</h1>
            </WishTitleBox>

            <ChoiceContainer>
                <CheckIcon src = {checkicon} />
                <ChoiceText>
                <p className='cm-SBold16 col-Black'>전체선택</p>
                <p className='cm-SBold16 col-Black'>(2/6)</p>
                </ChoiceText>
                <p className='cm-SBold16 col-Black'>선택삭제</p>
            </ChoiceContainer>

            <ListContainer>
                <ListBox>
                    <List>
                    <CheckIcon src = {checkicon} />
                        <ItemInfo>
                        <Item src={itemimg}/>
                        <ItemdetailContainer>
                            <p className='cm-SRegular16 col-Black'>[압구정주꾸미] 인기 볶음 6종</p>
                            <ItemPriceContainer>
                                <FormerPrice>
                                    <p className='cm-SRegular14 col-SemiLightGrey'>8,000원</p>
                                </FormerPrice>
                                <Discount>
                                    <p className='cm-SBold16 col-Orange'>15%</p>
                                    <p className='cm-SBold16 col-Black'>7,565원</p>
                                </Discount>
                            </ItemPriceContainer>
                        </ItemdetailContainer>
                        <ButtonContainer>
                            <DeleteButton>
                                <p className='cm-SRegular16 col-Black'>삭제</p>
                            </DeleteButton>
                            <CartButton>
                                <CartIcon src = {carticon}/>
                                <p className='cm-SRegular16 col-Navy'>담기</p>
                            </CartButton>
                        </ButtonContainer>
                        </ItemInfo>
                    </List>
                </ListBox>
                <ListBox>
                    <List>
                    <CheckIcon src = {checkicon} />
                        <ItemInfo>
                        <Item src={itemimg}/>
                        <ItemdetailContainer>
                            <p className='cm-SRegular16 col-Black'>[압구정주꾸미] 인기 볶음 6종</p>
                            <ItemPriceContainer>
                                <FormerPrice>
                                    <p className='cm-SRegular14 col-SemiLightGrey'>8,000원</p>
                                </FormerPrice>
                                <Discount>
                                    <p className='cm-SBold16 col-Orange'>15%</p>
                                    <p className='cm-SBold16 col-Black'>7,565원</p>
                                </Discount>
                            </ItemPriceContainer>
                        </ItemdetailContainer>
                        <ButtonContainer>
                            <DeleteButton>
                                <p className='cm-SRegular16 col-Black'>삭제</p>
                            </DeleteButton>
                            <CartButton>
                                <CartIcon src = {carticon}/>
                                <p className='cm-SRegular16 col-Navy'>담기</p>
                            </CartButton>
                        </ButtonContainer>
                        </ItemInfo>
                    </List>
                </ListBox>
                <ListBox>
                    <List>
                    <CheckIcon src = {checkicon} />
                        <ItemInfo>
                        <Item src={itemimg}/>
                        <ItemdetailContainer>
                            <p className='cm-SRegular16 col-Black'>[압구정주꾸미] 인기 볶음 6종</p>
                            <ItemPriceContainer>
                                <FormerPrice>
                                    <p className='cm-SRegular14 col-SemiLightGrey'>8,000원</p>
                                </FormerPrice>
                                <Discount>
                                    <p className='cm-SBold16 col-Orange'>15%</p>
                                    <p className='cm-SBold16 col-Black'>7,565원</p>
                                </Discount>
                            </ItemPriceContainer>
                        </ItemdetailContainer>
                        <ButtonContainer>
                            <DeleteButton>
                                <p className='cm-SRegular16 col-Black'>삭제</p>
                            </DeleteButton>
                            <CartButton>
                                <CartIcon src = {carticon}/>
                                <p className='cm-SRegular16 col-Navy'>담기</p>
                            </CartButton>
                        </ButtonContainer>
                        </ItemInfo>
                    </List>
                </ListBox>
                <ListBox>
                    <List>
                    <CheckIcon src = {checkicon} />
                        <ItemInfo>
                        <Item src={itemimg}/>
                        <ItemdetailContainer>
                            <p className='cm-SRegular16 col-Black'>[압구정주꾸미] 인기 볶음 6종</p>
                            <ItemPriceContainer>
                                <FormerPrice>
                                    <p className='cm-SRegular14 col-SemiLightGrey'>8,000원</p>
                                </FormerPrice>
                                <Discount>
                                    <p className='cm-SBold16 col-Orange'>15%</p>
                                    <p className='cm-SBold16 col-Black'>7,565원</p>
                                </Discount>
                            </ItemPriceContainer>
                        </ItemdetailContainer>
                        <ButtonContainer>
                            <DeleteButton>
                                <p className='cm-SRegular16 col-Black'>삭제</p>
                            </DeleteButton>
                            <CartButton>
                                <CartIcon src = {carticon}/>
                                <p className='cm-SRegular16 col-Navy'>담기</p>
                            </CartButton>
                        </ButtonContainer>
                        </ItemInfo>
                    </List>
                </ListBox>
                <ListBox>
                    <List>
                    <CheckIcon src = {checkicon} />
                        <ItemInfo>
                        <Item src={itemimg}/>
                        <ItemdetailContainer>
                            <p className='cm-SRegular16 col-Black'>[압구정주꾸미] 인기 볶음 6종</p>
                            <ItemPriceContainer>
                                <FormerPrice>
                                    <p className='cm-SRegular14 col-SemiLightGrey'>8,000원</p>
                                </FormerPrice>
                                <Discount>
                                    <p className='cm-SBold16 col-Orange'>15%</p>
                                    <p className='cm-SBold16 col-Black'>7,565원</p>
                                </Discount>
                            </ItemPriceContainer>
                        </ItemdetailContainer>
                        <ButtonContainer>
                            <DeleteButton>
                                <p className='cm-SRegular16 col-Black'>삭제</p>
                            </DeleteButton>
                            <CartButton>
                                <CartIcon src = {carticon}/>
                                <p className='cm-SRegular16 col-Navy'>담기</p>
                            </CartButton>
                        </ButtonContainer>
                        </ItemInfo>
                    </List>
                </ListBox>
                <ListBox>
                    <List>
                    <CheckIcon src = {checkicon} />
                        <ItemInfo>
                        <Item src={itemimg}/>
                        <ItemdetailContainer>
                            <p className='cm-SRegular16 col-Black'>[압구정주꾸미] 인기 볶음 6종</p>
                            <ItemPriceContainer>
                                <FormerPrice>
                                    <p className='cm-SRegular14 col-SemiLightGrey'>8,000원</p>
                                </FormerPrice>
                                <Discount>
                                    <p className='cm-SBold16 col-Orange'>15%</p>
                                    <p className='cm-SBold16 col-Black'>7,565원</p>
                                </Discount>
                            </ItemPriceContainer>
                        </ItemdetailContainer>
                        <ButtonContainer>
                            <DeleteButton>
                                <p className='cm-SRegular16 col-Black'>삭제</p>
                            </DeleteButton>
                            <CartButton>
                                <CartIcon src = {carticon}/>
                                <p className='cm-SRegular16 col-Navy'>담기</p>
                            </CartButton>
                        </ButtonContainer>
                        </ItemInfo>
                    </List>
                </ListBox>
            </ListContainer>

        </MainContainer>

    )

}
export default WishList;



const MainContainer=styled.div`

    width: 120rem;
    height: 80.75rem;
    background: #FFF;

`;

const WishTitleBox=styled.div`

    display: flex;
    width: 96.25rem;
    padding: 3.125rem 11.875rem;
    justify-content: center;
    align-items: center;
    gap: var(--hi, 0.625rem);

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

`;

const ItemPriceContainer = styled.div`

    display: flex;
    flex-direction: raw;
`;

const FormerPrice = styled.p`

    line-height: 1.25rem; /* 142.857% */
    text-decoration-line: strikethrough;


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

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
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
    background: #FFF;

`;

const CartIcon = styled.img`

    width: 1.375rem;
    height: 1.375rem;
    flex-shrink: 0;

`;
