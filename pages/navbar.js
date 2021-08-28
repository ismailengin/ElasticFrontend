import Link from 'next/link';

function Navbar() {
    return (
        <div className="bg-white py-5 relative shadow-lg">
            <nav className="mx-5 md:mx-10 xl=mx-32 ">
                <Link href="/index" >
                    <a title="Home Page" className="btn-primary text-black font-bold px-2 py-2 mx-2">Home Page</a>
                </Link>
                <Link href="/elastic">
                    <a title="Elastic Page" className="btn-primary text-black font-bold px-2 py-2 mx-2">Elastic Page</a>
                </Link>
                <Link href="/db">
                    <a title="Db Page" className="btn-primary text-black font-bold px-2 py-2 mx-2">Db Page</a>
                </Link>
        </nav>
        </div>
    )
}

export default Navbar;