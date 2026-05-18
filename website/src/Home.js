import { Link } from 'react-router-dom';

function Home() {
  return (
  <section className="w-full max-w-2xl flex flex-col gap-6 border-2 border-darkblue rounded-xl p-8 mx-auto">
    <h2 className="font-mono font-bold text-4xl mb-12">
      Open SCADA Data for
      <span className="font-mono text-lightblue"> Wind Energy Research</span>
    </h2>
    <p className="font-mono text-xl mb-12 w-full max-w-6xl mx-auto">
      Open Wind Data is a community-driven collection of real-world wind turbine data. 
      <br/>
      It is difficult for researchers and smaller wind farm operators to get their hands on enough datasets for meaningful analysis.
      <br/>
      The aim of Open Wind Data is to close this gap and distribute data to those in need.
      <br/>
      <br/>
      Wind Power has always been a bottom up movement with the first turbines being installed by groups of enthusiats rather than large companies.
      <br/>
      Open Wind Data wants to continue this tradition.
      <br/>
      If you want to aswell, contribute your datasets and get access to all datasets already available on Open Wind Data or request access if you are a researcher in need for data.
      <br/>
      <br/>
      The first 25 contributors will receive the super limited "Data Pioneer" badge. 
      <br/>
      The first 25 researchers to share their findings on Open Wind Data will receive the super limited "Heureka" badge.
    </p>
    <div className="flex gap-16">
    <Link to="/upload">
        <button className="border-4 border-red ring-4 ring-beige bg-darkblue hover:bg-hover text-white font-mono px-8 py-2 rounded-lg">
        Contribute Data
        </button>
    </Link>
    <Link to="/request-access">
        <button className="border-4 border-red ring-4 ring-beige bg-darkblue hover:bg-hover text-white font-mono px-8 py-2 rounded-lg">
        Get Access
        </button>
    </Link>
    </div>
  </section>
  )
}

export default Home;