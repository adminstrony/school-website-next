import { gql } from '@apollo/client'
import client from '../lib/apollo-client.js'
import { Section } from '../templates/Section'
const Rekrutacja = ({ articles }) => {
  return (
    <Section
      articles={articles}
      extraArticle={nabor}
      span={sectionContent.span}
      title={sectionContent.title}
      description={sectionContent.description}
      objectfit="contain"
    />
  )
}

export default Rekrutacja

const sectionContent = {
  span: 'Rekrutacja',
  title: 'Zapisz się już teraz!',
  description:
    'Śledź zakładkę rekrutacja, aby nie przegapić naboru oraz złożyć podanie. Czekamy na Ciebie!',
}

const nabor = {
  slug: '/nabor',
  title: 'Nabór 2023/2024',
  glowneZdjecie: '/nabor.webp',
  description:
    'Złóż wniosek o przyjęcie do naszej szkoły korzystając z elektronicznego systemu',
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Articles {
        article(
          where: { kategoria_in: [Rekrutacja] }
          orderBy: dataNapisaniaArtykulu_DESC
          first: 1000
        ) {
          title
          slug
          articletext {
            text
          }
          glowneZdjecie {
            url
          }
        }
      }
    `,
  })
  return {
    props: { articles: data.article },
  }
}
