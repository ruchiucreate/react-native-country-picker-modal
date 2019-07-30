import { StyleSheet, PixelRatio } from 'react-native'
import { getHeightPercent } from './ratio'

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    marginHorizontal: 30,
    shadowOffset: {
      height: 5,
      width: 5,
  },
  shadowRadius: 5,
  shadowOpacity: 0.2,
  borderRadius: 5,
    backgroundColor: 'white',
    position: 'absolute',
    top: getHeightPercent(7),
    bottom: getHeightPercent(7),
    left: 0,
    right: 0
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: 20,
    paddingBottom: 10
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    height: 48,
    width: '70%'
  },
  inputOnly: {
    marginLeft: '15%'
  },
  touchFlag: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 19
  },
  imgStyle: {
    resizeMode: 'contain',
    width: 30,
    height: 25,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: '#eee',
    opacity: 0.8
  },
  emojiFlag: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    width: 30,
    height: 30,
    borderWidth: 1 / PixelRatio.get(),
    borderColor: 'transparent',
    backgroundColor: 'transparent'
  },
  itemCountry: {
    flexDirection: 'row',
    height: 45,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  itemCountryFlag: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '7%',
    width: '15%'
  },
  itemCountryName: {
    width: '100%',
    marginLeft: 15,
    marginRight: 20,
    justifyContent: 'center',
  },
  countryName: {
    fontSize: 14,
    color: 'black',
    marginRight: 20,
    justifyContent: 'center',
    textAlign: 'left',
    flexWrap: 'wrap',
  },
  countryCode: {
    textAlign: 'right'
  },
  scrollView: {
    flex: 1
  },
  letters: {
    marginRight: 10,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  },
  letter: {
    height: 25,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  letterText: {
    textAlign: 'center',
    fontSize: getHeightPercent(2.2)
  },
  closeButton: {
    height: 25,
    width: 35,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  closeButtonImage: {
    height: 25,
    width: 28,
    resizeMode: 'contain'
  }
})
