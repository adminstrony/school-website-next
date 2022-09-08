import { gql } from '@apollo/client'
import client from '../lib/apollo-client.js'
import { Section } from '../templates/Section'
const Stowarzyszenie = ({ articles }) => {
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

export default Stowarzyszenie

const sectionContent = {
  span: 'Stowarzyszenie',
  title: 'Informacje o stowarzyszeniu',
  description:
    'Znajdziesz tu przydatne informacje, duplikaty dokumentów oraz ważne wnioski oraz przetargi dotyczące stowarzyszenia.',
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Articles {
        article(
          where: { kategoria_in: [Stowarzyszenie] }
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
