export const About = () => {
  return (
    <section className='section-about'>
      {/* <div className="container-quote">
        <img src="/blob.svg" alt="" width={250} />
        <p>Nunca te compares con otros, porque cada background es diferente. Compárate con la persona que fuiste hace 3 meses.</p>
      </div> */}
      <div className="container-about-me">
        <div className="container-aboutMe-img"></div>
        <strong>Carlos Sánchez</strong>
        <p>Como desarrollador, tengo esta peculiar costumbre de crear mis propias herramientas: mi alarma personalizada, mi aplicación de seguimiento del clima, etc. Durante el proceso de desarrollo de un proyecto reciente, me di cuenta de que a menudo olvidaba guardar recursos que encontraba en la web o que mi lista de favoritos se había vuelto interminable.</p>
        <p>Para solucionar este problema, decidí crear un nuevo mini proyecto: un sitio web donde puedo almacenar y gestionar todas estas herramientas y recursos útiles que me han ayudado en mis proyectos. La gran noticia es que esta web también está disponible para otros desarrolladores, lo que significa que puede ser de utilidad para tu trabajo también. ¡Espero que encuentres esta herramienta útil! 👽</p>
          <small>Tecnologías</small>
        <div className="container-tech">
          <img src="https://svgl.vercel.app/library/html5.svg" alt="" width={24}/>
          <img src="https://svgl.vercel.app/library/css.svg" alt="" width={24}/>
          <img src="https://svgl.vercel.app/library/javascript.svg" alt="" width={24}/>
          <img src="https://svgl.vercel.app/library/react.svg" alt="" width={24}/>
        </div>
      </div>
    </section>
  )
}
