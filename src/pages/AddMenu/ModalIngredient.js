import styled from "styled-components";

const ModalIngredient = () => {

return (
    
        <Container>
        <Background >
        <ModalBlock >
        
       
         모달창에 들어갈 내용!
	  </ModalBlock >
      </Background> 
      </Container>
)
 
}

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Background = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.15);
    backdrop-filter: blur(5px);
    
`;

const ModalBlock = styled.div`

    position: absolute;
    top: 6.5rem;
    border-radius: 10px;
    padding: 1.5rem;
    background-color: white;
    color: black;
    width: 700px;
    box-shadow: 1px 1px 1px 1px gray;

`;
export default ModalIngredient