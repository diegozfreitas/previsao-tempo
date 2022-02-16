import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-align: center;
`;


export const Space = styled.div`
  ${({ top }) => top ? `margin-top: ${top}px;` : ''}
`;


export const Text80 = styled.h3`
  font-size: 80px;
  color: #525252;
`;

export const Text40 = styled.h3`
  font-size: 40px;
  color: #58ab66;
`;

export const Text22 = styled.h3`
  font-size: 22px;
  color: #525252;
`;

export const TextValue = styled.span`
  font-size: 23px;
  color: 525252; 
`;

export const TextHotOrCold = styled.span`
  font-size: 23px;
  color: ${({ value }) => value > 24 ? '#eb5e29' : '#29b5eb'}; 
`;

export const Button = styled.button`
  padding: 16px 60px;
  font-size: 20px;
  text-transform: uppercase;
  background: #58ab66;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;