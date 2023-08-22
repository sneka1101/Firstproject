
import './App.css';
import {Link }from 'react-scroll'

const menuItems=
[{
  id:1,
  title:"home",
  content:"Welcome to home page",
},

{
  id:2,
  title:"carrers",
  content:"Welcome to carrers page",
},

{
  id:3,
  title:"about us",
  content:"Welcome to About us page",
},

{
  id:4,
  title:"contact us",
  content:"Welcome to Contact us page",
}
];

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <h1>Webpage</h1>
          <ul>
            {menuItems.map((menu) => (
              <li>
                <Link
                  to={menu.title}
                  smooth={true}
                  offset={-430}
                  duration={500}
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>


      <main>
  {menuItems.map((menu) => (
    <div className="content" key={menu.id}>
      <h1 className="content-header" id={menu.title}>
        
      </h1>
      <h3>{menu.content}</h3>
    </div>
  ))}
</main>

    </div>
  );
}

export default App;
