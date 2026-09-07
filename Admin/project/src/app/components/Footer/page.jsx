import Link from "next/link";
function Footer() {
   
  

  return (
  <footer className="bg-white text-gray-800 pt-16 pb-6 border-t border-gray-100">
  <div className="max-w-6xl mx-auto px-6">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* Logo + About */}
      <div>
        <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
          Food Resturant
        </h2>

        <p className="text-gray-500 text-sm leading-6">
          Find trusted professionals for all your home needs, from cleaning and
          repairs to plumbing, painting, electrical work, and more. Book reliable
          services quickly and enjoy high-quality solutions at affordable prices.
        </p>

        {/* Social */}
        <div className="flex gap-3 mt-5">
          <a
            href="#"
            className="
              w-9 h-9
              flex items-center justify-center
              rounded-full
              bg-gray-50
              text-gray-500
              border border-gray-100
              hover:bg-[#D4A05C]
              hover:text-white
              transition-all
              duration-300
            "
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            href="#"
            className="
              w-9 h-9
              flex items-center justify-center
              rounded-full
              bg-gray-50
              text-gray-500
              border border-gray-100
              hover:bg-[#D4A05C]
              hover:text-white
              transition-all
              duration-300
            "
          >
            <i className="fab fa-twitter"></i>
          </a>

          <a
            href="#"
            className="
              w-9 h-9
              flex items-center justify-center
              rounded-full
              bg-gray-50
              text-gray-500
              border border-gray-100
              hover:bg-[#D4A05C]
              hover:text-white
              transition-all
              duration-300
            "
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="#"
            className="
              w-9 h-9
              flex items-center justify-center
              rounded-full
              bg-gray-50
              text-gray-500
              border border-gray-100
              hover:bg-[#D4A05C]
              hover:text-white
              transition-all
              duration-300
            "
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-5">
          Quick Links
        </h3>

        <ul className="space-y-3">
          <li>
            <Link
              href="/Homepage"
              className="text-gray-500 hover:text-[#D4A05C] transition-all"
            >
              Add Food
            </Link>
          </li>

          <li>
            <Link
              href="/Servicespage"
              className="text-gray-500 hover:text-[#D4A05C] transition-all"
            >
              Show  Food
            </Link>
          </li>

          <li>
            <Link
              href="/Aboutus"
              className="text-gray-500 hover:text-[#D4A05C] transition-all"
            >
              Add Category
            </Link>
          </li>

          <li>
            <Link
              href="/contactpage"
              className="text-gray-500 hover:text-[#D4A05C] transition-all"
            >
              Show Category
            </Link>
          </li>
           <li>
            <Link
              href="/contactpage"
              className="text-gray-500 hover:text-[#D4A05C] transition-all"
            >
               Order List
            </Link>
          </li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-5">
         Supports
        </h3>

        <ul className="space-y-3 text-gray-500">
          <li>
            <a href="#" className="hover:text-[#D4A05C] transition">
              FAQ
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-[#D4A05C] transition">
              Help Center
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-[#D4A05C] transition">
              Privacy Policy
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-[#D4A05C] transition">
              Terms of Service
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-[#D4A05C] transition">
              Contact Support
            </a>
          </li>
        </ul>
      </div>

      {/* Newsletter */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-5">
          Newsletter
        </h3>

        <p className="text-gray-500 text-sm mb-4 leading-6">
          Subscribe to our newsletter for updates, news, and exclusive offers.
        </p>

        <div className="flex shadow-[0_5px_20px_rgba(0,0,0,0.06)] rounded-lg overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            className="
              w-full
              px-4 py-3
              bg-gray-50
              text-gray-800
              placeholder:text-gray-400
              outline-none
              border border-gray-100
            "
          />

          <button
            className="
              bg-[#D4A05C]
              px-5
              text-white
              hover:bg-[#C18D4D]
              transition-all
              duration-300
            "
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>

    </div>

    {/* Bottom */}
    <div
      className="
        border-t border-gray-100
        mt-12 pt-6
        flex flex-col md:flex-row
        justify-between
        items-center
        text-gray-400
        text-sm
      "
    >
      <ul className="flex gap-5 mb-3 md:mb-0">
        <li>
          <a href="#" className="hover:text-[#D4A05C] transition">
            Privacy Policy
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-[#D4A05C] transition">
            Terms
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-[#D4A05C] transition">
            Cookies
          </a>
        </li>
      </ul>

      <p>© 2024 Home Services. All rights reserved.</p>
    </div>

  </div>
</footer>
  );
}

export default Footer;