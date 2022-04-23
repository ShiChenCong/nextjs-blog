import Layout from '../components/layout'


export default function Home(props) {
  console.log(props)
  return (
    <Layout home>
    <img src={props.image} alt="scc" />
    </Layout>
  )
}

export async function getServerSideProps() {
    const res = await fetch('https://dog.ceo/api/breeds/image/random').then(r => r.json())
    return {
      props : {
        image: res.message
      }
  }
}
