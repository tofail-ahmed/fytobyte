import React from 'react';

const Container = ({ children, className }) => {
      return (
        <div className={`2xl:max-w-[1536px] xl:max-w-[1280px] lg:max-w-[1024px] md:max-w-[768px] max-w-[640px] mx-auto ${className}`}>
          {children}
        </div>
      );
    };
    

export default Container;

// **Breakpoints**
// ===============

// * `xs`: 0px
// * `sm`: 640px
// * `md`: 768px
// * `lg`: 1024px
// * `xl`: 1280px
// * `2xl`: 1536px