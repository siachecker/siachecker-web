function App() {
  return (
    <main className="shutdown-page">
      <div className="brand-orb brand-orb-left" aria-hidden="true" />
      <div className="brand-orb brand-orb-right" aria-hidden="true" />

      <header className="shutdown-header">
        <img src="/logo.svg" alt="SIA Checker" className="brand-logo" />
      </header>

      <section className="shutdown-notice" aria-labelledby="shutdown-title">
        <div className="status-mark" aria-hidden="true">
          <span />
        </div>
        <p className="eyebrow">Service update</p>
        <h1 id="shutdown-title">SIA Checker has been discontinued</h1>
        <p className="shutdown-message">This service is no longer available.</p>
      </section>
    </main>
  )
}

export default App
