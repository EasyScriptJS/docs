import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
 useNextSeoProps() {
    return {
      title: "Easy Script",
      titleTemplate: "Easy Script",
    };
  },
 head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Easy Script" />
      <meta
        property="og:image"
        content="https://images.easyscript.dev/banner.png"
      />
      <meta
        property="og:description"
        content="A npm package which makes coding in JavaScript easy!"
      />
    </>
  ),
  // logo: (<><img src="https://images.easyscript.dev/default.png" height="64px" /></>),
  project: {
    link: 'https://github.com/EasyScriptJS/EasyScript',
  },
  docsRepositoryBase: 'https://github.com/EasyScriptJS/docs/blob/main',
  footer: {
    text: '© 2023 Easy Script - All Rights Reserved.',
  },
  banner: {
    key: 'v2',
    text: '🎉 EasyScript v2 has been released! Read more →'
  },
}

export default config
