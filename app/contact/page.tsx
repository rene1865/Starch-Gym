"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="bg-red-600 text-white mb-4">CONTACT US</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in <span className="text-red-500">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to start your fitness journey? Have questions about our programs? We're here to help you every step of
            the way.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">
                Contact <span className="text-red-500">Information</span>
              </h2>

              <div className="space-y-6">
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-red-600 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Phone</h3>
                        <p className="text-gray-400">09994805505</p>
                        <p className="text-sm text-gray-500">Call us anytime</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-red-600 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Email</h3>
                        <p className="text-gray-400">info@starchgym.com</p>
                        <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-red-600 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Address</h3>
                        <p className="text-gray-400">97, Velachery Rd, Sembakkam,</p>
                        <p className="text-gray-400"> Chennai, Tamil Nadu 600073</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-red-600 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Hours</h3>
                        <p className="text-gray-400">24/7 Access for Members</p>
                        <p className="text-sm text-gray-500">Staff: Mon-Fri 6AM-10PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
                <div className="flex space-x-4">
                  <Button size="icon" className="bg-red-600 hover:bg-red-700">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button size="icon" className="bg-red-600 hover:bg-red-700">
                    <Facebook className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">
                Send us a <span className="text-red-500">Message</span>
              </h2>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                        <Input className="bg-gray-800 border-gray-700 text-white" placeholder="Your first name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                        <Input className="bg-gray-800 border-gray-700 text-white" placeholder="Your last name" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <Input
                        type="email"
                        className="bg-gray-800 border-gray-700 text-white"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                      <Input
                        type="tel"
                        className="bg-gray-800 border-gray-700 text-white"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                      <Input
                        className="bg-gray-800 border-gray-700 text-white"
                        placeholder="What can we help you with?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                      <Textarea
                        className="bg-gray-800 border-gray-700 text-white min-h-[120px]"
                        placeholder="Tell us more about your fitness goals or questions..."
                      />
                    </div>

                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Find <span className="text-red-500">Our Location</span>
            </h2>
            <p className="text-xl text-gray-400">Located in the heart of the city with easy access and parking</p>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="h-96 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e5b7c5d%3A0x1234567890abcdef!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Button
                  className="bg-red-600 hover:bg-red-700"
                  onClick={() =>
                    window.open("https://maps.google.com/?q=123+Fitness+Street,+Gym+City,+GC+12345", "_blank")
                  }
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                <p className="text-gray-400">123 Fitness Street</p>
                <p className="text-gray-400">Gym City, GC 12345</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-white mb-1">Hours</h3>
                <p className="text-gray-400">24/7 Access for Members</p>
                <p className="text-gray-400">Staff: Mon-Fri 6AM-10PM</p>
              </div>
              <div className="text-center">
                <Phone className="h-8 w-8 text-red-500 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-white mb-1">Contact</h3>
                <p className="text-gray-400">(555) 123-4567</p>
                <p className="text-gray-400">info@starchgym.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to <span className="text-red-500">Get Started</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Don't wait any longer. Your fitness transformation begins with a single step. Contact us today and let's
            build your success story together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
              Join Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 bg-transparent"
            >
              Schedule a Tour
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
