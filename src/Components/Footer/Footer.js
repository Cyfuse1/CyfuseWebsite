import './Footer.css'
const Footer=()=>{
    return(
        <div className="footer">
            <h2>CyFuse</h2>
            <p>Student branch</p>
            <p>IIIT Delhi, Okhla Industrial, Phase-III, New Delhi-110020</p>


            <div className="icons">
                {/* <a href="https://www.facebook.com/cybertron.iiitd/" target="_blank"><i className="fa-brands fa-telegram" id="telegram"></i></a> */}
                <a href="https://www.instagram.com/cyfuse_iiitd/" target="_blank"><i className="fab fa-instagram" id="insta" color="#fff"></i></a>
                <a href="https://www.linkedin.com/company/cyfuse/" target="_blank"><i className="fab fa-linkedin-in" id="linkedin" color="#fff"></i></a>
                <a href="mailto:cyfuse@sc.iiitd.ac.in" target="_blank"><i className="fa-regular fa-envelope" id="twitter" color="#fff"></i></a>
            </div>
            <div className="copyrights">
             <p>© 2021 CyFuse. All rights reserved.</p>
             <p>Designed and Developed by <a href="https://www.linkedin.com/in/arpan-kumar-98124b277?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJ9PAzvcBRsCTmMfipNzbeA%3D%3D" target="_blank">Arpan Kumar</a></p>
            </div>
            
        </div>
    );
}
export default Footer
