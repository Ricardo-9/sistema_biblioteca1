'use client'
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password || !name) {
      setError('Todos os campos são obrigatórios');
      return;
    }

    try {
      // Criando o usuário no Supabase
      const { data: user, error: signupError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signupError) {
        setError(signupError.message);
        return;
      }

      // Verificando se o usuário foi criado com sucesso
      if (user) {
        console.log('Usuário criado:', user);  // Verifique o conteúdo do usuário

        // Inserindo dados adicionais do usuário na tabela "profiles"
        const { error: insertError } = await supabase
          .from('profiles')
          .upsert(
            [
              { user_id: user.id, name: name }
            ], 
            { onConflict: ['user_id'] }  // Passando 'user_id' como uma string
          );

        if (insertError) {
          setError('Erro ao salvar o perfil: ' + insertError.message);
          return;
        }
      }
    } catch (err) {
      console.error(err);
      setError('Erro inesperado, tente novamente.');
    }
  };

  return (
    <div className="container">
      <h1>Cadastro</h1>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Signup;