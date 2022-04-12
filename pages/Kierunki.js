import { GraphQLClient } from 'graphql-request'
import Layout from '../templates/Layout'
import { News } from '../components/News.js'
const graphcms = new GraphQLClient(
  'https://api-eu-central-1.graphcms.com/v2/ckw9gxfvl1igz01z27s9343r9/master'
)
const content = {
  title: 'Kierunki',
  description:
    'Nasza szkoła oferuje wszystkie ścieżki nauki wraz z najpopularniejszymi kierunkami i profilami dającymi realne zatrudnienie po szkole lub wymarzone studia.',
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
      where: { kategoria_in: [Kierunki] }
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
