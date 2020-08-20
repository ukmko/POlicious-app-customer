import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../themes'

export default StyleSheet.create({
  mainContainer: {
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.36,
shadowRadius: 6.68,

elevation: 11,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.white,
    height: 64,
  },

  tabContainer: {
    flex: 1,
    paddingVertical: Metrics.smallMargin,
    alignItems: 'center',
  },

  tabText: {
    fontSize: Metrics.fontXSmall,
    fontWeight: '300',
  },
  iconShadow: {
    textShadowColor: "#A17A1F",
    textShadowOffset:{width:0, height:3},
    textShadowRadius: 12.95,
  }
})
