import Image from 'next/future/image'
import Link from 'next/link'

export const ArticleCards = ({ articles, objectfit, extraArticle }) => {
  console.log(objectfit)
  return (
    <div className="articleCards">
      {articles.map((article) => (
        <ArticleCard
          objectfit={objectfit}
          article={article}
          key={article.slug}
        />
      ))}
      {extraArticle && (
        <Link href={extraArticle.slug} key={extraArticle.slug}>
          <a className="articleCard">
            <Image
              style={{ objectFit: `${objectfit}` }}
              src={extraArticle.glowneZdjecie}
              alt=""
              width={370}
              height={252}
              className="glowneZdjecie"
              quality={100}
            />
            <h3>{extraArticle.title}</h3>
            <p>{extraArticle.description.slice(0, 88).replace(/\\n/g, ' ')}</p>
            <div className="arrow-container">
              <Image src="/arrow.svg" alt="" width={32} height={32} />
            </div>
          </a>
        </Link>
      )}
    </div>
  )
}

const ArticleCard = ({ article, objectfit }) => {
  return (
    <Link href={article.slug} key={article.slug}>
      <a className="articleCard">
        <Image
          style={{ objectFit: `${objectfit}` }}
          src={article.glowneZdjecie.url}
          alt=""
          width={370}
          height={252}
          className="glowneZdjecie"
          quality={100}
        />
        <h3>{article.title}</h3>
        <p>{article.articletext.text.slice(0, 88).replace(/\\n/g, ' ')}</p>
        <div className="arrow-container">
          <Image src="/arrow.svg" alt="" width={32} height={32} />
        </div>
      </a>
    </Link>
  )
}
