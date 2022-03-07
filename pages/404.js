import Layout from '../templates/Layout'
import Link from 'next/link'
const NotFoundPage = () => {
  return (
    <Layout title="404:Nie znaleziono takiej strony">
      <div className="wrapper center NotFoundPage">
        <Link href="/">Nie znaleziono takiej strony</Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
