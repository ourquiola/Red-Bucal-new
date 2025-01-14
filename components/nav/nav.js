import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'

//Genera los Links
const links = [
  { href: '/red', label: 'RED' },
  /*
  { href: '/beneficios', label: 'BENEFICIOS' },
  { href: '/prevencion', label: 'PREVENCION' },
  */
  { href: '/nosotros', label: 'NOSOTROS' },
  { href: '/contacto', label: 'CONTACTO' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => {

  //url actual
  const [url, setUrl] = useState('');

  //genera el borde de la pagina actual
  const borde = (urlActual) => {
    return {
      paddingBottom: url === urlActual ? "3px" : "",
      borderBottom: url === urlActual ? "4px solid #091C47" : ""
    }
  }

  //genera el borde de la pagina actual para los planes
  const bordePlanes = (urlPersona, urlEmpresas) => {
    return {
      paddingBottom: (url === urlPersona) || (url === urlEmpresas) ? "3px" : "",
      borderBottom: (url === urlPersona) || (url === urlEmpresas) ? "4px solid #091C47" : ""
    }
  }

  //genera el borde de la pagina actual para los Beneficios
  const bordeBeneficios = (urlDescuentos, urlPrevencion) => {
    return {
      paddingBottom: (url === urlDescuentos) || (url === urlPrevencion) ? "3px" : "",
      borderBottom: (url === urlDescuentos) || (url === urlPrevencion) ? "4px solid #091C47" : ""
    }
  }

  //Obtiene la url
  useEffect(() => {
    const path = window.location.pathname;
    
      setUrl(path)
      
  });
  
  return (
  <nav>
    <Head>
      <title>Red Bucal</title>
      <link rel="icon" href="/favicon.ico" />
    </Head> 
    <Link href="/">
      <a className="img">
          <img src="/img/Capa-2.png" alt="Logo"/>
      </a>
    </Link>
    <ul>
      <li>
        <Link href="/">
            <a className="link" style={borde('/')}>INICIO</a>
        </Link>
      </li>
        <li className="link" style={bordePlanes('/planes/personas-&-familias', '/planes/empresarial')}>
        PLANES
        <span>▼</span>
        <ul>
            <Link href="/planes/personas-familias">
              <a>
                <li className="link" style={borde('/planes/personas-familias')}>PLAN PREMIUM</li>
              </a>
            </Link>
            <Link href="/planes/empresarial">
              <a>
                <li className="link" style={borde('/planes/empresarial')}>PLAN EMPRESAS</li>
              </a>
            </Link>
        </ul>
      </li>

      <li className="link" style={bordeBeneficios('/beneficios', '/prevencion')}>
        BENEFICIOS
        <span>▼</span>
        <ul>
            <Link href="/beneficios">
              <a>
                <li className="link" style={borde('/beneficios')}>SALUD DENTAL</li>
              </a>
            </Link>
            <Link href="/prevencion">
              <a>
                <li className="link" style={borde('/prevencion')}>MEDICINA GENERAL</li>
              </a>
            </Link>
        </ul>
      </li>

      {links.map(({ key, href, label }) => (
        <li key={key}>
          <Link href={href}>
            <a className="link" style={borde(href)}>{label}</a>
          </Link>
        </li>
      ))}
    </ul>

  {
        ((url === '/registro-ingreso') || (url === '/usuario') || (url === '/administrador') || (url === '/empresa')) ? '' 
          : <Link href="/registro-ingreso">
            <a className="ingresar">
              <svg className="user" viewBox="0 0 448 512">
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
              </svg>
              <p>INGRESAR / REGISTRARSE</p>
            </a>
          </Link>
  }

  
    
    <style jsx>{`
      :global(*) {
        margin: 0;
        padding: 0;
      }

      :global(:root) {
        --sizeNav: .9;
        --mainColor: #091C47;
        --mainColorClaro: #091C47aa;
        --secondColor: rgb(255, 134, 114);
        --amarillo: rgb(255, 199, 68);
        --puntoRojo: #D97C6E;
        --puntoAzul: #00A5CF;
        --fondoAzul: rgb(0, 165, 207);
        --colorSelect: rgb(122, 208, 229);
        --botonesHover:  rgb(2, 132, 165);
        --botonesRegistro: rgb(218, 92, 70);
        --botonesText: #091C47;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }

      li {
        list-style: none;
      }

      a {
        text-decoration: none;
      }

      .ingresar {
        position: fixed;
        background-color: var(--puntoRojo);
        top: 0;
        right: 100px;
        color: white;
        display: grid;
        grid-template-columns: 40px 1fr;
        align-items: center;
        justify-items: center;
        border-radius: 0 0 5px 5px;
        transition: background-color .5s;
      }

      .ingresar:hover {
        background-color: #f47C6E;
      }

      p {
        padding: 5px 10px 5px 0;
      }

      .user {
        width: 15px;
        fill: white;
        cursor: pointer;
      }

      .quest {
        transform: translateY(2.5px);
        width: 15px;
        fill: var(--mainColor);
        cursor: pointer;
      }

      span {
        font-size: calc( 10px * var(--sizeNav) );
        margin-left: 5px;
      }

      nav {
        position: absolute;
        top: 0;
        padding-top: 20px;
        font-weight: 500;
        width:100%;
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        z-index: 1000;
      }

      img {
        margin: 20px calc( 70px * var(--sizeNav) );
        height: calc( 70px * var(--sizeNav) );
      }

      .img {
        justify-self: flex-start;
      }

      li > ul {
        position: absolute;
        left: 0;
      }

      li > ul > a > li {
        display: none;
      }

      li:hover > ul > a > li {
        display: inline-block;
        position: relative;
        left: 0;
        margin-top: 10px;
        padding-top: 10px;
      }

      nav > ul {
        margin: 20px calc( 60px * var(--sizeNav) );
        justify-self: flex-end;
      }

      nav > ul > li {
        position: relative;
        display: inline;
        margin: 0 calc( 15px * var(--sizeNav) );
        font-size: calc( 14px * var(--sizeNav) );
      }

      .link {
        color: var(--mainColor);
        transition: border-bottom .3s;
        cursor: pointer;
      }

      .link:hover {
        padding-bottom: 3px;
        border-bottom: 4px solid ;
      }

      @media screen and (max-width: 990px) {
        :global(:root) {
          --sizeNav: .75;
        }
      }


      @media screen and (max-width: 850px) {
        nav {
          display: none
        }
      }

      @media screen and (max-width: 720px) {
        :global(:root) {
          --sizeNav: .6;
        }
      }

    `}</style>
  </nav>
  
  )
}

export default Nav
