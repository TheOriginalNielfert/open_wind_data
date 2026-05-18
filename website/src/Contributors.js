import { useState, useEffect } from 'react';

function Contributors() {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/contributors.json')
      .then(res => res.json())
      .then(data => {
        setContributors(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col gap-8 p-16">
      <h1 className="font-mono font-bold text-4xl text-center">Contributors</h1>
      <p className="font-mono text-lg text-center max-w-2xl mx-auto">
        These operators and researchers make Open Wind Data possible.
      </p>

      {loading ? (
        <p className="font-mono text-center">Loading...</p>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {contributors.map((c, i) => (
            <div key={i} className="border-2 border-darkblue rounded-xl p-6 flex flex-col gap-2">
              <h2 className="font-mono font-bold text-xl">{c.name}</h2>
              <p className="font-mono text-sm text-gray-500">{c.organisation}</p>
              <p className="font-mono text-sm text-highlight">{c.role}</p>
              <p className="font-mono text-sm text-gray-400">Since {c.since}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Contributors;