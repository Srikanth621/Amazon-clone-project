import React from "react";
import "./Home.css";
import Product from "./Product";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

function Home() {
  const slideImages = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Jupiter/GW/Phase-2/Ele_acc_unrec_Tallhero_1500x600._CB417557369_.jpg",

    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/OHL_Discovery/Phase_2/Mobile_hero_home-decor_1500x600._CB417815729_.jpg",

    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Audio/Jupiter20/Phase2/GW/R02_Hdpns_spkrs_1500x600._CB417387854_.jpg",

    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/affordability/phase2/Header_PC_1500x178_English1.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",
  ];
  return (
    <div className="home">
      <div className="home__container">
        <div className="slide-container">
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div className="each__slide">
                <div style={{ backgroundImage: `url(${slideImage})` }}>
                  <span> Slide {index + 1}</span>
                </div>
              </div>
            ))}
          </Slide>
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="MSI GL65 Leopard, Intel 9th Gen. i5-9300H, 15.6 FHD Gaming Laptop (8GB/512GB NVMe SSD/Windows 10 Home/Nvidia GTX 1650/ Black/2.3Kg), 9SCXK-065IN"
            price={40500}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81cBdLyWiGL._SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
