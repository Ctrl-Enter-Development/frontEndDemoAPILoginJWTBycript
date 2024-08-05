
---

# Front-end Demo API Login JWT Bcrypt

Este é um projeto front-end de demonstração que implementa uma aplicação de login utilizando JWT (JSON Web Token) e Bcrypt para autenticação e gerenciamento de sessões. O projeto foi desenvolvido utilizando Angular, Bootstrap para o design responsivo e a biblioteca ngx-cookie-service para o gerenciamento de cookies.

## Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Configuração](#instalação-e-configuração)
- [Uso](#uso)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Visão Geral

Este projeto é uma aplicação de demonstração para autenticação de usuários utilizando JWT e Bcrypt. Ele inclui funcionalidades como login, redirecionamento de usuários autenticados, e proteção de rotas. O design é responsivo, utilizando Bootstrap 5, e o projeto segue as práticas recomendadas para desenvolvimento com Angular.

## Funcionalidades

- **Login de Usuários**: Permite que usuários façam login utilizando credenciais (e-mail e senha).
- **Autenticação JWT**: Utiliza JSON Web Token para gerenciar sessões de usuários.
- **Proteção de Rotas**: Protege rotas sensíveis, permitindo acesso apenas para usuários autenticados.
- **Design Responsivo**: Desenvolvido utilizando Bootstrap 5 para suportar diferentes tamanhos de tela.

## Estrutura de Pastas

```plaintext
.
├── Dockerfile
├── README.md
├── angular
│   ├── README.md
│   ├── angular.json
│   ├── package-lock.json
│   ├── package.json
│   ├── src
│   │   ├── app
│   │   │   ├── app-routing.module.ts
│   │   │   ├── app.component.css
│   │   │   ├── app.component.html
│   │   │   ├── app.component.spec.ts
│   │   │   ├── app.component.ts
│   │   │   └── app.module.ts
│   │   ├── assets
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── main.ts
│   │   └── styles.css
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   └── tsconfig.spec.json
├── angular.json
├── nginx.conf
├── package-lock.json
├── package.json
├── src
│   ├── app
│   │   ├── app-routing.module.ts
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── components
│   │   │   ├── dashboard
│   │   │   │   ├── dashboard.component.css
│   │   │   │   ├── dashboard.component.html
│   │   │   │   ├── dashboard.component.spec.ts
│   │   │   │   └── dashboard.component.ts
│   │   │   ├── login
│   │   │   │   ├── login.component.css
│   │   │   │   ├── login.component.html
│   │   │   │   ├── login.component.spec.ts
│   │   │   │   └── login.component.ts
│   │   │   ├── profile
│   │   │   │   ├── profile.component.css
│   │   │   │   ├── profile.component.html
│   │   │   │   ├── profile.component.spec.ts
│   │   │   │   └── profile.component.ts
│   │   │   └── signup
│   │   │       ├── signup.component.css
│   │   │       ├── signup.component.html
│   │   │       ├── signup.component.spec.ts
│   │   │       └── signup.component.ts
│   │   └── services
│   │       ├── auth.guard.ts
│   │       ├── auth.service.spec.ts
│   │       ├── auth.service.ts
│   │       ├── config.ts
│   │       ├── user.service.spec.ts
│   │       └── user.service.ts
│   ├── assets
│   ├── env.js
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```

## Tecnologias Utilizadas

- **Angular**: Framework principal para o desenvolvimento front-end.
- **Bootstrap 5**: Framework CSS para design responsivo.
- **JWT**: JSON Web Token para autenticação.
- **Bcrypt**: Utilizado para hashing de senhas (geralmente no backend).
- **ngx-cookie-service**: Serviço Angular para manipulação de cookies.
- **RxJS**: Biblioteca reativa para gerenciamento de eventos assíncronos.
- **Karma & Jasmine**: Frameworks de testes.

## Instalação e Configuração

1. **Clone o Repositório**:
    ```bash
    git clone https://github.com/seu-usuario/front-end-demo-api-login-jwt-bycript.git
    cd front-end-demo-api-login-jwt-bycript
    ```

2. **Instale as Dependências**:
    ```bash
    npm install
    ```

3. **Configuração do Ambiente**:
   - Crie os arquivos de configuração de ambiente em `src/environments/environment.ts` e `src/environments/environment.prod.ts`, conforme necessário.

4. **Inicie o Servidor de Desenvolvimento**:
    ```bash
    npm start
    ```

5. **Construção para Produção**:
    ```bash
    npm run build
    ```

## Uso

- **Login**: Navegue para a página de login, insira suas credenciais e faça login.
- **Dashboard**: Após o login bem-sucedido, você será redirecionado para o dashboard.
- **Proteção de Rotas**: Teste acessar rotas protegidas sem estar autenticado e verifique se você é redirecionado para o login.

## Scripts Disponíveis

- `npm start`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila a aplicação para produção.
- `npm run watch`: Monitora e recompila a aplicação durante o desenvolvimento.
- `npm test`: Executa os testes unitários via Karma.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

1. **Fork o repositório**
2. **Crie uma branch para sua feature**: `git checkout -b minha-nova-feature`
3. **Commit suas mudanças**: `git commit -m 'Adicionei nova feature'`
4. **Push para a branch**: `git push origin minha-nova-feature`
5. **Abra um Pull Request**

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
