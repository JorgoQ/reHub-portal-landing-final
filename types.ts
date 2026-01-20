
export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Law {
  id: string;
  name: string;
  description: string;
  deadline: string;
}

export interface Persona {
  role: string;
  quote: string;
  benefits: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}
