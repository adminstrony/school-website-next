import { GraphQLClient } from 'graphql-request'
import Layout from '../templates/Layout'
import { News } from '../components/News.js'
const graphcms = new GraphQLClient(
  'https://api-eu-central-1.graphcms.com/v2/ckw9gxfvl1igz01z27s9343r9/master'
)
const content = {
  title: 'Ogłoszenia',
  description:
    'Śledź na bieżąco zmiany w podziale godzin, dni wolne od zajęć oraz komunikaty dyrektora.',
}

const kalendarz = {
  link: '/kalendarz-wydarzen',
  title: 'Kalendarz wydarzeń 2021/2022  📅',
  glowneZdjecie: '/kalendarz.png',
  description:
    'Kalendarz wydarzeń, dni wolnych przewidzianych na rok 2021/2022',
}

const page = ({ data: article }) => {
  return (
    <Layout title={content.title}>
      <div className="wrapper">
        <News props={article} content={content} extrab={kalendarz} />
      </div>
    </Layout>
  )
}

export default page

export async function getStaticProps() {
  const data = await graphcms.request(`
    {
      article(
      where: { kategoria_in: [Ogloszenia] }
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
