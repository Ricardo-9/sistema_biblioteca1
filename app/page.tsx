// pages/profiles.tsx
'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function ProfilesPage() {
  const [profiles, setProfiles] = useState<any[]>([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const { data, error } = await supabase.from('profiles').select('*')
      if (error) console.error(error)
      else setProfiles(data)
    }

    fetchProfiles()
  }, [])

  return (
    <div>
      <h1>Teste de conexão com Banco de Dados</h1>
      <ul>
  {profiles.length === 0 ? (
    <li>Nenhuma tabela encontrada</li>
  ) : (
    profiles.map((profile) => (
      <li key={profile.id}>{JSON.stringify(profile)}</li>
    ))
  )}
</ul>
    </div>
  )
}
