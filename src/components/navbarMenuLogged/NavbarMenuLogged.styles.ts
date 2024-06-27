import styled from "styled-components";

export const NavbarLogged = styled.div`
  height: 100px;
  width: 100vw;

  padding: 18px 48px;

  display: flex;
  justify-content: space-between;
  gap: 24px;

  align-items: center;
  background-color: #f86b01;

  .Box-logo {
    display: flex;
    align-items: center;
    gap: 20px;
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

    .profile {
        width: 40px;
        height: 40px;
    }



    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      transition: 0.3s;
    }
  }
`;
