import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    flex:1;
    margin:3px;
    height:70vh;
    position:relative;
`;

const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    ${mobile({ height: "50vh" })}
`;

const Info = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

const Title = styled.h1`
    color:white;
    background-color:rgba(0, 0, 0, 0.5);
    border-bottom-left-radius:30px;
    border-bottom-right-radius:30px;
    padding:10px;
    margin-bottom:20px;
    ${mobile({
        fontSize:"1.2em"
    })}
`;

const Button = styled.button`
    border:none;
    padding:10px;
    background-color:white;
    cursor:pointer;
    font-weight:600;x
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Link to={`/products/${item.category}`} >
        <Image src={"assets/images/"+item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>BUY NOW!</Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem