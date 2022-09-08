import { gql } from '@apollo/client'
import client from '../lib/apollo-client.js'
import { Section } from '../templates/Section'
const Kierunki = ({ articles }) => {
  return (
    <Section
      articles={articles}
      span={sectionContent.span}
      title={sectionContent.title}
      description={sectionContent.description}
      objectfit="cover"
    />
  )
}

export default Kierunki

const sectionContent = {
  span: 'Kierunki',
  title: 'Sprawdź kierunki kształcenia',
  description:
    'Nasza szkoła oferuje wszystkie ścieżki nauki wraz z najpopularniejszymi kierunkami i profilami dającymi realne zatrudnienie po szkole lub wymarzone studia.',
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Articles {
        article(
          where: { kategoria_in: [Kierunki] }
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
