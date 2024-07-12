
const Header = () => {
  return (
    <header className="flex justify-around flex-wrap basis-2/4 items-center p-4 bg-slate-700">
      <div className="logo">
        <h1 className="text-4xl">REACT JS</h1>
      </div>
      <nav>
        <ul className="flex">
            <li><a href="#" className="p-3 hover:border">Learn React</a></li>
            <li><a href="#" className="p-3 hover:border">Contact</a></li>
            <li><a href="#" className="p-3 hover:border">About</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
