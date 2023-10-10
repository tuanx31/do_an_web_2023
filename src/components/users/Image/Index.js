import React from 'react'
import { forwardRef } from 'react';
const Image = forwardRef(({ src, alt, ...props }, ref) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img ref={ref} src={src} alt={alt} {...props} />;

})

export default Image