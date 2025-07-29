function Hero() {
    return (
        <header className="bg-light py-5">
            <div className="container-fluid p-0 m-0">
                <div className="row gx-5 align-items-center justify-content-center ">
                    <div className="col-12 col-lg-8 col-xl-7 col-xxl-6">
                        <div className="my-5 text-center text-xl-start">
                            <h1 className="fw-bold text-black mb-2" style={{fontSize: '2rem', fontWeight: 700}}>
                            Tatlım Kafe'ye Hoş Geldiniz!
                            </h1>
                            <p className="lead fw-normal text-muted mb-4" style={{fontSize: '1.1rem'}}>
                                Şehrin en taze kahvesi ve en sıcak atmosferiyle sizleri bekliyoruz. Güne lezzetli bir başlangıç yapmak için doğru yerdesiniz.
                            </p>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#menu">Menüyü Gör</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero;