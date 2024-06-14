import { useRouter } from "next/router";


const Checkout = () => {

    const router = useRouter()
    return (
        <>

            <nav className="nav">
                <h1> PEDIVET   </h1>
                <span> <i class="bi bi-bag-plus" onClick={() => {
                    router.push("/Cart")
                }}></i> </span>
            </nav>
            <div className="Checkout">
                <div className="container">
                    <div className="row">
                        <div className=" chack1 col-lg-6 ">

                            <form class="row g-3">
                                <div class=" emails col-md-6 " >
                                    <label for="inputEmail4" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="inputEmail4" />
                                </div>
                                <div className="Delivery">
                                    <h2> Delivery</h2>
                                </div>

                                <div class=" countrys col-md-12">
                                    <label for="inputState" class="form-label">Country</label>
                                    <select id="inputState" class="form-select">
                                        <option selected>india</option>
                                        <option>...</option>
                                    </select>
                                </div>

                                <div class="col-md-6">
                                    <label for="inputfirstname" class="form-label">firstname</label>
                                    <input type="text" class="form-control" id="inputfirstname" placeholder="firstname" />
                                </div>

                                <div class="col-md-6">
                                    <label for="inputlastname" class="form-label">lastname</label>
                                    <input type="text" class="form-control" id="inputlastname" placeholder="lastname" />
                                </div>


                                <div class="col-12">
                                    <label for="inputAddress" class="form-label">Address</label>
                                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                                </div>

                                <div class="col-md-6">
                                    <label for="inputCity" class="form-label">City</label>
                                    <input type="text" class="form-control" id="inputCity" />
                                </div>
                                <div class="col-md-4">
                                    <label for="inputState" class="form-label">State</label>
                                    <select id="inputState" class="form-select">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <label for="inputZip" class="form-label">pin</label>
                                    <input type="text" class="form-control" id="inputZip" />
                                </div>

                                <div class="col-md-12">
                                    <label for="inputZip" class="form-label">phone</label>
                                    <input type="tel" name="phone" id="inputAddress" class="form-control" placeholder="phone" />
                                </div>

                                <div class=" check col-md-12">
                                    <input type="checkbox" class="form-check-input" id="storeinfo" name="save-information" />
                                    <p> Save this information for next time</p>
                                </div>

                                <div className="Shipping-m">
                                    <p> <strong> Shipping method</strong></p>
                                    <div className="method  col-md-12">
                                        <p> Enter your shipping address to view available shipping methods.</p>
                                    </div>
                                </div>
                            </form>





                        </div>
                        <div className=" chack2 col-lg-6">
                            <div className="additems">
                                <div className="heading">
                                    <h3> items</h3>
                                </div>

                                <div className="items-list">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Checkout;