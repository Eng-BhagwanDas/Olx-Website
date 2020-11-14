import React, { Component } from 'react';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Categories from './components/Categories'
import Olximg from './components/Olximg'
import Cards from './components/Cards'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Categories />
        <Olximg />
        <Cards />
        <Footer />
      </div>
    )
  }
}



export default App;
