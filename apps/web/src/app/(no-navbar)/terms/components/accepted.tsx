'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/cn'

export function Accepted() {
  const router = useRouter()
  const [accepted, setAccepted] = useState(false)

  /**
   * Toggles the `accepted` state.
   *
   * @returns {void}
   */
  const handleCheckboxChange = () => {
    setAccepted((prev) => !prev)
  }

  const handleContinue = () => {
    if (accepted) {
      alert('Termos aceitos. Você pode continuar.')
      router.push('/')
    }
  }

  return (
    <div className="mt-10 border-t pt-6">
      <label className="flex items-center gap-2 text-gray-700">
        <input
          checked={accepted}
          className="form-checkbox h-5 w-5 text-blue-600"
          name="terms"
          onChange={handleCheckboxChange}
          type="checkbox"
        />
        <span className="text-normal">
          Li e aceito os <strong>Termos de Uso</strong>.
        </span>
      </label>

      <button
        className={cn(
          'mt-6 px-6 py-3 rounded-md text-white font-medium transition-colors',
          accepted ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed',
          buttonVariants({
            variant: 'outline',
            size: 'sm'
          })
        )}
        disabled={!accepted}
        onClick={() => {
          void handleContinue()
        }}
        type="button"
      >
        Continuar
      </button>
    </div>
  )
}
