import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { ManOutlined , WomanOutlined, ShoppingCartOutlined, ChildCareOutlined, CribOutlined } from '@mui/icons-material';


const Container = styled.div`
    height:60px;
    ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
    padding:10px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
    flex:1;
`;

const Logo = styled.a`
    text-decoration:none;
    color: #E50010;
    font-size:1.3em;
    font-weight:300;
    display:flex;
    align-items:center; 
    ${mobile({ fontSize: "18px" })}
`;

const Center = styled.div`
    flex:1;
    text-align:center;
    ${mobile({
    position: "fixed",
    bottom: 0,
    zIndex: 999,
    backgroundColor: "white",
    width: "100%",
    height: "5vh",
    padding: "5px 0px",
    boxShadow: "0px 5px 30px -5px rgba(0,0,0,0.75)",
    borderRadius: "20px 20px 0px 0px",
})};
`;

const Menusul = styled.ul`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    ${mobile({
        display:"none"
    })};
`

const MenusulResponsive = styled.ul`
    display:none;
    align-items:center;
    justify-content:space-evenly;
    ${mobile({
        display:"flex"
    })}
`

const Menusli = styled.li`
    list-style:none;
    padding:5px;
    margin:0 10px;
    ${mobile({
        backgroundColor: "rgb(214, 28, 78, 0.2)",
        borderRadius: "50%",
    })}
`
const Menua = styled.a`
    text-decoration:none;
    color:black;
    transition:all 0.3s ease;
    &:hover{
        color:#E50010;
    }
`

const Right = styled.div`
    flex:1;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    ${mobile({ flex: 2, justifyContent: "space-evenly" })}
`;

const RightItem = styled.div`
    margin-left:15px;
    cursor:pointer;
    color:black;
    ${mobile({ fontSize: "14px", marginLeft: "10px" })}
`;

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Logo>mini-<h2 style={{ fontStyle: "italic" }}>HnM</h2></Logo>
                    </Link>
                </Left>
                <Center>
                    <Menusul>
                        <Menusli><Menua href="/products/man">Men</Menua></Menusli>
                        <Menusli><Menua href="/products/woman">Women</Menua></Menusli>
                        <Menusli><Menua href="/products/kids">Kids</Menua></Menusli>
                        <Menusli><Menua href="/products/baby">Baby</Menua></Menusli>
                    </Menusul>
                    <MenusulResponsive>
                        <Menusli><Menua href="/products/man"> <ManOutlined fontSize="medium" /> </Menua></Menusli>
                        <Menusli><Menua href="/products/woman"> <WomanOutlined fontSize="medium" /> </Menua></Menusli>
                        <Menusli><Menua href="/products/kids"> <ChildCareOutlined fontSize="medium" /> </Menua></Menusli>
                        <Menusli><Menua href="/products/baby"> <CribOutlined fontSize="medium" /> </Menua></Menusli>
                    </MenusulResponsive>
                </Center>
                <Right>
                    <Link to="/register" style={{ textDecoration:"none" }}>
                        <RightItem>REGISTER</RightItem>
                    </Link>
                    <Link to="/login" style={{ textDecoration:"none" }}>
                        <RightItem>SIGN IN</RightItem>
                    </Link>
                    <Link to="/cart">
                        <RightItem>
                            <Badge badgeContent={quantity} overlap="circular" color="secondary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </RightItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar