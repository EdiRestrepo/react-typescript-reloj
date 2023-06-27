import './App.css'
import { ComponenteFunciona } from './assets/components/ComponenteFunciona'
import { Header } from './assets/components/Header'
import { HolaMundo } from './assets/components/HolaMundo'
import { Watch } from './assets/components/Watch'



function App(): JSX.Element {


  return (
    <div className='jsx-ejercicio'>
      <Watch/>
      <Header name="TypeShopping"/>
      <h1 className='text-red-500 font-bold text-lg'>Hola Mundo</h1>
      <HolaMundo/>
      <ComponenteFunciona name={'Componente sin usar una interface'}/>
    </div>
  )
}



export default App
