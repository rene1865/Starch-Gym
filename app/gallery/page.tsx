import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function GalleryPage() {
  const galleryCategories = {
    equipment: [
      {
        title: "Free Weights Section",
        image:
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Cardio Zone",
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Strength Machines",
        image:
          "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Functional Training Area",
        image:
          "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Olympic Lifting Platform",
        image:
          "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Recovery Zone",
        image:
          "https://images.unsplash.com/photo-1506629905607-d405d7d3b0d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
    ],
    members: [
      {
        title: "Group Training Session",
        image:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Personal Training",
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Cardio Workout",
        image:
          "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Strength Training",
        image:
          "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Yoga Class",
        image:
          "https://images.unsplash.com/photo-1506629905607-d405d7d3b0d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Boxing Training",
        image:
          "https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
    ],
    trainers: [
      {
        title: "Head Trainer Mike",
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Yoga Instructor Sarah",
        image:
          "https://images.unsplash.com/photo-1506629905607-d405d7d3b0d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Boxing Coach Alex",
        image:
          "https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Nutrition Specialist Lisa",
        image:
          "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Strength Coach David",
        image:
          "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Cardio Specialist Emma",
        image:
          "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="bg-red-600 text-white mb-4">GALLERY</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Experience Our <span className="text-red-500">Facility</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Take a virtual tour of our state-of-the-art facility, meet our expert trainers, and see our community in
            action.
          </p>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Tabs defaultValue="equipment" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-900 mb-12">
              <TabsTrigger value="equipment" className="data-[state=active]:bg-red-600">
                Equipment & Facilities
              </TabsTrigger>
              <TabsTrigger value="members" className="data-[state=active]:bg-red-600">
                Members in Action
              </TabsTrigger>
              <TabsTrigger value="trainers" className="data-[state=active]:bg-red-600">
                Our Trainers
              </TabsTrigger>
            </TabsList>

            <TabsContent value="equipment">
              <div className="grid md:grid-cols-3 gap-6">
                {galleryCategories.equipment.map((item, index) => (
                  <Card
                    key={index}
                    className="bg-gray-900 border-gray-800 overflow-hidden group hover:border-red-500 transition-colors"
                  >
                    <div className="relative h-64">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="members">
              <div className="grid md:grid-cols-3 gap-6">
                {galleryCategories.members.map((item, index) => (
                  <Card
                    key={index}
                    className="bg-gray-900 border-gray-800 overflow-hidden group hover:border-red-500 transition-colors"
                  >
                    <div className="relative h-64">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="trainers">
              <div className="grid md:grid-cols-3 gap-6">
                {galleryCategories.trainers.map((item, index) => (
                  <Card
                    key={index}
                    className="bg-gray-900 border-gray-800 overflow-hidden group hover:border-red-500 transition-colors"
                  >
                    <div className="relative h-64">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Experience <span className="text-red-500">Starch Gym</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Schedule a tour and see our facility in person. Our team will show you around and help you find the perfect
            membership plan.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
            Schedule a Tour
          </Button>
        </div>
      </section>
    </div>
  )
}
