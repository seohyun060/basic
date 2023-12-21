import { isBrowser } from 'react-device-detect';
import PcGlobalHeader from './index.pc';

/**
 * 공통 HEADER 컴포넌트
 * @description PC에서만 노출
 */
export default function GlobalHeader() {
  return isBrowser ? <PcGlobalHeader /> : null;
}
