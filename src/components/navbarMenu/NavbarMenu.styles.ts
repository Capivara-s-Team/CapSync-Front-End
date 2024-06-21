import styled from "styled-components";

export const Navbar = styled.div`
  padding: 5px;
  display: flex;
  justify-content: space-between;

  .navbar-mobile {
    width: 90%;
    margin: 1rem auto 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        transition: 0.3s;
    }

    img {
        width: 25px;
        height: 25px;
    }

    svg {
        width: 25px;
        height: 25px;
    }
  }
 
  .Box-logo {
    display: none;
  }

  .navbar-icons {
    display: none; 
  }

  @media (min-width: 620px) {
    height: 100px;
    width: 100%;

    align-items: center;
    background-color: #f86b01;

    .navbar-mobile {
        display: none;
    }

    .Box-logo {
      display: flex;
      align-items: center;
      gap: 32px;
    }

    .navbar-icons {
      display: flex; 
      align-items: center;
      gap: 32px;

      span {
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        transition: 0.3s;

        a {
            text-decoration: none;
            color: #000;
        }

        &:hover {
            color: #000;
            transform: scale(1.075);
        }
        }

        img {
        width: 30px;
        height: 30px;
        }

        button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        transition: 0.3s;
        }
    }
  }
`;
