import styled from "styled-components";
import leaf1 from "../../Components/Images/leaf1.svg"

 const Leaf4 = styled.div`
    position: absolute;
    right 90%;
    top: 5%;
    width: 200px;
    height: 200px;
    background-image: url(${leaf1});
    animation: sway1 14s infinite;
    transform-origin: 50% 100% 0;
    z-index: 1;
`;

export default Leaf4;