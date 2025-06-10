export interface HostingPlan {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  features: string[];
  popular?: boolean;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Client {
  id: string;
  name: string;
  logo: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  isOpen?: boolean;
}