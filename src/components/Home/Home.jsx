import { Link } from 'react-router-dom';
import './Home.scss'
import { Routes,Route } from 'react-router-dom';
import Part2 from '../Part2/Part2';
import Part1 from '../Part1/Part1';
import { useState } from 'react';
import SinglePro from '../Singlepro/SinglePro';

const Home = () => {
  const [dark, setDark] = useState(false);
  const [dark1, setDark1] = useState(false);

  const changeColor = () => {
    setDark(!dark);
  }
  const changeColor1 = () => {
    setDark1(!dark1);
  }

  return (
    <div className='home'>
      <div className="home__header">
         <ul className='home__list'>
          <li className='home__items'>
            <h1>ELTUVCHI - VENDOR APP</h1>
          </li>
          <li className='home__item'>
            <form >
            <input className='home__input' type='text' placeholder='search by category of product'/>
            <i className="fa-solid fa-magnifying-glass"></i>
            </form>
          </li>
          <li className='home__item1'>
            <button className='home__icon'>Uz</button>
          </li>
         </ul>
      </div>
      <div className='home__contain'>
        <div className='home__bar'>
        <Link to='/main'>
        <button className={`${dark ? 'dark' : 'light'}`}  onClick={changeColor}>product</button>
        </Link>
        <Link to='/basic'><div className={`${dark1 ? 'dark1' : 'light1'}`}>
        <button  onClick={changeColor1}>order</button>
        </div></Link>
      </div>
      <div className='home__main'>
        <Routes>
          <Route  path='/main' element={<Part1 />}/>
          <Route  path='/basic' element={<Part2 />}/>
          <Route  path='/product' element={<SinglePro/>}/>
        </Routes>
      </div>
      </div>
    </div>
  )
}

export default Home;

// const menu = [
//   {
//     id: 1,
//     title: "Coca-Cola",
//     category: "drinking",
//     price: 5000,
//     img: "./images/item-1.jpeg",
//     desc: "middle",
//   },
//   {
//     id: 2,
//     title: "somsa",
//     category: "lunch",
//     price: 7000,
//     img: "./images/item-2.jpeg",
//     desc: "slow",
//   },
//   {
//     id: 3,
//     title: "banana",
//     category: "fruits",
//     price: 17000,
//     img: "./images/item-3.jpeg",
//     desc: "fast",
//   }
// ];