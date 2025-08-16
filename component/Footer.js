// Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="inline-flex items-center space-x-3">
              {/* Replace with your SVG/logo */}
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                Swiggy-like
              </span>
            </a>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Order from your favourite restaurants and get food delivered fast.
              Hot, fresh & delivered to your door.
            </p>

            <div className="flex items-center space-x-3">
              {/* App badges (replace href & img src with real badges) */}
              <a href="#" className="inline-block">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-10"
                />
              </a>
              <a href="#" className="inline-block">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="h-10"
                />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Partner with us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wider">
              Support
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Help & FAQs</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Cancellation & Refunds</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Emergency contacts</a></li>
              <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Safety</a></li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wider">
              Stay in touch
            </h3>

            <form className="mt-4 flex max-w-sm">
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded-l-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm text-gray-900 dark:text-gray-100 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-orange-500 text-white rounded-r-md text-sm font-medium hover:bg-orange-600"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-6 flex items-center space-x-4">
              {/* Social icons (inline SVGs) */}
              <a href="#" aria-label="facebook" className="hover:opacity-80">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07C2 17.07 5.66 21.2 10.44 22v-7.03H7.9v-2.9h2.54V9.41c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.9h-2.3V22C18.34 21.2 22 17.07 22 12.07z" />
                </svg>
              </a>
              <a href="#" aria-label="twitter" className="hover:opacity-80">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 5.92c-.64.29-1.33.48-2.05.57.74-.44 1.31-1.13 1.58-1.96-.7.42-1.48.73-2.31.9C18.9 4.4 17.95 4 16.96 4c-1.54 0-2.79 1.25-2.79 2.79 0 .22.02.44.07.65C10.9 7.32 8.1 5.7 6.3 3.3c-.24.41-.38.9-.38 1.42 0 .98.5 1.85 1.26 2.36-.47-.01-.92-.14-1.31-.36v.04c0 1.37.98 2.52 2.28 2.79-.24.06-.5.09-.77.09-.19 0-.38-.02-.56-.05.38 1.17 1.47 2.02 2.77 2.04C8.8 15.6 7.5 16.2 6 16.2c-.19 0-.38-.01-.56-.04 1.06.68 2.32 1.07 3.68 1.07 4.42 0 6.84-3.66 6.84-6.84 0-.1 0-.2-.01-.31.47-.34.88-.76 1.2-1.24z" />
                </svg>
              </a>
              <a href="#" aria-label="instagram" className="hover:opacity-80">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="1.5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="1.5" />
                  <path d="M17.5 6.5h.01" strokeWidth="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* bottom line */}
        <div className="mt-10 border-t border-gray-100 dark:border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Swiggy-like — All rights reserved.
          </p>

          <div className="flex items-center space-x-4 text-sm">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Terms</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Privacy</a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}