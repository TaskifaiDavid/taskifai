"use client"

import { useState, useRef, useEffect } from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { extractYouTubeVideoId, isYouTubeUrl, getWorkingThumbnailUrl } from '@/utils/youtube'

interface VideoEmbedProps {
  src: string
  title?: string
  aspectRatio?: string
  className?: string
  thumbnailSrc?: string
  showPlayButton?: boolean
  autoStart?: boolean
  cacheBust?: boolean
}

export default function VideoEmbed({
  src,
  title = "Video Demo",
  aspectRatio = "16/9",
  className = "",
  thumbnailSrc,
  showPlayButton = true,
  autoStart = false,
  cacheBust = false
}: VideoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [shouldAutoStart, setShouldAutoStart] = useState(autoStart)
  const [workingThumbnail, setWorkingThumbnail] = useState<string | null>(null)
  const [thumbnailLoading, setThumbnailLoading] = useState(false)
  const [videoActivated, setVideoActivated] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Check if this is a YouTube URL
  const isYouTube = isYouTubeUrl(src)
  const youtubeVideoId = isYouTube ? extractYouTubeVideoId(src) : null

  // Construct video URL with autoplay if needed
  const getVideoUrl = () => {
    if (shouldAutoStart) {
      const separator = src.includes('?') ? '&' : '?'
      return `${src}${separator}autoplay=1`
    }
    return src
  }

  // Load working thumbnail for YouTube videos
  useEffect(() => {
    if (isYouTube && youtubeVideoId && !thumbnailSrc) {
      setThumbnailLoading(true)
      getWorkingThumbnailUrl(youtubeVideoId, cacheBust)
        .then((url) => {
          setWorkingThumbnail(url)
          setThumbnailLoading(false)
        })
        .catch(() => {
          setThumbnailLoading(false)
          setHasError(true)
        })
    }
  }, [isYouTube, youtubeVideoId, thumbnailSrc, cacheBust])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Watch for LiteYouTube activation by observing DOM changes
  useEffect(() => {
    if (!containerRef.current || !isYouTube) return

    const observer = new MutationObserver(() => {
      const activated = containerRef.current?.querySelector('.lyt-activated') !== null
      const hasIframe = containerRef.current?.querySelector('iframe') !== null
      
      if (activated || hasIframe) {
        setVideoActivated(true)
      }
    })

    observer.observe(containerRef.current, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class']
    })

    return () => observer.disconnect()
  }, [isYouTube])

  // Add global event listener for external video triggers
  useEffect(() => {
    const handleExternalPlay = (event: Event) => {
      const target = event.target as Element
      if (target?.closest('[data-video-trigger]') === containerRef.current?.closest('[data-video-trigger]')) {
        // Check if this is the "Watch demo" button for auto-start
        if (target?.closest('[data-video-cta]')) {
          setShouldAutoStart(true)
          handlePlay()
        } else {
          handlePlay()
        }
      }
    }

    document.addEventListener('click', handleExternalPlay)
    return () => document.removeEventListener('click', handleExternalPlay)
  }, [])

  const handlePlay = () => {
    setIsPlaying(true)
    setIsLoaded(true)
  }

  const handleIframeLoad = () => {
    setIsLoaded(true)
    setHasError(false)
  }

  const handleIframeError = () => {
    setHasError(true)
    setIsLoaded(false)
  }

  // Render YouTube video using LiteYouTubeEmbed
  if (isYouTube && youtubeVideoId) {
    // Use provided thumbnail, working thumbnail, or let LiteYouTube handle it
    const finalThumbnail = thumbnailSrc || workingThumbnail
    
    return (
      <div
        ref={containerRef}
        className={`relative w-full ${className}`}
        style={{ aspectRatio }}
      >
        {/* Background card styling */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-[2px] rounded-xl">
          <div className="w-full h-full bg-white rounded-xl overflow-hidden relative">
            {/* Loading state */}
            {thumbnailLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 z-10">
                <div className="flex flex-col items-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mb-4"></div>
                  <p className="text-sm text-gray-600 font-medium">Loading video...</p>
                </div>
              </div>
            )}

            {/* Error state for thumbnail loading */}
            {hasError && !thumbnailLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 z-10">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-red-700 mb-2">Unable to load video thumbnail</p>
                  <button
                    onClick={() => {
                      setHasError(false)
                      if (youtubeVideoId) {
                        setThumbnailLoading(true)
                        getWorkingThumbnailUrl(youtubeVideoId, true) // Force cache bust on retry
                          .then((url) => {
                            setWorkingThumbnail(url)
                            setThumbnailLoading(false)
                          })
                          .catch(() => {
                            setThumbnailLoading(false)
                            setHasError(true)
                          })
                      }
                    }}
                    className="text-sm text-red-600 hover:text-red-700 underline font-medium"
                  >
                    Try again
                  </button>
                  <a
                    href={`https://youtube.com/watch?v=${youtubeVideoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-gray-700 underline mt-2"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>
            )}
            
            {/* Enhanced LiteYouTubeEmbed with custom styling */}
            <div className="youtube-embed-container relative w-full h-full">
              <LiteYouTubeEmbed
                id={youtubeVideoId}
                title={title}
                poster="hqdefault" // Use more reliable thumbnail size
                noCookie={true}
                playlist={false}
                params=""
                adNetwork={false}
                aspectHeight={aspectRatio?.split('/')[1] ? parseInt(aspectRatio.split('/')[1]) : 9}
                aspectWidth={aspectRatio?.split('/')[0] ? parseInt(aspectRatio.split('/')[0]) : 16}
                iframeClass="absolute inset-0 w-full h-full rounded-xl"
                playerClass="lty-playbtn enhanced-play-btn"
                wrapperClass="w-full h-full rounded-xl overflow-hidden"
                activatedClass="lyt-activated"
                thumbnail={finalThumbnail || undefined}
              />
              
              {/* Custom play button overlay for better visibility */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
{!videoActivated && (
                  <button
                    onClick={() => {
                      // Trigger the LiteYouTube play functionality
                      const playBtn = containerRef.current?.querySelector('.lty-playbtn') as HTMLElement
                      if (playBtn) {
                        setVideoActivated(true) // Hide custom play button immediately
                        playBtn.click()
                      }
                    }}
                    className="youtube-play-button w-20 h-20 bg-button-gradient rounded-full flex items-center justify-center shadow-2xl opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105 pointer-events-auto"
                    aria-label={`Play ${title}`}
                  >
                    <svg 
                      className="w-8 h-8 text-white ml-1" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Render regular video embed (Loom, etc.)
  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`}
      style={{ aspectRatio }}
    >
      {/* Background card styling */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-[2px] rounded-xl">
        <div className="w-full h-full bg-white rounded-xl overflow-hidden relative">
          
          {/* Thumbnail/Preview State */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
              {thumbnailSrc ? (
                <img
                  src={thumbnailSrc}
                  alt={`${title} thumbnail`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-gray-600">
                  <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                    <svg 
                      className="w-8 h-8 text-white ml-1" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Product Demo</p>
                </div>
              )}
              
              {/* Play Button Overlay */}
              {showPlayButton && (
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
                  aria-label={`Play ${title}`}
                >
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                    <svg 
                      className="w-8 h-8 text-purple-600 ml-1" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </button>
              )}
            </div>
          )}

          {/* Loading State */}
          {isPlaying && !isLoaded && !hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
          )}

          {/* Error State */}
          {hasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-600">
              <div className="w-16 h-16 mb-4 rounded-full bg-red-100 flex items-center justify-center">
                <svg 
                  className="w-8 h-8 text-red-600" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <p className="text-sm font-medium mb-2">Unable to load video</p>
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 text-sm underline"
              >
                Watch on original platform
              </a>
            </div>
          )}

          {/* Video Iframe */}
          {isVisible && isPlaying && (
            <iframe
              src={getVideoUrl()}
              title={title}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={handleIframeLoad}
              onError={handleIframeError}
            />
          )}
        </div>
      </div>
    </div>
  )
}