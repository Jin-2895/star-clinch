import logo from '../../assets/logo.svg';

export default function Navbar() {
  return (
    <div className=" px-[48px] py-[28px] ">
      <div className="container mx-auto  flex lg:flex-row sm:flex-col items-center justify-between ">
        {/* Logo */}
        <div>
          <img src={logo} alt="StarClinch Logo" className="h-12" />
        </div>
        {/* Navigation Links */}
        <div className="flex items-center space-x-16">
          <a
            href="#"
            className="xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[14px] text-white hover:text-pink-500"
          >
            Book Celebrities
          </a>
          <a href="#" className=" text-[18px] text-white hover:text-pink-500">
            Join Community
          </a>
          <a
            href="#"
            className=" text-[18px] text-[#fd2d7d] hover:text-pink-500"
          >
            Post Your Requirements
          </a>
        </div>
      </div>
    </div>
  );
}
