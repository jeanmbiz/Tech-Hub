import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 95vh;

  .headerContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 370px;
    height: 100%;
    height: 100px;
    padding: 10px;
  }

  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 100%;
      height: 20px;
    }
  }

  .registerContainer {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    padding: 2.1rem 1.1rem;
    background-color: var(--color-grey-3);
    box-shadow: 0px 3px 32px -8px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    gap: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-weight: 700;
    }

    h2 {
      font-size: 0.625rem;
      color: var(--color-grey-1);
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;

      div {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      label {
        font-size: 0.625rem;
      }

      input {
        width: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;

        background: var(--color-grey-2);

        padding: 0 13px;
        height: 40px;

        border-radius: 4px;

        color: var(--color-grey-0);

        &::placeholder {
          color: var(--color-grey-0);
          font-size: 0.8125rem;
        }

        &:focus {
          border: 1px solid var(--color-grey-0);
        }
      }

      span {
        color: var(--color-negative);
        font-size: 12px;
        margin-left: 5px;
      }

      .register {
        padding: 0px 22px;
        background-color: var(--color-primary);
        border: 1px solid var(--color-primary);

        width: 100%;
        height: 40px;
        color: var(--color-grey-0);
        font-size: 0.8125rem;
      }

      .select {
        width: 100%;
        display: flex;
        flex-direction: column;

        select {
          width: 100%;
          display: inline-flex;
          align-items: center;
          justify-content: center;

          background: var(--color-grey-2);

          padding: 0 13px;
          height: 40px;

          border-radius: 4px;

          color: var(--color-grey-0);

          &:focus {
            border: 1px solid var(--color-grey-0);
          }

          option {
            font-size: 1rem;
          }
        }
      }
    }
  }

  @media screen and (min-width: 380px) {
    box-sizing: border-box;

    .registerContainer {
      width: 100%;
      max-width: 370px;
    }

    div {
      width: 100%;
      max-width: 330px;
    }
  }
`;

export const LinkStyled = styled(Link)`
  padding: 0px 16px;
  width: 80px;
  height: 32px;
  border-radius: 4px;
  background-color: var(--color-grey-3);

  color: var(--color-grey-0);
  font-weight: 600;
  font-size: 0.625rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
