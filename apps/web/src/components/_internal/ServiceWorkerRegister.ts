'use client'

import { useEffect } from 'react'
import { Workbox } from 'workbox-window'

const ServiceWorkerRegister = (): boolean => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      const wb = new Workbox('/sw.js')

      wb.addEventListener('waiting', () => {
        console.log('[WB] Novo SW esperando...')
        // Aqui você pode mostrar um botão de "Atualizar"
        wb.messageSW({ type: 'SKIP_WAITING' })
      })

      wb.addEventListener('activated', (event) => {
        if (!event.isUpdate) {
          console.log('[WB] SW ativado pela primeira vez')
        } else {
          console.log('[WB] SW atualizado')
        }
      })

      wb.register().catch((error) => {
        console.error('[WB] Falha ao registrar SW:', error)
      })
    }
  }, [])

  return false
}

export default ServiceWorkerRegister
