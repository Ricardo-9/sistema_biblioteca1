'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function CadastroFuncionario() {
  const [form, setForm] = useState({
    nome: '',
    funcao: '',
    cpf: '',
    matricula: '',
    endereco: '',
    email: '',
    telefone: '',
    senha:''
    
  })

  const [mensagem, setMensagem] = useState('')


  function handleChange(e: any) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const { error } = await supabase.from('alunos').insert([form])

    if (error) {
      setMensagem('Erro ao cadastrar funcionário: ' + error.message)
    } else {
      setMensagem('Funcionário cadastrado com sucesso!')
      setForm({
        nome: '',
        funcao:'',
        cpf: '',
        matricula: '',
        endereco: '',
        email: '',
        telefone: '',
        senha:''
        
      })
    }
  }

  return (
    <div>
      <h1>Cadastro de Funcionários</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input name="nome" value={form.nome} onChange={handleChange} />
        </div>

        <div>
          <label>Função</label>
          <input name="funcao" value={form.funcao} onChange={handleChange} />
        </div>

        <div>
          <label>CPF</label>
          <input name="cpf" value={form.cpf} onChange={handleChange} />
        </div>

        <div>
          <label>Matrícula</label>
          <input name="matricula" value={form.matricula} onChange={handleChange} />
        </div>

        <div>
          <label>Endereço</label>
          <input name="endereco" value={form.endereco} onChange={handleChange} />
        </div>

        <div>
          <label>Email</label>
          <input name="email" value={form.email} onChange={handleChange} />
        </div>

        <div>
          <label>Telefone</label>
          <input name="telefone" value={form.telefone} onChange={handleChange} />
        </div>

        <div>
          <label>Senha</label>
          <input name="senha" value={form.senha} onChange={handleChange} />
        </div>

        <button type="submit">Cadastrar</button>
      </form>

      {mensagem && <p>{mensagem}</p>}
    </div>
  )
}