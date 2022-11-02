import styled from "styled-components";

export const NavStyled = styled.nav`
  width: 100vw;
  height: 72px;
  border-bottom: 1px solid var(--color-grey-1);
  padding: 0px 0.8rem;

  .headerContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    figure {
      width: 105px;
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;

      img {
        width: 100%;
        height: 15px;
      }
    }

    button {
      padding: 0px 1rem;
      width: 55px;
      height: 32px;
      background-color: var(--color-grey-3);
      border-radius: 4px;

      font-weight: 600;
      font-size: 0.75rem;
      color: var(--color-grey-0);
    }
  }
`;
