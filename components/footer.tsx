import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dumbbell, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold text-white">STARCH GYM</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transform your body and unleash your potential at Starch Gym. Join our community of fitness enthusiasts
              and achieve your goals with expert guidance.
            </p>
            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="outline"
                className="border-gray-700 text-gray-400 hover:text-red-500 hover:border-red-500 bg-transparent"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-gray-700 text-gray-400 hover:text-red-500 hover:border-red-500 bg-transparent"
              >
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/videos" className="block text-gray-400 hover:text-red-500 transition-colors">
                Workout Videos
              </Link>
              <Link href="/gallery" className="block text-gray-400 hover:text-red-500 transition-colors">
                Gallery
              </Link>
              <Link href="/membership" className="block text-gray-400 hover:text-red-500 transition-colors">
                Membership Plans
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-red-500 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>info@starchgym.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>123 Fitness St, Gym City, GC 12345</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Starch Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
