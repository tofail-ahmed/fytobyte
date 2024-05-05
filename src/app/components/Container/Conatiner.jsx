import React from 'react';

const Conatiner = ({children,className}) => {
      return (
            <div className={`lg:w-[1000px] w-[650px] mx-auto ${className}`}>
              {children}    
            </div>
      );
};

export default Conatiner;