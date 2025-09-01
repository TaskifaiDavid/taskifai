/**
 * YouTube utility functions for extracting video IDs and handling URLs
 */

/**
 * Extracts YouTube video ID from various URL formats
 * Supports:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 * - https://m.youtube.com/watch?v=VIDEO_ID
 * - YouTube Shorts URLs
 */
export function extractYouTubeVideoId(url: string): string | null {
  const patterns = [
    // Standard YouTube URLs
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i,
    // YouTube Shorts
    /youtube\.com\/shorts\/([^"&?\/\s]{11})/i,
    // Mobile URLs
    /m\.youtube\.com\/watch\?v=([^"&?\/\s]{11})/i
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match && match[1]) {
      return match[1]
    }
  }

  return null
}

/**
 * Validates if a string is a valid YouTube video ID
 * YouTube video IDs are exactly 11 characters long and contain only alphanumeric characters, hyphens, and underscores
 */
export function isValidYouTubeVideoId(videoId: string): boolean {
  return /^[a-zA-Z0-9_-]{11}$/.test(videoId)
}

/**
 * Creates a YouTube embed URL from a video ID
 */
export function createYouTubeEmbedUrl(videoId: string, params?: Record<string, string>): string {
  const baseUrl = `https://www.youtube.com/embed/${videoId}`
  
  if (!params || Object.keys(params).length === 0) {
    return baseUrl
  }

  const searchParams = new URLSearchParams(params)
  return `${baseUrl}?${searchParams.toString()}`
}

/**
 * Creates a YouTube thumbnail URL from a video ID
 * Quality options: default, mqdefault, hqdefault, sddefault, maxresdefault
 */
export function createYouTubeThumbnailUrl(videoId: string, quality: 'default' | 'mqdefault' | 'hqdefault' | 'sddefault' | 'maxresdefault' = 'maxresdefault'): string {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`
}

/**
 * Gets all available thumbnail URLs in quality order (highest to lowest)
 * Useful for progressive loading with fallbacks
 */
export function getYouTubeThumbnailFallbacks(videoId: string, cacheBust: boolean = false): string[] {
  const qualities: ('maxresdefault' | 'sddefault' | 'hqdefault' | 'mqdefault' | 'default')[] = [
    'maxresdefault',
    'sddefault', 
    'hqdefault',
    'mqdefault',
    'default'
  ]
  
  const timestamp = cacheBust ? `?t=${Date.now()}` : ''
  
  return qualities.map(quality => `${createYouTubeThumbnailUrl(videoId, quality)}${timestamp}`)
}

/**
 * Tests if a thumbnail URL is accessible
 * Returns a promise that resolves to true if the image loads successfully
 */
export async function testThumbnailUrl(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = url
  })
}

/**
 * Finds the first working thumbnail URL from the fallback list
 * Returns the highest quality thumbnail that actually exists
 */
export async function getWorkingThumbnailUrl(videoId: string, cacheBust: boolean = false): Promise<string> {
  const fallbackUrls = getYouTubeThumbnailFallbacks(videoId, cacheBust)
  
  for (const url of fallbackUrls) {
    const works = await testThumbnailUrl(url)
    if (works) {
      return url
    }
  }
  
  // If all fail, return the default (most likely to work)
  return fallbackUrls[fallbackUrls.length - 1]
}

/**
 * Checks if a URL is a YouTube URL
 */
export function isYouTubeUrl(url: string): boolean {
  const youtubePattern = /^https?:\/\/(?:www\.|m\.)?(?:youtube\.com|youtu\.be)/i
  return youtubePattern.test(url)
}