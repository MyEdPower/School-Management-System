import { useState } from 'react';
import { Eye, EyeOff, BookOpen, Sparkles } from 'lucide-react';

export function PathwaysSignInLight() {
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
    <div className="min-h-screen bg-gradient-to-br from-[#343A6F] via-[#4A5184] via-[#5B6BA8] to-[#E8F5F1] flex relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Colorful Geometric Shapes - spanning across both sides */}
        <div className="absolute top-[10%] left-[5%] size-[120px] bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[60%] left-[8%] size-[150px] bg-[#16DFA5]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-[20%] right-[10%] size-[180px] bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[15%] right-[5%] size-[140px] bg-[#16DFA5]/15 rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] left-[50%] size-[100px] bg-white/8 rounded-full blur-3xl"></div>
        <div className="absolute top-[35%] left-[35%] size-[160px] bg-[#16DFA5]/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[25%] right-[35%] size-[130px] bg-white/12 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Floating School Icons - Abstract Geometric */}
        <div className="absolute top-[15%] right-[20%] text-[#16DFA5] opacity-20" style={{ animation: 'float 6s ease-in-out infinite' }}>
          {/* Graduation Cap */}
          <svg className="size-[50px]" viewBox="0 0 100 100" fill="none">
            <path d="M50 25L10 40L50 55L90 40L50 25Z" fill="currentColor"/>
            <path d="M20 45V60L50 70L80 60V45" stroke="currentColor" strokeWidth="3" fill="none"/>
            <path d="M85 42V65" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
        
        <div className="absolute top-[25%] right-[15%] text-white opacity-15" style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '1s' }}>
          {/* Calculator */}
          <svg className="size-[48px]" viewBox="0 0 100 100" fill="none">
            <rect x="20" y="10" width="60" height="80" rx="6" stroke="currentColor" strokeWidth="3" fill="none"/>
            <rect x="28" y="18" width="44" height="16" rx="2" fill="currentColor"/>
            <circle cx="35" cy="48" r="4" fill="currentColor"/>
            <circle cx="50" cy="48" r="4" fill="currentColor"/>
            <circle cx="65" cy="48" r="4" fill="currentColor"/>
            <circle cx="35" cy="62" r="4" fill="currentColor"/>
            <circle cx="50" cy="62" r="4" fill="currentColor"/>
            <circle cx="65" cy="62" r="4" fill="currentColor"/>
            <circle cx="35" cy="76" r="4" fill="currentColor"/>
            <circle cx="50" cy="76" r="4" fill="currentColor"/>
            <circle cx="65" cy="76" r="4" fill="currentColor"/>
          </svg>
        </div>
        
        <div className="absolute bottom-[40%] right-[12%] text-[#16DFA5] opacity-20" style={{ animation: 'float 7.5s ease-in-out infinite', animationDelay: '2.5s' }}>
          {/* Compass */}
          <svg className="size-[50px]" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="3" fill="none"/>
            <path d="M50 20L45 45L50 50L55 45Z" fill="currentColor"/>
            <path d="M80 50L55 55L50 50L55 45Z" fill="currentColor"/>
            <path d="M50 80L55 55L50 50L45 55Z" fill="currentColor"/>
            <path d="M20 50L45 45L50 50L45 55Z" fill="currentColor"/>
            <circle cx="50" cy="50" r="6" fill="currentColor"/>
          </svg>
        </div>
        
        <div className="absolute top-[68%] right-[25%] text-white opacity-17" style={{ animation: 'float 8.5s ease-in-out infinite', animationDelay: '1.8s' }}>
          {/* Graduation Cap */}
          <svg className="size-[48px]" viewBox="0 0 100 100" fill="none">
            <path d="M50 25L10 40L50 55L90 40L50 25Z" fill="currentColor"/>
            <path d="M20 45V60L50 70L80 60V45" stroke="currentColor" strokeWidth="3" fill="none"/>
            <path d="M85 42V65" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
        
        <div className="absolute bottom-[18%] left-[15%] text-[#16DFA5] opacity-19" style={{ animation: 'float 9.5s ease-in-out infinite', animationDelay: '0.5s' }}>
          {/* Rocket */}
          <svg className="size-[52px]" viewBox="0 0 100 100" fill="none">
            <path d="M50 10C50 10 35 25 35 45V70L50 80L65 70V45C65 25 50 10 50 10Z" fill="currentColor"/>
            <circle cx="50" cy="40" r="6" fill="white" opacity="0.8"/>
            <path d="M35 55L25 65L30 70L35 70Z" fill="currentColor"/>
            <path d="M65 55L75 65L70 70L65 70Z" fill="currentColor"/>
            <path d="M45 75L48 90L50 85L52 90L55 75" fill="currentColor" opacity="0.6"/>
          </svg>
        </div>
        
        <div className="absolute top-[48%] right-[8%] text-white opacity-16" style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '3.2s' }}>
          {/* Compass */}
          <svg className="size-[46px]" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="3" fill="none"/>
            <path d="M50 20L45 45L50 50L55 45Z" fill="currentColor"/>
            <path d="M80 50L55 55L50 50L55 45Z" fill="currentColor"/>
            <path d="M50 80L55 55L50 50L45 55Z" fill="currentColor"/>
            <path d="M20 50L45 45L50 50L45 55Z" fill="currentColor"/>
            <circle cx="50" cy="50" r="6" fill="currentColor"/>
          </svg>
        </div>
        
        <div className="absolute top-[12%] left-[45%] text-white opacity-18" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '0.8s' }}>
          {/* Graduation Cap - Top Center */}
          <svg className="size-[50px]" viewBox="0 0 100 100" fill="none">
            <path d="M50 25L10 40L50 55L90 40L50 25Z" fill="currentColor"/>
            <path d="M20 45V60L50 70L80 60V45" stroke="currentColor" strokeWidth="3" fill="none"/>
            <path d="M85 42V65" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
        
        <div className="absolute top-[45%] left-[8%] text-[#16DFA5] opacity-19" style={{ animation: 'float 9s ease-in-out infinite', animationDelay: '1.2s' }}>
          {/* Star - Mid Left */}
          <svg className="size-[50px]" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 10L61 41H94L67 60L78 91L50 72L22 91L33 60L6 41H39L50 10Z"/>
          </svg>
        </div>
        
        <div className="absolute top-[8%] right-[6%] text-[#16DFA5] opacity-17" style={{ animation: 'float 7.5s ease-in-out infinite', animationDelay: '2s' }}>
          {/* Analytics Symbol - Top Right */}
          <svg className="size-[52px]" viewBox="0 0 100 100" fill="none">
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

      {/* Left Side - Illustration Panel */}
      <div className="hidden lg:flex lg:w-1/2 p-[64px] flex-col justify-center relative overflow-visible">
        {/* Background Pattern - Learning Pathways Design */}
        <div className="absolute inset-0 left-[-20%] right-[-100%] opacity-15">
          <svg className="w-full h-full" viewBox="0 0 1400 800" fill="none" preserveAspectRatio="xMidYMid slice">
            {/* Pathway 1 - Top flowing path */}
            <path d="M 100,120 Q 250,100 350,140 T 650,180 Q 800,200 950,180" stroke="#16DFA5" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6"/>
            <circle cx="100" cy="120" r="9" fill="#16DFA5"/>
            <circle cx="350" cy="140" r="7" fill="#16DFA5" opacity="0.7"/>
            <circle cx="550" cy="170" r="6" fill="#16DFA5" opacity="0.5"/>
            <circle cx="750" cy="190" r="7" fill="#16DFA5" opacity="0.7"/>
            <circle cx="950" cy="180" r="10" fill="#16DFA5"/>
            
            {/* Pathway 2 - Upper middle path */}
            <path d="M 60,200 Q 180,190 300,220 Q 440,250 590,230 Q 750,210 900,240" stroke="#16DFA5" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6"/>
            <circle cx="60" cy="200" r="9" fill="#16DFA5"/>
            <circle cx="220" cy="205" r="7" fill="#16DFA5" opacity="0.6"/>
            <circle cx="440" cy="235" r="7" fill="#16DFA5" opacity="0.7"/>
            <circle cx="670" cy="220" r="6" fill="#16DFA5" opacity="0.5"/>
            <circle cx="900" cy="240" r="10" fill="#16DFA5"/>
            
            {/* Pathway 3 - Middle winding path */}
            <path d="M 80,300 Q 200,280 320,320 Q 450,360 580,340 Q 720,320 850,360" stroke="#16DFA5" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6"/>
            <circle cx="80" cy="300" r="9" fill="#16DFA5"/>
            <circle cx="260" cy="300" r="7" fill="#16DFA5" opacity="0.6"/>
            <circle cx="450" cy="340" r="8" fill="#16DFA5" opacity="0.8"/>
            <circle cx="650" cy="330" r="6" fill="#16DFA5" opacity="0.5"/>
            <circle cx="850" cy="360" r="10" fill="#16DFA5"/>
            
            {/* Pathway 4 - Lower middle path */}
            <path d="M 90,400 Q 230,420 370,390 Q 520,360 670,380 Q 820,400 970,370" stroke="#16DFA5" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6"/>
            <circle cx="90" cy="400" r="9" fill="#16DFA5"/>
            <circle cx="300" cy="405" r="7" fill="#16DFA5" opacity="0.6"/>
            <circle cx="520" cy="375" r="7" fill="#16DFA5" opacity="0.7"/>
            <circle cx="745" cy="390" r="6" fill="#16DFA5" opacity="0.5"/>
            <circle cx="970" cy="370" r="10" fill="#16DFA5"/>
            
            {/* Pathway 5 - Lower ascending path */}
            <path d="M 120,500 Q 280,520 420,480 Q 580,440 720,460 Q 850,480 980,450" stroke="#16DFA5" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6"/>
            <circle cx="120" cy="500" r="9" fill="#16DFA5"/>
            <circle cx="350" cy="500" r="7" fill="#16DFA5" opacity="0.6"/>
            <circle cx="580" cy="450" r="7" fill="#16DFA5" opacity="0.7"/>
            <circle cx="800" cy="465" r="7" fill="#16DFA5" opacity="0.6"/>
            <circle cx="980" cy="450" r="10" fill="#16DFA5"/>
            
            {/* Connecting branches between pathways */}
            <path d="M 350,140 L 300,220" stroke="#16DFA5" strokeWidth="1.5" strokeDasharray="4,6" opacity="0.25"/>
            <path d="M 300,220 L 320,320" stroke="#16DFA5" strokeWidth="1.5" strokeDasharray="4,6" opacity="0.25"/>
            <path d="M 450,340 L 370,390" stroke="#16DFA5" strokeWidth="1.5" strokeDasharray="4,6" opacity="0.25"/>
            <path d="M 580,340 L 580,440" stroke="#16DFA5" strokeWidth="1.5" strokeDasharray="4,6" opacity="0.25"/>
            <path d="M 750,190 L 670,380" stroke="#16DFA5" strokeWidth="1.5" strokeDasharray="4,6" opacity="0.2"/>
            <path d="M 900,240 L 850,360" stroke="#16DFA5" strokeWidth="1.5" strokeDasharray="4,6" opacity="0.25"/>
            
            {/* Milestone markers - larger destination nodes */}
            <g>
              <circle cx="950" cy="180" r="15" fill="none" stroke="#16DFA5" strokeWidth="2" opacity="0.4"/>
              <circle cx="900" cy="240" r="15" fill="none" stroke="#16DFA5" strokeWidth="2" opacity="0.4"/>
              <circle cx="850" cy="360" r="15" fill="none" stroke="#16DFA5" strokeWidth="2" opacity="0.4"/>
              <circle cx="970" cy="370" r="15" fill="none" stroke="#16DFA5" strokeWidth="2" opacity="0.4"/>
              <circle cx="980" cy="450" r="15" fill="none" stroke="#16DFA5" strokeWidth="2" opacity="0.4"/>
            </g>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 pl-[14px]">
          <div className="inline-flex items-center gap-[12px] mb-[32px]">
            <div className="size-[48px] bg-gradient-to-br from-[#16DFA5] to-[#03B0E8] rounded-[12px] flex items-center justify-center">
              <BookOpen className="size-[24px] text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="font-['Rubik:Medium',sans-serif] text-[28px] text-white">
                K-12 Pathways
              </h1>
              <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#16DFA5]">
                Unified Education Intelligence
              </p>
            </div>
          </div>

          {/* Large Illustration */}
          <div className="mt-[48px]">
            <h2 className="font-['Rubik:Medium',sans-serif] text-[42px] text-white leading-tight mb-[24px]">
              Welcome to Your<br />Learning Hub
            </h2>
            <p className="font-['Rubik:Regular',sans-serif] text-[18px] text-white/80 max-w-[480px] leading-relaxed">
              Access all your educational tools in one place. Create assessments, track progress, and empower student success with our comprehensive suite of K-12 solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Sign In Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-[32px] lg:p-[64px] relative z-10">
        <div className="w-full max-w-[440px]">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-[40px]">
            <div className="inline-flex items-center gap-[12px] mb-[16px]">
              <div className="size-[56px] bg-gradient-to-br from-[#343A6F] to-[#6970B2] rounded-[12px] flex items-center justify-center shadow-lg">
                <BookOpen className="size-[28px] text-white" strokeWidth={2.5} />
              </div>
              <div className="text-left">
                <h1 className="font-['Rubik:Medium',sans-serif] text-[28px] text-[#343A6F]">
                  K-12 Pathways
                </h1>
                <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#16DFA5]">
                  Unified Education Intelligence
                </p>
              </div>
            </div>
          </div>

          {/* Sign In Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-[24px] shadow-2xl p-[40px] border border-white/40">
            {/* Header */}
            <div className="text-center mb-[32px]">
              <div className="inline-flex items-center justify-center size-[64px] bg-gradient-to-br from-[#16DFA5] to-[#03B0E8] rounded-full mb-[16px] shadow-lg">
                <Sparkles className="size-[28px] text-white" strokeWidth={2.5} />
              </div>
              <h2 className="font-['Rubik:Medium',sans-serif] text-[32px] text-[#343A6F] mb-[8px]">
                Welcome Back
              </h2>
              <p className="font-['Rubik:Regular',sans-serif] text-[16px] text-[#6970B2]">
                Sign in to continue to your dashboard
              </p>
            </div>

            <form onSubmit={handleSignIn} className="space-y-[24px]">
              {/* Email Field */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block font-['Rubik:Medium',sans-serif] text-[14px] text-[#343A6F] mb-[8px]"
                >
                  Username (Email)
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@school.edu"
                  className="w-full px-[20px] py-[14px] bg-white border-2 border-[#E5E7EB] rounded-[12px] text-[16px] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#16DFA5] focus:ring-4 focus:ring-[#16DFA5]/10 hover:border-[#16DFA5]/50 transition-all"
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <label 
                  htmlFor="password" 
                  className="block font-['Rubik:Medium',sans-serif] text-[14px] text-[#343A6F] mb-[8px]"
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
                    className="w-full px-[20px] py-[14px] pr-[52px] bg-white border-2 border-[#E5E7EB] rounded-[12px] text-[16px] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#16DFA5] focus:ring-4 focus:ring-[#16DFA5]/10 hover:border-[#16DFA5]/50 transition-all"
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
                className="w-full bg-gradient-to-r from-[#16DFA5] to-[#03B0E8] text-white font-['Rubik:Medium',sans-serif] text-[16px] py-[16px] rounded-[12px] shadow-lg shadow-[#16DFA5]/25 hover:shadow-xl hover:shadow-[#16DFA5]/40 hover:scale-[1.02] transition-all duration-300"
              >
                Sign In to Dashboard
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-[32px]">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-[#E5E7EB]"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white/80 px-[20px] font-['Rubik:Medium',sans-serif] text-[13px] text-[#9CA3AF] uppercase tracking-wider">
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
                className="flex items-center justify-center gap-[10px] px-[20px] py-[14px] bg-white border-2 border-[#E5E7EB] rounded-[12px] hover:border-[#16DFA5] hover:shadow-md hover:scale-[1.02] transition-all duration-200"
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
                className="flex items-center justify-center gap-[10px] px-[20px] py-[14px] bg-white border-2 border-[#E5E7EB] rounded-[12px] hover:border-[#16DFA5] hover:shadow-md hover:scale-[1.02] transition-all duration-200"
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

            {/* Help Footer */}
            <p className="font-['Rubik:Regular',sans-serif] text-[13px] text-[#9CA3AF] text-center mt-[32px]">
              Need help accessing your account?{' '}
              <a href="mailto:support@prometric.com" className="text-[#03B0E8] hover:text-[#16DFA5] font-['Rubik:Medium',sans-serif] transition-colors">
                Contact Support
              </a>
            </p>
          </div>

          {/* Bottom Copyright */}
          <p className="font-['Rubik:Regular',sans-serif] text-[14px] text-[#343A6F] text-center mt-[24px]">
            © 2024 Prometric. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}