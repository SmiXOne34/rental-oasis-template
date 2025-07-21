import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, MapPin, Wifi, Car, Coffee, Users, Filter, Search } from "lucide-react";
import apartment1 from "@/assets/apartment-1.jpg";
import beachfrontHouse from "@/assets/beachfront-house.jpg";
import mountainCabin from "@/assets/mountain-cabin.jpg";
import heroVilla from "@/assets/hero-villa.jpg";

const Listings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState("all");

  const properties = [
    {
      id: 1,
      name: "Modern City Apartment",
      location: "Downtown District",
      price: 150,
      originalPrice: 180,
      rating: 4.9,
      reviews: 127,
      image: apartment1,
      amenities: ["Wifi", "Kitchen", "Parking", "Air Conditioning"],
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 2,
      guests: 4,
      featured: true,
    },
    {
      id: 2,
      name: "Beachfront Villa",
      location: "Ocean View",
      price: 350,
      originalPrice: 400,
      rating: 5.0,
      reviews: 89,
      image: beachfrontHouse,
      amenities: ["Pool", "Beach Access", "Wifi", "Outdoor Kitchen"],
      type: "Villa",
      bedrooms: 4,
      bathrooms: 3,
      guests: 8,
      featured: true,
    },
    {
      id: 3,
      name: "Mountain Cabin Retreat",
      location: "Forest Hills",
      price: 200,
      originalPrice: 250,
      rating: 4.8,
      reviews: 156,
      image: mountainCabin,
      amenities: ["Fireplace", "Mountain View", "Hiking", "Hot Tub"],
      type: "Cabin",
      bedrooms: 3,
      bathrooms: 2,
      guests: 6,
      featured: false,
    },
    {
      id: 4,
      name: "Luxury Penthouse Suite",
      location: "City Center",
      price: 450,
      originalPrice: 500,
      rating: 4.9,
      reviews: 203,
      image: heroVilla,
      amenities: ["City View", "Balcony", "Concierge", "Gym Access"],
      type: "Penthouse",
      bedrooms: 3,
      bathrooms: 3,
      guests: 6,
      featured: true,
    },
    {
      id: 5,
      name: "Cozy Studio Loft",
      location: "Arts District",
      price: 120,
      originalPrice: 150,
      rating: 4.7,
      reviews: 89,
      image: apartment1,
      amenities: ["Wifi", "Kitchen", "Workspace", "Roof Access"],
      type: "Studio",
      bedrooms: 1,
      bathrooms: 1,
      guests: 2,
      featured: false,
    },
    {
      id: 6,
      name: "Seaside Cottage",
      location: "Coastal Village",
      price: 275,
      originalPrice: 320,
      rating: 4.8,
      reviews: 112,
      image: beachfrontHouse,
      amenities: ["Ocean View", "Garden", "BBQ Area", "Beach Access"],
      type: "Cottage",
      bedrooms: 2,
      bathrooms: 2,
      guests: 4,
      featured: false,
    },
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPrice = priceRange === "all" ||
                        (priceRange === "low" && property.price < 200) ||
                        (priceRange === "mid" && property.price >= 200 && property.price < 350) ||
                        (priceRange === "high" && property.price >= 350);
    
    return matchesSearch && matchesPrice;
  });

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "featured":
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Luxury Properties
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover exceptional accommodations for your perfect stay
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-lg p-6 mb-8 shadow-card">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search properties or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>

            {/* Price Filter */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Price range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="low">Under $200</SelectItem>
                <SelectItem value="mid">$200 - $350</SelectItem>
                <SelectItem value="high">$350+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {sortedProperties.length} properties found
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold text-primary">${property.price}</span>
                    {property.originalPrice > property.price && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${property.originalPrice}
                      </span>
                    )}
                    <span className="text-sm text-muted-foreground">/night</span>
                  </div>
                </div>
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-secondary px-2 py-1 rounded-md">
                    <span className="text-sm font-medium text-secondary-foreground">Featured</span>
                  </div>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold">{property.name}</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-secondary fill-current mr-1" />
                    <span className="font-medium">{property.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{property.location}</span>
                </div>

                <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
                  <span>{property.bedrooms} bed</span>
                  <span>{property.bathrooms} bath</span>
                  <span>{property.guests} guests</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {property.amenities.slice(0, 3).map((amenity) => (
                    <span
                      key={amenity}
                      className="bg-muted px-2 py-1 rounded-md text-sm text-muted-foreground"
                    >
                      {amenity}
                    </span>
                  ))}
                  {property.amenities.length > 3 && (
                    <span className="bg-muted px-2 py-1 rounded-md text-sm text-muted-foreground">
                      +{property.amenities.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    ({property.reviews} reviews)
                  </div>
                  <Button size="sm">Book Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Properties
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Listings;