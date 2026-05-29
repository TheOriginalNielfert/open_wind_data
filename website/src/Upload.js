import { useState } from 'react';
import { Link } from 'react-router-dom';

function Upload() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch('/', {
      method: 'POST',
      body: data,
    });
    if (response.ok) {
      setFormStatus('success');
      form.reset();
    } else {
      setFormStatus('error');
    }
  };

  return (
    <div className="flex flex-col gap-8 p-16">
      <h1 className="font-mono font-bold text-4xl text-center">Contribute Data</h1>

      <div className="flex gap-8 items-start">

        {/* Left: Explanation */}
        <div className="flex flex-col gap-6 border-2 border-darkblue rounded-xl p-8 flex-1">
          <h2 className="font-mono font-bold text-2xl">How to contribute</h2>

          <div className="flex flex-col gap-2">
            <p className="font-mono font-bold">1. Download the mapping template</p>
            <p className="font-mono text-gray-600 text-sm">
              Fill in the turbine metadata table — one row per turbine.
            </p>
            <a
              href="/turbine_mapping_template.xlsx"
              download
              className="font-mono text-sm font-bold border-2 border-darkblue text-darkblue hover:bg-darkblue hover:text-white px-4 py-2 rounded-lg text-center mt-1"
            >
              ↓ Download Mapping Template
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-mono font-bold">2. Prepare your data</p>
            <p className="font-mono text-gray-600 text-sm">
              Any CSV or Excel format works — we take care of the rest.
              Name your files clearly, e.g. <span className="font-bold">WEA_01_2020_2023.csv</span>
            </p>
            <p className="font-mono text-sm text-highlight">
              💡 Pro tip: Older datasets (3+ years) have no operational value 
              but full research value — and protect your privacy.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-mono font-bold">3. Send us your data</p>
            <p className="font-mono text-gray-600 text-sm">
              For smaller datasets send the files directly via email. 
              For larger datasets upload to Google Drive and share the link.
              In both cases please include the filled mapping template.
            </p>
            <a
              href="mailto:openwinddata@proton.me"
              className="font-mono text-sm font-bold border-2 border-darkblue text-darkblue hover:bg-darkblue hover:text-white px-4 py-2 rounded-lg text-center mt-1"
            >
              ✉ openwinddata@proton.me
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-mono font-bold">4. Get access</p>
            <p className="font-mono text-gray-600 text-sm">
              Once your data is processed you will be invited to the 
              Open Wind Data community on Zenodo and receive your badges.
            </p>
            <Link
              to="/badges"
              className="font-mono text-sm text-highlight hover:underline"
            >
              See all available badges →
            </Link>
          </div>
        </div>

        {/* Right: Form */}
        <div className="flex flex-col gap-6 border-2 border-darkblue rounded-xl p-8 flex-1">
          <h2 className="font-mono font-bold text-2xl">Submit your dataset</h2>
          <p className="font-mono text-gray-600 text-sm">
            Fill in your contact details and optionally paste a Google Drive link. 
            We will get back to you within a few days.
          </p>

          <form
            onSubmit={handleSubmit}
            name="upload"
            netlify
            className="flex flex-col gap-4"
          >
            <input type="hidden" name="form-name" value="upload"/>

            <div className="flex flex-col gap-2">
              <label className="font-mono font-bold">Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="info@windpark.de"
                className="font-mono bg-transparent border-2 border-darkblue rounded-lg px-4 py-2 outline-none focus:border-highlight"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono font-bold">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Max Mustermann"
                className="font-mono bg-transparent border-2 border-darkblue rounded-lg px-4 py-2 outline-none focus:border-highlight"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono font-bold">Organisation</label>
              <input
                type="text"
                name="organisation"
                required
                placeholder="Windpark Nordsee GmbH"
                className="font-mono bg-transparent border-2 border-darkblue rounded-lg px-4 py-2 outline-none focus:border-highlight"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono font-bold">
                Google Drive Link <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input
                type="url"
                name="dataset_link"
                placeholder="https://drive.google.com/..."
                className="font-mono bg-transparent border-2 border-darkblue rounded-lg px-4 py-2 outline-none focus:border-highlight"
              />
              <p className="font-mono text-xs text-gray-500">
                Leave empty if you prefer to send data via email.
              </p>
            </div>

            {formStatus === 'loading' && (
              <p className="font-mono text-darkblue font-bold text-center">
                Sending... please wait.
              </p>
            )}
            {formStatus === 'success' && (
              <p className="font-mono text-green-600 font-bold text-center">
                Thank you! We will get back to you soon.
              </p>
            )}
            {formStatus === 'error' && (
              <p className="font-mono text-red font-bold text-center">
                Something went wrong. Please try again.
              </p>
            )}

            <button className="border-4 border-red ring-4 ring-beige bg-darkblue hover:bg-hover text-white font-mono px-8 py-3 rounded-lg mt-2">
              Submit
            </button>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Upload;