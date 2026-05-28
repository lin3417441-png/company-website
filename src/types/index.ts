export interface Clinic {
  id: string
  slug: string
  name: string
  address: string
  phone: string
  specialties: string[]
  hours: string
  description: string
  type: 'clinic' | 'hospital' | 'pharmacy' | 'food-therapy' | 'health-tech'
}

export interface TeamMember {
  id: number
  name: string
  role: string
  specialties: string
  bio: string
}

export interface TimelineEvent {
  year: string
  title: string
  description: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  content: string
}

export interface Course {
  id: number
  name: string
  description: string
}

export interface FeatureProject {
  id: number
  name: string
  description: string
}
