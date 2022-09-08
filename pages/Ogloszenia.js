import { gql } from '@apollo/client'
import client from '../lib/apollo-client.js'
import { Section } from '../templates/Section'
const Ogloszenia = ({ articles }) => {
  return (
    <Section
      articles={articles}
      span={sectionContent.span}
      title={sectionContent.title}
      description={sectionContent.description}
      objectfit="contain"
    />
  )
}

export default Ogloszenia

const sectionContent = {
  span: 'Ogloszenia',
  title: 'Sprawdzaj komunikaty',
  description:
    'Śledź na bieżąco zmiany w podziale godzin, dni wolne od zajęć oraz komunikaty dyrektora.',
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Articles {
        article(
          where: { kategoria_in: [Ogloszenia] }
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
