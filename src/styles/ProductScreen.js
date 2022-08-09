import styled from 'styled-components'

export const ProductContainerStyle = styled.div`
  width: 85%;
  margin: 2% auto;
  height: 100%;
  border: 1px solid black;
  border-radius: 5%;
  background-color: ${(props) => (props.primary ? ' #1F2022' : '#343a40')};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
`

export const ProductItemStyle = styled.div`
  width: 300px;
  background-color: ${(props) => (props.primary ? 'white' : '#919aa1')};
  margin: 2rem;
  padding: 1rem;
  border-radius: 10%;
`

export const PageHeading = styled.h1`
  margin: 45px auto;
  text-align: center;
  font-size: 4rem;
`
export const CartAddButton = styled.button`
  background-color: ${(props) => (props.primary ? '#e47911' : 'red')};
  border: none;
  border-radius: 5%;
  font-size: 1.5rem;
  margin-top: 20px;
  color: ${(props) => (props.primary ? 'white' : 'black')};
  padding: 1rem;
  width: 80%;
  transition: all 1s;
  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 5%;
  }
`

export const NavBarStyle = styled.nav`
  width: 100%;
  background-color: black;
  height: 150px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    display: flex;
    list-style: none;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  li {
    margin: 0 auto;
    a {
      font-size: 2rem;
      text-decoration: none;
      transition: all 1s;
      color: white;
      &:hover {
        background-color: white;
        border: 1px solid black;
        color: black;
        padding: 0.4rem;
        border-radius: 10px;
      }
    }
  }
`