import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Home() {
  const [stats, setStats] = useState({
    number_of_turbines: 0,
    number_of_datasets: 0,
    number_of_datapoints: 0
  });

  useEffect(() => {
    fetch('/meta_data.json')
      .then(res => res.json())
      .then(data => setStats(data[0]));
  }, []);

  return (
    <section className="flex gap-8 px-16 py-16 items-start max-w-4xl mx-auto w-full">

      {/* Left: Hero Text */}
      <div className="flex flex-col gap-6 border-2 border-darkblue rounded-xl p-8 flex-1">
        <h2 className="font-mono font-bold text-4xl">
          Open SCADA Data for
          <span className="font-mono text-highlight"> Wind Energy Research</span>
        </h2>
        <p className="font-mono text-xl">
          Open Wind Data is a community-driven collection of real-world wind turbine data.
          <br/>
          It is difficult for researchers and smaller wind farm operators to get their hands on enough datasets for meaningful analysis.
          <br/>
          The aim of Open Wind Data is to close this gap and distribute data to those in need.
          <br/><br/>
          Wind Power has always been a bottom up movement with the first turbines being installed by groups of enthusiasts rather than large companies.
          <br/>
          Open Wind Data wants to continue this tradition.
          <br/>
          If you want to as well, contribute your datasets and get access to all datasets already available on Open Wind Data or request access if you are a researcher in need for data.
          <br/><br/>
          The first 25 contributors will receive the super limited "Data Pioneer" badge.
          <br/>
          The first 25 researchers to share their findings on Open Wind Data will receive the super limited "Heureka" badge.
        </p>
        <div className="flex gap-8">
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
      </div>

      {/* Right: Stats */}
      <div className="flex flex-col gap-6 border-2 border-darkblue rounded-xl p-8 min-w-64">
        <h3 className="font-mono font-bold text-xl text-center">Repository Stats</h3>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center">
            <span className="font-mono font-bold text-5xl text-highlight">
              {stats.number_of_turbines}
            </span>
            <span className="font-mono text-gray-500 text-sm mt-1">Turbines</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-mono font-bold text-5xl text-highlight">
              {stats.number_of_datasets}
            </span>
            <span className="font-mono text-gray-500 text-sm mt-1">Datasets</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-mono font-bold text-5xl text-highlight">
              {(stats.number_of_datapoints / 1_000_000).toFixed(1)}M+
            </span>
            <span className="font-mono text-gray-500 text-sm mt-1">Data Points</span>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Home;