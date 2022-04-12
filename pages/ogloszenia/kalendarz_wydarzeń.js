import Layout from '../templates/Layout'
import Link from 'next/link'
const Index = () => {
  return (
    <Layout title="Kalendarz Wydarzeń">
      <div className="wrapper center min">
        <Link
          href="https://archiwum2.zs2lancut.pl/index.php/o-nas/kalendarz-wydarzen"
          passHref
        >
          <h1>Kalendarz Wydarzeń</h1>
        </Link>
      </div>
    </Layout>
  )
}

export default Index
