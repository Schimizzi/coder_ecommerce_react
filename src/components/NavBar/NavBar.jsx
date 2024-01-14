import classes from './NavBar.module.css';
import {Carrito} from '../Carrito/Carrito';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return(
        <nav className='text-center' >
            <Link className= {classes.logo} to={'/'}>e-commerce</Link>
            <section>
                <Link className='btn btn-primary' to={'/categoty/producto1'} > Producto 1 </Link>
                <Link className='btn btn-success'to={'/categoty/producto2'} > Producto 2 </Link>
                <Link className='btn btn-warning'to={'/categoty/producto3'} > Producto 3 </Link>
                <Link className='btn btn-success'to={'/categoty/producto4'} > Producto 4 </Link>
            </section>
            <Carrito/>
        </nav>
    )
};





/* 
explicado en la clase 4

module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh'],
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react-refresh/only-export-components': 'warn',
      'react/prop-types': 0
    },
  }
 */
