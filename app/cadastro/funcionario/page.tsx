// Tela de cadastro de funcionários funcional. A tela valida se todos os campos
// foram preenchidos antes de enviar os dados ao Supabase e exibe mensagens 
// de sucesso ou erro conforme o resultado do cadastro.
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


  function handleChange(e:React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const camposVazios = Object.entries(form).filter(([chave, valor]) => valor.trim() === '');

    if (camposVazios.length > 0) {
    setMensagem('Por favor, preencha todos os campos.');
    return;
}

    const { error } = await supabase.from('funcionarios').insert([form])

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
          <input type="email"name="email" value={form.email} onChange={handleChange} />
        </div>

        <div>
          <label>Telefone</label>
          <input name="telefone" value={form.telefone} onChange={handleChange} />
        </div>

        <div>
          <label>Senha</label>
          <input type="password" name="senha" value={form.senha} onChange={handleChange} />
        </div>

        <button type="submit">Cadastrar</button>
      </form>

      {mensagem && <p>{mensagem}</p>}
    </div>
  )
}