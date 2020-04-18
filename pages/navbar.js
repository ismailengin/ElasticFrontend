import Link from 'next/link';

function Navbar() {
    return (
        <div className="container mx-auto mt-4">
            <Link href="/index" >
                <a title="Home Page" className="bg-indigo-700 btn-primary text-white font-bold px-2 py-2 mx-2 rounded shadow-lg">Home Page</a>
            </Link>
            <Link href="/elastic">
                <a title="Elastic Page" className="bg-indigo-700 btn-primary text-white font-bold px-2 py-2 mx-2 rounded shadow-lg">Elastic Page</a>
            </Link>
        </div >
    )
}

export default Navbar;