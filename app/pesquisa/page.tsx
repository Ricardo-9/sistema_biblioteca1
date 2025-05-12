'use client'

import {useState} from "react"
import {supabase} from "@/lib/supabaseClient"

export default function Pesquisa(){
    return(
        <div>
            <div>
                <h1>Escolha o que você quer pesquisar</h1>
            </div>
            <div>
                <button>Usuários</button>
            </div>
            <div>
                <button>Livros</button>
            <div>
                <button>Editoras</button>
            </div>
            </div>
        </div>
    )
}