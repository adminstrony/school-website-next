import { Layout } from '../templates/Layout.js'
import { Hero } from '../components/Hero'

import { SectionSchool, SectionArticle } from '../components/Sections'

import { gql } from '@apollo/client'
import client from '../lib/apollo-client.js'

const index = ({ articles }) => {
  return (
    <Layout title="Strona główna">
      <Hero />
      <SectionSchool />
      <SectionArticle
        articles={articles}
        objectfit="cover"
        span={sectionContent.span}
        title={sectionContent.title}
        description={sectionContent.description}
      />
    </Layout>
  )
}

export default index

const sectionContent = {
  span: 'Aktualności',
  title: 'Zobacz co u nas się dzieje!',
  description:
    'Żyjemy wszystkimi momentami naszej szkoły. Cenimy osiągnięcia i jesteśmy dumni z tego, co robimy. Rozwijamy nasze pasje i wygrywamy w konkursach.',
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Articles {
        article(
          where: { kategoria_in: [Aktualnosci] }
          orderBy: dataNapisaniaArtykulu_DESC
          first: 3
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
