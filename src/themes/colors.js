const colors = {
  darkGrey: '#565151',
  grey: '#4E6877',
  greyHover: '#5E7887',
  silver: '#CECDCD',
  blue: '#258BB4',
  green: '#178E23',
  red: '#E30C07',
  white: '#FFFFFF',
  purple: '#443765',
  softPurple: '#8472B2',
  darkSilver: 'silver',
  black: '#3B3B3B',
  gold: '#E9BF3C',
  backgroundSecondary: '#E1EEEE',
  transparent: 'rgba(0, 0, 0, 0)',
  redTransparent: 'rgba(207, 0, 15, 0.3)',
  yellowTransparent: 'rgba(252, 204, 2, 0.3)',
}

const appColors = {
  primary: '#CBAE60',
  primaryDark: '#CBAE60',
  primaryTransparent: 'rgba(100, 88, 122, 0.2)',
  accent: colors.gold,
  link: '#A17A1F',
  secondary: '#DC9421',
  border: colors.silver,
  // background: colors.white,
  lightbox: 'rgba(255, 255, 255, 0.5)',
  success: colors.green,
  error: colors.red,
  pending: colors.softPurple,
  completed: colors.gold,
  cancel: colors.red,
  background: '#F4F2FE',
}

export default {
  ...colors,
  ...appColors,
}
