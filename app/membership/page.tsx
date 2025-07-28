import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Crown, Zap } from "lucide-react"

export default function MembershipPage() {
  const membershipPlans = [
    {
      name: "Basic",
      price: 29,
      period: "month",
      description: "Perfect for getting started on your fitness journey",
      features: [
        "Gym access during standard hours",
        "Basic equipment usage",
        "Locker room access",
        "Free fitness assessment",
      ],
      icon: Zap,
      popular: false,
    },
    {
      name: "Standard",
      price: 49,
      period: "month",
      description: "Our most popular plan with great value",
      features: [
        "24/7 gym access",
        "All equipment access",
        "Group fitness classes",
        "Locker room & shower access",
        "Guest passes (2 per month)",
        "Nutrition guidance",
      ],
      icon: Star,
      popular: true,
    },
    {
      name: "Premium",
      price: 99,
      period: "month",
      description: "Ultimate fitness experience with personal attention",
      features: [
        "Everything in Standard",
        "4 personal training sessions/month",
        "Personalized nutrition plan",
        "Exclusive premium classes",
        "Priority booking",
        "Recovery zone access",
        "Unlimited guest passes",
        "Body composition analysis",
      ],
      icon: Crown,
      popular: false,
    },
  ]

  const yearlyDiscounts = [
    { plan: "Basic", monthly: 29, yearly: 290, savings: 58 },
    { plan: "Standard", monthly: 49, yearly: 490, savings: 98 },
    { plan: "Premium", monthly: 99, yearly: 990, savings: 198 },
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="bg-red-600 text-white mb-4">MEMBERSHIP PLANS</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Choose Your <span className="text-red-500">Path</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Select the membership plan that fits your fitness goals and lifestyle. All plans include access to our
            world-class facility and expert support.
          </p>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {membershipPlans.map((plan, index) => {
              const Icon = plan.icon
              return (
                <Card
                  key={index}
                  className={`relative ${
                    plan.popular
                      ? "bg-gradient-to-br from-red-600 to-red-800 border-red-500"
                      : "bg-gray-900 border-gray-800"
                  } hover:border-red-500 transition-colors`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-yellow-500 text-black font-bold">MOST POPULAR</Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-8">
                    <div className="flex justify-center mb-4">
                      <Icon className={`h-12 w-12 ${plan.popular ? "text-white" : "text-red-500"}`} />
                    </div>
                    <CardTitle className="text-2xl font-bold text-white mb-2">{plan.name}</CardTitle>
                    <p className={`text-sm ${plan.popular ? "text-gray-200" : "text-gray-400"}`}>{plan.description}</p>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-white">${plan.price}</span>
                      <span className={`text-lg ${plan.popular ? "text-gray-200" : "text-gray-400"}`}>
                        /{plan.period}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className={`h-5 w-5 mr-3 ${plan.popular ? "text-white" : "text-red-500"}`} />
                          <span className={plan.popular ? "text-gray-100" : "text-gray-300"}>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-white text-red-600 hover:bg-gray-100"
                          : "bg-red-600 hover:bg-red-700 text-white"
                      }`}
                      size="lg"
                    >
                      Choose {plan.name}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-red-600 text-white mb-4">PRICING OPTIONS</Badge>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Flexible <span className="text-red-500">Payment Plans</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose between monthly or yearly payments. Save more with our annual plans!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {yearlyDiscounts.map((plan, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-white">{plan.plan} Plan</h3>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Monthly</span>
                      <span className="text-white font-semibold">${plan.monthly}/month</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Yearly</span>
                      <div className="text-right">
                        <span className="text-white font-semibold">${plan.yearly}/year</span>
                        <div className="text-green-500 text-sm">Save ${plan.savings}!</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-700">
                    <div className="text-center">
                      <span className="text-red-500 font-bold">
                        {Math.round((plan.savings / (plan.monthly * 12)) * 100)}% OFF
                      </span>
                      <span className="text-gray-400 text-sm block">with yearly plan</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-red-600 text-white mb-4">PREMIUM EXCLUSIVE</Badge>
            <h2 className="text-4xl font-bold mb-6 text-white">
              Premium <span className="text-red-500">Benefits</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-900 border-gray-800 text-center">
              <CardContent className="p-6">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Personal Training</h3>
                <p className="text-gray-400 text-sm">4 one-on-one sessions monthly with certified trainers</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-center">
              <CardContent className="p-6">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Nutrition Plans</h3>
                <p className="text-gray-400 text-sm">Customized meal plans and dietary guidance</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-center">
              <CardContent className="p-6">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Exclusive Classes</h3>
                <p className="text-gray-400 text-sm">Access to premium small-group training sessions</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-center">
              <CardContent className="p-6">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Priority Access</h3>
                <p className="text-gray-400 text-sm">First booking rights for classes and equipment</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Start Your <span className="text-red-500">Journey</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of members who have transformed their lives at Starch Gym. Your fitness journey starts today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
              Start Your Membership
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
