import React, { useState } from "react";

const Navbar = () => {


    const [isSidebar, setIsSidebar] = useState(false);



    return (
        <>

            <nav className="navbars">
                <nav class="navbar navbar-expand-lg fixed-top">
                    <div class="container-fluid">
                        <div className="padivate">
                            <img src="PEDIVET LOGO PNG.png" alt="" />
                            <a class="navbar-brand" href="#">PEDIVET</a>

                        </div>


                        <div className="upnavbar">
                            {/* <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/Services">Services</a></li>
                                <li><a href="/aboutus">About </a> </li>
                                <li><a href="/Contactus">Contact </a></li>
                                <li><a href="/Dogfood">Dogfood</a></li>
                                <li><a href="/Catfood">Cat Food</a></li>
                            </ul> */}
                           
                           <div class="input-group flex-nowrap  ">
  <span class="input-group-text" id="addon-wrapping"><i class="bi bi-search"></i></span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
</div>

                       <div className="nav-link">
                       <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/Services">Services</a></li>
                                <li><a href="/aboutus">About </a> </li>
                                <li><a href="/Contactus">Contact </a></li>
                                <li><a href="/Dogfood">Dogfood</a></li>
                                <li><a href="/Catfood">Cat Food</a></li>
                            </ul>
                       </div>

                        </div>


                        {isSidebar && <div className="sidebar" onClick={() => setIsSidebar(false)}>
                            <ul>

                                <li>Home</li>
                                <li>Services</li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>}

                        {isSidebar ?

                            <i className="bi bi-x-circle sideIcon" style={{ fontSize: '2rem' }} onClick={() => setIsSidebar(false)}></i>
                            :
                            <i className="bi bi-blockquote-right sideIcon" style={{ fontSize: '2rem' }} onClick={() => setIsSidebar(true)}></i>
                        }
                        <div className="num"> <small>8058337076 </small></div>
                    </div>
                </nav>
            </nav>
        </>
    )
}
export default Navbar;