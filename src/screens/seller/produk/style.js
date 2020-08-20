import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../../themes'

const HEADER_HEIGHT = 60
const PRODUCT_ITEM_OFFSET = Metrics.tinyMargin
const PRODUCT_ITEM_MARGIN = PRODUCT_ITEM_OFFSET * 2
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
  },
   content: {
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    backgroundColor: '#F4F2FE',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
   textFooter: {
        fontFamily: 'LatoRegular',
        color: '#A17A1F',
        fontSize: 34,
        textAlign: 'center',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderWidth: 2,
        height: 75,
        borderRadius: 16,
        padding: 9,
        alignItems: 'center',
        borderColor: '#CBAE60',
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375a',
    },fab: {
    position: 'absolute',
    margin: 16,
    borderRadius: 18,
    padding:4,
    elevation: 2,
          backgroundColor:'#A17A1F',
          textTransform: 'capitalize',
    right: 0,
    bottom: 0,
  },
   listContainer: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingBottom: 80,
  },
  item: {
    position: 'relative',
    margin: PRODUCT_ITEM_OFFSET,
    borderRadius: Metrics.smallRadius,
    width: ((Metrics.screenWidth - PRODUCT_ITEM_MARGIN) / 2) - PRODUCT_ITEM_MARGIN,
    flexDirection: 'column',
    backgroundColor: Colors.white,
  },
  imageStyle: {
    height: Metrics.halfScreenWidth,
    resizeMode: 'cover',
  },
})