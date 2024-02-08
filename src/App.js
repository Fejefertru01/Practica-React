import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import Article from './componentes/Article';
import Card from './componentes/Card';
import Footer from './componentes/Footer';
import Aside from './componentes/Aside';
import React, { useEffect, useState } from 'react';
import api from './api/api';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    const cargarDatos = async () => {
      const info = await api();
      setArticulos(info);
    };


    cargarDatos();
  }, []);


  return (
    <Router><div>
      <Header></Header>

      <main class="wrap">
        <section id="info">
          <div id="banner">
            <h1>Diseño de CSS por Fernando</h1>
          </div>
          <div id="cards">
            <Card icono={'H'} categoria={'Desarrollo Web'} descripcion={'Aprende los principales lenguajes para desarrollar Webs. ¡Conviértete en Web Master!'} />
            <Card icono={'_'} categoria={'Sistemas Operativos'} descripcion={'Aprende a administrar sistemas operativos linux y windows.'} />
            <Card icono={'S'} categoria={'Hardware'} descripcion={'Conoce los entresijos del hardware.'} />
            <Card icono={'u'} categoria={'Redes e Internet'} descripcion={'Aprende a configurar y administrar redes informáticas y servidores.'} />
            <Card icono={'a'} categoria={'Bases de Datos'} descripcion={'Aprende a instalar y administrar bases de datos.'} />
          </div>
        </section>
        <div class="contenido">
          <Aside></Aside>
          <section id="articles">
            <h2>Últimos artículos</h2>
            <div class="clearfix"></div>
            <Routes>
              <Route path="/articulos" element={articulos.map(articulo => <Article key={articulo.id} articulo={articulo} />)} />
            </Routes>
            <article id="blog">
              <a href="#">Ir al Blog/Proyectos</a>
            </article>
          </section>
        </div>
      </main>
      <Footer></Footer>
    </div></Router>
  );
}

export default App;
