import { GraphQLClient } from 'graphql-request'
import Layout from '../templates/Layout'
import { News } from '../components/News.js'
const graphcms = new GraphQLClient(
  'https://api-eu-central-1.graphcms.com/v2/ckw9gxfvl1igz01z27s9343r9/master'
)
const content = {
  title: 'Stowarzyszenie',
  description:
    'Żyjemy wszystkimi momentami naszej szkoły. Cenimy osiągnięcia i jesteśmy dumni z tego co robimy.',
}
const page = ({ data: article }) => {
  return (
    <Layout title={content.title}>
      <div className="wrapper">
        <News props={article} content={content} />
      </div>
    </Layout>
  )
}

export default page

export async function getStaticProps() {
  const data = await graphcms.request(`
    {
      article(
      where: { kategoria_in: [Stowarzyszenie] }
      orderBy: dataNapisaniaArtykulu_DESC
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
