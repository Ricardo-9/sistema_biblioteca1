// essa tela deve ser acessada apenas por funcionários
// ajeitar as permissões de usuários
'use client'

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function Devolucao(){
    return(
        <div>
            <h1>
                Cadastro de Devoluções
            </h1>
        </div>
    )
}