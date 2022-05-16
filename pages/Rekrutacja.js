import { GraphQLClient } from 'graphql-request'
import Layout from '../templates/Layout'
import { News } from '../components/News.js'
const graphcms = new GraphQLClient(
  'https://api-eu-central-1.graphcms.com/v2/ckw9gxfvl1igz01z27s9343r9/master'
)
const content = {
  title: 'Rekrutacja',
  description:
    'Śledź zakładkę rekrutacja, aby nie przegapić naboru oraz złożyć podanie. Czekamy na Ciebie!',
}
const nabor = {
  link: '/nabor',
  title: 'Nabór 2022/2023',
  glowneZdjecie: '/nabor.webp',
  description:
    'Złóż wniosek o przyjęcie do naszej szkoły korzystając z elektronicznego systemu',
}
const page = ({ data: article }) => {
  return (
    <Layout title={content.title}>
      <div className="wrapper">
        <News props={article} content={content} extra={nabor} />
      </div>
    </Layout>
  )
}

export default page

export async function getStaticProps() {
  const data = await graphcms.request(`
    {
      article(
      where: { kategoria_in: [Rekrutacja] }
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
