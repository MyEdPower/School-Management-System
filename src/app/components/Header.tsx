import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <>
      <div className="bg-[#343a6f] flex gap-[20px] sm:gap-[40px] lg:gap-[60px] items-center px-[16px] sm:px-[32px] lg:px-[64px] py-[12px] sm:py-[14px] lg:py-[16px] w-full">
        <Link to="/" className="flex items-center gap-[8px] shrink-0">
          <div className="h-[40px] sm:h-[50px] lg:h-[59.603px] relative w-[100px] sm:w-[125px] lg:w-[150px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="EdAssess" className="absolute h-[106.67%] left-[-4.64%] max-w-none top-[-4.32%] w-[200.74%]" src="../assets/brand-logo.png" />
            </div>
          </div>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-[12px] items-center justify-center flex-1">
          <Link 
            to="/" 
            className={`flex gap-[8px] items-center px-[16px] py-[8px] ${isActive('/') ? 'bg-white/10 rounded' : ''}`}
          >
            <p className="font-['Rubik:Regular',sans-serif] text-[16px] text-white">Home</p>
          </Link>
          <Link 
            to="/assessments" 
            className={`flex gap-[8px] items-center px-[16px] py-[8px] ${isActive('/assessments') ? 'bg-white/10 rounded' : ''}`}
          >
            <p className="font-['Rubik:Regular',sans-serif] text-[16px] text-white">Assessments</p>
          </Link>
          <Link 
            to="/reports" 
            className={`flex gap-[8px] items-center px-[16px] py-[8px] ${isActive('/reports') ? 'bg-white/10 rounded' : ''}`}
          >
            <p className="font-['Rubik:Regular',sans-serif] text-[16px] text-white">Reports</p>
          </Link>
          <Link 
            to="/classes" 
            className={`flex gap-[8px] items-center px-[16px] py-[8px] ${isActive('/classes') || location.pathname.startsWith('/class/') ? 'bg-white/10 rounded' : ''}`}
          >
            <p className="font-['Rubik:Regular',sans-serif] text-[16px] text-white">Classes</p>
          </Link>
          <Link 
            to="/accounts" 
            className={`flex gap-[8px] items-center px-[16px] py-[8px] ${isActive('/accounts') || location.pathname.startsWith('/account/') ? 'bg-white/10 rounded' : ''}`}
          >
            <p className="font-['Rubik:Regular',sans-serif] text-[16px] text-white">Accounts</p>
          </Link>
          <div className="h-[20px] w-[1px] bg-white/30 mx-[8px]"></div>
          <Link 
            to="/documentation" 
            className={`flex gap-[8px] items-center px-[16px] py-[8px] ${isActive('/documentation') ? 'bg-white/10 rounded' : ''}`}
          >
            <svg className="size-[16px]" fill="none" viewBox="0 0 16 16" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h8M4 10h6M6 2h8a1 1 0 011 1v10a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1z" />
            </svg>
            <p className="font-['Rubik:Regular',sans-serif] text-[16px] text-white">Docs</p>
          </Link>
        </div>
        
        {/* Mobile/Tablet: Hamburger Menu */}
        <div className="flex-1 lg:hidden"></div>
        <button
          title="Toggle Menu"
          className="lg:hidden text-white p-[8px]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="size-[24px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Profile Section */}
        <div className="flex gap-[8px] sm:gap-[12px] lg:gap-[16px] items-center shrink-0">
          {/* Desktop: Full info */}
          <div className="hidden lg:flex flex-col gap-[2px] items-end">
            <p className="font-['Rubik:Regular',sans-serif] text-[16px] text-white">Anderson, Hunter</p>
            <div className="flex gap-[2px] items-start font-['Rubik:Regular',sans-serif] text-[12px] text-white uppercase tracking-[0.24px]">
              <p>Admin</p>
              <p>|</p>
              <p>edify district</p>
            </div>
          </div>
          
          {/* Tablet: Name only */}
          <div className="hidden sm:flex lg:hidden flex-col gap-[2px] items-end">
            <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-white">Anderson, H.</p>
          </div>
          
          {/* Profile Picture */}
          <div className="relative rounded-[1000px] size-[36px] sm:size-[38px] lg:size-[40px]">
            <div className="absolute overflow-clip rounded-[71.427px] size-full">
              <img alt="Profile" className="absolute h-[171.47%] left-[-7.14%] max-w-none top-[-21.04%] w-[114.29%]" src="../assets/profile-picture.png" />
            </div>
            <div className="absolute right-0 size-[10px] sm:size-[11px] lg:size-[12px] top-0">
              <div className="absolute inset-[-16.67%]">
                <svg className="block size-full" fill="none" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" fill="#E54742" r="7" stroke="#343A6F" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#2d3361] border-t border-white/10">
          <div className="flex flex-col px-[16px] py-[8px]">
            <Link 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className={`flex gap-[8px] items-center px-[16px] py-[12px] ${isActive('/') ? 'bg-white/10 rounded' : ''}`}
            >
              <p className="font-['Rubik:Regular',sans-serif] text-[15px] text-white">Home</p>
            </Link>
            <Link 
              to="/assessments" 
              onClick={() => setMobileMenuOpen(false)}
              className={`flex gap-[8px] items-center px-[16px] py-[12px] ${isActive('/assessments') ? 'bg-white/10 rounded' : ''}`}
            >
              <p className="font-['Rubik:Regular',sans-serif] text-[15px] text-white">Assessments</p>
            </Link>
            <Link 
              to="/reports" 
              onClick={() => setMobileMenuOpen(false)}
              className={`flex gap-[8px] items-center px-[16px] py-[12px] ${isActive('/reports') ? 'bg-white/10 rounded' : ''}`}
            >
              <p className="font-['Rubik:Regular',sans-serif] text-[15px] text-white">Reports</p>
            </Link>
            <Link 
              to="/classes" 
              onClick={() => setMobileMenuOpen(false)}
              className={`flex gap-[8px] items-center px-[16px] py-[12px] ${isActive('/classes') || location.pathname.startsWith('/class/') ? 'bg-white/10 rounded' : ''}`}
            >
              <p className="font-['Rubik:Regular',sans-serif] text-[15px] text-white">Classes</p>
            </Link>
            <Link 
              to="/accounts" 
              onClick={() => setMobileMenuOpen(false)}
              className={`flex gap-[8px] items-center px-[16px] py-[12px] ${isActive('/accounts') || location.pathname.startsWith('/account/') ? 'bg-white/10 rounded' : ''}`}
            >
              <p className="font-['Rubik:Regular',sans-serif] text-[15px] text-white">Accounts</p>
            </Link>
            
            {/* Mobile: User info in dropdown */}
            <div className="sm:hidden border-t border-white/10 mt-[8px] pt-[12px] px-[16px] pb-[8px]">
              <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-white mb-[4px]">Anderson, Hunter</p>
              <div className="flex gap-[4px] items-start font-['Rubik:Regular',sans-serif] text-[11px] text-white/70 uppercase tracking-[0.24px]">
                <p>Admin</p>
                <p>|</p>
                <p>edify district</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}