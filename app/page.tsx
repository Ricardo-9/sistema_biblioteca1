'use client'
import { useState } from "react";
import { useRouter } from "next/router";

export default function TelaInicial() {
  const router = useRouter();
  const [acao, setAcao] = useState<"login" | "cadastro" | null>(null);

  function escolherAcao(acaoEscolhida: "login" | "cadastro") {
    setAcao(acaoEscolhida);
  }
  function irParaPagina(tipo: "aluno" | "funcionario") {
    if (!acao) return;

    const caminho = `/${acao}/${tipo}`;
    router.push(caminho);
  }

  
  return (
    <div>
      
      <p>Você é um?</p>
      <button onClick={() => escolherAcao("login")}>Login</button>
      <button onClick={() => escolherAcao("cadastro")}>Cadastro</button>

      {acao && (
        <div>
          <button onClick={() => irParaPagina("aluno")}>Aluno</button>
          <button onClick={() => irParaPagina("funcionario")}>Funcionário</button>
        </div>
      )}
    </div>
  );
}