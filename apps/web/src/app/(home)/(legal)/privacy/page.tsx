import { settings } from '@/constants'
import { formatDateLong } from '@/lib/format'
import { createMetadata } from '@repo/seo/metadata'
import type { Metadata } from 'next'

export const generateMetadata = async (): Promise<Metadata> => {
  return createMetadata({
    title: 'Política de Privacidade',
    description: 'Política de Privacidade da rodrigo.work'
  })
}

export default function PrivacyPolicyPage() {
  return (
    <main className="px-4 py-12 z-2 w-full max-w-[1400px] mx-auto [--color-fd-border:color-mix(in_oklab,var(--color-fd-primary)_30%,transparent)]">
      <h1 className="text-4xl font-bold mb-6">Política de Privacidade</h1>

      <p className="mb-4 text-sm !dark:text-gray-500">
        {`Última atualização: ${formatDateLong(settings.PRIVACY_POLICY_AND_TERMS_OF_USE.LAST_UPDATED)}`}
      </p>

      <p className="mb-6">
        Esta Política de Privacidade descreve como suas informações pessoais são coletadas, usadas e
        compartilhadas ao visitar ou utilizar nossos serviços.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. Informações que coletamos</h2>
        <p className="mb-2">Podemos coletar os seguintes tipos de informações:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Fornecidas por você:</strong> nome, e-mail, telefone, etc.
          </li>
          <li>
            <strong>Coletadas automaticamente:</strong> endereço IP, navegador, tempo de visita.
          </li>
          <li>
            <strong>De terceiros:</strong> serviços de login social ou parceiros integrados.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. Como usamos suas informações</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Operar e melhorar nossos serviços</li>
          <li>Personalizar sua experiência</li>
          <li>Enviar comunicações e notificações</li>
          <li>Cumprir obrigações legais</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. Compartilhamento de informações</h2>
        <p className="mb-2">Não vendemos suas informações. Podemos compartilhar dados com:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Serviços de hospedagem, e-mail e análise</li>
          <li>Autoridades legais, quando exigido</li>
          <li>Parceiros confiáveis, mediante consentimento</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. Cookies e rastreamento</h2>
        <p className="mb-2">
          Utilizamos cookies para lembrar preferências e melhorar sua experiência. Você pode
          gerenciar ou desativar os cookies nas configurações do seu navegador.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">5. Proteção de dados</h2>
        <p className="mb-2">
          Adotamos medidas para proteger seus dados, incluindo criptografia e controle de acesso. No
          entanto, nenhum sistema é 100% seguro.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">6. Seus direitos</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Acessar e corrigir seus dados</li>
          <li>Solicitar exclusão</li>
          <li>Retirar consentimento</li>
          <li>Solicitar portabilidade</li>
        </ul>
        <p className="mt-2">
          Para exercer seus direitos, entre em contato:{' '}
          <a
            className="text-blue-600 hover:underline"
            href={`mailto:${settings.PRIVACY_POLICY_AND_TERMS_OF_USE.EMAIL}`}
          >
            {`${settings.PRIVACY_POLICY_AND_TERMS_OF_USE.EMAIL}`}
          </a>
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">7. Retenção de dados</h2>
        <p>
          Mantemos seus dados apenas pelo tempo necessário para cumprir as finalidades descritas
          nesta política, salvo obrigações legais.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">8. Alterações nesta política</h2>
        <p>
          Podemos atualizar esta Política de Privacidade. Recomendamos que você revise
          periodicamente. Mudanças significativas serão comunicadas.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">9. Contato</h2>
        <p>Dúvidas? Entre em contato:</p>
        <ul className="list-inside list-none mt-2">
          <li>
            <strong>Responsável:</strong> {settings.PRIVACY_POLICY_AND_TERMS_OF_USE.CONTACT_NAME}
          </li>
          <li>
            <strong>Email:</strong>
            ;(' ') ;
            <a
              className="text-blue-600 hover:underline"
              href={`mailto:${settings.PRIVACY_POLICY_AND_TERMS_OF_USE.EMAIL}`}
            >
              {`${settings.PRIVACY_POLICY_AND_TERMS_OF_USE.EMAIL}`}
            </a>
          </li>
          <li>
            <strong>Endereço:</strong>
            ;(' ') ;`${settings.PRIVACY_POLICY_AND_TERMS_OF_USE.ADDRESS.CITY}, $
            {settings.PRIVACY_POLICY_AND_TERMS_OF_USE.ADDRESS.STATE} - $
            {settings.PRIVACY_POLICY_AND_TERMS_OF_USE.ADDRESS.COUNTRY}`
          </li>
        </ul>
      </section>

      <p className="mt-10 text-sm !dark:text-gray-500 italic">
        Ao continuar utilizando nossos serviços, você concorda com esta Política de Privacidade.
      </p>
    </main>
  )
}
