import { supabase } from '@/lib/supabaseClient';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { nome, email, telefone } = await request.json();

  const { error } = await supabase.from('editoras').insert([{ nome, email, telefone }]);

  if (error) {
    console.error(error);
    return NextResponse.json({ message: 'Erro ao cadastrar usuário.' }, { status: 500 });
  }

  return NextResponse.json({ message: 'Usuário cadastrado com sucesso!' });
}