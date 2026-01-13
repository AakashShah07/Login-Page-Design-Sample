"use client";

import { useState } from "react";
import {
  Plane,
  MapPin,
  Globe,
  Phone,
  CheckCircle2,
  Compass,
  Mountain,
  Ship,
  Building2,
} from "lucide-react";

export default function TripzSearchLogin() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-amber-600 via-orange-500 to-rose-600 animate-gradient-shift" />

      {/* Floating travel elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-rose-400/15 rounded-full blur-3xl animate-blob animation-delay-4000" />

        {/* Floating icons */}
        <Plane className="absolute top-[15%] right-[20%] w-8 h-8 text-white/10 animate-float" />
        <MapPin className="absolute top-[40%] left-[10%] w-6 h-6 text-white/10 animate-float animation-delay-2000" />
        <Globe className="absolute bottom-[30%] right-[15%] w-10 h-10 text-white/10 animate-float animation-delay-4000" />
        <Compass className="absolute top-[60%] left-[20%] w-7 h-7 text-white/10 animate-float" />
        <Mountain className="absolute bottom-[20%] left-[30%] w-9 h-9 text-white/10 animate-float animation-delay-2000" />
        <Ship className="absolute top-[25%] left-[40%] w-8 h-8 text-white/10 animate-float animation-delay-4000" />
      </div>

      {/* Main card */}
      <div className="relative w-full max-w-5xl bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
        <div className="flex flex-col lg:flex-row">
          {/* Left side - Branding & illustration */}
          <div className="lg:w-1/2 p-8 lg:p-12 relative overflow-hidden">
            {/* Tropical sunset illustration */}
            <div className="absolute inset-0 overflow-hidden">
              <svg
                viewBox="0 0 500 600"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid slice"
              >
                {/* Sun */}
                <defs>
                  <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FEF3C7" />
                    <stop offset="50%" stopColor="#FCD34D" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </radialGradient>
                  <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#EA580C" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Sun circle */}
                <circle cx="250" cy="380" r="80" fill="url(#sunGradient)" opacity="0.9" />

                {/* Water reflection */}
                <ellipse cx="250" cy="480" rx="200" ry="30" fill="url(#waterGradient)" />

                {/* Palm trees silhouette - left */}
                <g fill="#1C1917" opacity="0.85">
                  {/* Left palm tree */}
                  <path d="M80 600 L90 450 L100 600 Z" />
                  <path d="M90 450 Q60 420 20 430 Q70 430 90 450" />
                  <path d="M90 450 Q50 400 10 380 Q65 410 90 450" />
                  <path d="M90 450 Q70 380 40 340 Q80 400 90 450" />
                  <path d="M90 450 Q110 400 140 370 Q100 410 90 450" />
                  <path d="M90 450 Q130 420 170 430 Q110 430 90 450" />
                  <path d="M90 450 Q120 380 150 350 Q100 400 90 450" />

                  {/* Second smaller palm */}
                  <path d="M140 600 L148 490 L156 600 Z" />
                  <path d="M148 490 Q125 465 95 470 Q130 470 148 490" />
                  <path d="M148 490 Q115 440 85 420 Q125 450 148 490" />
                  <path d="M148 490 Q175 450 205 445 Q165 465 148 490" />
                  <path d="M148 490 Q180 465 210 470 Q160 475 148 490" />

                  {/* Right palm tree */}
                  <path d="M400 600 L410 470 L420 600 Z" />
                  <path d="M410 470 Q380 440 340 450 Q390 450 410 470" />
                  <path d="M410 470 Q370 420 330 400 Q385 430 410 470" />
                  <path d="M410 470 Q390 400 360 360 Q400 420 410 470" />
                  <path d="M410 470 Q430 420 460 390 Q420 430 410 470" />
                  <path d="M410 470 Q450 440 490 450 Q430 450 410 470" />
                  <path d="M410 470 Q440 400 470 370 Q420 420 410 470" />

                  {/* Ground/beach */}
                  <path d="M0 520 Q100 500 250 510 Q400 520 500 505 L500 600 L0 600 Z" />

                  {/* Small plants */}
                  <path d="M200 520 Q210 500 215 480 Q220 500 230 520" />
                  <path d="M280 515 Q295 490 300 465 Q305 490 320 515" />
                </g>

                {/* Birds */}
                <g stroke="#1C1917" strokeWidth="2" fill="none" opacity="0.6">
                  <path d="M150 200 Q155 195 160 200 Q165 195 170 200" />
                  <path d="M300 170 Q306 164 312 170 Q318 164 324 170" />
                  <path d="M380 220 Q384 216 388 220 Q392 216 396 220" />
                </g>
              </svg>
            </div>

            {/* Content overlay */}
            <div className="relative z-10 h-full flex flex-col justify-between min-h-[400px]">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white tracking-tight">
                    TripzSearch
                  </h1>
                  <p className="text-white/70 text-xs">Tour & Travel Platform</p>
                </div>
              </div>

              {/* Welcome text */}
              <div className="my-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Welcome to
                  <br />
                  <span className="text-amber-200">Your Journey</span>
                </h2>
                <p className="mt-4 text-white/80 text-sm leading-relaxed max-w-sm">
                  Empowering tour operators with cutting-edge search technology.
                  Find, compare, and book the best travel experiences worldwide.
                </p>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <Building2 className="w-4 h-4 text-amber-200" />
                  <span className="text-white/90 text-xs">500+ Partners</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <Globe className="w-4 h-4 text-amber-200" />
                  <span className="text-white/90 text-xs">190 Countries</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-white/90 text-xs">Verified Listings</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="lg:w-1/2 p-8 lg:p-12 bg-white/5 backdrop-blur-sm">
            <div className="max-w-md mx-auto">
              {/* Header */}
              <h3 className="text-2xl font-bold text-white mb-2">Sign In</h3>
              <p className="text-white/60 text-sm mb-8">Choose your preferred sign-in method</p>

              {/* Google Sign In */}
              <button className="w-full flex items-center justify-center gap-3 py-4 bg-white hover:bg-gray-50 rounded-xl text-gray-700 font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg mb-4">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-white/20" />
                <span className="text-white/50 text-sm">or</span>
                <div className="flex-1 h-px bg-white/20" />
              </div>

              {/* Mobile Number */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium">
                    Mobile Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-[1.02]">
                  Send OTP
                </button>
              </div>

              {/* Terms */}
              <p className="text-white/50 text-xs text-center mt-6">
                By signing in, you agree to our{" "}
                <a href="#" className="text-amber-300 hover:text-amber-200">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-amber-300 hover:text-amber-200">
                  Privacy Policy
                </a>
              </p>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom attribution */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-xs">
        © 2026 TripzSearch. All rights reserved.
      </div>
    </div>
  );
}
