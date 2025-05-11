//  Página de inicio funcional,caso Login ocorre o redirecionamento direto para 
//  a página de Login. Caso cadastro,ocorre a aparição de um botão para seleção 
//  da função Aluno ou Funcionário e conseguinte redirecionamneto para a devida 
//  página de cadastro.


'use client'
import { useState } from "react";

export default function TelaInicial() {
  const [acao, setAcao] = useState<"cadastro" | null>(null);

  function escolherAcao(acaoEscolhida: "login" | "cadastro") {
    if (acaoEscolhida === "login") {
      window.location.href = "/login";
    } else {
     
      setAcao("cadastro");
    }
  }

  return (
    <div>
      <p>Você é um?</p>
      <button onClick={() => escolherAcao("login")}>Login</button>
      <a href="/redefinir-senha" >Esqueci a senha</a>

      {acao && (
        <div>
          <a href={`/${acao}/aluno`}>
            <button>Aluno</button>
          </a>
          <a href={`/${acao}/funcionario`}>
            <button>Funcionário</button>
          </a>
        </div>
      )}
    </div>
  );
}