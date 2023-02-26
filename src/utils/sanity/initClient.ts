import { createClient, SanityClient } from '@sanity/client'

export const getClient = (preview = false): SanityClient =>
  createClient({
    projectId: 'byi6f4gi',
    dataset: 'production',
    useCdn: !preview,
    ...(preview && { token: process.env.SANITY_API_SECRET }),
    apiVersion: 'v1',
  })

export const overlayDrafts = (docs: any[]): any[] => {
  const documents = docs || []
  const overlayed = documents.reduce((map, doc) => {
    if (!doc._id) {
      throw new Error('Ensure that `_id` is included in query projection')
    }

    const isDraft = doc._id.startsWith('drafts.')
    const id = isDraft ? doc._id.slice(7) : doc._id
    return isDraft || !map.has(id) ? map.set(id, doc) : map
  }, new Map())

  return Array.from(overlayed.values())
}

export default getClient()
