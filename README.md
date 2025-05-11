📚 Sistema de Biblioteca Escolar
Este é um sistema de gerenciamento de biblioteca desenvolvido para uso interno em uma escola. A aplicação permite o cadastro e login de alunos e funcionários, controle de reservas e empréstimos de livros, e gerenciamento de dados relacionados.

🧾 Descrição do Projeto
O sistema possibilita:

-Cadastro e login de alunos e funcionários ;
-Cadastro de editoras e livros , com controle de quantidade disponível ;
-Registro de empréstimos de livros , com verificação de disponibilidade;
-Validação de campos obrigatórios nos formulários;
-Redefinição de senha para usuários.

🛠️ Tecnologias Utilizadas
-Next.js (React com suporte SSR e rotas automáticas)
-TypeScript (tipagem estática para maior segurança)
-Supabase (backend com banco de dados PostgreSQL e autenticação)
-CSS/HTML básico (com possibilidade de melhorias em UI/UX)
-Fetch API /hooks para chamadas assíncronas ao banco

🔐 Autenticação
A autenticação é feita verificando o e-mail e a senha nas tabelas alunose funcionariosdo Supabase.

🧭 Navegação pelas páginas
-/: Tela inicial com seleção de login ou cadastro
-/login: Login geral com detecção de tipo de usuário
-/cadastro/aluno: Cadastro de novos alunos
-/cadastro/funcionario: Cadastro de novos funcionários
-/c_livros: Cadastro de novos livros
-/c_emprestimos: Cadastro de novos empréstimos
-/c_editoras: Cadastro de novas editoras

