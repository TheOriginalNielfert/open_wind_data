import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="border-t-2 border-darkblue mt-16 px-16 py-12">
      <div className="flex gap-16 mb-8">

        {/* Navigation */}
        <div className="flex flex-col gap-3">
          <h3 className="font-mono font-bold text-darkblue">Navigation</h3>
          <Link to="/" className="font-mono text-sm text-gray-500 hover:text-darkblue">Home</Link>
          <Link to="/upload" className="font-mono text-sm text-gray-500 hover:text-darkblue">Contribute Data</Link>
          <Link to="/request-access" className="font-mono text-sm text-gray-500 hover:text-darkblue">Get Access</Link>
          <Link to="/how-it-works" className="font-mono text-sm text-gray-500 hover:text-darkblue">How it Works</Link>
          <Link to="/about" className="font-mono text-sm text-gray-500 hover:text-darkblue">About</Link>
        </div>

        {/* External */}
        <div className="flex flex-col gap-3">
          <h3 className="font-mono font-bold text-darkblue">Resources</h3>
          <a href="https://github.com/TheOriginalNielfert/open_wind_data"
             target="_blank" rel="noreferrer"
             className="font-mono text-sm text-gray-500 hover:text-darkblue">
            GitHub →
          </a>
          <a href="https://zenodo.org/communities/openwinddata"
             target="_blank" rel="noreferrer"
             className="font-mono text-sm text-gray-500 hover:text-darkblue">
            Zenodo →
          </a>
          <a href="https://zenodo.org/signup"
             target="_blank" rel="noreferrer"
             className="font-mono text-sm text-gray-500 hover:text-darkblue">
            Create Zenodo Account →
          </a>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-3">
          <h3 className="font-mono font-bold text-darkblue">Legal</h3>
          <Link to="/imprint" className="font-mono text-sm text-gray-500 hover:text-darkblue">Impressum</Link>
          <Link to="/privacy" className="font-mono text-sm text-gray-500 hover:text-darkblue">Privacy Policy</Link>
          <p className="font-mono text-sm text-gray-500">Data: CC BY 4.0</p>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h3 className="font-mono font-bold text-darkblue">Contact</h3>
          <a href="mailto:openwinddata@proton.me"
             className="font-mono text-sm text-gray-500 hover:text-darkblue">
            openwinddata@proton.me
          </a>
        </div>

      </div>

      <hr className="border-darkblue mb-6"/>

      <p className="font-mono text-sm text-gray-400 text-center">
        © 2026 Open Wind Data · Built with ♥ for the wind energy community
      </p>

    </footer>
  )
}

export default Footer;