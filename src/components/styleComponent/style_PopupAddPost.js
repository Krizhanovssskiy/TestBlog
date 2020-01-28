import styled from 'styled-components';

export const WrapperPopup = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background: rgba(0,0,0,0.5);
`;

export const PopupForm = styled.form`
  position: relative;
  max-width: 650px;
  width: 100%;
  height: 450px; 
  border-radius: 5px;
  background: #cccccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  max-width: 400px;
  width: 100%;
  padding: 20px 25px;
  margin-bottom: 10px;
  background: transparent;
  border: 2px solid blue;
  border-radius: 5px;
`;

export const Textarea = styled.textarea`
  max-width: 400px;
  width: 100%;
  height: 150px;
  resize: none;
  padding: 20px 25px;
  margin-bottom: 10px;
  background: transparent;
  border: 2px solid blue;
  border-radius: 5px;
`;

export const BoxButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  min-width: 100px;
  padding: 10px 25px;
  background: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
  color: ${props => props.colorText};
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background: blue;
    color: white;
  }
`;