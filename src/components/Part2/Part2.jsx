import { Link } from 'react-router-dom'
import '../Part2/Part2.scss'
const Part2 = () => {
  return (
    <div className="inc">
      <div className='inc__navigator'>
      <Link to='/'>
        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              BACK
        </button>
      </Link>
      </div>
      <div className='inc__main'>
        <ul className='inc__list'>
          <li className='inc__up'>
            <p>raqami</p>
            <p>soni</p>
            <p>vaqti</p>
            <p>narxi</p>
            <p>turi</p>
            <p>holati</p>
          </li>
          <li className='inc__item mb-3'>
            <p>1233132</p>
            <p>#1231</p>
            <p>19:03</p>
            <p>5000</p>
            <p>naqt</p>
            <button></button>
          </li>
          <li className='inc__item'>
            <p>1243132</p>
            <p>#1278</p>
            <p>09:03</p>
            <p>5000</p>
            <p>PayMe</p>
            <button className='inc__btn'></button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Part2