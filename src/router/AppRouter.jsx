import { Route, Routes } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Header, Footer } from '../ui'
import { Home, About, Category } from '../pages'
import './AppRouter.css'

export const AppRouter = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={
            <TransitionGroup>
              <CSSTransition key="home" classNames="fade" timeout={500}>
                <Home />
              </CSSTransition>
            </TransitionGroup>
          }
          />
          <Route path="/about" element={
            <TransitionGroup>
              <CSSTransition key="about" classNames="fade" timeout={500}>
                <About />
              </CSSTransition>
            </TransitionGroup>
          }
          />
          <Route path="/category/:name" element={
            <TransitionGroup>
              <CSSTransition key="category" classNames="fade" timeout={500}>
                <Category />
              </CSSTransition>
            </TransitionGroup>
          }
          />
          <Route path="/*" element={
            <TransitionGroup>
              < CSSTransition key="home" classNames="fade" timeout={500}>
                <Home />
              </CSSTransition>
            </TransitionGroup>
          } />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
