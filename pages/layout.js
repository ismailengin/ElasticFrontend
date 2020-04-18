import Navbar from './navbar'
import Footer from './footer'
export default function Layout(props) {
    return(
        <div id="root" className="bg-gray-100 h-screen">
            <Navbar/>
            <div className='flex justify-center'>
                {props.children}
            </div>
            {/* <Footer/> */}
        </div>
    )
}