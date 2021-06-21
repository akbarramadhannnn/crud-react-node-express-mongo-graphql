import styled from 'styled-components';

const SignupWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 14px;
    color: #808080;

    a {
      color: cornflowerblue;

      &:hover {
        color: #808080;
      }
    }
  }
`;

export const Card = styled.div`
  background: #fff;
  border: 1px solid #d3d3d3;
  width: 40%;
  padding: 20px 20px;
  border-radius: 10px;
`;

export const FormGroup = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10px;

  label {
    color: #333333;
    font-size: 16px;
    float: left;
    clear: both;
  }

  input {
    margin: 8px 0px;
    width: 100%;
    outline: none;
    border: 1px solid #bbb;
    display: inline-block;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px 10px;
    border-radius: 5px;
  }

  select {
    width: 100%;
    margin: 8px 0px;
    outline: none;
    border: 1px solid #bbb;
    padding: 10px 10px;
    border-radius: 5px;
  }

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const Button = styled.button`
  float: right;
  padding: 10px 30px;
  background: #1abc9c;
  border: none;
  color: white;
  border-radius: 3px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export default SignupWrapper;
