import { Routes, Route, Link} from 'react-router-dom'
import { SkillProvider } from './Context/SkillContext';

import { Home } from './components/Home';
import { SkillIndex } from './components/skills/SkillIndex';
import { SkillCreate } from './components/skills/SkillCreate';
import { SkillEdit } from './components/skills/SkillEdit';
import './index.css';

function App() {
  return (
    <SkillProvider>
      <div className="App">
          <nav className='container'>
            <ul>
              <li>
                <Link to={"/Home"}>Home</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path={"/"} element={<Home />}></Route>
            <Route path={"/skills"} element={<SkillIndex />}></Route>
            <Route path={"/skills/create"} element={<SkillCreate />}></Route>
            <Route path={"/skills/:id/edit"} element={<SkillEdit />}></Route>

          </Routes>
          
        
        </div>
    </SkillProvider>
    
  );
}

export default App;
