function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-10">

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid md:grid-cols-4 gap-14">

          <div>

            <h2 className="text-4xl font-bold">
              Nourish
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              Premium wellness and nutrition coaching designed to help you transform your health naturally.
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <p>Home</p>
              <p>About</p>
              <p>Programs</p>
              <p>Contact</p>

            </div>

          </div>

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Programs
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <p>Weight Loss</p>
              <p>PCOS</p>
              <p>Gut Health</p>
              <p>Muscle Gain</p>

            </div>

          </div>

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Contact
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <p>hello@nourish.com</p>
              <p>+91 9876543210</p>
              <p>Mumbai, India</p>

            </div>

          </div>

        </div>

        <div className="border-t border-gray-800 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-gray-500">
            © 2026 Nourish. All rights reserved.
          </p>

          <div className="flex gap-6 text-gray-400">

            <p>Instagram</p>
            <p>Facebook</p>
            <p>LinkedIn</p>

          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;