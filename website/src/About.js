function About() {
  return (
    <div className="flex flex-col gap-8 p-16">
      <h1 className="font-mono font-bold text-4xl text-center">About</h1>

      <div className="flex flex-col gap-6 border-2 border-darkblue rounded-xl p-8 max-w-3xl mx-auto">

        <p className="font-mono text-lg">
          Open Wind Data was founded in 2026 by a wind energy professional and 
          researcher who kept running into the same problem: not enough real-world 
          data to do meaningful analysis.
        </p>

        <p className="font-mono text-lg">
          Wind turbines generate enormous amounts of data every day. Most of it 
          sits on servers, never seen by anyone outside the operating company. 
          Meanwhile, researchers and students struggle to find enough datasets to 
          train models, validate methods, or simply learn from.
        </p>

        <p className="font-mono text-lg text-highlight font-bold">
          Open Wind Data exists to change that.
        </p>

        <p className="font-mono text-lg">
          We are a community of operators, service providers, researchers and 
          students who believe that sharing data makes wind energy better for 
          everyone. Contributors get access to a growing repository of real-world 
          SCADA data. Researchers get the datasets they need. The wind energy 
          community gets better tools, better models and better insights.
        </p>

        <p className="font-mono text-lg">
          Wind power has always been a grassroots movement. 
          Open Wind Data wants to keep it that way.
        </p>

        <hr className="border-darkblue"/>

        <div className="flex flex-col gap-2">
          <p className="font-mono text-sm text-gray-500">Built on</p>
          <div className="flex gap-6">
            <a href="https://zenodo.org/communities/openwinddata" 
               target="_blank" 
               rel="noreferrer"
               className="font-mono text-darkblue hover:text-highlight">
              Zenodo →
            </a>
            <a href="https://github.com/TheOriginalNielfert/open_wind_data" 
               target="_blank" 
               rel="noreferrer"
               className="font-mono text-darkblue hover:text-highlight">
              GitHub →
            </a>
          </div>
          <p className="font-mono text-sm text-gray-500 mt-2">Contact</p>
          <a href="mailto:openwinddata@proton.me" 
             className="font-mono text-darkblue hover:text-highlight">
            openwinddata@proton.me →
          </a>
        </div>

      </div>
    </div>
  )
}

export default About;