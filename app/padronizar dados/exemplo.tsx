// padronização dos inputs. Basicamente uma máscara para os campos "telefone" e "cpf"
// para mais detalhes, ver /c_editoras
'use client'

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function Exemplo() {
    
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
}
return(
    <input
          type="text"
          name="telefone"
          onChange={handleChange}
          value={''}
          placeholder="Telefone"
          required
        />
)}
// para o campo CPF
function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let { name, value } = e.target;

    // Máscara para telefone: (XX) X XXXX-XXXX
    if (name === "telefone") {
      value = value.replace(/\D/g, "");
      if (value.length > 0) {
        value = value.replace(/^(\d{2})(\d)/, "($1) $2");
      }
      if (value.length >= 7) {
        value = value.replace(/(\d{1})(\d{4})(\d{4}).*/, "$1 $2-$3");
      }
    }

    // Máscara para CPF: XXX.XXX.XXX-XX
    if (name === "cpf") {
      value = value.replace(/\D/g, "");
      value = value
        .replace(/^(\d{3})(\d)/, "$1.$2")
        .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d{1,2}).*/, "$1.$2.$3-$4");
    }
}// e segue a mesma lógica que o campo Telefone na hora de adicionar o input "CPF" no código
