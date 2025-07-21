import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin, Wifi, Car, Coffee, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroVilla from "@/assets/hero-villa.jpg";
import apartment1 from "@/assets/apartment-1.jpg";
import beachfrontHouse from "@/assets/beachfront-house.jpg";
import mountainCabin from "@/assets/mountain-cabin.jpg";

const Home = () => {
  const featuredProperties = [
    {
      id: 1,
      name: "Modern City Apartment",
      location: "Downtown District",
      price: "$150",
      rating: 4.9,
      reviews: 127,
      image: apartment1,
      amenities: ["Wifi", "Kitchen", "Parking"],
    },
    {
      id: 2,
      name: "Beachfront Villa",
      location: "Ocean View",
      price: "$350",
      rating: 5.0,
      reviews: 89,
      image: beachfrontHouse,
      amenities: ["Pool", "Beach Access", "Wifi"],
    },
    {
      id: 3,
      name: "Mountain Cabin Retreat",
      location: "Forest Hills",
      price: "$200",
      rating: 4.8,
      reviews: 156,
      image: mountainCabin,
      amenities: ["Fireplace", "Mountain View", "Hiking"],
    },
  ];

  const services = [
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Stay connected with reliable internet in all properties",
    },
    {
      icon: Car,
      title: "Free Parking",
      description: "Complimentary parking spaces at most locations",
    },
    {
      icon: Coffee,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your needs",
    },
    {
      icon: Users,
      title: "Family Friendly",
      description: "Perfect accommodations for guests of all ages",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroVilla})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Luxury Daily Rentals
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Discover exceptional properties for unforgettable stays
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/listings">Explore Properties</Link>
            </Button>
            <Button variant="premium" size="lg" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Properties
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hand-picked luxury accommodations for your perfect getaway
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <Card key={property.id} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="font-semibold text-primary">{property.price}/night</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{property.location}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Star className="w-4 h-4 text-secondary fill-current mr-1" />
                    <span className="font-medium">{property.rating}</span>
                    <span className="text-muted-foreground ml-1">({property.reviews} reviews)</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="bg-muted px-2 py-1 rounded-md text-sm text-muted-foreground"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full" asChild>
                    <Link to="/listings">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Premium Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Everything you need for a comfortable and memorable stay
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Book your perfect getaway today and create unforgettable memories
          </p>
          <Button variant="premium" size="lg" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;