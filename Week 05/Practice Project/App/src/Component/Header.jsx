const Header = () => {
    return (
        <div className="bg-slate-500 p-5 text-center text-white md:flex justify-around items-center sticky top-0 z-10">
            <div className="logo">
                <h1 className="text-4xl">HEALTHYCART</h1>
                <span className="flex md:justify-end justify-center">Health is Wealth Buddy!</span>
            </div>
            <nav>
                <ul className="p-3 flex justify-between">
                    <li><a href="#" className="p-5 hover:border">Desserts</a></li>
                    <li><a href="#" className="p-5 hover:border">Fruits</a></li>
                    <li><a href="#" className="p-5 hover:border">Vegetables</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header