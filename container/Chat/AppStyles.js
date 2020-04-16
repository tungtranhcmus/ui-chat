import Colors from './colors'; //eslint-disable-line

export const normalizeMin=(x)=>{
  return x-4;
};

const AppStyles = {
  TextH0R: { 
    fontSize: normalizeMin(37),
    color: Colors.primary,
  },
  TextH0W: { 
    fontSize: normalizeMin(37),
    color: 'white',
  },
  TextH1: { 
    fontSize: normalizeMin(26),
    color: Colors.fourth,
  },
  TextH1W: { 
    fontSize: normalizeMin(26),
    color: 'white',
  },
  TextH1R: { 
    fontSize: normalizeMin(26),
    color: Colors.primary,
  },
  TextH2: {
    fontSize: normalizeMin(23),
    color: Colors.fourth,
  },
  TextH2B: {
    fontSize: normalizeMin(23),

    color: Colors.fourth,
  },
  TextH2BW: {
    fontSize: normalizeMin(23),

    color: Colors.white,
  },
  TextH2BR: {
    fontSize: normalizeMin(23),

    color: Colors.primary,
  },
  TextH2W: {
    fontSize: normalizeMin(23),
    color: 'white',
  },
  TextH2T: {
    fontSize: normalizeMin(23),
    color: Colors.third,
  },
  TextH2R: {
    fontSize: normalizeMin(23),
    color: Colors.primary,
  },
  TextH3: {
    fontSize: normalizeMin(21),
    color: Colors.fourth,
  },
  TextH3B: {
    fontSize: normalizeMin(21),

    color: Colors.fourth,
  },
  TextH3BR: {
    fontSize: normalizeMin(21),

    color: Colors.primary,
  },
  TextH3BW: {
    fontSize: normalizeMin(21),

    color: Colors.white,
  },
  TextH3R: {
    fontSize: normalizeMin(21),
    color: Colors.primary,
  },
  TextH3T: {
    fontSize: normalizeMin(21),
    color: Colors.third,
  },
  TextH3W: {
    fontSize: normalizeMin(21),
    color: 'white',
  },
  TextH4: {
    fontSize: normalizeMin(18),
    color: Colors.fourth,
  },
  TextH5: {
    fontSize: normalizeMin(16),
    color: Colors.fourth,
  },
  IconTabBar: {
    height: normalizeMin(25),
    width: normalizeMin(25),
  },
  Shadow: {
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: { height: 2.5, width: 0 },
    elevation: 1.5,
  },
};

export default AppStyles;
