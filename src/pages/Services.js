import Layout from "@/CustomHooks/Layout";
import React from "react";


const Services = () => {
    return (
        <Layout>

            <div className="services">
                <div className="serimg">
                    {/* <img src="pixel1.jpg" alt="" /> */}
                    <h3> SERVICES </h3>
                </div>

                <div className="container ">

                    <div className="title">
                        <h1>
                            24/7 Consultation and Veterinary Services for Your Beloved Pets.
                        </h1>
                    </div>

                    <div className="section">

                        <div className="row ">
                            <div className="col-6">

                                <img src="serviece.avif" alt="" />

                                <div className="text">
                                    <h3>Pet Lab Tests </h3>
                                    <p>
                                        We Provide All type of pet lab tests like Livor <br /> function test,kidney function test, CBC, etc...</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <img src="serv2.avif" alt="" />

                                <div className="text">
                                    <h3> Home Consultation </h3>
                                    <p>
                                        We Provide All type of pet lab tests like <br /> Livor function test,kidney function test, CBC, etc...</p>
                                </div>
                            </div>
                        </div>

                        <div className="row ">
                            <div className="col-6">
                                <img src="ser3.avif" alt="" />

                                <div className="text">
                                    <h3> Pet Veccination </h3>
                                    <p>
                                        We Provide All type of pet lab tests like <br />Livor function test,kidney function test, CBC, etc...</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <img src="ser4.avif" alt="" />

                                <div className="text">
                                    <h3> Pet Boarding </h3>
                                    <p>
                                        We Provide All type of pet lab tests like <br />Livor function test,kidney function test, CBC, etc...</p>
                                </div>
                            </div>


                        </div>

                        <div className="row">
                            <div className="col-6">
                                <img src="ser5.avif" alt="" />

                                <div className="text">
                                    <h3> Pet Foods </h3>
                                    <p>
                                        We Provide All type of pet lab tests likebr <br /> Livor function test,kidney function test, CBC, etc...</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <img src="ser6.avif" alt="" />

                                <div className="text">
                                    <h3>Pet Spaces </h3>
                                    <p>
                                        We Provide All type of pet lab tests like <br />Livor function test,kidney function test, CBC, etc...</p>
                                </div>
                            </div>


                        </div>
                    </div>


                </div>

            </div>



        </Layout >
    )

}


export default Services;