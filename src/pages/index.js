

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

import Aboutus from "./aboutus";




export default function Home() {
  return (
    <>

      <Navbar />
      
      <div className="slide">
        <div id="carouselExampleCaptions" class="carousel slide">

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="aamir5.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block ">
                <h5>YOUR PAT'S HEALTH IS </h5>
                <h5>OUR LIFE'S PASSION </h5>


              </div>
            </div>


          </div>

        </div>
      </div>
      
      <Footer />

    </>

  );
}
