import styled from "styled-components";
import vine from "../../Components/Images/vine.svg"

 const Vine = styled.div`
    position: absolute;
    right 70%;
    top: 65%;
    width: 200px;
    height: 200px;
    background-image: url(${vine});
    animation: sway1 14s infinite;
    transform-origin: 50% 100% 0;
    z-index: 1;
`;

export default Vine;