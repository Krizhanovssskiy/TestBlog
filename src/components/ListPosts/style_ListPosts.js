import styled from 'styled-components';

export const ItemPost = styled.li`
  padding: 10px 15px;
  border-bottom: 1px solid grey;
  color: green;
  cursor: pointer;
`;

export const BodyPost = styled.div`
  display: flex;
`;

export const RoundButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  margin-left: 20px;
  border: 2px solid ${props => props.colorBgBorder};
  border-radius: 50%;
  background: ${props => props.colorBgBorder};
  color: ${props => props.colorText};
  cursor: pointer;
  
  :hover {
    color: white;
    background: darkblue;
  }
`;

export const OpenButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  margin-left: 20px;
  border: 2px solid ${props => props.colorBgBorder};
  border-radius: 5px;
  background: ${props => props.colorBgBorder};
  color: white;
  cursor: pointer;
  
  :hover {
    color: white;
    background: darkblue;
  }
`;

export const SvgIcon = styled.svg`
  width: 15px;
  height: 15px;
  fill: white;
`;
