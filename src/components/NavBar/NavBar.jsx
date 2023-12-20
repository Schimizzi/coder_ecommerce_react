import classes from './NavBar.module.css';
import {Carrito} from '../Carrito/Carrito';

export const NavBar = () => {
    return(
        <nav className='text-center' >
            <h1 className= {classes.logo} >e-commerce</h1>
            <section>
                <button className='btn btn-primary' > celulares </button>
                <button className='btn btn-success'> tablets </button>
                <button className='btn btn-warning'> accesorios </button>
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
