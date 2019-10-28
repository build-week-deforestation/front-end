import styled from "styled-components";
import leaf1 from "../../Components/Images/leaf1.svg"

 const Leaf1 = styled.div`
    position: absolute;
    right 90%;
    top: 70%;
    width: 150px;
    height: 150px;
    background-image: url(${leaf1});
    animation: sway2 16s infinite;
    transform-origin: 50% 100% 0;
    z-index: 0;
`;

export default Leaf1;