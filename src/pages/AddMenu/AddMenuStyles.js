import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
`;

export const StyledInput = styled.input`
  font-size: 20px;
  background-color: #F6F6F6; 
  height: 62px;
  width: 483px;
  padding-left :29px; 
  border: 1px solid #CCCCCC;
  border-radius: 16px;
  
&::placeholder { /* Chrome, Firefox, Opera, Safari */
    color: gray;
 }
`;

export const Select = styled.select`
margin-left:8px;padding-left:5px;display:flex;color:black;justify-content:center;align-items:center;font-size:
20px;background-color:white;border-radius:16px;width:
197px;height:
62px;padding-left :15px;border:
1.0 solid #CCCCCC;`;

export const Container2 = styled.div`
display:flex;justify-content:center;align-items:center;width:
247;height:
62;border-radius:
16;margin-left :10;border :
1.0 solid #CCCCCC;;`;

export const Button1 = styled.button`
font-size :
20;display:flex ;justify-content:center ;align-items :center;width :
123.5;height :
62;border:none;background-color:${props => props.clicked ? '#F0F2FB' : '#FFFFFF'} ;
border-radius :
16 ;transition:.5s;;`;

export const Button2 = styled.button`
font-size :
20;display:flex ;justify-content:center ;align-items :center;width :
123.5;height :
62;border:none;background-color:${props => props.clicked ? '#FDE9E5' : '#FFFFFF'} ;
border-radius :
16 ;transition:.5s;;`;

export const Button3 = styled.button`
width :238 ;
height :62 ;
background:#D9D9D9 ;
border-radius :16 ; border:none ;
transition:.5s;margin-left10;padding-
left24;text-align:left;font-size
20 ;;`;
