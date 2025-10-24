import React, { useState } from "react";

const ToogleDarkMode = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleMode = () => {
    setIsDark(!isDark);
    
    return(
        <div>

        </div>
    )
  };

  return <div><button>Btn</button></div>;
};

export default ToogleDarkMode;
