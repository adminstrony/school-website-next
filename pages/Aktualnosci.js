import { gql } from '@apollo/client'
import client from '../lib/apollo-client.js'
import { Section } from '../templates/Section'
const Aktualnosci = ({ articles }) => {
  return (
    <Section
      articles={articles}
      objectfit="cover"
      span={sectionContent.span}
      title={sectionContent.title}
      description={sectionContent.description}
    />
  )
}

export default Aktualnosci

const sectionContent = {
  span: 'Aktualności',
  title: 'Zobacz co u nas dzieje!',
  description:
    'Żyjemy wszystkimi momentami naszej szkoły. Cenimy osiągnięcia i jesteśmy dumni z tego, co robimy. Rozwijamy nasze pasję i wygrywamy w konkursach.',
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Articles {
        article(
          where: { kategoria_in: [Aktualnosci] }
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
