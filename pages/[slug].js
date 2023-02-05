import { GraphQLClient } from 'graphql-request'
import { useRouter } from 'next/router'
import Image from 'next/legacy/image'
import Link from 'next/link'
import { Layout } from '../templates/Layout'
const graphcms = new GraphQLClient(
  'https://api-eu-central-1.graphcms.com/v2/ckw9gxfvl1igz01z27s9343r9/master'
)

import { gql } from '@apollo/client'
import client from '../lib/apollo-client.js'

const Article = ({ article }) => {
  const date = article.dataNapisaniaArtykulu.replaceAll('-', '/')
  const router = useRouter()
  const html = article.articletext.html
  return (
    <Layout
      title={article.title}
      description={article.articletext.text.replace(/\\n/g, ' ')}
    >
      <article>
        <div className="article-image-wrapper">
          {article.kategoria === 'Aktualnosci' && (
            <Link href={article.glowneZdjecie.url}>
              <Image
                src={article.glowneZdjecie.url}
                alt=""
                width={710}
                height={525}
                quality={100}
                priority
                className="article-image"
              />
            </Link>
          )}
        </div>
        <div className="article">
          <div>
            <span>{date}</span>
            <h1>{article.title}</h1>
          </div>

          <div
            className="article__content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          {article.pliki[0] && (
            <div className="files">
              {article.pliki.map((pliki, i) => (
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
          {article.zdjecia[0] && (
            <>
              <div className="article-photos-container">
                <span>Galeria zdjęć:</span>
                {article.zdjecia.map((img, i) => (
                  <Link key={i} href={img.url}>
                    <Image src={img.url} alt="" width={710} height={525} />
                  </Link>
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
        </div>
      </article>
    </Layout>
  )
}

export default Article

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      {
        article(first: 1000) {
          slug
        }
      }
    `,
  })
  const { article } = data
  const paths = article.map(({ slug }) => ({
    params: { slug },
  }))
  return { paths, fallback: true }
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
        dataNapisaniaArtykulu
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
      article: article[0],
    },
  }
}
