import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#0D1117] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.4fr]">
          <div>
            <h2 className="text-3xl font-semibold tracking-[0.3em]">VENANCO</h2>

            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">
              Modern fashion for the everyday you. Discover premium quality,
              timeless styles and effortless comfort — only at Venanco.
            </p>

            <div className="mt-7 flex items-center gap-5">
              <button
                type="button"
                className="text-gray-400 hover:text-white hover:shadow focus:shadow"
              >
                <FaInstagram className="size-5" />
              </button>

              <button
                type="button"
                className="text-gray-400 hover:text-white hover:shadow focus:shadow"
              >
                <FaFacebookF className="size-5" />
              </button>

              <button
                type="button"
                className="text-gray-400 hover:text-white hover:shadow focus:shadow"
              >
                <FaXTwitter className="size-5" />
              </button>

              <button
                type="button"
                className="text-gray-400 hover:text-white hover:shadow focus:shadow"
              >
                <FaYoutube className="size-5" />
              </button>

              <button
                type="button"
                className="text-gray-400 hover:text-white hover:shadow focus:shadow"
              >
                <FaPinterestP className="size-5" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium">Shop</h3>

            <div className="mt-6 flex flex-col gap-4">
              <a
                href="/new-arrivals"
                className="text-sm text-gray-400 hover:text-white hover:shadow focus:shadow"
              >
                New Arrivals
              </a>

              <a
                href="/best-sellers"
                className="text-sm text-gray-400 hover:text-white hover:shadow focus:shadow"
              >
                Best Sellers
              </a>

              <a
                href="/t-shirts"
                className="text-sm text-gray-400 hover:text-white hover:shadow focus:shadow"
              >
                T-Shirts
              </a>

              <a
                href="/shirts"
                className="text-sm text-gray-400 hover:text-white hover:shadow focus:shadow"
              >
                Shirts
              </a>

              <a
                href="/bottoms"
                className="text-sm text-gray-400 hover:text-white hover:shadow focus:shadow"
              >
                Bottoms
              </a>

              <a
                href="/co-ords"
                className="text-sm text-gray-400 hover:text-white hover:shadow focus:shadow"
              >
                Co-Ords
              </a>

              <a
                href="/accessories"
                className="text-sm text-gray-400 hover:text-white hover:shadow focus:shadow"
              >
                Accessories
              </a>

              <a
                href="/sale"
                className="text-sm text-gray-400 hover:text-white hover:shadow focus:shadow"
              >
                Sale
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium">Quick Links</h3>

            <div className="mt-6 flex flex-col gap-4">
              <a
                href="/about"
                className="text-sm text-gray-400 hover:text-white hover:shadow focus:shadow"
              >
                About Us
              </a>

              <a
                href="/contact"
                className="text-sm text-gray-400 hover:text-white hover:shadow focus:shadow"
              >
                Contact Us
              </a>

              <a
                href="/faq"
                className="text-sm text-gray-400 hover:text-white hover:shadow focus:shadow"
              >
                FAQs
              </a>

              <a
                href="/shipping-policy"
                className="text-sm text-gray-400 hover:text-white hover:shadow focus:shadow"
              >
                Shipping Policy
              </a>

              <a
                href="/return-policy"
                className="text-sm text-gray-400 hover:text-white hover:shadow focus:shadow"
              >
                Return & Exchange
              </a>

              <a
                href="/size-guide"
                className="text-sm text-gray-400 hover:text-white hover:shadow focus:shadow"
              >
                Size Guide
              </a>

              <a
                href="/track-order"
                className="text-sm text-gray-400 hover:text-white hover:shadow focus:shadow"
              >
                Track Order
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-medium">Join Our Newsletter</h3>

            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">
              Get 10% off your first order and be the first to know about new
              arrivals, exclusive offers and more.
            </p>

            <div className="mt-7 flex h-14 overflow-hidden rounded-md border border-white/15 bg-white/5">
              <input
                type="email"
                placeholder="Enter your email address"
                className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-gray-500 hover:shadow focus:shadow"
              />

              <button
                type="button"
                className="flex w-14 shrink-0 items-center justify-center bg-white text-black hover:shadow focus:shadow"
              >
                <ArrowRight className="size-5" />
              </button>
            </div>

            <div className="mt-5 flex items-center gap-3 text-sm text-gray-400">
              <ShieldCheck className="size-5 shrink-0" />
              <span>Your information is safe with us.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="text-sm text-gray-500">
            © 2026 Venanco. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="flex h-8 items-center rounded border border-white/10 px-3 text-xs font-semibold text-gray-300">
              VISA
            </span>

            <span className="flex h-8 items-center rounded border border-white/10 px-3 text-xs font-semibold text-gray-300">
              MC
            </span>

            <span className="flex h-8 items-center rounded border border-white/10 px-3 text-xs font-semibold text-gray-300">
              UPI
            </span>

            <span className="flex h-8 items-center rounded border border-white/10 px-3 text-xs font-semibold text-gray-300">
              PayPal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
