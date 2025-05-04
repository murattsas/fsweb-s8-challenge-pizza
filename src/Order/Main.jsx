import React from 'react';
import './main.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const Main = () => {
  return (
    <div>
      <header>
        <div>
          <img src="./public/assets/iteration-1/logo.svg" alt="Logo" />
          <p className="info-firsat">fırsatı kaçırma</p>
          <p className="info-pizza">
            KOD ACIKTIRIR, <br /> PİZZA DOYURUR
          </p>
          <Link to="/order"><button className="btn-aciktim">ACIKTIM</button></Link>
        </div>
      </header>

      <section className="icon-section">
        <nav className="icons">
          <li className="li-icons">
            <img src="public/assets/iteration-2/icons/1.svg" alt="YENİ! Kore" />
            <p>YENİ! Kore</p>
          </li>
          <li className="li-icons">
            <img src="public/assets/iteration-2/icons/2.svg" alt="Pizza" />
            <p>Pizza</p>
          </li>
          <li className="li-icons">
            <img src="public/assets/iteration-2/icons/3.svg" alt="Burger" />
            <p>Burger</p>
          </li>
          <li className="li-icons">
            <img src="public/assets/iteration-2/icons/4.svg" alt="Kızartmalar" />
            <p>Kızartmalar</p>
          </li>
          <li className="li-icons">
            <img src="public/assets/iteration-2/icons/5.svg" alt="Fast food" />
            <p>Fast food</p>
          </li>
          <li className="li-icons">
            <img src="public/assets/iteration-2/icons/6.svg" alt="Gazlı İçecekler" />
            <p>Gazlı İçecekler</p>
          </li>
        </nav>
      </section>

      <section className="burger-section">
        <div className="ozel-lezzetus">
          <div className="lezzetus">
            <p className="p-ozel-lezzetus">
              Özel <br /> Lezzetus
            </p>
            <p className="p-ozel-lezzetus-position">Position: Absolute Acı Burger</p>
            <Link to="/order"><button className="btn-siparis-ver">Sipariş Ver</button></Link> 
          </div>

          <div className="burger">
            <div className="burger-menu">
              <p>Hackathlon <br /> Burger Menü</p>
              <Link to="/order"><button className="btn-siparis-ver">Sipariş Ver</button></Link>
            </div>
            <div className="burger-kurye">
              <p>Çooookkk hızlı <br /> npm gibi kurye</p>
              <Link to="/order"><button className="btn-siparis-ver">Sipariş Ver</button></Link>
            </div>
          </div>
        </div>

        <h2 className="h-paketlenen-menuler">en çok paketlenen menüler</h2>
        <h3>Acıktıran Kodlara Doyuran Lezzetler</h3>
        <div>
          <nav className="icons2">
            <button className="btn-icon">
              <img src="public/assets/iteration-2/icons/1.svg" alt="Ramen" />
              Ramen
            </button>
            <button className="btn-icon">
              <img src="public/assets/iteration-2/icons/2.svg" alt="Pizza" />
              Pizza
            </button>
            <button className="btn-icon">
              <img src="public/assets/iteration-2/icons/3.svg" alt="Burger" />
              Burger
            </button>
            <button className="btn-icon">
              <img src="public/assets/iteration-2/icons/4.svg" alt="Kızartmalar" />
              Kızartmalar
            </button>
            <button className="btn-icon">
              <img src="public/assets/iteration-2/icons/5.svg" alt="Fast food" />
              Fast food
            </button>
            <button className="btn-icon">
              <img src="public/assets/iteration-2/icons/6.svg" alt="Soft Drinks" />
              Soft Drinks
            </button>
          </nav>
        </div>

        <section className="section-pizza">
          <div className="pizza">
            <img
              src="public/assets/iteration-2/pictures/food-1.png"
              className="section-img"
              alt="pizza"
            />
            <p>Terminal Pizza</p>
            <nav className="derecelendirme">
              <h4 className="puan">4.9</h4>
              <h4 className="adet"> (200) </h4>
              <h4 className="fiyat">60₺</h4>
            </nav>
          </div>
          <div className="aci-pizza">
            <img
              src="public/assets/iteration-2/pictures/food-2.png"
              className="section-img"
              alt="aci-pizza"
            />
            <p>Position Absolute Acı Pizza</p>
            <nav className="derecelendirme">
              <h4 className="puan">4.9</h4>
              <h4 className="adet"> (200) </h4>
              <h4 className="fiyat">60₺</h4>
            </nav>
          </div>
          <div className="tavuklu-burger">
            <img
              src="public/assets/iteration-2/pictures/food-3.png"
              className="section-img"
              alt="tavuklu-pizza"
            />
            <p>useEffect Tavuklu Burger</p>
            <nav className="derecelendirme">
              <h4 className="puan">4.9</h4>
              <h4 className="adet"> (200) </h4>
              <h4 className="fiyat">60₺</h4>
            </nav>
          </div>
        </section>
      </section>

      <footer>
        <div className="footer-iletisim">
          <div className="iletisim">
            <img
              src="public/assets/iteration-2/footer/logo-footer.svg"
              alt="logo"
              className="footer-logo"
            />
            <div className="iletisim-item">
              <img
                src="public/assets/iteration-2/footer/icons/icon-1.png"
                alt=""
              />
              <p>
                341 Londonderry Road, <br /> Istanbul/Turkiye
              </p>
            </div>

            <div className="iletisim-item">
              <img
                src="public/assets/iteration-2/footer/icons/icon-2.png"
                alt=""
              />
              <p>aciktim@teknolojikyemekler.com</p>
            </div>

            <div className="iletisim-item">
              <img
                src="public/assets/iteration-2/footer/icons/icon-3.png"
                alt=""
              />
              <p>+90 216 123 45 67</p>
            </div>
          </div>

          <div className="hot-menu">
            <h1 className="h-menu">Hot Menu</h1>
            <p>Terminal Pizza</p>
            <p>useEffect Tavuklu Pizza</p>
            <p>Beyaz Console Fronsty</p>
            <p>Testler Geçti Mutlu Burger</p>
            <p>Position Absolute Acı Burger</p>
          </div>

          <div className="instagram">
            <h1 className="h-instagram">Instagram</h1>
            <nav className="img-instagram">
              <img
                src="public/assets/iteration-2/footer/insta/li-0.png"
                alt=""
              />
              <img
                src="public/assets/iteration-2/footer/insta/li-1.png"
                alt=""
              />
              <img
                src="public/assets/iteration-2/footer/insta/li-2.png"
                alt=""
              />
              <img
                src="public/assets/iteration-2/footer/insta/li-3.png"
                alt=""
              />
              <img
                src="public/assets/iteration-2/footer/insta/li-4.png"
                alt=""
              />
              <img
                src="public/assets/iteration-2/footer/insta/li-5.png"
                alt=""
              />
            </nav>
          </div>
        </div>

        <div className="footer-twitter">
          <p>© 2023 Teknolojik Yemekler.</p>
          <i className="fa fa-twitter"></i>
        </div>
      </footer>
    </div>
  );
};

export default Main;