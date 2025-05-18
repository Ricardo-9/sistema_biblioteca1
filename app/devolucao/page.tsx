'use client'

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function Devolucao(){
const [form, setForm] = useState({id: "", data_d:"", senha: ""})

function handleChange(e: React.ChangeEvent<HTMLInputElement>){
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
}
async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    
}





    return(
        <div>
            <div>
            <h1>Devolução de Livros</h1>
            </div>

            <div>
                <form>
                    <input type="text" name="id" placeholder="ID do empréstimo"></input>
                    <input type="date" name="data_d" placeholder="Data de devolução"></input>
                    <input type="password" name="senha" placeholder="Senha"></input>
                </form>
            </div>
        </div>
        
        
    )
}