import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'

function Layout(props) {
  return (
    <div className='bg-[#06202A] text-gray-300'>
        <Header />
        <Navbar />
        {props.children}
      </div>
  )
}

export default Layout