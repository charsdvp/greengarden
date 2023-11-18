import { Link } from 'react-router-dom'
import { categorys } from '../data/categorys'
export const CardCategory = () => {
  return (
    <div className="container-categorys">
      <h2>Categorias</h2>
      <div className="container-categorys-cards">
        {
          categorys.map(category => (
            <Link key={category.name} to={category.link} className="container-category-card">
              <img src={category.imageUrl} alt="picture" width={36} height={36} loading='lazy'/>
              <div className="category-card-flex">
                <strong style={{ fontWeight: 'bold' }}>
                  {category.name}
                </strong>
                <p>{category.description}</p>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
