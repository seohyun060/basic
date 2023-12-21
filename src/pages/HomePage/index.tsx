import { isBrowser } from 'react-device-detect';
import MobileHomePage from './index.mobile';
import PcHomePage from './index.pc';

/**
 * 메인 페이지
 */
export default function HomePage() {
  return isBrowser ? <PcHomePage /> : <MobileHomePage />;
}
