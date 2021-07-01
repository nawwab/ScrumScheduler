function Header() {
  return (
    <header className="py-8">
        <div className="flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h1 className="text-2xl sm:text-4xl font-semibold">Scrum Scheduler</h1>
        </div>
        <p className="text-xl sm:text-2xl font-medium text-center">
          <a className="link" href="https://en.wikipedia.org/wiki/Scrum_(software_development)">scrum</a> adalah suatu kerangka kerja berdasarkan konsep <a className="link" href="https://agilemanifesto.org/iso/id/manifesto.html">agile</a> untuk pengembangan perangkat lunak 
        </p>
    </header>
  );
}

export default Header;
