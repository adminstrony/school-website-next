import { GraphQLClient } from 'graphql-request'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Layout from '../templates/Layout'
const graphcms = new GraphQLClient(
  'https://api-eu-central-1.graphcms.com/v2/ckw9gxfvl1igz01z27s9343r9/master'
)

const Article = ({ article }) => {
  const router = useRouter()
  const html = article[0].articletext.html
  return (
    <Layout
      title={article[0].title}
      description={article[0].articletext.text.replace(/\\n/g, ' ')}
    >
      <article className="article wrapper">
        {article[0].kategoria === 'Aktualnosci' ? (
          <a href={article[0].glowneZdjecie.url}>
            <Image
              src={article[0].glowneZdjecie.url}
              alt=""
              width={800}
              height={506}
              objectFit="contain"
            />
          </a>
        ) : (
          <Image
            src={article[0].glowneZdjecie.url}
            alt=""
            width={800}
            height={506}
            objectFit="contain"
          />
        )}
        <h1>{article[0].title}</h1>
        <div
          className="article__content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {article[0].pliki[0] && (
          <div className="files">
            {article[0].pliki.map((pliki, i) => (
              <a key={i} href={pliki.url}>
                {pliki.fileName}
              </a>
            ))}
          </div>
        )}
        <div className="button-wrapper">
          <button
            onClick={() => router.back()}
            className="article__button-Back"
          >
            ← Wróć do bloga
          </button>
        </div>
        {article[0].zdjecia[0] && (
          <>
            <div className="article__photos-container">
              {article[0].zdjecia.map((img, i) => (
                <a key={i} href={img.url}>
                  <Image
                    src={img.url}
                    alt=""
                    width={800}
                    height={506}
                    objectFit="contain"
                  />
                </a>
              ))}
            </div>
            <div className="button-wrapper">
              <button
                onClick={() => router.back()}
                className="article__button-Back"
              >
                ← Wróć do bloga
              </button>
            </div>
          </>
        )}
      </article>
    </Layout>
  )
}

export default Article

export async function getStaticPaths() {
  const { article } = await graphcms.request(`
    {
    article(first: 1000) {
      slug
      }
    }
     `)
  const paths = article.map(({ slug }) => ({
    params: { slug },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { article } = await graphcms.request(
    `
    query ProductPageQuery($slug: String!){
      article(
        first: 1000
        orderBy: dataNapisaniaArtykulu_DESC
        where: { slug: $slug }
        ) {
        slug
        title
        kategoria
        articletext {
          html
          text
        }
        glowneZdjecie {
          url
        }
        zdjecia {
          url
        }
        pliki {
          fileName
          url
        }
      }
    }
    `,
    {
      slug: params.slug,
    }
  )
  return {
    props: {
      article: article,
    },
  }
}
