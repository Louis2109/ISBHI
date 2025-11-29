//frontend/components/BootstrapClient.tsx
'use client'

import { useEffect } from 'react'

export default function BootstrapClient() {
  useEffect(() => {
    // @ts-ignore - Bootstrap JS n'a pas de types pour ce module
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .catch(err => console.error("Bootstrap JS not loaded:", err))
  }, [])

  return null
}
