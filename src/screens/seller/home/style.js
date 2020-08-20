import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../../themes'

const HEADER_HEIGHT = 60

export default StyleSheet.create({
  linearGradient: {
    // paddingLeft: Metrics.mediumMargin,
    // paddingRight: Metrics.mediumMargin,
    borderRadius: Metrics.smallRadius,
    flex: 1,
    position: 'relative',
    paddingTop: 12,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: Metrics.fontInput,
    margin: Metrics.smallMargin,
    color: Colors.white,
    backgroundColor: 'transparent',
  },
  headContainer: {
    backgroundColor: Colors.primary,
    height: HEADER_HEIGHT,
    // zIndex: 1,
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
    top: 0,
    right: 0,
    left: 0,
    overflow: 'hidden',
    elevation: 1,
  },
   headHome: {
    backgroundColor: Colors.primary,
    height: 160,
    zIndex: -1,
    paddingVertical: 30, 
    width: '100%', 
    alignItems: 'center',
    flex: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 1,
  },
  searchInputButton: {
    backgroundColor: Colors.white,
    height: 37,
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 8,
    // width: Metrics.screenWidth * 0.8,
    borderRadius: Metrics.mediumRadius,
  },
  placeholder: {
    fontFamily: 'LatoRegular',
    color: Colors.silver,
    marginLeft: Metrics.smallMargin,
  },
  scrollViewContent: {
    paddingTop: HEADER_HEIGHT,
    paddingHorizontal: Metrics.smallMargin,
  },
  groupItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: Metrics.smallMargin,
  }
})