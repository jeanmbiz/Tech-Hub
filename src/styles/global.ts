import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-background: #000000;
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    --color-primary-transparent: rgba(100,180,71, 0.2);

    --color-grey-4: #121214;
    --color-grey-3: #212529;
    --color-grey-2: #343B41;
    --color-grey-1: #868E96;
    --color-grey-0: #F8F9FA;
    color: rgba(255, 255, 255, 0.25);

    --color-sucess: #3FE864; 
    --color-negative: #E83F5B;
  }
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  body,html{
    width: 100vw;
    height: 100vh;
  }
  body {
    background: var(--color-background);
    color: var(--color-grey-0);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  body, input, button, textarea {
    font-size: 1rem;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 400;
    font-size: 1rem;
  }
  button {
    font-size: 1rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: .3s;

    &:hover{
        filter: brightness(1.2);
    }



    /* .form{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
} */


/* 
.form input[type="text"],
.form input[type="email"],
.form select{
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: transparent;

    padding: 0 13px;
    height: 39px;

    border: 1px solid var(--color-grey-2);

    color: var(--color-grey-1);
    border-radius: 4px;
}

.form select option{
    background: var(--color-darkblue);
}

.form input::placeholder{
    color: var(--color-grey-0);
} */


  }

  ul, ol, li{
    list-style: none;
  }

  img{
    max-width: 100%;
  }

  .mainContainer{
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    padding: 0.8rem;
  }

  

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-text-light);
    margin: 1rem;
    border-radius: 1.6rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary-dark);
    border-radius: 1.6rem;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }
`;
