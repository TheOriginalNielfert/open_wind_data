function Privacy() {
  return (
    <div className="flex flex-col gap-8 p-16">
      <h1 className="font-mono font-bold text-4xl text-center">Privacy Policy</h1>
      <div className="flex flex-col gap-6 border-2 border-darkblue rounded-xl p-8 max-w-2xl mx-auto">

        <div className="flex flex-col gap-2">
          <h2 className="font-mono font-bold text-xl">Data we collect</h2>
          <p className="font-mono">
            When you submit the Contribute Data or Request Access forms we collect 
            the information you provide – name, organisation, email address and 
            dataset metadata. This data is stored via Netlify Forms and used solely 
            to process your request.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-mono font-bold text-xl">Data we do not collect</h2>
          <p className="font-mono">
            We do not use cookies, tracking scripts or analytics. We do not sell 
            or share your personal data with third parties.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-mono font-bold text-xl">Zenodo</h2>
          <p className="font-mono">
            Datasets are stored on Zenodo, operated by CERN. Please refer to 
            Zenodo's privacy policy for information on how they handle your data.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="font-mono font-bold text-xl">Contact</h2>
          <p className="font-mono">
            For any privacy related questions please contact:
          </p>
          <a href="mailto:openwinddata@proton.me"
             className="font-mono text-darkblue hover:text-highlight">
            openwinddata@proton.me
          </a>
        </div>

      </div>
    </div>
  )
}

export default Privacy;