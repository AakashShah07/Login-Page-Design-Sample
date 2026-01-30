"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, CheckCircle, Lock, Phone, Shield, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const [vendorCount, setVendorCount] = useState(0);

  useEffect(() => {
    const target = 200;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setVendorCount(target);
        clearInterval(timer);
      } else {
        setVendorCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative min-h-dvh w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/y.jpg')`,
        }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black/30 sm:bg-black/20" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex min-h-dvh items-center justify-center px-4 py-6 sm:p-6 md:p-8">
        <Card className="w-full max-w-[95%] sm:max-w-md bg-white/95 shadow-2xl border-0 rounded-2xl sm:rounded-3xl overflow-hidden">
          <CardContent className="p-4 sm:p-6 md:p-8">
            {/* Logo Section */}
            <div className="text-center mb-3 sm:mb-5">
              <div className="flex flex-col items-center justify-center gap-1.5 mb-1.5">
                <Image
                  src="/logo-small.png"
                  alt="TS"
                  width={60}
                  height={60}
                  className="h-12 sm:h-14 w-auto rounded  "
                />
                <span className="text-xl sm:text-2xl font-bold text-gray-800 " style={{ animationDelay: '0.2s' }}>
                  TripzSearch
                </span>
              </div>

              {/* Verified Badge */}
              <div className="inline-flex items-center gap-1 text-blue-600 text-xs sm:text-sm animate-fade-in-up animate-badge-glow rounded-full px-2 py-0.5" style={{ animationDelay: '0.4s' }}>
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-blue-600 text-white animate-gentle-pulse" />
                <span className="font-medium">Trusted & Verified</span>
              </div>
            </div>

            {/* Welcome Text */}
            <div className="text-center mb-4 sm:mb-6">
              <p className="text-lg sm:text-xl font-semibold text-gray-800 tracking-tight mb-1">
                Operator Login
              </p>
              {/* Subtle gradient accent line */}
              <div className="flex justify-center mb-2">
                <div className="w-12 h-0.5 rounded-full bg-linear-to-r from-transparent via-red-400 to-transparent opacity-60" />
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                Sign in or create your account to continue
              </p>
            </div>

            {/* Sign In Buttons */}
            <div className="space-y-2.5 sm:space-y-3">
              {/* Google Button */}
              <Button
                variant="outline"
                className="w-full h-11 sm:h-12 text-sm sm:text-base font-normal text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 rounded-full transition-all duration-200"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" viewBox="0 0 24 24">
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
                Continue with Google
              </Button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-xs sm:text-sm">
                  <span className="bg-white px-4 text-gray-500">or</span>
                </div>
              </div>

              {/* Phone Button */}
              <Button
                className="w-full h-11 sm:h-12 text-sm sm:text-base font-semibold text-white rounded-full shadow-md transition-all duration-200 hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-0.5 active:scale-[0.98] active:shadow-sm"
                style={{ backgroundColor: 'rgb(201, 55, 44)' }}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                Sign in with Phone Number
              </Button>
            </div>

            {/* Security Badges */}
            <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-gray-100">
              <p className="text-center text-sm sm:text-base text-gray-600 font-medium mb-2.5 sm:mb-3">
                Trusted by <span className="text-gray-900 font-bold tabular-nums">{vendorCount}+</span> verified vendors
              </p>
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <div className="flex items-center gap-1 bg-gray-100 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md">
                  <Shield className="w-4 h-4 sm:w-4 sm:h-4 text-blue-600" />
                  <span className="text-[10px] sm:text-xs font-bold text-gray-700">
                    SAFE
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-gray-100 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md">
                  <Lock className="w-4 h-4 sm:w-4 sm:h-4 text-green-600" />
                  <span className="text-[10px] sm:text-xs font-bold text-gray-700">
                    SECURE
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-gray-100 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md">
                  <BadgeCheck className="w-4 h-4 sm:w-4 sm:h-4 text-purple-600" />
                  <span className="text-[10px] sm:text-xs font-bold text-gray-700">
                    VERIFIED
                  </span>
                </div>
              </div>

              {/* Terms */}
              <p className="text-center text-[10px] sm:text-xs text-gray-500 mt-2.5 sm:mt-3 px-2">
                By continuing, you agree to our{" "}
                <a href="#" className="text-gray-700 underline">
                  Terms of Service
                </a>{" "}
                only
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Decorations - Hidden on mobile for cleaner look */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none hidden sm:block">
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-60 md:w-80 h-24 md:h-32 bg-linear-to-t from-amber-600/50 to-transparent rounded-t-full blur-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
