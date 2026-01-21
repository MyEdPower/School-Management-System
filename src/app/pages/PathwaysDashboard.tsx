import { useState } from 'react';
import { LogOut, ChevronRight } from 'lucide-react';
import lightbulbImage from 'figma:asset/70cb064858c6afd18dd53d1899148bc083455fe5.png';
import finetuneCatalogIcon from 'figma:asset/b2591cbfad517e6b3938045bc039afff1f28f360.png';
import finetuneGenerateIcon from 'figma:asset/cd177dbff970a5d116e41751aa60e36ff000164b.png';
import edFolioIcon from 'figma:asset/0f70063427639d2281a87a47928c94c583d9b19d.png';
import systemAdminIcon from 'figma:asset/8b35de88a6a2bd96c028a964bf2e9df37fa39901.png';

interface Product {
  id: string;
  name: string;
  description: string;
  icon: JSX.Element;
  color: string;
  available: boolean;
  hasAccess: boolean;
  url?: string;
  purchaseUrl?: string;
}

export function PathwaysDashboard() {
  const [userInfo] = useState({
    name: 'Principal Skinner',
    role: 'Principal',
    district: 'Springfield Public Schools',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=principal'
  });

  const products: Product[] = [
    {
      id: 'finetune-catalog',
      name: 'Finetune Catalog',
      description: 'Curriculum & Resources',
      icon: (
        <img src={finetuneCatalogIcon} alt="" className="size-[54px]" />
      ),
      color: '#16DFA5',
      available: true,
      hasAccess: true,
      url: '#',
      purchaseUrl: 'https://www.prometric.com/finetune-catalog'
    },
    {
      id: 'finetune-generate',
      name: 'Finetune Generate',
      description: 'AI Content Creation',
      icon: (
        <img src={finetuneGenerateIcon} alt="" className="size-[54px]" />
      ),
      color: '#6970B2',
      available: true,
      hasAccess: true,
      url: '#',
      purchaseUrl: 'https://www.prometric.com/finetune-generate'
    },
    {
      id: 'edassess',
      name: 'EdAssess',
      description: 'Assessment Management',
      icon: (
        <svg className="size-[48px]" viewBox="0 0 64 64" fill="none">
          <rect x="16" y="10" width="32" height="44" rx="2" stroke="white" strokeWidth="2.5" fill="none"/>
          <rect x="22" y="4" width="20" height="8" rx="2" fill="white"/>
          <path d="M24 22h16M24 30h16M24 38h16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="26" cy="22" r="2" fill="white"/>
          <circle cx="26" cy="30" r="2" fill="white"/>
          <circle cx="26" cy="38" r="2" fill="white"/>
          <path d="M28 46l3 3 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      ),
      color: '#FF990F',
      available: true,
      hasAccess: true,
      url: '/'
    },
    {
      id: 'edinsights',
      name: 'EdInsights',
      description: 'Student Analytics & MTSS',
      icon: (
        <svg className="size-[48px]" viewBox="0 0 64 64" fill="none">
          <rect x="12" y="12" width="40" height="40" rx="3" stroke="white" strokeWidth="2.5" fill="none"/>
          <rect x="20" y="36" width="6" height="12" rx="1" fill="white"/>
          <rect x="29" y="28" width="6" height="20" rx="1" fill="white"/>
          <rect x="38" y="32" width="6" height="16" rx="1" fill="white"/>
          <circle cx="23" cy="24" r="2" fill="white"/>
          <circle cx="32" cy="20" r="2" fill="white"/>
          <circle cx="41" cy="24" r="2" fill="white"/>
          <path d="M23 24l9-4 9 4" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      ),
      color: '#EC5E74',
      available: true,
      hasAccess: true,
      url: '#'
    },
    {
      id: 'edfolio',
      name: 'EdFolio',
      description: 'Digital Portfolios',
      icon: (
        <img src={edFolioIcon} alt="" className="size-[54px]" />
      ),
      color: '#9266E5',
      available: true,
      hasAccess: false,
      url: '#',
      purchaseUrl: 'https://www.prometric.com/edfolio'
    },
    {
      id: 'system-admin',
      name: 'System Administration',
      description: 'Configure system settings and users',
      icon: (
        <img src={systemAdminIcon} alt="" className="size-[54px]" />
      ),
      color: '#0A1023',
      available: true,
      hasAccess: true,
      url: '#'
    }
  ];

  const handleProductClick = (product: Product) => {
    if (!product.available) {
      window.open(product.purchaseUrl, '_blank');
    } else if (!product.hasAccess) {
      alert('This application is not available for your role. Please contact your administrator.');
    } else if (product.url) {
      window.location.href = product.url;
    }
  };

  const handleSignOut = () => {
    // TODO: Implement sign out logic
    console.log('Sign out');
    window.location.href = '/pathways-signin';
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Header */}
      <header className="bg-[#343A6F] text-white shadow-md">
        <div className="px-[32px] py-[16px] flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-[12px]">
            <div className="size-[40px] bg-white/10 rounded-[8px] flex items-center justify-center">
              <svg className="size-[24px]" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2" />
                <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h1 className="font-['Rubik:Medium',sans-serif] text-[20px]">K-12 Pathways</h1>
          </div>

          {/* User Info */}
          <div className="flex items-center gap-[16px]">
            <div className="text-right">
              <p className="font-['Rubik:Medium',sans-serif] text-[14px]">{userInfo.name}</p>
              <p className="font-['Rubik:Regular',sans-serif] text-[12px] text-[#C4C8E1]">
                {userInfo.role} - {userInfo.district}
              </p>
            </div>
            <img 
              src={userInfo.avatar} 
              alt={userInfo.name}
              className="size-[40px] rounded-full bg-white"
            />
            <button
              onClick={handleSignOut}
              className="ml-[8px] p-[8px] hover:bg-white/10 rounded-[8px] transition-colors"
              title="Sign Out"
            >
              <LogOut className="size-[20px]" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-[32px] lg:px-[64px] py-[48px] flex flex-col items-center relative overflow-hidden">
        {/* Lightbulb Image - Over EdAssess card */}
        <div className="absolute top-[40px] right-[150px] w-[200px] h-[140px] pointer-events-none hidden lg:block z-10">
          <img 
            src={lightbulbImage} 
            alt="" 
            className="w-full h-full object-contain"
            style={{ transform: 'rotate(12deg)' }}
          />
        </div>

        {/* Welcome Section */}
        <div className="mb-[48px] max-w-[1200px] w-full">
          <h2 className="font-['Rubik:Medium',sans-serif] text-[32px] text-[#333] mb-[8px]">
            Welcome, {userInfo.role}
          </h2>
          <p className="font-['Rubik:Regular',sans-serif] text-[16px] text-[#8a8a8a]">
            Select an integrated brand tool to begin your session.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] max-w-[1200px] w-full relative z-0">
          {products.map((product) => {
            const isDisabled = !product.available || !product.hasAccess;
            
            return (
              <button
                key={product.id}
                onClick={() => handleProductClick(product)}
                className={`
                  bg-white rounded-[12px] p-[24px] text-left transition-all border-b-[8px] relative
                  ${isDisabled 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:shadow-lg hover:scale-[1.02] cursor-pointer'
                  }
                  ${!product.available || !product.hasAccess ? 'border-2 border-dashed border-[#e0e0e0]' : 'shadow-md border-2 border-transparent'}
                `}
                style={{
                  borderBottomColor: isDisabled ? '#e0e0e0' : product.color,
                  borderBottomWidth: '8px'
                }}
              >
                {/* Icon */}
                <div 
                  className="inline-flex items-center justify-center size-[64px] rounded-[12px] mb-[16px]"
                  style={{ 
                    backgroundColor: isDisabled ? '#e0e0e0' : product.color,
                    color: isDisabled ? '#8a8a8a' : 'white'
                  }}
                >
                  {product.icon}
                </div>

                {/* Content */}
                <div className="mb-[12px]">
                  <h3 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#333] mb-[4px]">
                    {product.name}
                  </h3>
                  <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#8a8a8a]">
                    {product.description}
                  </p>
                </div>

                {/* Status Badge */}
                {!isDisabled && (
                  <div className="flex items-center gap-[8px] text-[#343A6F]">
                    <span className="font-['Rubik:Medium',sans-serif] text-[14px]">
                      {product.id === 'edassess' ? 'Secure SSO' : 'Launch'}
                    </span>
                    <ChevronRight className="size-[16px]" />
                  </div>
                )}

                {!product.available && (
                  <div className="bg-[#f5f5f5] px-[12px] py-[6px] rounded-[4px] inline-block">
                    <span className="font-['Rubik:Medium',sans-serif] text-[12px] text-[#8a8a8a]">
                      Not Available - Contact Sales
                    </span>
                  </div>
                )}

                {product.available && !product.hasAccess && (
                  <div className="flex items-center justify-between gap-[12px]">
                    <div className="bg-[#C4C8E1] px-[12px] py-[6px] rounded-[4px] inline-block">
                      <span className="font-['Rubik:Medium',sans-serif] text-[12px] text-[#1a1d3a]">
                        Not Available for Your Role
                      </span>
                    </div>
                    <a
                      href="mailto:support@prometric.com?subject=Request Access to EdFolio&body=Hello, I would like to request access to EdFolio."
                      className="inline-flex items-center gap-[4px] px-[12px] py-[6px] bg-[#343A6F] text-white rounded-[8px] hover:bg-[#2a2f5a] transition-colors text-[12px] font-['Rubik:Medium',sans-serif]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Learn More
                    </a>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Help Section */}
        <div className="mt-[48px] bg-white rounded-[12px] p-[24px] max-w-[1200px] w-full shadow-md">
          <h3 className="font-['Rubik:Medium',sans-serif] text-[20px] text-[#333] mb-[12px]">
            Need Help?
          </h3>
          <p className="font-['Rubik:Regular',sans-serif] text-[16px] text-[#8a8a8a] mb-[16px]">
            If you need assistance or have questions about accessing any of these products, please contact our support team at the phone number or email address below.
          </p>
          <div className="flex gap-[16px]">
            <a 
              href="mailto:support@prometric.com"
              className="inline-flex items-center gap-[8px] px-[20px] py-[10px] bg-[#343A6F] text-white rounded-[8px] hover:bg-[#2a2f5a] transition-colors"
            >
              <span className="font-['Rubik:Medium',sans-serif] text-[14px]">Email Support</span>
            </a>
            <a 
              href="tel:1-800-555-0100"
              className="inline-flex items-center gap-[8px] px-[20px] py-[10px] border border-[#343A6F] text-[#343A6F] rounded-[8px] hover:bg-[#f5f5f5] transition-colors"
            >
              <span className="font-['Rubik:Medium',sans-serif] text-[14px]">Call: 1-800-555-0100</span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#343A6F] text-white py-[24px] mt-[48px]">
        <div className="px-[32px] lg:px-[64px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-[16px]">
            <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-white/70">
              © 2024 Prometric. All rights reserved.
            </p>
            <div className="flex gap-[24px]">
              <a href="#" className="font-['Rubik:Regular',sans-serif] text-[14px] text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-['Rubik:Regular',sans-serif] text-[14px] text-white/70 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="font-['Rubik:Regular',sans-serif] text-[14px] text-white/70 hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}