'use client'

import { useState } from "react"

export default function CadastroEditoras(){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [msg, setMsg] = useState('')

    const Submit = async (e: React.FormEvent) => {
        e.preventDefault()

        const res = await fetch('/api/cadastrar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email, telefone }),
          });

        const data = await res.json()
        setMsg(data.message)

        if(res.ok){
            setNome('')
            setEmail('')
            setMsg('')
        }
    }
    return(
        <div>
            <h1>Cadastro de Editoras</h1>

            <form onSubmit={Submit}>
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome"></input>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
                <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="Telefone"></input>
                <button type="submit">Cadastrar</button>
            </form>
            {msg && <p>{msg}</p>}
        </div>
    )
}