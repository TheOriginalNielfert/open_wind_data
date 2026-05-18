function Imprint() {
  return (
    <div className="flex flex-col gap-8 p-16">
      <h1 className="font-mono font-bold text-4xl text-center">Impressum</h1>
      <div className="flex flex-col gap-4 border-2 border-darkblue rounded-xl p-8 max-w-2xl mx-auto">
        <p className="font-mono text-lg">
          This website is currently in beta.
        </p>
        <p className="font-mono text-lg">
          A full legal notice will be added before the official launch.
        </p>
        <p className="font-mono text-lg">
          For any legal inquiries please contact us at:
        </p>
        <a href="mailto:openwinddata@proton.me"
           className="font-mono text-darkblue hover:text-highlight">
          openwinddata@proton.me
        </a>
      </div>
    </div>
  )
}

export default Imprint;