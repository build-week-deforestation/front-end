import styled from "styled-components";
import leaf2 from "../../Components/Images/leaf2.svg"

 const Leaf2 = styled.div`
    position: absolute;
    right 85%;
    top: 30%;
    width: 220px;
    height: 220px;
    background-image: url(${leaf2});
    animation: sway1 14s infinite;
    transform-origin: 50% 100% 0;
    z-index: 1;
`;

export default Leaf2;