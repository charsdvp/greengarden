import { CardCategory } from '../components/CardCategory'

export const Home = () => {
  return (
    <>
      <div className="container-home">
        <div className="container-home-info">
          <h1 className='home-info-title'>¿Quieres conocer las herramientas y recursos más efectivos en el desarrollo web?</h1>
          <p>Este sitio web se dedica a proporcionar una cuidadosa selección de herramientas que son esenciales para cualquier desarrollador en busca de un camino más eficiente hacia el éxito en sus proyectos</p>
        </div>
        <img src="/blob.svg" alt="" />
      </div>
      <CardCategory />
    </>
  )
}
