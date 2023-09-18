import AsideCart from './components/AsideCart'
import Header from './components/Header'
import ListProducts from './components/ListProducts'
import { CartProvider } from './context/CartContext'
import { FilterProvider } from './context/FilterContext'
import './App.css'

export default function App() {
  return (
    <CartProvider>
      <FilterProvider>
        <>
          <Header />
          <main>
            <AsideCart />
            <ListProducts />
          </main>
        </>
      </FilterProvider>
    </CartProvider>
  )
}
