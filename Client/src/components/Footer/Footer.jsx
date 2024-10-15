import Logo from './Logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faTwitter, faLinkedin, faYoutube, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"; // Importing the necessary icons
export function Footer() {
  return (
    <div className="w-full bg-[#092b1e] text-white py-4">
      <div className="flex flex-col md:flex-row justify-between px-7 md:px-20 py-4">
        
        {/* Left Section */}
        <div className="mb-4 md:mb-0 md:w-1/3">
          <img
            src={Logo}
            alt="Lifeline Logo"
          />
          <hr className="border-t border-gray-500 mb-2" />
          <div className="flex space-x-3 mb-4">
          <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
            <FontAwesomeIcon icon={faTwitter} size="lg" />
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
            <FontAwesomeIcon icon={faYoutube} size="lg" />
            <FontAwesomeIcon icon={faInstagram} size="lg" />
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          </div>
          <div className="mt-2">
            <p className="font-semibold text-base">For any queries</p>
            <p>Email: info@rachit.org</p>
            <p>Contact No: +91 XXXXXXXXXX</p>
          </div>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-sm">
          

          <div>
            <h4 className="font-bold text-base mb-1">Services</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Fundraising for NGOs</a></li>
              <li><a href="#" className="hover:underline">Browse Fundraiser</a></li>
              <li><a href="#" className="hover:underline">What is Crowdfunding?</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base mb-1">About Us</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Team Lifeline</a></li>
              <li><a href="#" className="hover:underline">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base mb-1">Contact Us</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Donate Us</a></li>
              <li><a href="#" className="hover:underline">FAQs & Help Center</a></li>
              <li><a href="#" className="hover:underline">Trust & Safety</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-end px-10 md:px-20">
        <img
          src="https://ketto.gumlet.io/assets/images/homepage/footer-secured-card.png?w=457&dpr=1.0&q=50"
          alt="Secured Payment"
          className="w-auto h-10"
        />
      </div>

      <hr className="border-t border-gray-500 mt-4" />

      <div className="text-center text-sm text-gray-400 mt-2">
        Copyright © 2024 Lifeline Pvt Ltd. All Rights Reserved.
        Terms of Use | Privacy Policy
      </div>
    </div>
  );
}

export default Footer;
