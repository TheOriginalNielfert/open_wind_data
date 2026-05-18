import { Link } from 'react-router-dom';

function HowItWorks() {
  return (
    <div className="flex flex-col gap-8 p-16">
      <h1 className="font-mono font-bold text-4xl text-center">How it Works</h1>

      {/* Two columns */}
      <div className="flex gap-8 items-start">

        {/* For Operators */}
        <div className="flex flex-col gap-3 border-2 border-darkblue rounded-xl p-8 flex-1">
          <h2 className="font-mono font-bold text-2xl text-highlight">For Operators</h2>
          <p className="font-mono text-lg">
            The next development in the wind industry could be based on your SCADA data.
          </p>
          <div className="flex flex-col gap-2">
            <p className="font-mono"><span className="font-bold">1. Fill out the form</span> – tell us about your turbines and upload your dataset.</p>
            <p className="font-mono"><span className="font-bold">2. Attach your data</span> – export what you have from your SCADA system. Any format works, we take care of the rest.</p>
            <p className="font-mono"><span className="font-bold">3. Submit your data</span> – will we review your data.</p>
            <p className="font-mono"><span className="font-bold">4. Get access</span> – once we have processed your data you get full access to the entire repository.</p>
          </div>
          <Link to="/upload">
            <button className="border-4 border-red ring-4 ring-beige bg-darkblue hover:bg-hover text-white font-mono px-8 py-2 rounded-lg mt-4">
              Contribute Data
            </button>
          </Link>
        </div>

        {/* For Researchers */}
        <div className="flex flex-col gap-3 border-2 border-darkblue rounded-xl p-8 flex-1">
          <h2 className="font-mono font-bold text-2xl text-highlight">For Researchers & Students</h2>
          <p className="font-mono text-lg">
            Real-world wind turbine data was hard to come by. Not anymore.
          </p>
          <div className="flex flex-col gap-2">
            <p className="font-mono"><span className="font-bold">1. Request access</span> – tell us who you are and what you are working on.</p>
            <p className="font-mono"><span className="font-bold">2. We review your request</span> – usually within a few days.</p>
            <p className="font-mono"><span className="font-bold">3. Get access to the repository</span> – download datasets directly or via API.</p>
            <p className="font-mono"><span className="font-bold">4. Share your findings</span> – publish your code or paper and earn exclusive badges.</p>
          </div>
          <Link to="/request-access">
            <button className="border-4 border-red ring-4 ring-beige bg-darkblue hover:bg-hover text-white font-mono px-8 py-2 rounded-lg mt-4">
              Get Access
            </button>
          </Link>
        </div>

      </div>

      {/* The Data */}
      <div className="flex flex-col gap-3 border-2 border-darkblue rounded-xl p-8">
        <h2 className="font-mono font-bold text-2xl text-highlight">The Data</h2>
        <p className="font-mono text-lg mt-2">
          Metadata published on Open Wind Data may also be found in the German Marktstammdatenregister. 
          <br/>
          SCADA time series data is not publicly available and is shared exclusively within the Open Wind Data community under CC BY 4.0.
          <br/>
          <br/>
          All data is licensed under CC BY 4.0.
        </p>
      </div>

    </div>
  )
}

export default HowItWorks;