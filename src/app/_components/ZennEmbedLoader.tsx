// app/_components/ZennEmbedLoader.tsx
'use client'

import { useEffect } from 'react'

export default function ZennEmbedLoader() {
  useEffect(() => {
    import('zenn-embed-elements')
  }, [])

  return null
}