// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { 
  faUserCircle, 
  faEnvelope, 
  faEnvelopeOpen, 
  faEnvelopeOpenText, 
  faPaperPlane, 
  faPenNib, 
  faHourglassHalf,
  faTheaterMasks,
  faUniversity,
  faSnowboarding, 
  faPaw, 
  faPalette,
  faMountain,
  faMusic,
  faMotorcycle,
  faLaptopCode,
  faGamepad,
  faFutbol,
  faDumbbell,
  faDog, 
  faChess,
  faCat,
  faCaravan,
  faCameraRetro,
  faBowlingBall,
  faAnchor,
  faBiking,
  faPlaneDeparture,
  faSpinner
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faUserCircle, 
  faEnvelope, 
  faEnvelopeOpen, 
  faEnvelopeOpenText, 
  faPaperPlane, 
  faPenNib, 
  faHourglassHalf,
  faTheaterMasks,
  faUniversity,
  faSnowboarding, 
  faPaw, 
  faPalette,
  faMountain,
  faMusic,
  faMotorcycle,
  faLaptopCode,
  faGamepad,
  faFutbol,
  faDumbbell,
  faDog, 
  faChess,
  faCat,
  faCaravan,
  faCameraRetro,
  faBowlingBall,
  faAnchor,
  faBiking,
  faPlaneDeparture,
  faGithub,
  faLinkedin,
  faSpinner
)

const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new EnzymeAdapter() });
