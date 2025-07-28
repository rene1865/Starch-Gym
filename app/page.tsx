"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Users, Trophy, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Starch Gym Interior"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-white to-red-500 bg-clip-text text-transparent">
              STARCH GYM
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
              UNLEASH YOUR POTENTIAL • TRANSFORM YOUR BODY • DOMINATE YOUR GOALS
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-bold">
              JOIN NOW
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-bold bg-transparent"
            >
              GET FIT TODAY
            </Button>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              WHY CHOOSE <span className="text-red-500">STARCH GYM</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              State-of-the-art equipment, expert trainers, and a community that pushes you to excel
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800 hover:border-red-500 transition-colors">
              <CardContent className="p-8 text-center">
                <Trophy className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Premium Equipment</h3>
                <p className="text-gray-400">Latest fitness technology and professional-grade equipment</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-red-500 transition-colors">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">Expert Trainers</h3>
                <p className="text-gray-400">Certified professionals dedicated to your success</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-red-500 transition-colors">
              <CardContent className="p-8 text-center">
                <Clock className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">24/7 Access</h3>
                <p className="text-gray-400">Train on your schedule with round-the-clock access</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Preview Sections */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-red-600 text-white mb-4">WORKOUT VIDEOS</Badge>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Train Like a <span className="text-red-500">Champion</span>
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Access our extensive library of workout videos featuring proper form demonstrations, advanced
                techniques, and complete workout routines designed by our expert trainers.
              </p>
              <Link href="/videos">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Watch Videos <Play className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div
              className="relative h-80 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => window.open("https://www.youtube.com/watch?v=ml6cT4AZdqI", "_blank")}
            >
              <Image
                src="https://img.youtube.com/vi/ml6cT4AZdqI/maxresdefault.jpg"
                alt="Workout Video Preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                <Play className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-red-600 text-white mb-4">GALLERY</Badge>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Experience Our <span className="text-red-500">Facility</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Gym Equipment"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Group Fitness"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Personal Training"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/gallery">
              <Button
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
              >
                View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Membership Preview */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-red-600 text-white mb-4">MEMBERSHIP</Badge>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Choose Your <span className="text-red-500">Plan</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Standard</h3>
                <div className="text-3xl font-bold text-red-500 mb-6">
                  $49<span className="text-lg text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li>• Full gym access</li>
                  <li>• Group fitness classes</li>
                  <li>• Locker room access</li>
                  <li>• Basic equipment training</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-600 to-red-800 border-red-500 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-yellow-500 text-black">PREMIUM</Badge>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Premium</h3>
                <div className="text-3xl font-bold text-white mb-6">
                  $99<span className="text-lg text-gray-200">/month</span>
                </div>
                <ul className="space-y-3 text-gray-100">
                  <li>• Everything in Standard</li>
                  <li>• Personal training sessions</li>
                  <li>• Nutrition consultation</li>
                  <li>• Exclusive classes</li>
                  <li>• Priority booking</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link href="/membership">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                View All Plans <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
