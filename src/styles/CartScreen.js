import styled from 'styled-components'

export const CartContainerStyle = styled.div`
  width: 80%;
  margin: 2% auto;
  height: 100%;
  border: 80px solid black;
  border-radius: 7px;
  background-color: ${(props) => (props.primary ? '#919aa1' : '#343a40')};
  color: ${(props) => (props.primary ? '#343a40' : '#919aa1')};
  display: flex;
  flex-direction: column;
`

export const CartItemStyle = styled.div`
  width: 90%;
  background-color: white;
  color: ${(props) => (props.primary ? '#919aa1' : '#343a40')};
  margin: 2rem;
  justify-content: space-around;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem;
  font-size: 1.5rem;
`

export const PageHeading = styled.h1`
  margin: 45px auto;
  text-align: center;
  font-size: 4rem;
`
export const CartDeleteButtonStyle = styled.button`
  background-color: whitesmoke;
  cursor: pointer;
  border: 1px solid grey;
  color: black;
  font-size: 25px;
  border-radius: 50%;
  overflow: hidden;
  padding: 1rem;
  width: 10%;
  transition: all 1s;
  &:hover {
    background-color: orange;
    color: black;
    border: 1px solid black;
  }
`

export const CartInfoStyle = styled.div`
  display: flex;
  h3 {
    font-weight: bolder;
    margin: 0px;
  }
  flex-direction: column;
  h4 {
    font-weight: 100;
  }
  input[type='number'] {
    height: 30px;
    padding: 1rem;
    text-align: center;
    border: none;
  }
  input[type='number']:hover::-webkit-inner-spin-button {
    width: 14px;
    height: 40px;
  }
`