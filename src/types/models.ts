export interface Live {
  id: string
  title: string
  description?: string
  posterUrl?: string
  posterUrls?: Array<Poster>
  place?: string
  teams?: string[]
  eventLink?: string
  date: string
  slug: string
  priceInfo?: string
  ticketLink?: string
}

export interface Poster {
  src: string
  alt: string
  width?: number
  height?: number
}

export interface Album {
  id: string
  title: string
  imageUrl: string
  releaseYear: string
}

export interface QueryNode<T> {
  node: T
}

export interface StreamingLink {
  name: string
  link: string
}
