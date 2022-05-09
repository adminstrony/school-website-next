import Layout from '../templates/Layout'
import Link from 'next/link'
const Index = () => {
  return (
    <Layout title="Kalendarz Wydarzeń" description="Kalendarz Wydarzeń">
      <div className="wrapper center min">
        <iframe
          className="kalendarz"
          src="https://archiwum2.zs2lancut.pl/index.php/o-nas/kalendarz-wydarzen"
          title="Kalendarz Wydarzen"
        ></iframe>
      </div>
    </Layout>
  )
}

export default Index
