import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'

function Layout(props) {
  return (
    <div>
        <Header />
        <Navbar />
        {props.children}
      </div>
  )
}

export default Layout