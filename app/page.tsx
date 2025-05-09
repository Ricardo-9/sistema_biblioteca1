'use client'
import { useState } from "react";

export default function TelaInicial() {
  const [acao, setAcao] = useState<"login" | "cadastro" | null>(null);

  function escolherAcao(acaoEscolhida: "login" | "cadastro") {
    setAcao(acaoEscolhida);
  }

  return (

    <div className="">
      <p>Você é um?</p>
      <button onClick={() => escolherAcao("login")}>Login</button>
      <button onClick={() => escolherAcao("cadastro")}>Cadastro</button>

      {acao && (
        <div>
          <a href={`/${acao}/aluno`}>
            <button>Aluno</button>
          </a>
          <a href={`/${acao}/funcionario`}>
            <button>Funcionário</button>
          </a>
          <h1>Bem-vindo à Página Inicial</h1>
      <p>Para testar a navegação, clique no link abaixo:</p>
      <a href="/teste">
        <button>Ir para a página de teste</button>
      </a>
        </div>
      )}
    </div>
  );
}