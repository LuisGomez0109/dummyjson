import { ShoppingCart, Search, LayoutGrid, ChevronDown } from 'lucide-react'
import FiltroCategorias from './FiltroCategorias'
const Header = () => {
  return (
    <>
        <div className="navbar bg-slate-700 text-white justify-center p-4">
           <div id="logo">
            <ShoppingCart className='h-8 w-8 m-2'/>
            <p><span className='font-bold'>DUMMY</span>JSON</p>
           </div>
           <div id="SearchInput" className='rounded-md bg-white w-3/5 ml-10 text-black'>
            <div className='bg-slate-700 text-white w-full flex'>
            <input type="text" placeholder='Realiza tu busqueda...' className='p-2 w-full rounded-md text-black'/>
            <button className='h-6 w-6 m-2'>
            <Search />
            </button>
            </div>
           </div>
        </div>
        <div className='bg-slate-300 text-slate-700 flex' id="SecondNav">

        <details className="dropdown ml-2">
            <summary className="btn m-1">
                <span><LayoutGrid className='h-4 w-4'/></span>
                Departamentos
                <span><ChevronDown className='h-4 w-4'/></span>
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow">
                    <p className='font-bold p-2 text-white bg-slate-700 rounded-md m-2 text-center'>Todas las Categorias</p>
                <FiltroCategorias/>
                </ul>
        </details>
        <div class="flex p-2 items-center text-slate-700">|</div>

        </div>

    </>
  )
}

export default Header