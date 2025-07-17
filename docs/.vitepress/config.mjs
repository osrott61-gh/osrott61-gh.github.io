import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "osrott61.me",
  description: "About me and my projects",
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' }
    ],
    sidebar: [
      {
        text: 'Sections',
        items: [
          { text: 'Home', link: '/' },
          { text: 'About', link: '/about/' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/osrott61-gh' }
    ]
  }
})