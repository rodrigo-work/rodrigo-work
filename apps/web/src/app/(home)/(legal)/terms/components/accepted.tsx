'use client'

import { Button } from '@repo/design-system/components/ui/button'
import { cn } from '@repo/design-system/lib/utils'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

/**
 * A component that renders a checkbox and a button.
 *
 * The checkbox is labeled with "Li e aceito os Termos de Uso." and is
 * initially unchecked. When the checkbox is checked, the button is enabled.
 * When the button is clicked, an alert is shown with the message "Termos
 * aceitos. Você pode continuar." and the user is redirected to the root
 * route.
 *
 * @returns A JSX element.
 */
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

  /**
   * Handles the button click event.
   *
   * If the `accepted` state is truthy, shows an alert with the message
   * "Termos aceitos. Voc  pode continuar." and redirects the user to the
   * root route.
   *
   * @returns {void}
   */
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

      <Button
        className={cn(
          'mt-6 px-6 py-3 rounded-md text-white font-medium transition-colors',
          accepted ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
        )}
        disabled={!accepted}
        onClick={handleContinue}
      >
        Continuar
      </Button>
    </div>
  )
}
