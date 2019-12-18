// @flow strict

import React, { useState, useRef, useEffect } from 'react';
import cx from 'classnames';

const css = {
  placeholder: 'mpt-image-placeholder',
  fullHeight: 'mpt-image-placeholder--full-height',
};

type PropsType = $ReadOnly<{
  fullHeight?: boolean,
}>;

export function ImagePlaceholder(props: PropsType) {
  const { fullHeight } = props;

  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);

  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper) {
      return;
    }

    const rect = wrapper.getBoundingClientRect();

    setCanvasSize({ width: rect.width, height: rect.height });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;

    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.moveTo(0, 0);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.moveTo(0, canvas.height);
    ctx.lineTo(canvas.width, 0);
    ctx.stroke();
  }, [canvasSize]);

  const classes = cx(css.placeholder, {
    [css.fullHeight]: fullHeight,
  });

  return (
    <div className={classes} ref={wrapperRef}>
      <canvas style={{ width: '100%', height: '100%' }} ref={canvasRef} />
    </div>
  );
}
