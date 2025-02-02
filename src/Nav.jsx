
import './Nav.css'

function Nav() {
  return <>
   <div className="navbar">
    <div className="logo"> <img src="src/assets/logo.png" alt=" loading" />
    </div>
    <div className="navitem">
      <a href="" className="items"><li>Home</li></a>
      <a href="" className="items"><li>Sites</li></a>
      <a href="" className="items"><li>Hotels</li></a>
      <a href="" className="items"><li>Food</li></a>
      <a href="" className="items" ><li>More</li></a>
        
    </div>
    <div className="search"><input className='Searchbox' type="search"  placeholder='Search Places ' /> </div>
   </div>
  </>;
}

export default Nav;
