import kahveResmi from "../assets/kahve.jpeg";
import wifiResmi from "../assets/wifi.png";
import sicakAtmosferResmi from "../assets/sıcakatmosfer.jpeg";

function Features() {
    return (
      <section className="py-5">
        <div className="container-fluid p-0 m-0">
          <div className="row gx-4 gy-4 justify-content-center">
            {/* Box 1 */}
            <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
              <div className="card h-100 shadow border-0 mx-2 my-3" style={{minHeight: '420px'}}>
                <img src={kahveResmi} className="card-img-top w-100" alt="Taze Kahve" style={{objectFit: 'cover', height: '200px', maxHeight: '220px'}} />
                <div className="card-body p-4 text-center">
                  <div className="bg-primary bg-gradient text-white rounded-3 mb-3 p-3 d-inline-block">
                    <i className="bi bi-cup-hot fs-2 fs-md-1"></i>
                  </div>
                  <h5 className="card-title mb-2" style={{fontSize: '1.2rem'}}>Taze Kahve</h5>
                  <p className="card-text mb-0" style={{fontSize: '1rem'}}>Her daim taze çekilmiş kahve çekirdekleriyle hazırlanan içeceklerimizle güne enerji katın.</p>
                </div>
              </div>
            </div>
            {/* Box 2 */}
            <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
              <div className="card h-100 shadow border-0 mx-2 my-3" style={{minHeight: '420px'}}>
                <img src={wifiResmi} className="card-img-top w-100" alt="Ücretsiz WiFi" style={{objectFit: 'cover', height: '200px', maxHeight: '220px'}} />
                <div className="card-body p-4 text-center">
                  <div className="bg-primary bg-gradient text-white rounded-3 mb-3 p-3 d-inline-block">
                    <i className="bi bi-wifi fs-2 fs-md-1"></i>
                  </div>
                  <h5 className="card-title mb-2" style={{fontSize: '1.2rem'}}>Ücretsiz WiFi</h5>
                  <p className="card-text mb-0" style={{fontSize: '1rem'}}>Konforlu ortamımızda ücretsiz ve hızlı internetin keyfini çıkarın.</p>
                </div>
              </div>
            </div>
            {/* Box 3 */}
            <div className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
              <div className="card h-100 shadow border-0 mx-2 my-3" style={{minHeight: '420px'}}>
                <img src={sicakAtmosferResmi} className="card-img-top w-100" alt="Sıcak Atmosfer" style={{objectFit: 'cover', height: '200px', maxHeight: '220px'}} />
                <div className="card-body p-4 text-center">
                  <div className="bg-primary bg-gradient text-white rounded-3 mb-3 p-3 d-inline-block">
                    <i className="bi bi-emoji-smile fs-2 fs-md-1"></i>
                  </div>
                  <h5 className="card-title mb-2" style={{fontSize: '1.2rem'}}>Sıcak Atmosfer</h5>
                  <p className="card-text mb-0" style={{fontSize: '1rem'}}>Samimi ve huzurlu ortamımızda sevdiklerinizle keyifli vakit geçirin.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Features;