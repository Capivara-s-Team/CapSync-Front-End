import styled from "styled-components";

export const Navbar = styled.div`
  padding: 18px 32px;
  display: flex;
  justify-content: space-between;

  .navbar-mobile {
    width: 90%;
    margin: 1rem auto 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    #checkbox {
      display: none;
    }

    .toggle {
      position: relative;
      width: 30px;
      cursor: pointer;
      margin: auto;
      display: block;
      height: calc(3px * 3 + 7px * 2);
    }

    .bar {
      position: absolute;
      left: 0;
      right: 0;
      height: 3px;
      border-radius: calc(3px / 2);
      background: black;
      color: inherit;
      opacity: 1;
      transition: none 0.35s cubic-bezier(0.5, -0.35, 0.35, 1.5) 0s;
    }

    .bar--top {
      top: 0;
      transition-property: top, transform;
      transition-delay: calc(0s + 0.35s) * 0.6;
    }

    .bar--middle {
      top: calc(50% - 3px / 2);
      transition-property: opacity, transform;
      transition-delay: calc(0s + 0.35s * 0.3);
    }

    .bar--bottom {
      bottom: 0;
      transition-property: bottom, transform;
      transition-delay: 0s;
    }

    #checkbox:checked + .toggle .bar--top {
      transform: rotate(-135deg);
      transition-delay: 0s;
      top: calc(50% - 3px / 2);
    }

    #checkbox:checked + .toggle .bar--middle {
      opacity: 0;
      transform: rotate(-135deg);
      transition-delay: calc(0s + 0.35s * 0.3);
    }

    #checkbox:checked + .toggle .bar--bottom {
      bottom: calc(50% - 3px / 2);
      transform: rotate(-225deg);
      transition-delay: calc(0s + 0.35s * 0.6);
    }

    #checkbox:checked + .toggle {
    }

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
      margin-left: 20px;
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
