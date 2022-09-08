import { Layout } from '../templates/Layout.js'
import { SectionArticle } from '../components/Sections'
export const Section = ({
  articles,
  objectfit,
  span,
  title,
  description,
  extraArticle,
}) => {
  return (
    <Layout title={span}>
      <SectionArticle
        articles={articles}
        span={span}
        title={title}
        description={description}
        objectfit={objectfit}
        extraArticle={extraArticle}
      />
    </Layout>
  )
}
