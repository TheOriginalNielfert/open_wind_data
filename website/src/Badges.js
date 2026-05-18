const badges = [
  {
    image: '/badges/data_pioneer.png',
    name: 'Data Pioneer',
    description: 'Awarded to the first 25 contributors who upload a dataset. This badge will never be available again.',
    exclusive: true,
  },
  {
    image: '/badges/heureka.png',
    name: 'Heureka',
    description: 'Awarded to the first 25 researchers who publish findings based on Open Wind Data. This badge will never be available again.',
    exclusive: true,
  },
  {
    image: '/badges/bronze_fleet.png',
    name: 'Bronze Fleet',
    description: 'Contribute data from at least 5 turbines.',
    exclusive: false,
  },
  {
    image: '/badges/silver_fleet.png',
    name: 'Silver Fleet',
    description: 'Contribute data from at least 25 turbines.',
    exclusive: false,
  },
  {
    image: '/badges/gold_fleet.png',
    name: 'Gold Fleet',
    description: 'Contribute data from at least 50 turbines.',
    exclusive: false,
  },
  {
    image: '/badges/contributor.png',
    name: 'Contributor',
    description: 'Upload your first dataset to Open Wind Data.',
    exclusive: false,
  },
  {
    image: '/badges/researcher.png',
    name: 'Researcher',
    description: 'Get access to the repository as a verified researcher.',
    exclusive: false,
  },
]

function Badges() {
  return (
    <div className="flex flex-col gap-8 p-16">
      <h1 className="font-mono font-bold text-4xl text-center">Badges</h1>
      <p className="font-mono text-lg text-center max-w-2xl mx-auto">
        Earn badges by contributing data or sharing your research. 
        Some badges are exclusive and will never be awarded again.
      </p>

      <div className="flex flex-col gap-4 max-w-3xl mx-auto w-full">
        {badges.map((badge, i) => (
          <div key={i} className="flex items-center gap-6 border-2 border-darkblue rounded-xl p-4">
            <img src={badge.image} alt={badge.name} className="h-24 w-24 rounded-full flex-shrink-0"/>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <h2 className="font-mono font-bold text-xl">{badge.name}</h2>
                {badge.exclusive && (
                  <span className="font-mono text-xs text-red border border-red rounded px-2 py-0.5">
                    EXCLUSIVE
                  </span>
                )}
              </div>
              <p className="font-mono text-gray-600">{badge.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Badges;