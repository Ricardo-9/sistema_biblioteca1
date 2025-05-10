'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function CadastroLivros() {
  const [form, setForm] = useState({
    nome: '',
    ano_publicacao: '',
    categoria: '',
    isbn: '',
    autor: '',
    q_disponivel : ''
  } )

  const [mensagem, setMensagem] = useState('')


  function handleChange(e: any) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const { error } = await supabase.from('livros').insert([form])

    if (error) {
      setMensagem('Erro ao cadastrar livro: ' + error.message)
    } else {
      setMensagem('livro cadastrado com sucesso!')
      setForm({
        nome: '',
        ano_publicacao: '',
        categoria: '',
        isbn: '',
        autor: '',
        q_disponivel : ''
      })
    }
  }

  return (
    <div>
      <h1>Cadastro de Livros</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome </label>
          <input name="nome" value={form.nome} onChange={handleChange} />
        </div>

        <div>
          <label>ano de publicacao</label>
          <input name="ano_publicacao" value={form.ano_publicacao} onChange={handleChange} />
        </div>

        <div>
          <label>categoria</label>
          <input name="categoria" value={form.categoria} onChange={handleChange} />
        </div>

        <div>
          <label>isbn</label>
          <input name="isbn" value={form.isbn} onChange={handleChange} />
        </div>

        <div>
          <label>autor</label>
          <input name="autor" value={form.autor} onChange={handleChange} />
        </div>
        <div>
          <label>Quantidade </label>
          <input name="q_disponivel" value={form.q_disponivel} onChange={handleChange} />
        </div>

        <button type="submit">Cadastrar</button>
      </form>

      {mensagem && <p>{mensagem}</p>}
    </div>
  )
}