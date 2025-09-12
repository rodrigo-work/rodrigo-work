import { settings } from '@/constants'
import { formatDateLong } from '@/lib/format'
import { createMetadata } from '@repo/seo'
import type { Metadata } from 'next'
import { Accepted } from './components/accepted'

export const generateMetadata = async (): Promise<Metadata> => {
  return createMetadata({
    title: 'Termos de Uso',
    description: 'Termos de Uso da rodrigo.work'
  })
}

export default async function TermsOfUsePage() {
  return (
    <main className="px-4 py-12 z-2 w-full max-w-[1400px] mx-auto [--color-fd-border:color-mix(in_oklab,var(--color-fd-primary)_30%,transparent)]">
      <h1 className="text-4xl font-bold mb-6">Termos de Uso</h1>

      <p className="mb-4 text-sm !dark:text-gray-500">
        {`Última atualização: ${formatDateLong(settings.PRIVACY_POLICY_AND_TERMS_OF_USE.LAST_UPDATED)} `}
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
        <p>
          Ao utilizar o <strong>nossos produtos e ou serviços</strong>, você concorda com estes
          Termos de Uso e com todas as leis e regulamentos aplicáveis. Se você não concordar com
          qualquer um desses termos, está proibido de usar ou acessar este site.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. Uso Permitido</h2>
        <p className="mb-2">Você concorda em não:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Usar o serviço para fins ilegais ou não autorizados</li>
          <li>Modificar, copiar ou distribuir o conteúdo sem permissão</li>
          <li>Violar direitos de propriedade intelectual</li>
          <li>Interferir na segurança ou funcionamento do serviço</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. Conta do Usuário</h2>
        <p>
          Ao criar uma conta, você é responsável por manter a confidencialidade de sua senha e por
          todas as atividades realizadas com sua conta. Notifique-nos imediatamente em caso de uso
          não autorizado.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. Propriedade Intelectual</h2>
        <p>
          Todo o conteúdo disponível, incluindo textos, gráficos, logotipos e ícones, é propriedade
          do
          <strong> {`${settings.PRIVACY_POLICY_AND_TERMS_OF_USE.NAME}`}</strong> ou de seus
          licenciadores e é protegido por leis de direitos autorais.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">5. Limitação de Responsabilidade</h2>
        <p>
          Não nos responsabilizamos por danos diretos, indiretos ou consequenciais decorrentes do
          uso ou da impossibilidade de uso dos nossos serviços.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">6. Modificações</h2>
        <p>
          Reservamo-nos o direito de revisar estes Termos de Uso a qualquer momento. Ao continuar
          utilizando o serviço após alterações, você concorda com os termos atualizados.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">7. Jurisdição</h2>
        <p>
          Estes Termos serão regidos e interpretados de acordo com as leis do{' '}
          <strong>{`${settings.PRIVACY_POLICY_AND_TERMS_OF_USE.ADDRESS.STATE} - ${settings.PRIVACY_POLICY_AND_TERMS_OF_USE.ADDRESS.COUNTRY}`}</strong>
          . Em caso de litígios, fica eleito o foro da comarca de{' '}
          <strong>{`${settings.PRIVACY_POLICY_AND_TERMS_OF_USE.ADDRESS.CITY}`}</strong>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">8. Contato</h2>
        <p>Dúvidas sobre estes termos? Fale com a gente:</p>
        <ul className="mt-2 list-inside list-none">
          <li>
            <strong>Email:</strong>{' '}
            <a
              className="text-blue-600 hover:underline"
              href={`mailto:${settings.PRIVACY_POLICY_AND_TERMS_OF_USE.EMAIL}`}
            >
              {settings.PRIVACY_POLICY_AND_TERMS_OF_USE.EMAIL}
            </a>
          </li>
          <li>
            <strong>Endereço:</strong>{' '}
            {`${settings.PRIVACY_POLICY_AND_TERMS_OF_USE.ADDRESS.CITY} - ${settings.PRIVACY_POLICY_AND_TERMS_OF_USE.ADDRESS.STATE}, ${settings.PRIVACY_POLICY_AND_TERMS_OF_USE.ADDRESS.COUNTRY}`}
          </li>
        </ul>
      </section>

      <p className="mt-10 text-sm !dark:text-gray-500 italic">
        Ao continuar usando nossos serviços, você concorda com estes Termos de Uso.
      </p>

      <Accepted />
    </main>
  )
}
