import { gql } from '@apollo/client'
import client from '../lib/apollo-client.js'
import { Section } from '../templates/Section'
const oSzkole = ({ articles }) => {
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

export default oSzkole

const sectionContent = {
  span: 'oSzkole',
  title: 'Informacje o zespole szkół',
  description:
    'Znajdziesz tu przydatne informacje, duplikaty dokumentów oraz ważne wnioski min. refundacje, mLegitymacje czy przetargi.',
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Articles {
        article(
          where: { kategoria_in: [oSzkole] }
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
