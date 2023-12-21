// https://github.com/pd4d10/vite-plugin-svgr#readme
// https://dev.to/mondal10/dynamic-svg-component-in-vite-react-ts-3pih

import { ISvgProps } from './types';
import { useDynamicSvgImport } from './useDynamicSvgImport';

/**
 * Issues:
 * 1. 현재 svg 값에 <image></image> 가 있으면 제대로 파싱하지 못하고, beamworks.svg를 자꾸 가져오는것같음.
 */
export default function Svg({ iconName = 'default', svgProps }: ISvgProps) {
  const { SvgIcon } = useDynamicSvgImport(iconName);
  return <>{SvgIcon && <SvgIcon {...svgProps} />}</>;
}
