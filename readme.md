# 🚀 Gestão Marketplace Angular

### ⚠️ **Instruções Importantes**

- A branch **`01-layout-completo`** deve ser utilizada por quem deseja **iniciar o desafio do zero**, acompanhando os conteúdos e evoluindo o projeto passo a passo.  

- A branch **`main`** contém o projeto **finalizado**, de acordo com o que foi desenvolvido nos vídeos do desafio.  

---

### 📂 Descrição do Projeto

Este projeto é uma simulação de um sistema de gestão de produtos que inclui as seguintes funcionalidades:

* **Tela de Login**: Autenticação de usuários.
* **Listagem de Produtos**: Exibição de produtos com opções de filtro por título e status.
* **Tela de Criação de Produto**: Interface para adicionar novos produtos ao catálogo.

O desafio é dividido em dois projetos, um frontend em Angular e um backend em Express, que estão localizados no mesmo repositório.

---

### ▶️ Como Executar os Projetos

Para rodar a aplicação, você deve iniciar tanto o servidor do backend quanto o frontend em terminais separados.

#### Backend (Express)

1.  Abra um terminal na pasta `backend-gestao-marketplace`.
2.  Instale as dependências do projeto:
    ```bash
    npm install
    ```
3.  Execute o comando para iniciar o servidor:
    ```bash
    npm run dev
    ```
4.  👉 O servidor estará disponível em `http://localhost:3000`.

#### Frontend (Angular)

1.  Abra um terminal na pasta `frontend-gestao-marketplace`.
2.  Instale as dependências do projeto:
    ```bash
    npm install
    ```
3.  Execute o comando para iniciar a aplicação:
    ```bash
    ng serve
    ```
4.  👉 A aplicação estará disponível em `http://localhost:4200/`.

---

### 🛠️ Instalações Necessárias

Certifique-se de que as seguintes ferramentas estão instaladas em seu ambiente para que os projetos funcionem corretamente:

* **Node.js**: Versão 22.19.0 (LTS).  
* **Angular CLI**: Versão 20.  
* **Insomnia**: Última versão para testar os endpoints do backend.  
* **Visual Studio Code (VS Code)**: Última versão recomendada para edição de código.  

---

### 💡 Extensões recomendadas do VS Code

Para melhorar a produtividade durante o desenvolvimento, recomenda-se instalar as seguintes extensões no **Visual Studio Code**:

- **Angular Language Service** → Fornece autocompletar, dicas e suporte avançado ao desenvolvimento Angular.  
- **Material Icon Theme** → Adiciona ícones visuais aos arquivos e pastas, facilitando a navegação no projeto.  
- **Shades of Purple** → Tema moderno e vibrante para melhorar a experiência visual no editor.  
- **Tailwind CSS IntelliSense** → Autocompletar e validação para classes do Tailwind CSS, tornando o uso mais ágil e confiável.  

---

### 📸 Recursos Adicionais

* A pasta `imagens` na raiz do repositório contém imagens que podem ser usadas para teste ao criar um novo produto.
* O arquivo `insomnia-backend.yaml`, localizado na pasta `backend-gestao-marketplace`, contém a coleção de endpoints que pode ser importada no Insomnia para facilitar os testes da API.

---

