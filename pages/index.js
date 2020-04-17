const customHandleClick = () => console.log('Free pizza!')

function HomePage() {
    return (
    <div className="container mx-auto">
            <input className="border-solid border-gray-400 border-2" type="text" />
            <button onClick={customHandleClick}>
                Button
            </button>

        </div>

    );
}

export default HomePage