'use client'

import {useState} from "react"
import {supabase} from "@/lib/supabaseClient"

export default function CadastroEditoras(){
    const [form, setForm] = useState({nome_l: "", nome_s: "", data_d: ""})
    const [msg, setMsg] = useState("")

    function handleChange(e: React.ChangeEvent<HTMLInputElement>){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e: React.FormEvent){
        e.preventDefault()

        const {error} = await supabase.from('emprestimos').insert([form])
        if (error) {
            setMsg("Não foi possível realizar o empréstimo")
          } else {
            setMsg("Empréstimo efetuado")
            setForm({nome_l: "", nome_s: "", data_d: ""})
          }
        }
    
    return(
        <div>
            <h1>Cadastro de Editoras</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nome_l" onChange={handleChange} value={form.nome_l} placeholder="Nome do Livro"></input>
                <input type="text" name="nome_s" onChange={handleChange} value={form.nome_s} placeholder="Nome do Solicitante"></input>
                <input type="text" name="data_d" onChange={handleChange} value={form.data_d} placeholder="Data de Devolução"></input>
                <button type="submit">Cadastrar</button>
            </form>
            {msg && <p>{msg}</p>}
        </div>
    )
}