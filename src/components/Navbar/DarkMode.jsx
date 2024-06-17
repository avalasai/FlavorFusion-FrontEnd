// import React from 'react';
// import darkimg from "../../assets/Website/dark-mode-button.png";
// import lightimg from "../../assets/Website/light-mode-button.png";

// const DarkMode = () => {
//   const [theme,setTheme] = React.useState(
//     localStorage.getItem("theme") ?
//     localStorage.getItem("theme") : "light"

//   );

//   const element = document.documentElement;
//   React.useEffect(() => {
//     if(theme === "dark"){
//       element.classList.add("dark");
//       localStorage.setItem("theme","dark");
//     }else{
//       element.classList.remove("dark");
//       localStorage.setItem("theme","light");
//     }
//   },[theme]);

//   const changeTheme = () => {
//     if(theme === "light"){
//       setTheme("dark");
//     }else{
//       setTheme("light");
//     }
//   }
//   return (
//     <>
//         <div>
//             <img src={darkimg} alt="" onClick={changeTheme} className="w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"/>
//             <img src={lightimg} alt="" onClick={changeTheme} className='w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300'/>
//         </div>  
//     </>
//   );
// };

// export default DarkMode


import React from 'react';
import darkimg from "../../assets/Website/dark-mode-button.png";
import lightimg from "../../assets/Website/light-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  React.useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className='flex items-center'>
      {theme === "light" ? (
        <img
          src={lightimg}
          alt="Switch to dark mode"
          onClick={changeTheme}
          className="w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
        />
      ) : (
        <img
          src={darkimg}
          alt="Switch to light mode"
          onClick={changeTheme}
          className="w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
        />
      )}
    </div>
  );
};

export default DarkMode;
