module.exports = {
  publicPath: '',

  pwa: {
    name: 'Free simple QR parser',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    manifestOptions: {
      short_name: 'QR parser',
      display: 'fullscreen',
      background_color: '#ffffff',
      lang: 'en',
      icons: [
        {
          src: 'icon.png',
          sizes: '192x192',
          type: 'image/png',
        },
      ],
    },
  },
};
