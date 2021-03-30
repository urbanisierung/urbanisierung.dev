export interface DevToArticle {
  id: number
  title: string
  description: string
  url: string
  cover_image: string
  published_at: string
  user: {
    name: string
    username: string
    twitter_username: string
    github_username: string
    website_url: string
    profile_image: string
    profile_image_90: string
  }
}
