import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Your security and peace of mind are our top priorities. All properties are verified and hosts are carefully screened.",
    },
    {
      icon: Heart,
      title: "Personalized Service",
      description: "We believe every guest deserves exceptional service. Our team is dedicated to making your stay perfect.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Only the finest properties make it to our platform. We maintain the highest standards for comfort and luxury.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building lasting relationships with both guests and hosts is at the heart of everything we do.",
    },
  ];

  const stats = [
    { number: "5000+", label: "Happy Guests" },
    { number: "500+", label: "Premium Properties" },
    { number: "50+", label: "Cities Worldwide" },
    { number: "4.9", label: "Average Rating" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              About LuxeStay
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're passionate about creating exceptional travel experiences through 
              carefully curated luxury accommodations and personalized service.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/listings">Explore Our Properties</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2020, LuxeStay began with a simple vision: to redefine 
                  luxury travel by offering exceptional short-term accommodations 
                  that feel like home, yet exceed hotel standards.
                </p>
                <p>
                  What started as a small collection of handpicked properties has 
                  grown into a curated platform featuring premium accommodations 
                  across multiple cities, each selected for its unique character 
                  and exceptional quality.
                </p>
                <p>
                  Today, we're proud to serve thousands of travelers worldwide, 
                  helping them create unforgettable memories in spaces that 
                  inspire and delight.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-primary rounded-lg p-8 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-primary-foreground/90">
                  To connect travelers with extraordinary properties and 
                  experiences, creating moments that matter and memories 
                  that last a lifetime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              By the Numbers
            </h2>
            <p className="text-muted-foreground text-lg">
              Our impact in the luxury travel industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Join Our Community
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Experience the difference that personalized service and exceptional 
            properties can make in your travels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="premium" size="lg" asChild>
              <Link to="/listings">Browse Properties</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;