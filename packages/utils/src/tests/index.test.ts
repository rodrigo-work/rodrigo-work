import { describe, expect, it, vi } from 'vitest'
import { helloUtils } from '../index'

describe('helloUtils', () => {
  it('deve exibir mensagem padrão se nenhuma for passada', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {})

    helloUtils()

    expect(spy).toHaveBeenCalledWith('Hello, World from @rodrigo-work/utils!')
    spy.mockRestore()
  })

  it('deve exibir a mensagem passada como argumento', () => {
    const spy = vi.spyOn(console, 'log').mockImplementation(() => {})

    helloUtils('Oi, Rodrigo!')

    expect(spy).toHaveBeenCalledWith('Oi, Rodrigo!')
    spy.mockRestore()
  })
})
