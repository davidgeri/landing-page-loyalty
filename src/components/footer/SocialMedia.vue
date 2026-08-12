<script setup lang="ts">

    interface Sosial {
        name: string
        href: string
    }

    interface Props {
        aria?:string
        sosial : Sosial[]
    }

    const props = defineProps<Props>()
</script>

<template>
    <nav :aria-label="props.aria" class="flex mt-2 gap-2">
                    <a v-for="social in props.sosial" :key="social.name" :href="social.href" target="_blank"
                        rel="noopener noreferrer" :aria-label="social.name"
                        class="flex py-1 border border-[#0F172A] gap-2 rounded-md items-center group hover:border-white hover:duration-100 hover:px-3">
                        <svg v-if="social.name === 'Instagram'" xmlns="http://www.w3.org/2000/svg" width="25"
                            height="25" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="currentColor"
                                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" />
                        </svg>
                        <svg v-else-if="social.name === 'X'" xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                            viewBox="0 0 14 14">
                            <path d="M0 0h14v14H0z" fill="none" />
                            <g fill="none">
                                <g clip-path="url(#SVGScRvgbTy)">
                                    <path fill="currentColor"
                                        d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z" />
                                </g>
                                <defs>
                                    <clipPath id="SVGScRvgbTy">
                                        <path fill="#fff" d="M0 0h14v14H0z" />
                                    </clipPath>
                                </defs>
                            </g>
                        </svg>
                        <svg v-else-if="social.name === 'Linkedin'" xmlns="http://www.w3.org/2000/svg" width="25"
                            height="25" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="currentColor"
                                d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                        </svg>



                        <svg v-else-if="social.name === 'Youtube'" xmlns="http://www.w3.org/2000/svg" width="25"
                            height="25" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="currentColor"
                                d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73" />
                        </svg>


                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"
                            aria-hidden="true">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path fill="currentColor"
                                d="M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4a20 20 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2" />
                        </svg>

                        <span class="hidden group-hover:block duration-150">{{ social.name }}</span>
                    </a>
                </nav>
</template>