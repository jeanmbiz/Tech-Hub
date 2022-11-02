import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginStyled = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;

  figure {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 60px;
    img {
      width: 100%;
      height: 25px;
    }
  }

  .loginContainer {
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

      .login {
        padding: 0px 22px;
        background-color: var(--color-primary);
        border: 1px solid var(--color-primary);

        width: 100%;
        height: 40px;
        color: var(--color-grey-0);
        font-size: 0.8125rem;
      }

      h2 {
        font-weight: 600;
        font-size: 0.75rem;
        color: var(--color-grey-1);
      }
    }
  }
  .register {
    padding: 0px 22px;
    background-color: var(--color-grey-1);
    border: 1px solid var(--color-grey-1);

    width: 100%;
    height: 40px;
    color: var(--color-grey-0);
    font-size: 0.8125rem;
  }

  @media screen and (min-width: 380px) {
    .loginContainer {
      width: 100%;
      max-width: 370px;
    }

    div {
      width: 330px;
    }
  }
`;

export const RegisterStyled = styled(Link)`
  padding: 0px 22px;
  background-color: var(--color-grey-1);
  border: 1px solid var(--color-grey-1);

  width: 100%;
  height: 40px;
  color: var(--color-grey-0);
  font-size: 0.8125rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
