import {IActionButtons} from './models';
import {useEffect, useRef} from 'react';

const getLayoutWidth = (arr: IActionButtons[]): number => {
  let widthSum = 0;
  arr.forEach((item) => {
    // @ts-ignore
    widthSum += +item.containerStyle?.width;
  });
  return widthSum;
};

const useCombinedRefs = (...refs: any[]) => {
  const targetRef = useRef();
  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
};

export {getLayoutWidth, useCombinedRefs};
