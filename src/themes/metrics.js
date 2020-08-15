import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

// Used via Metrics.baseMargin
const metrics = {
  smallMargin: 8,
  mediumMargin: 16,
  bigMargin: 24,
  extraBigMargin: 32,

  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  halfScreenHeight: width < height ? (height / 2) : width / 2,
  halfScreenWidth: width < height ? width / 2 : height / 2,

  orderConfirmScreenHeight: width < height ? (height / 4) : width / 2,
  orderDetailMapScreenHeight: width < height ? (height / 3) + 10 : width / 2,

  navBarHeight: 56,
  actionBarHeight: 32,

  smallRadius: 4,
  mediumRadius: 12,
  bigRadius: 20,

  fontXSmall: 10,
  fontSmall: 12,
  fontNote: 14,
  fontNormal: 16,
  fontInput: 18,
  fontHeader: 20,
  fontBig: 24,

  buttonHeight: 48,
  inputHeight: 48,

  icons: {
    xTiny: 8,
    tiny: 14,
    small: 20,
    xMedium: 24,
    medium: 32,
    large: 48,
    xl: 56,
    drawer: 24,
  },

  images: {
    small: 40,
    medium: 60,
    large: 80,
    listing: 112,
    logo: 150,
  },
}

export default metrics
