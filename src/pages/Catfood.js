import Layout from "@/CustomHooks/Layout";
import Link from "next/link";
import { catFoodData } from "../data/catFoodData";
import { useRouter } from "next/router";

const Catfood = () => {
    return (
        <>
            <Layout>
                <div className="Catfood">
                    <div className=" container">
                        <div className="row gap-3">

                            {
                                catFoodData.length > 0 && catFoodData.map((card) => {
                                    return (
                                        <>
                                            <Catfoodcard
                                                title={card.title}
                                                img={card.image}
                                                price={card.price}
                                                id={card.id}

                                            />
                                        </>
                                    )
                                })
                            }
                        </div>

                    </div>


                </div>
            </Layout>
        </>
    )
}
export default Catfood;

const Catfoodcard = ({ title, price, img, id }) => {

    const router = useRouter()

    return (
        <>
            <div class="card col-md-3" onClick={() => {
                router.push(`/${id}/details`)
            }} >
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p> {price} </p>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    {/* <Link hr ef="/Cart"> Add to cart</Link> */}
                    <span>  <button onClick={() => { router.push("/Cart") }}>Add to cart</button> </span>
                </div>
            </div>
        </>
    )
}