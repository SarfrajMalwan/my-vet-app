import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";


const Layout = ({ children }) => {
    return (
        <>

            <Navbar></Navbar>

            {children}

            <Footer />
        </>
    )
}




export default Layout