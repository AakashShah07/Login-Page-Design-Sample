"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, Phone, Lock, ChevronDown } from "lucide-react";

// Country code options
const countryCodes = [
  { code: "+91", label: "IN" },
  { code: "+1", label: "US" },
  { code: "+44", label: "UK" },
  { code: "+971", label: "UAE" },
  { code: "+65", label: "SG" },
];

// Custom dropdown component
function CountryCodeDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCountry = countryCodes.find((c) => c.code === value);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between gap-1 w-[100px] h-14 px-4 bg-gray-800/80 text-white text-sm font-medium hover:bg-gray-700/80 transition-colors rounded-l-xl"
      >
        <span className="text-white/90">
          {selectedCountry?.code} {selectedCountry?.label}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-white/60 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-36 bg-gray-900/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden">
          {countryCodes.map((country) => (
            <button
              key={country.code}
              type="button"
              onClick={() => {
                onChange(country.code);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                value === country.code
                  ? "bg-red-500/20 text-red-400"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              {country.code} {country.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Animated logo component
function AnimatedLogo({ triggerAnimation }: { triggerAnimation: boolean }) {
  const letters = "TripzSearch".split("");

  return (
    <div className="flex items-center justify-center gap-3">
      <div className="relative">
        <div className="bg-red-500 text-white font-bold text-2xl px-3 py-1 rounded-lg shadow-lg shadow-red-500/40">
          TS
        </div>
        <div className="absolute -inset-1 bg-red-500 rounded-lg blur-md opacity-40 animate-pulse" />
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight drop-shadow-lg">
        {letters.map((letter, i) => (
          <span
            key={i}
            className={`inline-block transition-all duration-500 ${
              triggerAnimation
                ? "animate-letter-wave"
                : "opacity-100 translate-y-0"
            }`}
            style={{
              animationDelay: triggerAnimation ? `${i * 0.05}s` : "0s",
            }}
          >
            {letter}
          </span>
        ))}
      </h1>
    </div>
  );
}

// Verified badge with pulse animation
function VerifiedBadge() {
  return (
    <div className="inline-flex items-center gap-2 text-sm mt-3">
      <div className="relative">
        <CheckCircle className="w-5 h-5 fill-red-500 text-white" />
        <div className="absolute inset-0 animate-ping-slow">
          <CheckCircle className="w-5 h-5 text-red-400 opacity-40" />
        </div>
      </div>
      <span className="text-red-400 font-medium">Trusted & Verified</span>
    </div>
  );
}

export default function Design2Page() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [logoAnimation, setLogoAnimation] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [isFocused, setIsFocused] = useState(false);
  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Re-trigger logo animation every 12 seconds
    const interval = setInterval(() => {
      setLogoAnimation(false);
      setTimeout(() => setLogoAnimation(true), 100);
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const handlePhoneSubmit = () => {
    setIsRippling(true);
    setTimeout(() => setIsRippling(false), 600);
  };

  return (
    <div className="relative min-h-dvh w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url('/sign-in.jpg')`,
        }}
      />

      {/* Gradient overlay - top section more visible, bottom darker */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

      {/* Main Content */}
      <div className="relative z-20 flex min-h-dvh flex-col">
        {/* Top Logo Section */}
        <div
          className={`pt-12 pb-6 text-center transition-all duration-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <AnimatedLogo triggerAnimation={logoAnimation} />
          <VerifiedBadge />
        </div>

        {/* Card Section - pushed to bottom */}
        <div className="flex-1 flex items-start justify-center px-4 pb-8">
          <div
            className={`w-full max-w-md transition-all duration-700 delay-150 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Glass Card */}
            <div className="relative">
              {/* Subtle glow */}
              <div className="absolute -inset-1 bg-gradient-to-b from-white/10 to-transparent rounded-t-[2rem] blur-xl" />

              <div className="relative bg-black/40 backdrop-blur-2xl rounded-t-[2rem] rounded-b-2xl p-6 sm:p-8 shadow-2xl border border-white/10">
                {/* Welcome Text */}
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 italic">
                    Welcome Back!
                  </h2>
                  <p className="text-sm sm:text-base text-white/60">
                    Access your travel management dashboard
                  </p>
                </div>

                {/* Login Options */}
                <div className="space-y-4">
                  {/* Google Button */}
                  <Button
                    variant="outline"
                    className="group relative w-full h-14 text-base font-medium bg-white hover:bg-gray-50 border-0 rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-white/10 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    <span className="text-gray-700">Continue with Google</span>
                  </Button>

                  {/* Divider */}
                  <div className="relative flex items-center py-3">
                    <div className="flex-1 border-t border-white/20" />
                    <span className="px-4 text-sm text-white/50 font-medium">
                      OR
                    </span>
                    <div className="flex-1 border-t border-white/20" />
                  </div>

                  {/* Phone Number Input */}
                  <div className="space-y-4">
                    <div
                      className={`relative flex rounded-xl overflow-hidden transition-all duration-300 ${
                        isFocused
                          ? "ring-2 ring-red-500/60 shadow-lg shadow-red-500/20"
                          : ""
                      }`}
                    >
                      {/* Country Code Selector */}
                      <CountryCodeDropdown
                        value={countryCode}
                        onChange={setCountryCode}
                      />

                      {/* Phone Input */}
                      <Input
                        type="tel"
                        placeholder="Enter phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className="flex-1 h-14 bg-gray-800/80 border-0 rounded-none rounded-r-xl text-white placeholder:text-white/40 focus-visible:ring-0 text-base"
                      />
                    </div>

                    {/* Continue with Phone Button */}
                    <Button
                      onClick={handlePhoneSubmit}
                      className={`relative w-full h-14 text-base font-semibold bg-red-500 hover:bg-red-600 text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-red-500/30 hover:scale-[1.02] active:scale-[0.98] ${
                        isRippling ? "scale-95" : ""
                      }`}
                    >
                      {isRippling && (
                        <span className="absolute inset-0 bg-white/30 animate-ripple rounded-full" />
                      )}
                      <Phone className="w-5 h-5 mr-2" />
                      Continue with Phone
                    </Button>
                  </div>
                </div>

                {/* Security Badge */}
                <div className="mt-8 flex flex-col items-center gap-4">
                  <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-lg">
                    <div className="flex items-center justify-center w-6 h-6 bg-green-500 rounded">
                      <Lock className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-green-600 font-bold text-sm tracking-wider">
                      SECURE
                    </span>
                  </div>

                  {/* Terms */}
                  <p className="text-center text-xs text-white/50">
                    By continuing, you agree to our{" "}
                    <a
                      href="#"
                      className="text-red-400 hover:text-red-300 underline underline-offset-2 transition-colors"
                    >
                      Terms of Service
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
