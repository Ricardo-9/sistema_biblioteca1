'use client'

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function CadastroEditoras() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "" });
  const [msg, setMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let { name, value } = e.target;

    if (name === "telefone") {
      // Remove todos os caracteres que não são números
      value = value.replace(/\D/g, "");

      // Adiciona a formatação: (XX) X XXXX-XXXX
      if (value.length > 0) {
        value = value.replace(/^(\d{2})(\d)/, "($1) $2");
      }
      if (value.length >= 7) {
        value = value.replace(/(\d{1})(\d{4})(\d{4}).*/, "$1 $2-$3");
      }
    }

    setForm({
      ...form,
      [name]: value
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Valida se o telefone está completo (15 caracteres no formato esperado)
    if (form.telefone.length < 15) {
      setMsg("Telefone incompleto");
      return;
    }

    const { error } = await supabase.from('editoras').insert([form]);

    if (error) {
      setMsg("Não foi possível cadastrar a editora");
    } else {
      setMsg("Cadastro concluído");
      setForm({ nome: "", email: "", telefone: "" });
    }
  }

  return (
    <div>
      <h1>Cadastro de Editoras</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          onChange={handleChange}
          value={form.nome}
          placeholder="Nome"
          required
        />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={form.email}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="telefone"
          onChange={handleChange}
          value={form.telefone}
          placeholder="Telefone"
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}