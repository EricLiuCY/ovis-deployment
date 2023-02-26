export const addFilenameToSrc = (src: string, image: any): string => {
  const originalFilename = image?.asset?.originalFilename
  if (!originalFilename) return src
  const [baseUrl, queryParams = ''] = src.split('?')
  return `${baseUrl}/${encodeURIComponent(originalFilename.trim())}?${queryParams}`
}

export const withAssetFileName = ({ src, width, quality }: any): string => {
  return `${src}&w=${width}`
}
