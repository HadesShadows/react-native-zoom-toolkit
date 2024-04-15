import type React from 'react';
import { SwipeDirection } from '../../commons/types';
import type {
  CommonResumableProps,
  CommonZoomProps,
  PanGestureCallbacks,
  PinchGestureCallbacks,
  SizeVector,
  TapGestureCallbacks,
} from '../../commons/types';

export type ResumableZoomState = {
  width: number;
  height: number;
  translateX: number;
  translateY: number;
  scale: number;
};

export type ResumableZoomAssignableState = Omit<
  ResumableZoomState,
  'width' | 'height'
>;

export type ResumableZoomType = {
  reset: (animate?: boolean) => void;
  requestState: () => ResumableZoomState;
  assignState: (state: ResumableZoomAssignableState, animate?: boolean) => void;
};

export type ResumableZoomProps = React.PropsWithChildren<{
  decay?: boolean;
  tapsEnabled?: boolean;
  panEnabled?: boolean;
  pinchEnabled?: boolean;
  maxScale?: SizeVector<number> | number;
  onSwipe?: (direction: SwipeDirection) => void;
  onGestureActive?: (e: ResumableZoomState) => void;
  onHorizontalBoundsExceeded?: (exceededBy: number) => void;
}> &
  PanGestureCallbacks &
  PinchGestureCallbacks &
  Omit<TapGestureCallbacks, 'onDoubleTap'> &
  Omit<CommonResumableProps, 'maxScale'> &
  Omit<CommonZoomProps, 'timingConfig'>;
