"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Clock, Users } from "lucide-react"
import Image from "next/image"

export default function VideosPage() {
  const videoCategories = [
    {
      title: "Strength Training",
      videos: [
        {
          title: "Deadlift Fundamentals",
          duration: "12:45",
          level: "Beginner",
          thumbnail: "deadlift training form demonstration",
          videoId: "op9kVnSso6Q", // AthleanX deadlift tutorial
        },
        {
          title: "Advanced Squat Techniques",
          duration: "15:30",
          level: "Advanced",
          thumbnail: "squat exercise proper form",
          videoId: "ultWZbUMPL8", // Squat technique video
        },
        {
          title: "Bench Press Mastery",
          duration: "10:20",
          level: "Intermediate",
          thumbnail: "bench press technique demonstration",
          videoId: "rT7DgCr-3pg", // Bench press form video
        },
      ],
    },
    {
      title: "Cardio Workouts",
      videos: [
        {
          title: "HIIT Fat Burner",
          duration: "20:00",
          level: "All Levels",
          thumbnail: "high intensity interval training session",
          videoId: "ml6cT4AZdqI", // HIIT workout video
        },
        {
          title: "Treadmill Intervals",
          duration: "25:15",
          level: "Intermediate",
          thumbnail: "treadmill cardio workout",
          videoId: "gC_L9qAHVJ8", // Treadmill workout
        },
        {
          title: "Boxing Cardio",
          duration: "18:45",
          level: "Beginner",
          thumbnail: "boxing cardio fitness class",
          videoId: "kFIS2tFd8wY", // Boxing cardio workout
        },
      ],
    },
    {
      title: "Functional Training",
      videos: [
        {
          title: "Core Stability",
          duration: "14:30",
          level: "All Levels",
          thumbnail: "core stability exercise demonstration",
          videoId: "44ScXWFaVBs", // Core workout video
        },
        {
          title: "Mobility & Flexibility",
          duration: "22:10",
          level: "Beginner",
          thumbnail: "stretching and mobility routine",
          videoId: "L_xrDAtykMI", // Mobility routine
        },
        {
          title: "Athletic Performance",
          duration: "16:55",
          level: "Advanced",
          thumbnail: "athletic performance training",
          videoId: "IODxDxX7oi4", // Athletic training video
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="bg-red-600 text-white mb-4">WORKOUT VIDEOS</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Master Your <span className="text-red-500">Technique</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Learn from our expert trainers with comprehensive video tutorials covering proper form, advanced techniques,
            and complete workout routines.
          </p>
        </div>
      </section>

      {/* Video Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {videoCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-white">{category.title}</h2>

              <div className="grid md:grid-cols-3 gap-8">
                {category.videos.map((video, videoIndex) => (
                  <Card
                    key={videoIndex}
                    className="bg-gray-900 border-gray-800 hover:border-red-500 transition-colors group cursor-pointer"
                    onClick={() => window.open(`https://www.youtube.com/watch?v=${video.videoId}`, "_blank")}
                  >
                    <div className="relative">
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <Image
                          src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                          alt={video.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="h-12 w-12 text-white" />
                        </div>
                      </div>
                      <div className="absolute top-2 right-2 bg-black/80 px-2 py-1 rounded text-sm text-white flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {video.duration}
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-white">{video.title}</h3>
                      <div className="flex items-center justify-between">
                        <Badge
                          variant="outline"
                          className={`${
                            video.level === "Beginner"
                              ? "border-green-500 text-green-500"
                              : video.level === "Intermediate"
                                ? "border-yellow-500 text-yellow-500"
                                : video.level === "Advanced"
                                  ? "border-red-500 text-red-500"
                                  : "border-blue-500 text-blue-500"
                          }`}
                        >
                          {video.level}
                        </Badge>
                        <Button
                          size="sm"
                          className="bg-red-600 hover:bg-red-700"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(`https://www.youtube.com/watch?v=${video.videoId}`, "_blank")
                          }}
                        >
                          Watch Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-red-600 text-white mb-4">FEATURED</Badge>
            <h2 className="text-4xl font-bold mb-6 text-white">
              This Week's <span className="text-red-500">Spotlight</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className="relative h-80 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => window.open("https://www.youtube.com/watch?v=UBMk30rjy0o", "_blank")}
            >
              <Image
                src="https://img.youtube.com/vi/UBMk30rjy0o/maxresdefault.jpg"
                alt="Featured Workout"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                <Play className="h-20 w-20 text-white" />
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4 text-white">Complete Full Body Transformation</h3>
              <p className="text-gray-400 mb-6 text-lg">
                Join our head trainer for a comprehensive 45-minute full-body workout that targets all major muscle
                groups. Perfect for intermediate to advanced fitness enthusiasts looking to maximize their training
                efficiency.
              </p>

              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center text-gray-400">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>45:30</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Users className="h-5 w-5 mr-2" />
                  <span>Intermediate</span>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={() => window.open("https://www.youtube.com/watch?v=UBMk30rjy0o", "_blank")}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Featured Video
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
