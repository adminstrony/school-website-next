import { gql } from '@apollo/client'
import client from '../lib/apollo-client.js'
import { Section } from '../templates/Section'
const EgzaminyMatura = ({ articles }) => {
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

export default EgzaminyMatura

const sectionContent = {
  span: 'Egzaminy/Matura',
  title: 'Egzaminy oraz Matura 2023',
  description:
    'Dowiedz się jak przygotować się do egzaminów zawodowych oraz matury dzięki naszym artykułom.',
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Articles {
        article(
          where: { kategoria_in: [EgzaminyMatura] }
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
