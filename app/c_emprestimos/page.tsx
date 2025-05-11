'use client'

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function CadastroEmprestimos() {

  const [form, setForm] = useState({
    nome_livro: "",
    nome_pessoa: "",
    data_devolucao: ""
  });

  const [msg, setMsg] = useState<string | null>(null);

  const verificarLivro = async () => {
    const { data, error } = await supabase
      .from('livros')
      .select('id')
      .ilike('nome', form.nome_livro)
      .maybeSingle();

    if (error || !data) {
      return false;
    }
    return true;
  };

  const verificarSolicitante = async () => {
    const { data, error } = await supabase
      .from('usuarios')
      .select('id')
      .ilike('nome', form.nome_pessoa)
      .maybeSingle();

    if (error || !data) {
      return false;
    }
    return true;
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const livroValido = await verificarLivro();
    const solicitanteValido = await verificarSolicitante();

    if (!livroValido || !solicitanteValido) {
      setMsg("Livro ou usuário não cadastrado");
      return;
    }

    const { error } = await supabase.from('emprestimos').insert([form]);

    if (error) {
      setMsg("Ocorreu um erro ao cadastrar o empréstimo.");
    } else {
      setMsg("Empréstimo efetuado com sucesso.");
      setForm({ nome_livro: "", nome_pessoa: "", data_devolucao: "" });
    }
  }

  return (
    <div>
      <h1>Cadastro de Empréstimos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome_livro">Nome do Livro: </label>
          <input
            type="text"
            name="nome_livro"
            value={form.nome_livro}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="nome_pessoa">Nome do Solicitante: </label>
          <input
            type="text"
            name="nome_pessoa"
            value={form.nome_pessoa}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="data_devolucao">Data de Devolução: </label>
          <input
            type="date"
            name="data_devolucao"
            value={form.data_devolucao}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}