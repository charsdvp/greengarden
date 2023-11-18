import { useParams } from 'react-router-dom'
import { getDataById } from '../helpers/getDataById'

export const Category = () => {
  const { name } = useParams()
  console.log(name)
  const resources = getDataById(name) || []

  return (
    <section className='container-resources'>

      <div className="container-info-resource">
        <h1>Estos son los mejores recursos que pudimos recopilar...</h1>
        <img src="/fire.svg" alt="fire" width={250}/>
      </div>
      <div className="container-resources-cards">
      {
        resources.map(data => (
          <div className="resource-card" key={data.name}>
            <div className="resource-card-container">
              <strong>{data.name}</strong>
              <img src={data.iconUrl} alt={data.name} width="32" height="32" loading="lazy" decoding="async" />
            </div>
            <p className="container-resource-description">{`${data.description.slice(0, 70)}...`}</p>
            <div className="container">
              <a href={data.link} target="_blank" rel='noreferrer'>Probar</a>
              <span className="tag">{data.tag}</span>
            </div>
          </div>
        ))
      }
      </div>
    </section>
  )
}
