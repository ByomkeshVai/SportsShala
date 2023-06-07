import { Link } from 'react-router-dom'
import logoImg from '../../../assets/images/logo.png'

const Logo = () => {
  return (
      <Link to='/'>
           <p className='text-xl text-slate-50'>Sports Shala</p>
     
    </Link>
  )
}

export default Logo
