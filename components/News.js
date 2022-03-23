import Image from 'next/image'
import Link from 'next/link'
import arrow from '../public/icon-arrow.svg'

export const News = ({ props: { article }, content, extra }) => {
  return (
    <section className="news">
      <div className="news-text">
        <h4>{content.title}</h4>
        <p>{content.description}</p>
      </div>
      <div className="newses">
        {article.map(({ slug, title, glowneZdjecie, articletext }, i) => (
          <Link href={slug} key={i}>
            <a key={i} className="miniature">
              <Image
                src={glowneZdjecie.url}
                alt=""
                width="370"
                height="252"
                objectFit="contain"
              />
              <h5>{title}</h5>
              <p>{articletext.text.slice(0, 88).replace(/\\n/g, ' ')}</p>
              <div className="arrow">
                <Image src={arrow} alt="" />
              </div>
            </a>
          </Link>
        ))}
        {extra && (
          <Link href={extra.link}>
            <a className="miniature">
              <Image
                src={extra.glowneZdjecie}
                alt=""
                width="370"
                height="252"
                objectFit="contain"
              />
              <h5>{extra.title}</h5>
              <p>{extra.description.slice(0, 88).replace(/\\n/g, ' ')}</p>
              <div className="arrow">
                <Image src={arrow} alt="" />
              </div>
            </a>
          </Link>
        )}
      </div>
    </section>
  )
}
