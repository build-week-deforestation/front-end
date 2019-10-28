import styled from "styled-components";
import leaf2 from "../../Components/Images/leaf2.svg"

 const Leaf3 = styled.div`
    position: absolute;
    right 55%;
    top: -10%;
    width: 200px;
    height: 200px;
    background-image: url(${leaf2});
    animation: sway1 14s infinite;
    transform-top: 50% 100% 0;
    z-index: 1;
`;

export default Leaf3;