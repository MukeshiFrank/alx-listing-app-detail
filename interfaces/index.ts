export interface Review {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface Address {
  city: string;
  country: string;
}

export interface Host {
  name: string;
  about: string;
}

export interface PropertyProps {
  name: string;
  rating: number;
  address: Address;
  image: string;
  images: string[];
  description: string;
  category: string[];
  pricePerNight: number;
  reviews: Review[];
  host: Host;
}
