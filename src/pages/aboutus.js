import Layout from "@/CustomHooks/Layout";

const Aboutus = () => {
    return (
        <>
            <Layout>
                <div className="about-us">
                    <div className="card">

                        <h1> ABOUT-US</h1>
                    </div>

                    <div className="containt">
                        <div className="section">
                            <p className="pmain">
                                Welcome to our Pet Veterinary Clinic, a place where your pets are
                                treated like family. We are a
                                team of dedicated and compassionate veterinary professionals who
                                believe in providing the highest standard of care to our furry patients.
                                Our clinic is equipped
                                with state-of-the-art medical facilities to ensure your pets receive the best
                                possible treatment.
                                We are small team of doctors and veterinary staff with the ambition to provide
                                best healthcare to your pets at any time. We are 24x7 available for your pet's
                                care and treatment at your door steps.
                            </p>
                            <div class="container text-center">
                                <div class="row g-5">

                                    <div class="col-12 p-5" >
                                        <h3 className="h3"> O U R    V A L U E S</h3>
                                        <h4> All of Your Pet Needs Under One Roof</h4>
                                    </div>
                                    <div class="col-6 col-sm-4 " >
                                        <h5>COMPASSIONATE CARE </h5>
                                        <p className="ppart">
                                            We believe that every pet deserves to be treated with kindness and respect.
                                            Our team is dedicated to providing gentle, loving care to each pet that walks
                                            through our doors.


                                        </p>

                                    </div>

                                    <div class="col-6 col-sm-4 ">
                                        <h5> PROFESSIONAL EXCELLENCE</h5>
                                        <p className="ppart">
                                            We strive for the highest standards in veterinary medicine. Our team is constantly
                                            learning and improving to ensure we provide the most up-to-date treatments and
                                            procedures.


                                        </p>

                                    </div>


                                    <div class="w-100 d-none d-md-block bg-red"></div>

                                    <div class="col-6 col-sm-4 ">
                                        <h5>INTEGRITY</h5>
                                        <p className="ppart">
                                            We operate with honesty and transparency in all our interactions.
                                            We believe in open communication with pet
                                            owners about their pet’s health and treatment options.


                                        </p>

                                    </div>
                                    <div class="col-6 col-sm-4 ">
                                        <h5> COMMUNITY ENGAGEMENT</h5>
                                        <p className="ppart">
                                            We are committed to giving back to our community and fostering a culture of responsibility
                                            towards animals.
                                            We actively participate in local events and support animal welfare initiatives.


                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </Layout>
        </>
    )
}
export default Aboutus;