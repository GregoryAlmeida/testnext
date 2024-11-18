'use client'
import React, { useEffect, useState } from 'react'

type IData = {
  id: string;
  nome: string;
  idade: number;
}

export default function Users() {
  const [data, setData] = useState<IData[]>([])
  
  const handleAPI = async() => {
    const response = await fetch('http://localhost:3000/api')
    setData(await response.json())
  }

  useEffect(() => {
    handleAPI()
  }, [])

  return (
    <section>
      {data.map(({id, nome, idade}) => (
        <div key={id} >
          <h2>{nome}</h2>
          <p>Idade: {idade}</p>
        </div>
      ))}
    </section>
  )
}
