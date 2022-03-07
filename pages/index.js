import { GraphQLClient } from 'graphql-request'
const graphcms = new GraphQLClient(
  'https://api-eu-central-1.graphcms.com/v2/ckw9gxfvl1igz01z27s9343r9/master'
)

import { Hero } from '../components/Hero.js'
import { Aboutschool } from '../components/Aboutschool.js'
import { News } from '../components/News.js'
import Layout from '../templates/Layout.js'

const content = {
  title: 'Poznaj naszą szkołę',
  description:
    'Żyjemy wszystkimi momentami naszej szkoły. Cenimy osiągnięcia i jesteśmy dumni z tego co robimy',
}

export default function Home({ data: article }) {
  return (
    <Layout title="Strona główna">
      <Hero />
      <Aboutschool />
      <div className="wrapper">
        <News props={article} content={content} />
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await graphcms.request(`
    {
      article(
      where: { kategoria_in: [Aktualnosci, Ogloszenia] }
      orderBy: dataNapisaniaArtykulu_DESC
      first: 3
                    )
    {
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
  `)
  return {
    props: {
      data,
    },
  }
}
