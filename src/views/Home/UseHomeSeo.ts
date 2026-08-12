
import { useHead, useSeoMeta } from '@unhead/vue'

export function useHomeSeo() {
  const siteName = 'Cakrasoft'
  const url = ''
  const title = 'Cakrasoft Add-ons - Solusi Percepat Pertumbuhan Hotel Anda'
  useSeoMeta({
    title,
    ogTitle: title,
    ogUrl: url,
    ogType: 'website',
    ogSiteName: siteName,
    ogLocale: 'id_ID',
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    robots: 'index, follow',
    author: siteName,
  })

  useHead({
    htmlAttrs: { lang: 'id' },
    link: [
      { rel: 'canonical', href: url },
      { rel: 'icon', type: 'images/', href: '/favicon.png' },
    ],
    meta: [
      {
        name: 'keywords',
        content:
          'add-on hotel management, channel manager hotel, booking engine hotel, loyalty program hotel, cakrasoft cloud hotel, sistem manajemen hotel Indonesia',
      },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'http://test',
          '@type': 'SoftwareApplication',
          name: 'Cakrasoft Add-ons',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web',
          // description,
          url,
          publisher: {
            '@type': 'Organization',
            name: 'PT Cakra Media Data',
          },
          offers: {
            '@type': 'Offer',
            availability: 'http://test',
          },
        }),
      },
    ],
  })
}