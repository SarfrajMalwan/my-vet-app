import Layout from "@/CustomHooks/Layout";
import { dogFoodData } from "@/data/Dogfood";
import { useRouter } from "next/router";

const Dogfood = () => {




    return (
        <>
            <Layout>
                <div className="Dogfood">
                    {/* <h1> dog-food</h1> */}

                    <div className="container">


                        <div className="row gap-3">

                            {
                                dogFoodData.length > 0 && dogFoodData.map((card) => {
                                    return (
                                        <>

                                            <DogFoodCard
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
export default Dogfood;





const DogFoodCard = ({ title, price, img, id }) => {

    const router = useRouter()
    return (
        <>
            <div className="card col-md-3  " >
                {/* <h2>id : {id}</h2> */}
                <img src={img} className="card-img-top" alt="..." onClick={() => { router.push(`/${id}/details`) }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p>{price}</p>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    <span>  <button onClick={() => { router.push("/Cart") }}>Add to cart</button> </span>

                </div>
            </div>
        </>
    )
}