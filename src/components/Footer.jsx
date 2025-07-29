function Footer() {
    return (
      <footer className="bg-dark py-4 mt-auto" id="contact">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-auto text-white text-center" style={{fontSize: '1rem', padding: '0.5rem 0'}}>
              <div style={{fontWeight: 'bold', fontSize: '1.1rem'}}>Tatlım Kafe</div>
              <div>Adres: Atatürk Cad. No: 42, İstanbul</div>
              <div>Telefon: 0212 123 45 67</div>
              <div style={{marginTop: '0.5rem'}}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{color: 'white', marginRight: '10px'}}><i className="bi bi-instagram"></i></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{color: 'white', marginRight: '10px'}}><i className="bi bi-facebook"></i></a>
                <a href="mailto:info@cafearoma.com" style={{color: 'white'}}><i className="bi bi-envelope"></i></a>
              </div>
              <div style={{marginTop: '0.5rem', fontSize: '0.9em'}}>&copy; 2025 Tatlım Kafe</div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;