import { getCollection } from 'astro:content'
import { getCategoryUrl, getPostUrlBySlug } from '@utils/url-utils'
import { getSortedPosts } from './content-utils'

export type PostRecord = {
  no: string
  slug: string
  url: string
  title: string
  description: string
  filed: string
  category: string
  categoryUrl: string
  tags: string[]
}

const pad = (n: number) => String(n).padStart(3, '0')
export const isoDate = (d: Date) => d.toISOString().slice(0, 10)

// Posts newest first, each numbered by its place in publishing order (oldest = No. 001).
export async function getRecords(): Promise<PostRecord[]> {
  const posts = await getSortedPosts()
  return posts.map((post, i) => ({
    no: pad(posts.length - i),
    slug: post.slug,
    url: getPostUrlBySlug(post.slug),
    title: post.data.title,
    description: post.data.description,
    filed: isoDate(new Date(post.data.published)),
    category: post.data.category ?? '',
    categoryUrl: post.data.category ? getCategoryUrl(post.data.category) : '',
    tags: post.data.tags,
  }))
}

export async function getMicros() {
  const micros = await getCollection('microposts')
  return micros.sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
}
