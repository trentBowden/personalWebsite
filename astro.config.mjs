import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown'

import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://trentbowden.dev',
	integrations: [mdx(), sitemap(), partytown({
		config: {
		  forward: ["dataLayer.push"],
		},
  })],
});
