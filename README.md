## Layout Web
![Web 1](/src/assets/webhub.jpg)

## Layout Mobile

![Mobile 1](/src/assets/mobilehub.jpg) 

# Sobre o projeto

Projeto Front-End Web e Mobile, trata-se de uma aplicação onde você precisa se cadastrar e logar para ter acesso ao dashboard, onde as rotas do usuário são protegidas sendo necessário ter o token para ter acesso. Na página de Dashboard é possivel fazer o cadastro e deletar Tecnologias através de uma API. Este projeto passou por 3 fases de desenvolvimento, divididos em 3 sprints de 1 semana cada.

## Sprint 1:
- Concepção do projeto em React
- Página cadastro de usuário com post na API e toast de sucesso ou erro
- Página login do usuário com carregamento de página e armazenagem do token 
- Criação de rotas para as páginas
- Formulários em React-hook-Form
- Validações de Formulários através de Yup

## Sprint 2:
- Página dashboard
- Gerenciamento de tecnologias cadastradas
- Modal de Adicionar Tecnologia
- Excluir tecnologia
- Renderização das Tecnologias já cadastradas na API
- Implementado ContextAPI para passar as props de forma global
- Implementado a proteção de rota do Dashboard, sendo possível seu acesso apenas com o Token
- AO clicar em sair da Dashboard, exclui o token de acesso do usuário

## Sprint 3:
- Refatoramento de toda a aplicação para TypeScript

# Tecnologias utilizadas

## Front end

- React
- TypeScript
- useState
- useEffect
- axios
- react-hook-form
- yup para validações nos formulários
- react-router-dom
- ContextAPI
- Toastify
- StyledComponents
- Mobile first.

### Link GithubPages: https://s3-14-jeanmbiz.vercel.app/
