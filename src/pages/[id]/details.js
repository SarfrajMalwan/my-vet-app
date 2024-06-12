import Layout from "@/CustomHooks/Layout";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { dogFoodData } from "@/data/Dogfood";
import { catFoodData } from "@/data/catFoodData";



const detail = () => {
  const router = useRouter()

  console.log(router)

  const { id } = router.query;
  const [data, setData] = useState()

  useEffect(() => {
    if (!router?.isReady) return

    // console.log(id)

    const allfood = [...dogFoodData, ...catFoodData]

    const res = allfood.find((f) => f.id == id)
    console.log(res)
    setData(res)
  }, [id])




  return (
    <>
      <Layout>


        <div className="container">

          <div className="nav-detail ">
            <ul>
              <li> <a href="/" className="btn btn-primary"> /home</a></li>
              <li> <a href="/Dogfood" className="btn btn-primary">/dogfood</a> </li>

            </ul>
          </div>
          <div className="body">

            <div className="section-img">
              <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={data?.image} class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="dfood2.jpg" class="d-block w-100" alt="..." />
                  </div>
                  <div class="carousel-item">
                    <img src="dfood2.jpg" class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button class="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon bg-black " aria-hidden="true"></span>
                  <span class="visually-hidden  ">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span class="carousel-control-next-icon bg-black" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="section-about">

              <h2 className="product-name">
                {data?.title}
              </h2>
              <div className="star d-flex">
                <i class="bi bi-star "></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <p> 2 reviews</p>
              </div>

              <div className="price">
                <h6> M.R.P= {data?.price}</h6>
                <p> Inclusive of all taxes</p>
              </div>
              <button> add to bag </button>

              <div className="information">
                <h6> BRAND:{data?.brand} </h6>
                <h6>FLAVUOR: {data?.flavor} </h6>
                <h6> NetQuantity:{data?.NetQuantity} </h6>
              </div>


            </div>
          </div>

        </div>
      </Layout>
    </>
  )
}
export default detail;