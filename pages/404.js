import Layout from '../templates/Layout'
import Link from 'next/link'
const NotFoundPage = () => {
  return (
    <Layout title="404:Nie znaleziono takiej strony">
      <div className="wrapper center min NotFoundPage">
        <div>
          <h2>Coś poszło nie tak :/</h2>
          <p>
            Ciągle staramy się przebudowywać stronę, <br />
            aby jak najwygodniej Ci się z niej korzystało
          </p>
          <p>
            Jeśli jesteś Nauczycielem proszę o <br />
            zgłoszenie tego administratorowi strony
          </p>
          <Link href="/" passHref>
            Wróć do strony głównej
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
