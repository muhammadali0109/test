import "../Part1/Part1.scss";

import { Link } from "react-router-dom";

const Part1 = () => {
  return (
    <div className="Part">
      <div className="Part__nav">
        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            BACK
          </button>
        </Link>
      </div>
      <div className="Part__main">
        <ul className="Part__list">
          <li className="Part__item flex">
            <div className="Part__1">
              <h3>Mahsulot nomi</h3>
              <p>banana</p>
            </div>
            <div className="Part__1">
              <h3>narxi</h3>
              <p>5000</p>
            </div>
            <Link to="/product">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                more about
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Part1;
