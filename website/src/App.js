import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from './logo2.png';
import Home from './Home';
import Upload from './Upload';
import RequestAccess from './RequestAccess';
import HowItWorks from './HowItWorks';
import Contributors from './Contributors';
import About from './About';
import Footer from './Footer';
import Imprint from './Imprint';
import Privacy from './Privacy';
import Badges from './Badges';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-parchment">
        <header className="flex justify-start items-end gap-12 px-8 py-12">
          <img src={logo} alt="Open Wind Data" className="h-80 w-80"/>
          <nav className="flex gap-10 text-l">
            <Link to="/" className="font-mono text-darkblue hover:text-lightblue">Home</Link>
            <Link to="/upload" className="font-mono text-darkblue hover:text-lightblue">Contribute Data</Link>
            <Link to="/request-access" className="font-mono text-darkblue hover:text-lightblue">Get Access</Link>
            <Link to="/how-it-works" className="font-mono text-darkblue hover:text-lightblue">How it Works</Link>
            <Link to="/contributors" className="font-mono text-darkblue hover:text-lightblue">Contributors</Link>
            <Link to="/about" className="font-mono text-darkblue hover:text-lightblue">About</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/upload" element={<Upload/>}/>
          <Route path="/request-access" element={<RequestAccess/>}/>
          <Route path="/how-it-works" element={<HowItWorks/>}/>
          <Route path="/contributors" element={<Contributors/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/imprint" element={<Imprint/>}/>
          <Route path="/privacy" element={<Privacy/>}/>
          <Route path="/badges" element={<Badges/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App;
