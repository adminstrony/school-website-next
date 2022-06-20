import Layout from '../templates/Layout'
const NotFoundPage = () => {
  return (
    <Layout title="404:Nie znaleziono takiej strony">
      <div className="wrapper center min NotFoundPage">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfICVfL8s16d5CK0MAJp57yPGtrdoLLBgpFu8W4g8Bfr1t_ug/viewform?embedded=true" />
      </div>
    </Layout>
  )
}

export default NotFoundPage
