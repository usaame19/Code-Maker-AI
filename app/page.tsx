'use client'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { AuthOptions } from './api/auth/[...nextauth]/AuthOptions'

export default async function Home() {
  const session = await getServerSession(AuthOptions)

  
  console.log('session', session)
  return (
    <main>
      <h1>{session?.user?.name}</h1>
    </main>
  )
}
