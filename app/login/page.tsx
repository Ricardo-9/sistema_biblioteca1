



'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    senha: '',
  })

  const [mensagem, setMensagem] = useState('')

  function handleChange(e: any) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const { email, senha } = form

    
    const { data: aluno } = await supabase
      .from('alunos')
      .select('*')
      .eq('email', email)
      .single()

    const { data: funcionario } = await supabase
      .from('funcionarios')
      .select('*')
      .eq('email', email)
      .single()

    const usuario = aluno || funcionario

    if (!usuario) {
      setMensagem('Email não encontrado.')
      return
    }

    if (usuario.senha !== senha) {
      setMensagem('Senha incorreta.')
      return
    }

    setMensagem('Login bem-sucedido!')
    window.location.href = '/teste' 
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Senha</label>
          <input
            type="password"
            name="senha"
            value={form.senha}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Entrar</button>
      </form>
      <button type="button" onClick={() => window.location.href = '/redefinir-senha'}>
    Esqueceu a senha?
  </button>

      {mensagem && <p>{mensagem}</p>}
    </div>
  )
}