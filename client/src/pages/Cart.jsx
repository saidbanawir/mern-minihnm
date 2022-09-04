import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { numberWithCommas } from "../numberWithCommas";
import { mobile } from "../responsive";


const Container = styled.div``;

const Wrapper = styled.div`
padding: 20px;
${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
font-weight: 300;
text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  `;
  
  const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
    `;
    
    const TopTexts = styled.div`
    ${mobile({ display: "none" })}
    `;
    const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
  margin: 0px 10px;
  `;
  
  const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  `;
  
  const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
flex: 2;
display: flex;
`;

const Image = styled.img`
width: 200px;
`;

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color:${(props)=>props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;

const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;
${mobile({ marginBottom: "20px" })}
`;
  
  const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  `;
  
  const SummaryTitle = styled.h1`
  font-weight: 200;
  `;
  
  const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
  `;
  
  const SummaryItemText = styled.span``;
  
  const SummaryItemPrice = styled.span``;
  
  const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor:pointer;
  margin-top:40%;
  `;
  
  

const Cart = () => {
  const cart = useSelector((state)=> state.cart);

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag({cart.quantity})</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                      {cart.products.map((product)=>(
                        <Product>
                            <ProductDetail>

                                <Image src={"/assets/images/"+product.img} />
                                <Details>
                                    <ProductName>
                                        <b>Product:</b> {product.title}
                                    </ProductName>
                                    <ProductColor color={product.color} />
                                    <ProductSize>
                                        <b>Size:</b> {product.size}
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <ProductAmount>{product.quantity} pcs.</ProductAmount>
                                </ProductAmountContainer>
                                <ProductPrice>Rp. {numberWithCommas((product.price * product.quantity))}</ProductPrice>
                            </PriceDetail>
                        </Product>
                          ))}
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>Rp. {numberWithCommas((cart.total))}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>Rp. {numberWithCommas((cart.total))}</SummaryItemPrice>
                        </SummaryItem>
                        <Link to="/login">
                        <Button>CHECKOUT NOW</Button>
                        </Link>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
};

export default Cart;