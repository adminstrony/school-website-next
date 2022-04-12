import Layout from '../templates/Layout'
import Link from 'next/link'
const NotFoundPage = () => {
  return (
    <Layout title="404:Nie znaleziono takiej strony">
      <div className="wrapper center min NotFoundPage">
        <iframe
          className="airtable-embed"
          src="https://airtable.com/embed/shrQPgnjLXuHnwZpA?backgroundColor=purple"
        ></iframe>
      </div>
    </Layout>
  )
}

export default NotFoundPage
