# 🅰️ MyAngularApp - Aplicação Angular Profissional

Uma aplicação web moderna desenvolvida com **Angular 20** e **TypeScript**, demonstrando boas práticas de desenvolvimento frontend com arquitetura escalável e componentes reutilizáveis.

![Angular](https://img.shields.io/badge/Angular-20.3-DD0031?style=flat-square&logo=angular )
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript )
![RxJS](https://img.shields.io/badge/RxJS-7.0-B7178C?style=flat-square&logo=reactivex )
![CSS3](https://img.shields.io/badge/CSS3-Moderno-1572B6?style=flat-square&logo=css3 )
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square )

## 📋 Sobre o Projeto

MyAngularApp é uma aplicação web robusta desenvolvida com Angular, demonstrando:

- **Arquitetura Modular** - Componentes bem organizados e reutilizáveis
- **TypeScript** - Tipagem forte e segurança de tipos
- **RxJS** - Programação reativa com Observables
- **Routing** - Navegação entre múltiplas páginas
- **Serviços** - Lógica de negócio centralizada
- **Formulários** - Validação e tratamento de dados
- **HTTP Client** - Integração com APIs backend
- **Testes** - Testes unitários com Karma

## 🚀 Tecnologias Utilizadas

### Frontend
- **Angular 20** - Framework web completo
- **TypeScript** - Linguagem tipada para JavaScript
- **RxJS** - Programação reativa
- **Angular CLI** - Ferramentas de desenvolvimento
- **Karma** - Test runner para testes unitários

### Ferramentas
- **Git/GitHub** - Versionamento de código
- **npm** - Gerenciador de pacotes
- **Angular DevTools** - Debugging e profiling

## 📦 Instalação

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn
- Angular CLI 20+

### Passos

1. **Clone o repositório**
   ```bash
   git clone https://github.com/EngBetao/beto-engsoftware.git
 npm install
  cd beto-engsoftware
ng serve
http://localhost:4200
beto-engsoftware/
├── src/
│   ├── app/
│   │   ├── components/      # Componentes reutilizáveis
│   │   ├── pages/          # Páginas da aplicação
│   │   ├── services/       # Serviços e lógica
│   │   ├── models/         # Interfaces e tipos
│   │   ├── guards/         # Route guards
│   │   ├── interceptors/   # HTTP interceptors
│   │   ├── app.component.ts    # Componente raiz
│   │   └── app.routes.ts       # Rotas da aplicação
│   ├── assets/             # Imagens e recursos
│   ├── styles/             # Estilos globais
│   ├── index.html          # Template HTML
│   └── main.ts             # Ponto de entrada
├── angular.json            # Configuração Angular
├── tsconfig.json           # Configuração TypeScript
├── karma.conf.js           # Configuração testes
└── package.json            # Dependências
# Inicia servidor de desenvolvimento
ng serve

# Build para produção
ng build

# Executa testes unitários
ng test

# Executa testes end-to-end
ng e2e

# Lint do código
ng lint

# Gera novo componente
ng generate component nome-componente

# Gera novo serviço
ng generate service nome-servico
# Executar todos os testes
ng test

# Executar com cobertura
ng test --code-coverage

# Executar um arquivo específico
ng test --include='**/nome.spec.ts'
# Executar testes end-to-end
ng e2e
# Executar testes end-to-end
ng e2e
