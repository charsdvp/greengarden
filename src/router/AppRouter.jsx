import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from '../ui/Header'
import { Home, About, Category } from '../pages'
import { Footer } from '../ui/Footer'

export const AppRouter = () => {
  return (
    <>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/category/:name' element={<Category />} />

          <Route path='/*' element={<Navigate to='/'/>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
