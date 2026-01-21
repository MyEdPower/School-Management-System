import { useState } from 'react';
import { Eye, EyeOff, BookOpen } from 'lucide-react';

/**
 * PathwaysSignIn Component
 * 
 * K-12 Prometric Pathways Single Sign-On Portal
 * Serves as the entry point for all K-12 products
 * 
 * BACKEND NOTES:
 * - Logo section (header bar with BookOpen icon, title, and subtitle) should be configurable
 *   for white label purposes. Allow customization of:
 *   - Logo image/icon
 *   - Title text ("K-12 Prometric Pathways")
 *   - Subtitle text ("Unified Education Intelligence")
 *   - Brand colors (currently #16DFA5 and #03B0E8)
 *   - Header background color (currently #343A6F)
 */
export function PathwaysSignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication logic with Identity Management Server
    console.log('Sign in attempt:', { email, password });
  };

  const handleMicrosoftSSO = () => {
    // TODO: Implement Microsoft SSO
    console.log('Microsoft SSO');
  };

  const handleGoogleSSO = () => {
    // TODO: Implement Google SSO
    console.log('Google SSO');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#343A6F] via-[#4A5184] via-[#5B6BA8] to-[#E8F5F1] flex flex-col relative overflow-hidden">
      {/* Header Bar */}
      <header className="bg-[#343A6F] px-[32px] lg:px-[64px] py-[20px] flex items-center justify-between relative z-20">
        <div className="flex items-center gap-[16px]">
          <div className="size-[40px] sm:size-[48px] lg:size-[44px] bg-gradient-to-br from-[#16DFA5] to-[#03B0E8] rounded-[8px] flex items-center justify-center shrink-0">
            <BookOpen className="size-[20px] sm:size-[24px] lg:size-[22px] text-white" strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="font-['Rubik:Medium',sans-serif] text-[20px] sm:text-[24px] lg:text-[28px] text-white leading-tight">
              K-12 Prometric Pathways
            </h1>
            <p className="font-['Rubik:Regular',sans-serif] text-[13px] sm:text-[14px] lg:text-[16px] text-[#16DFA5] leading-tight">
              Unified Education Intelligence
            </p>
          </div>
        </div>
        <a 
          href="mailto:support@prometric.com" 
          className="font-['Rubik:Medium',sans-serif] text-[15px] sm:text-[16px] lg:text-[17px] text-white hover:text-[#16DFA5] transition-colors flex items-center gap-[8px]"
        >
          <svg className="size-[18px] sm:size-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="hidden sm:inline">Contact us</span>
        </a>
      </header>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Learning Pathways Design - Background Pattern */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" viewBox="0 0 2000 800" fill="none" preserveAspectRatio="xMidYMid slice">
            {/* Pathway 1 - Top flowing path - Extended to right */}
            <path d="M 100,120 Q 250,100 350,140 T 650,180 Q 800,200 950,180 Q 1100,160 1250,190 T 1650,210 Q 1800,220 1950,200" stroke="#16DFA5" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6"/>
            <circle cx="100" cy="120" r="9" fill="#16DFA5"/>
            <circle cx="350" cy="140" r="7" fill="#16DFA5" opacity="0.7"/>
            <circle cx="550" cy="170" r="6" fill="#16DFA5" opacity="0.5"/>
            <circle cx="750" cy="190" r="7" fill="#16DFA5" opacity="0.7"/>
            <circle cx="950" cy="180" r="10" fill="#16DFA5"/>
            <circle cx="1150" cy="175" r="7" fill="#16DFA5" opacity="0.6"/>
            <circle cx="1350" cy="195" r="8" fill="#16DFA5" opacity="0.7"/>
            <circle cx="1550" cy="205" r="7" fill="#16DFA5" opacity="0.6"/>
            <circle cx="1750" cy="215" r="8" fill="#16DFA5" opacity="0.7"/>
            <circle cx="1950" cy="200" r="10" fill="#16DFA5"/>
            
            {/* Pathway 2 - Upper middle path - Extended to right */}
            <path d="M 60,200 Q 180,190 300,220 Q 440,250 590,230 Q 750,210 900,240 Q 1050,270 1200,250 T 1600,270 Q 1750,280 1920,265" stroke="#16DFA5" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6"/>
            <circle cx="60" cy="200" r="9" fill="#16DFA5"/>
            <circle cx="220" cy="205" r="7" fill="#16DFA5" opacity="0.6"/>
            <circle cx="440" cy="235" r="7" fill="#16DFA5" opacity="0.7"/>
            <circle cx="670" cy="220" r="6" fill="#16DFA5" opacity="0.5"/>
            <circle cx="900" cy="240" r="10" fill="#16DFA5"/>
            <circle cx="1125" cy="260" r="7" fill="#16DFA5" opacity="0.6"/>
            <circle cx="1340" cy="255" r="7" fill="#16DFA5" opacity="0.7"/>
            <circle cx="1550" cy="265" r="7" fill="#16DFA5" opacity="0.6"/>
            <circle cx="1775" cy="275" r="8" fill="#16DFA5" opacity="0.7"/>
            <circle cx="1920" cy="265" r="10" fill="#16DFA5"/>
            
            {/* Pathway 3 - Middle winding path - Extended to right */}
            <path d="M 80,300 Q 200,280 320,320 Q 450,360 580,340 Q 720,320 850,360 Q 1000,400 1150,370 T 1580,400 Q 1750,410 1900,390" stroke="#16DFA5" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6"/>
            <circle cx="80" cy="300" r="9" fill="#16DFA5"/>
            <circle cx="260" cy="300" r="7" fill="#16DFA5" opacity="0.6"/>
            <circle cx="450" cy="340" r="8" fill="#16DFA5" opacity="0.8"/>
            <circle cx="650" cy="330" r="6" fill="#16DFA5" opacity="0.5"/>
            <circle cx="850" cy="360" r="10" fill="#16DFA5"/>
            <circle cx="1075" cy="385" r="7" fill="#16DFA5" opacity="0.7"/>
            <circle cx="1305" cy="380" r="7" fill="#16DFA5" opacity="0.6"/>
            <circle cx="1515" cy="395" r="7" fill="#16DFA5" opacity="0.7"/>
            <circle cx="1720" cy="405" r="8" fill="#16DFA5" opacity="0.6"/>
            <circle cx="1900" cy="390" r="10" fill="#16DFA5"/>
            
            {/* Pathway 4 - Lower middle path - Extended to right */}
            <path d="M 90,400 Q 230,420 370,390 Q 520,360 670,380 Q 820,400 970,370 Q 1120,340 1270,360 T 1680,355 Q 1830,350 1970,365" stroke="#16DFA5" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6"/>
            <circle cx="90" cy="400" r="9" fill="#16DFA5"/>
            <circle cx="300" cy="405" r="7" fill="#16DFA5" opacity="0.6"/>
            <circle cx="520" cy="375" r="7" fill="#16DFA5" opacity="0.7"/>
            <circle cx="745" cy="390" r="6" fill="#16DFA5" opacity="0.5"/>
            <circle cx="970" cy="370" r="10" fill="#16DFA5"/>
            <circle cx="1195" cy="350" r="7" fill="#16DFA5" opacity="0.6"/>
            <circle cx="1390" cy="355" r="7" fill="#16DFA5" opacity="0.7"/>
            <circle cx="1580" cy="353" r="7" fill="#16DFA5" opacity="0.6"/>
            <circle cx="1770" cy="358" r="8" fill="#16DFA5" opacity="0.7"/>
            <circle cx="1970" cy="365" r="10" fill="#16DFA5"/>
            
            {/* Pathway 5 - Lower ascending path - Extended to right */}
            <path d="M 120,500 Q 280,520 420,480 Q 580,440 720,460 Q 850,480 980,450 Q 1130,420 1280,440 T 1700,435 Q 1850,430 1980,445" stroke="#16DFA5" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6"/>
            <circle cx="120" cy="500" r="9" fill="#16DFA5"/>
            <circle cx="350" cy="500" r="7" fill="#16DFA5" opacity="0.6"/>
            <circle cx="580" cy="450" r="7" fill="#16DFA5" opacity="0.7"/>
            <circle cx="800" cy="465" r="7" fill="#16DFA5" opacity="0.6"/>
            <circle cx="980" cy="450" r="10" fill="#16DFA5"/>
            <circle cx="1205" cy="430" r="7" fill="#16DFA5" opacity="0.7"/>
            <circle cx="1400" cy="435" r="7" fill="#16DFA5" opacity="0.6"/>
            <circle cx="1600" cy="433" r="7" fill="#16DFA5" opacity="0.7"/>
            <circle cx="1800" cy="438" r="8" fill="#16DFA5" opacity="0.6"/>
            <circle cx="1980" cy="445" r="10" fill="#16DFA5"/>
            
            {/* Pathway 6 - Bottom path - Extended to right */}
            <path d="M 150,600 Q 300,620 450,590 Q 600,560 750,580 Q 900,600 1050,570 Q 1200,540 1350,560 T 1750,565 Q 1900,570 1990,555" stroke="#16DFA5" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6"/>
            <circle cx="150" cy="600" r="9" fill="#16DFA5"/>
            <circle cx="375" cy="605" r="7" fill="#16DFA5" opacity="0.6"/>
            <circle cx="600" cy="570" r="7" fill="#16DFA5" opacity="0.7"/>
            <circle cx="875" cy="585" r="6" fill="#16DFA5" opacity="0.5"/>
            <circle cx="1050" cy="570" r="10" fill="#16DFA5"/>
            <circle cx="1275" cy="555" r="7" fill="#16DFA5" opacity="0.6"/>
            <circle cx="1450" cy="560" r="8" fill="#16DFA5" opacity="0.7"/>
            <circle cx="1625" cy="563" r="7" fill="#16DFA5" opacity="0.6"/>
            <circle cx="1825" cy="568" r="8" fill="#16DFA5" opacity="0.7"/>
            <circle cx="1990" cy="555" r="10" fill="#16DFA5"/>
            
            {/* Connecting branches between pathways */}
            <path d="M 350,140 L 300,220" stroke="#16DFA5" strokeWidth="1.5" strokeDasharray="4,6" opacity="0.25"/>
            <path d="M 300,220 L 320,320" stroke="#16DFA5" strokeWidth="1.5" strokeDasharray="4,6" opacity="0.25"/>
            <path d="M 450,340 L 370,390" stroke="#16DFA5" strokeWidth="1.5" strokeDasharray="4,6" opacity="0.25"/>
            <path d="M 580,340 L 580,440" stroke="#16DFA5" strokeWidth="1.5" strokeDasharray="4,6" opacity="0.25"/>
            <path d="M 750,190 L 670,380" stroke="#16DFA5" strokeWidth="1.5" strokeDasharray="4,6" opacity="0.2"/>
            <path d="M 900,240 L 850,360" stroke="#16DFA5" strokeWidth="1.5" strokeDasharray="4,6" opacity="0.25"/>
            <path d="M 520,375 L 450,480" stroke="#16DFA5" strokeWidth="1.5" strokeDasharray="4,6" opacity="0.25"/>
            <path d="M 1150,175 L 1125,260" stroke="#16DFA5" strokeWidth="1.5" strokeDasharray="4,6" opacity="0.25"/>
            <path d="M 1270,360 L 1280,440" stroke="#16DFA5" strokeWidth="1.5" strokeDasharray="4,6" opacity="0.25"/>
            <path d="M 1550,265 L 1515,395" stroke="#16DFA5" strokeWidth="1.5" strokeDasharray="4,6" opacity="0.25"/>
            <path d="M 1750,215 L 1770,358" stroke="#16DFA5" strokeWidth="1.5" strokeDasharray="4,6" opacity="0.25"/>
            
            {/* Milestone markers - larger destination nodes */}
            <g>
              <circle cx="950" cy="180" r="15" fill="none" stroke="#16DFA5" strokeWidth="2" opacity="0.4"/>
              <circle cx="900" cy="240" r="15" fill="none" stroke="#16DFA5" strokeWidth="2" opacity="0.4"/>
              <circle cx="850" cy="360" r="15" fill="none" stroke="#16DFA5" strokeWidth="2" opacity="0.4"/>
              <circle cx="970" cy="370" r="15" fill="none" stroke="#16DFA5" strokeWidth="2" opacity="0.4"/>
              <circle cx="980" cy="450" r="15" fill="none" stroke="#16DFA5" strokeWidth="2" opacity="0.4"/>
              <circle cx="1050" cy="570" r="15" fill="none" stroke="#16DFA5" strokeWidth="2" opacity="0.4"/>
              <circle cx="1950" cy="200" r="15" fill="none" stroke="#16DFA5" strokeWidth="2" opacity="0.4"/>
              <circle cx="1920" cy="265" r="15" fill="none" stroke="#16DFA5" strokeWidth="2" opacity="0.4"/>
              <circle cx="1900" cy="390" r="15" fill="none" stroke="#16DFA5" strokeWidth="2" opacity="0.4"/>
              <circle cx="1970" cy="365" r="15" fill="none" stroke="#16DFA5" strokeWidth="2" opacity="0.4"/>
              <circle cx="1980" cy="445" r="15" fill="none" stroke="#16DFA5" strokeWidth="2" opacity="0.4"/>
              <circle cx="1990" cy="555" r="15" fill="none" stroke="#16DFA5" strokeWidth="2" opacity="0.4"/>
            </g>
          </svg>
        </div>

        {/* Colorful Geometric Shapes */}
        <div className="absolute top-[10%] left-[5%] size-[120px] bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[60%] left-[8%] size-[150px] bg-[#16DFA5]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-[20%] right-[10%] size-[180px] bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[15%] right-[5%] size-[140px] bg-[#16DFA5]/15 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] left-[50%] size-[100px] bg-white/8 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Floating School Icons */}
        <div className="absolute top-[20%] right-[20%] text-[#16DFA5] opacity-20" style={{ animation: 'float 6s ease-in-out infinite' }}>
          <svg className="size-[50px]" viewBox="0 0 100 100" fill="none">
            <path d="M50 25L10 40L50 55L90 40L50 25Z" fill="currentColor"/>
            <path d="M20 45V60L50 70L80 60V45" stroke="currentColor" strokeWidth="3" fill="none"/>
            <path d="M85 42V65" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
        
        <div className="absolute top-[60%] left-[15%] text-white opacity-15" style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '1s' }}>
          <svg className="size-[48px]" viewBox="0 0 100 100" fill="none">
            <rect x="20" y="10" width="60" height="80" rx="6" stroke="currentColor" strokeWidth="3" fill="none"/>
            <rect x="28" y="18" width="44" height="16" rx="2" fill="currentColor"/>
            <circle cx="35" cy="48" r="4" fill="currentColor"/>
            <circle cx="50" cy="48" r="4" fill="currentColor"/>
            <circle cx="65" cy="48" r="4" fill="currentColor"/>
          </svg>
        </div>
        
        <div className="absolute top-[45%] left-[8%] text-[#16DFA5] opacity-18" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '2s' }}>
          {/* Analytics Graph */}
          <svg className="size-[54px]" viewBox="0 0 100 100" fill="none">
            <rect x="15" y="15" width="70" height="70" rx="5" stroke="currentColor" strokeWidth="3" fill="none"/>
            <rect x="25" y="55" width="10" height="25" rx="2" fill="currentColor"/>
            <rect x="42" y="40" width="10" height="40" rx="2" fill="currentColor"/>
            <rect x="59" y="50" width="10" height="30" rx="2" fill="currentColor"/>
            <circle cx="30" cy="45" r="3" fill="currentColor"/>
            <circle cx="47" cy="35" r="3" fill="currentColor"/>
            <circle cx="64" cy="42" r="3" fill="currentColor"/>
            <path d="M30 45L47 35L64 42" stroke="currentColor" strokeWidth="2.5" fill="none"/>
          </svg>
        </div>
      </div>

      {/* Centered Sign In Form */}
      <div className="flex-1 flex items-center justify-center p-[32px] relative z-10">
        <div className="w-full max-w-[440px]">
          {/* Sign In Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-[24px] shadow-2xl p-[40px] lg:p-[28px] border border-white/40">
            {/* Header */}
            <div className="text-center mb-[28px] lg:mb-[20px]">
              <h2 className="font-['Rubik:Medium',sans-serif] text-[32px] text-[#343A6F] mb-[14px] lg:mb-[10px]">
                Login
              </h2>
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#343A6F] to-transparent"></div>
            </div>

            <form onSubmit={handleSignIn} className="space-y-[20px] lg:space-y-[16px]">
              {/* Email Field */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block font-['Rubik:Medium',sans-serif] text-[14px] text-[#343A6F] mb-[6px] lg:mb-[5px]"
                >
                  Username
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter username"
                  className="w-full px-[20px] py-[12px] lg:py-[11px] bg-white border-2 border-[#E5E7EB] rounded-[12px] text-[16px] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#16DFA5] focus:ring-4 focus:ring-[#16DFA5]/10 hover:border-[#16DFA5]/50 transition-all"
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <label 
                  htmlFor="password" 
                  className="block font-['Rubik:Medium',sans-serif] text-[14px] text-[#343A6F] mb-[6px] lg:mb-[5px]"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-[20px] py-[12px] lg:py-[11px] pr-[52px] bg-white border-2 border-[#E5E7EB] rounded-[12px] text-[16px] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#16DFA5] focus:ring-4 focus:ring-[#16DFA5]/10 hover:border-[#16DFA5]/50 transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-[16px] top-[50%] translate-y-[-50%] text-[#9CA3AF] hover:text-[#16DFA5] transition-colors"
                    title={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? (
                      <EyeOff className="size-[20px]" />
                    ) : (
                      <Eye className="size-[20px]" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-[8px] cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="size-[16px] rounded-[4px] border-2 border-[#707070] text-[#343A6F] focus:ring-[#343A6F] cursor-pointer"
                    style={{
                      accentColor: '#343A6F',
                      transform: 'scale(0.85)'
                    }}
                  />
                  <span className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#6970B2]">
                    Remember me
                  </span>
                </label>
                <a 
                  href="#reset-password" 
                  className="font-['Rubik:Medium',sans-serif] text-[14px] text-[#03B0E8] hover:text-[#16DFA5] transition-colors"
                >
                  Forgot Password?
                </a>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#16DFA5] to-[#03B0E8] text-white font-['Rubik:Medium',sans-serif] text-[16px] py-[14px] lg:py-[13px] rounded-[8px] shadow-lg shadow-[#16DFA5]/25 hover:shadow-xl hover:shadow-[#16DFA5]/40 hover:scale-[1.02] transition-all duration-300"
              >
                Sign In
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-[28px] lg:my-[20px]">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-[#343A6F]"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-[20px] font-['Rubik:Medium',sans-serif] text-[13px] text-[#9CA3AF] uppercase tracking-wider">
                  Or continue with SSO
                </span>
              </div>
            </div>

            {/* SSO Buttons */}
            <div className="grid grid-cols-2 gap-[16px]">
              {/* Microsoft */}
              <button
                type="button"
                onClick={handleMicrosoftSSO}
                className="flex items-center justify-center gap-[10px] px-[20px] py-[12px] lg:py-[11px] bg-white border-2 border-[#E5E7EB] rounded-[8px] hover:border-[#16DFA5] hover:shadow-md hover:scale-[1.02] transition-all duration-200"
              >
                <svg className="size-[22px]" viewBox="0 0 23 23">
                  <path fill="#f35325" d="M0 0h11v11H0z"/>
                  <path fill="#81bc06" d="M12 0h11v11H12z"/>
                  <path fill="#05a6f0" d="M0 12h11v11H0z"/>
                  <path fill="#ffba08" d="M12 12h11v11H12z"/>
                </svg>
                <span className="font-['Rubik:Medium',sans-serif] text-[15px] text-[#343A6F]">
                  Microsoft
                </span>
              </button>

              {/* Google */}
              <button
                type="button"
                onClick={handleGoogleSSO}
                className="flex items-center justify-center gap-[10px] px-[20px] py-[12px] lg:py-[11px] bg-white border-2 border-[#E5E7EB] rounded-[8px] hover:border-[#16DFA5] hover:shadow-md hover:scale-[1.02] transition-all duration-200"
              >
                <svg className="size-[22px]" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="font-['Rubik:Medium',sans-serif] text-[15px] text-[#343A6F]">
                  Google
                </span>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-[24px] text-center">
            <div className="flex items-center justify-center gap-[16px] mb-[4px]">
              <a 
                href="#privacy" 
                className="font-['Rubik:Regular',sans-serif] text-[13px] text-[#343A6F] hover:text-[#16DFA5] transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-[#343A6F]/50">•</span>
              <a 
                href="#terms" 
                className="font-['Rubik:Regular',sans-serif] text-[13px] text-[#343A6F] hover:text-[#16DFA5] transition-colors"
              >
                Terms of Use
              </a>
            </div>
            <p className="font-['Rubik:Regular',sans-serif] text-[13px] text-[#343A6F]/80">
              © 2024 Prometric. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Animation Keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
}