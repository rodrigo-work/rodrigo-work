# 📦 @repo/seo

Este pacote faz parte do monorepo **[rodrigo-work](https://github.com/rodrigo-work/rodrigo-work)** e oferece soluções para otimização de mecanismos de busca (SEO) em aplicações.

O pacote fornece ferramentas para facilitar a integração de boas práticas de SEO, como configuração de meta tags, estruturação de dados, e geração de sitemaps, visando melhorar a visibilidade do seu site nos motores de busca.

---

## ⚙️ Funcionalidades

- Gerenciamento de meta tags para páginas dinâmicas.
- Suporte à geração automática de sitemaps.
- Ferramentas para integração de dados estruturados (JSON-LD).
- Funções para configuração de título, descrição e outras tags essenciais.
- Melhoria na performance de SEO para aplicações frontend e backend.

---

## 🔧 Instalação

Para instalar o pacote `@rodrigo-work/seo`, execute o seguinte comando:

```bash
npm install @rodrigo-work/seo
```

## 📚 Uso

### Configuração de Meta Tags


O pacote facilita a configuração de meta tags essenciais para SEO.

```js
import { setMetaTags } from '@rodrigo-work/seo';

setMetaTags({
  title: 'Minha Página',
  description: 'Descrição da minha página para SEO',
  keywords: 'SEO, exemplo, rodrigo-work',
  author: 'Seu Nome',
});
```

### Gerar Sitemap

A geração automática de sitemap é uma das funcionalidades principais.

```js
import { generateSitemap } from '@rodrigo-work/seo';

const sitemap = generateSitemap({
  pages: ['/home', '/sobre', '/contato'],
  host: 'https://meusite.com',
});

console.log(sitemap);
```

### Integração de Dados Estruturados (JSON-LD)

Você pode adicionar dados estruturados às suas páginas facilmente.

```js
import { addStructuredData } from '@rodrigo-work/seo';

addStructuredData({
  "@context": "http://schema.org",
  "@type": "WebSite",
  "name": "Meu Site",
  "url": "https://meusite.com",
});
```

## ⚠️ Aviso

Este pacote faz parte do monorepo [rodrigo-work](https://docs.rodrigo.work/packages/seo). As alterações neste pacote **devem ser feitas diretamente no monorepo**, e **não neste repositório**.

## 📚 Documentação

A documentação completa pode ser acessada em:
https://rodrigo.work/docs/packages/seo

## 🤝 Contribuindo

- Faça o fork deste repositório.
- Crie uma branch para sua feature (git checkout -b feature/nova-feature).
- Commit suas alterações (git commit -am 'Adiciona nova feature').
- Faça push para a branch (git push origin feature/nova-feature).
- Abra um Pull Request.

## 🛠️ Licença

Distribuído sob a licença MIT. Veja o arquivo [LICENSE](https://git.com/rodrigo-work/rodrigo-work/LICENSE) para mais detalhes.
