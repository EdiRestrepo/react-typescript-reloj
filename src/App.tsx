import './App.css'
import { ComponenteFunciona } from './components/ComponenteFunciona'
import { Header } from './components/Header'
import { HolaMundo } from './components/HolaMundo'
import { ProductList } from './components/ProductList'
import { Title } from './components/Title'
import { Watch } from './components/Watch'



function App(): JSX.Element {

  return (
    <div>
      <Watch/>
      <Header name="TypeShopping"/>
      <div className='p-4'>
      <Title title="Te doy la bienvenida a tu primera tienda online creada con Typescript y React ⚛️"/>
      <ProductList/>
      </div>
      {/* <h1 className='text-red-500 font-bold text-lg'>Hola Mundo</h1> */}
      {/* <HolaMundo/> */}
      {/* <ComponenteFunciona name={'Componente sin usar una interface'}/> */}
    </div>
  )
}



export default App
