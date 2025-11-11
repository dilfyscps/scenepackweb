// .vitepress/config.js
export default {
  head: [
    // Favicon for light mode
    ['link', { 
      rel: 'icon', 
      href: '/public/darkfavicon.ico/', // Or .ico
      media: '(prefers-color-scheme: light)' 
    }],
    // Favicon for dark mode
    ['link', { 
      rel: 'icon', 
      href: '/public/lightfavicon.ico/', // Or .ico
      media: '(prefers-color-scheme: dark)' 
    }],
    // Optional: A fallback favicon for browsers that don't support media queries or as a default
    ['link', { 
      rel: 'icon', 
      href: '/public/favicon.ico/' // Or .ico
    }]
  ]
}
