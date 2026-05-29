import { useState } from 'react';

function Upload() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    <div className="w-full max-w-2xl flex flex-col gap-6 border-2 border-darkblue rounded-xl p-8 mx-auto">
      <h1 className="font-mono font-bold text-4xl mb-4">Contribute Data</h1>
      <p className="font-mono text-lg mb-12 max-w-2xl text-center">
        Fill in the form below and upload your dataset. 
        We will take care of the rest.
      </p>

      <form 
        onSubmit={handleSubmit} 
        name="upload"
        netlify
        className="w-full max-w-2xl flex flex-col gap-6 border-2 border-darkblue rounded-xl p-8 mx-auto"
        >
        <input type="hidden" name="form-name" value="upload"/>

        {/* Email */}
        <div className="flex flex-col gap-2">
        <label className="font-mono font-bold">Email Address</label>
        <input 
            type="email" 
            name="email"
            placeholder="e.g. info@windpark.de"
            className="font-mono bg-transparent border-2 border-darkblue rounded-lg px-4 py-2 outline-none focus:border-highlight"
        />
        </div>

        {/* Name */}
        <div className="flex flex-col gap-2">
        <label className="font-mono font-bold">Name</label>
        <input
            type="text"
            name="name"
            placeholder="e.g. Max Mustermann"
            className="font-mono bg-transparent border-2 border-darkblue rounded-lg px-4 py-2 outline-none focus:border-highlight"
        />
        </div>

        {/* Organisation */}
        <div className="flex flex-col gap-2">
        <label className="font-mono font-bold">Organisation</label>
        <input
            type="text"
            name="organisation"
            placeholder="e.g. Windpark Nordsee GmbH"
            className="font-mono bg-transparent border-2 border-darkblue rounded-lg px-4 py-2 outline-none focus:border-highlight"
        />
        </div>

        {/* Turbine Type */}
        <div className="flex flex-col gap-2">
        <label className="font-mono font-bold">Turbine Type / Manufacturer</label>
        <input 
            type="text" 
            name="turbine_type"
            placeholder="e.g. Vestas V90, Enercon E-70"
            className="font-mono bg-transparent border-2 border-darkblue rounded-lg px-4 py-2 outline-none focus:border-highlight"
        />
        </div>

        {/* Hub Height */}
        <div className="flex flex-col gap-2">
        <label className="font-mono font-bold">Hub Height [m]</label>
        <input 
            type="text" 
            name="hub_height"
            placeholder="100"
            className="font-mono bg-transparent border-2 border-darkblue rounded-lg px-4 py-2 outline-none focus:border-highlight"
        />
        </div>

        {/* Rotor Diameter */}
        <div className="flex flex-col gap-2">
        <label className="font-mono font-bold">Rotor Diameter [m]</label>
        <input 
            type="text" 
            name="rotor_diameter"
            placeholder="100"
            className="font-mono bg-transparent border-2 border-darkblue rounded-lg px-4 py-2 outline-none focus:border-highlight"
        />
        </div>

        {/* Date of commissioning */}
        <div className="flex flex-col gap-2">
        <label className="font-mono font-bold">Date of Commissioning</label>
        <input 
            type="text" 
            name="commissioning_date"
            placeholder="2014-01-13"
            className="font-mono bg-transparent border-2 border-darkblue rounded-lg px-4 py-2 outline-none focus:border-highlight"
        />
        </div>

        {/* Onshore Offshore */}
        <div className="flex flex-col gap-2">
        <label className="font-mono font-bold">Onshore / Offshore</label>
        <select name="onshore_offshore" className="font-mono bg-parchment border-2 border-darkblue rounded-lg px-4 py-2 outline-none focus:border-highlight">
            <option value="">Select...</option>
            <option value="onshore">Onshore</option>
            <option value="offshore">Offshore</option>
        </select>
        </div>

        {/* Coordinates */}
        <div className="flex flex-col gap-2">
          <label className="font-mono font-bold">
            Location (approximate)
          </label>

          <div className="flex gap-4">
            <input
              type="number"
              name="latitude"
              step="any"
              placeholder="Latitude e.g. 52.52"
              className="font-mono bg-transparent border-2 border-darkblue rounded-lg px-4 py-2 outline-none focus:border-highlight w-full"
            />

            <input
              type="number"
              name="longitude"
              step="any"
              placeholder="Longitude e.g. 13.41"
              className="font-mono bg-transparent border-2 border-darkblue rounded-lg px-4 py-2 outline-none focus:border-highlight w-full"
            />
          </div>
        </div>

        {/* File Upload */}
        <div className="flex flex-col gap-2">
        <label className="font-mono font-bold">Dataset (CSV)</label>
        <input 
            type="file" 
            name="dataset"
            accept=".csv,.xlsx"
            className="font-mono border-2 border-darkblue rounded-lg px-4 py-2"
        />
        </div>

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


        {/* Submit Button */}
        <button className="border-4 border-red ring-4 ring-beige bg-darkblue hover:bg-hover text-white font-mono px-8 py-2 rounded-lg">
          Submit Dataset
        </button>

      </form>
    </div>
  )
}

export default Upload;