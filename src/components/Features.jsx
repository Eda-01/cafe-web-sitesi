import kahveResmi from "../assets/kahve.jpeg";
import wifiResmi from "../assets/wifi.png";
import sicakAtmosferResmi from "../assets/sıcakatmosfer.jpeg";

function Features({ items }) {
  const defaultItems = [
    {
      title: "Taze Kahve",
      description:
        "Her daim taze çekilmiş kahve çekirdekleriyle hazırlanan içeceklerimizle güne enerji katın.",
      iconClass: "bi bi-cup-hot",
      img: kahveResmi,
      alt: "Taze Kahve",
    },
    {
      title: "Ücretsiz WiFi",
      description:
        "Konforlu ortamımızda ücretsiz ve hızlı internetin keyfini çıkarın.",
      iconClass: "bi bi-wifi",
      img: wifiResmi,
      alt: "Ücretsiz WiFi",
    },
    {
      title: "Sıcak Atmosfer",
      description:
        "Samimi ve huzurlu ortamımızda sevdiklerinizle keyifli vakit geçirin.",
      iconClass: "bi bi-emoji-smile",
      img: sicakAtmosferResmi,
      alt: "Sıcak Atmosfer",
    },
  ];

  const data = Array.isArray(items) && items.length > 0 ? items : defaultItems;

  return (
    <section className="py-5" id="menu">
      <div className="container-fluid p-0 m-0">
        <div className="row gx-4 gy-4 justify-content-center">
          {data.map((item, index) => (
            <div
              className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch"
              key={`${item.title}-${index}`}
            >
              <div
                className="card h-100 shadow border-0 mx-2 my-3"
                style={{ minHeight: "420px" }}
              >
                {item.img && (
                  <img
                    src={item.img}
                    className="card-img-top w-100"
                    alt={item.alt || item.title}
                    style={{ objectFit: "cover", height: "200px", maxHeight: "220px" }}
                  />
                )}
                <div className="card-body p-4 text-center">
                  <div className="bg-primary bg-gradient text-white rounded-3 mb-3 p-3 d-inline-block">
                    <i className={`${item.iconClass} fs-2 fs-md-1`}></i>
                  </div>
                  <h5 className="card-title mb-2" style={{ fontSize: "1.2rem" }}>
                    {item.title}
                  </h5>
                  <p className="card-text mb-0" style={{ fontSize: "1rem" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;