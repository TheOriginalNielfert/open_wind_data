import { useState } from 'react';

function RequestAccess() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
    const form = e.target;
    const data = new FormData(form);
    
    const response = await fetch('https://formspree.io/f/maqkylqp', {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
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
      <h1 className="font-mono font-bold text-4xl text-center">Request Access</h1>

      <div className="flex flex-col gap-6 border-2 border-darkblue rounded-xl p-8 max-w-2xl mx-auto w-full">
        <p className="font-mono text-gray-600 text-sm">
          Fill in the form below to request access to the Open Wind Data repository.
          We will review your request and get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <div className="flex flex-col gap-2">
            <label className="font-mono font-bold">Email Address</label>
            <input type="email" name="email" required
              placeholder="researcher@university.de"
              className="font-mono bg-transparent border-2 border-darkblue rounded-lg px-4 py-2 outline-none focus:border-highlight"/>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-mono font-bold">Name</label>
            <input type="text" name="name" required
              placeholder="Max Mustermann"
              className="font-mono bg-transparent border-2 border-darkblue rounded-lg px-4 py-2 outline-none focus:border-highlight"/>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-mono font-bold">Organisation</label>
            <input type="text" name="organisation" required
              placeholder="University of Hamburg"
              className="font-mono bg-transparent border-2 border-darkblue rounded-lg px-4 py-2 outline-none focus:border-highlight"/>
          </div>

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

          <div className="flex flex-col gap-2">
            <label className="font-mono font-bold">Research Purpose</label>
            <textarea name="purpose" rows={4}
              placeholder="Briefly describe your research and how you plan to use the data..."
              className="font-mono bg-transparent border-2 border-darkblue rounded-lg px-4 py-2 outline-none focus:border-highlight resize-none"/>
          </div>

          {formStatus === 'loading' && (
            <p className="font-mono text-darkblue font-bold text-center">Sending... please wait.</p>
          )}
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

          <button className="border-4 border-red ring-4 ring-beige bg-darkblue hover:bg-hover text-white font-mono px-8 py-3 rounded-lg mt-2">
            Request Access
          </button>

        </form>
      </div>
    </div>
  )
}

export default RequestAccess;