import Navbar from './navbar'
import Footer from './footer'
export default function Layout(props) {
    return (
        <div id="root" className="relative">
            <div className="h-full">
                <Navbar />
                <div className='flex justify-center'>
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )
}