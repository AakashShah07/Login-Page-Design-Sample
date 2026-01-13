"use client";

import { useState } from "react";
import { Phone, Plane, Star, Users, TrendingUp, Building2 } from "lucide-react";
import Image from "next/image";

export default function TripSearchLogin() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-50 to-sky-50">
      {/* LEFT SECTION - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 shadow-lg shadow-orange-500/30">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 tracking-tight">
                TripSearch
              </h2>
              <p className="text-xs text-gray-500">Operator Portal</p>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">
              Operator Login
            </h1>
            <p className="text-gray-500">
              Access your dashboard to manage bookings, inventory, and grow your travel business.
            </p>
          </div>

          {/* Google Sign In */}
          <button className="w-full flex items-center justify-center gap-3 py-4 bg-white hover:bg-gray-50 rounded-2xl text-gray-700 font-medium transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:shadow-md">
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
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-400 text-sm">or sign in with mobile</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Mobile Number */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all"
                />
              </div>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-semibold rounded-2xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-[1.02]">
              Send OTP
            </button>
          </div>

          {/* Terms */}
          <p className="text-gray-400 text-xs text-center">
            By signing in, you agree to our{" "}
            <a href="#" className="text-orange-500 hover:text-orange-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-orange-500 hover:text-orange-600 hover:underline">
              Privacy Policy
            </a>
          </p>

          {/* Copyright */}
          <p className="text-center text-xs text-gray-400 pt-4">
            © 2026 TripSearch. All Rights Reserved
          </p>
        </div>
      </div>

      {/* RIGHT SECTION - Image */}
      <div className="hidden lg:block w-1/2 relative">
        {/* Background Image */}
        <Image
          src="/sign-in.jpg"
          alt="Tropical beach resort with seaplane"
          fill
          className="object-cover object-top"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-10">

          {/* Bottom Content */}
          <div className="space-y-6">
            {/* Stats Row */}
            <div className="flex gap-3">
              <div className="bg-white rounded-xl px-4 py-3 shadow-lg">
                <div className="flex items-center gap-1">
                  <Building2 className="w-5 h-5 text-orange-500" />
                  <span className="text-2xl font-bold text-gray-900">500+</span>
                </div>
                <p className="text-xs text-gray-500">Partner Operators</p>
              </div>
              <div className="bg-white rounded-xl px-4 py-3 shadow-lg">
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span className="text-2xl font-bold text-gray-900">40%</span>
                </div>
                <p className="text-xs text-gray-500">Avg. Growth</p>
              </div>
              <div className="bg-white rounded-xl px-4 py-3 shadow-lg">
                <div className="flex items-center gap-1">
                  <Users className="w-5 h-5 text-blue-500" />
                  <span className="text-2xl font-bold text-gray-900">1M+</span>
                </div>
                <p className="text-xs text-gray-500">Customers Served</p>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-5 border border-white/20 max-w-lg">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-400 to-rose-400 flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">RT</span>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-white text-sm leading-relaxed">
                    &ldquo;TripSearch transformed our business. We&apos;ve doubled our bookings and streamlined our entire operation.&rdquo;
                  </p>
                  <p className="text-white/60 text-xs mt-2">Rajesh T. — Paradise Tours, Mumbai</p>
                </div>
              </div>
            </div>

            {/* Tagline */}
            <div>
              <h3 className="text-3xl font-bold text-white leading-tight">
                Grow Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">
                  Travel Business
                </span>
              </h3>
              <p className="text-white/80 mt-2 text-sm max-w-md">
                Access premium inventory, real-time pricing, and powerful tools to scale your operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
