import { useState } from 'react';

function RequestAccess() {
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
      <h1 className="font-mono font-bold text-4xl mb-4">Request Access</h1>
      <p className="font-mono text-lg mb-12 max-w-2xl text-center">
        Fill in the form below to request access to the Open Wind Data repository.
        We will review your request and get back to you shortly.
      </p>

      <form
        onSubmit={handleSubmit}
        name="request-access"
        netlify
        className="w-full max-w-2xl flex flex-col gap-6 border-2 border-darkblue rounded-xl p-8 mx-auto"
      >
        <input type="hidden" name="form-name" value="request-access"/>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="font-mono font-bold">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="e.g. researcher@university.de"
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
            placeholder="e.g. University of Hamburg"
            className="font-mono bg-transparent border-2 border-darkblue rounded-lg px-4 py-2 outline-none focus:border-highlight"
        />
        </div>

        {/* Role */}
        <div className="flex flex-col gap-2">
          <label className="font-mono font-bold">I am a...</label>
          <select name="role" className="font-mono bg-parchment border-2 border-darkblue rounded-lg px-4 py-2 outline-none focus:border-highlight">
            <option value="">Select...</option>
            <option value="researcher">Researcher / Academic</option>
            <option value="student">Student</option>
            <option value="operator">Wind Farm Operator</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Research Purpose */}
        <div className="flex flex-col gap-2">
          <label className="font-mono font-bold">Research Purpose</label>
          <textarea
            name="purpose"
            placeholder="Briefly describe your research and how you plan to use the data..."
            rows={4}
            className="font-mono bg-transparent border-2 border-darkblue rounded-lg px-4 py-2 outline-none focus:border-highlight resize-none"
          />
        </div>

        {formStatus === 'success' && (
          <p className="font-mono text-green-600 font-bold text-center">
            Thank you! We will review your request and get back to you soon.
          </p>
        )}
        {formStatus === 'error' && (
          <p className="font-mono text-red font-bold text-center">
            Something went wrong. Please try again.
          </p>
        )}

        <button className="border-4 border-red ring-4 ring-beige bg-darkblue hover:bg-hover text-white font-mono px-8 py-2 rounded-lg">
          Request Access
        </button>

      </form>
    </div>
  )
}

export default RequestAccess;