import React, { useState, useEffect } from 'react';
import data from './data';
import Article from './Article';

// no se necesita transformar el valor ya q se va a ocupar como string
const getStorageTheme = () => {
   let theme = 'light-theme';
   if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme');
   }

   return theme;
};

// documentElement es para acceder al html tag, lo q hace es q en el .html ( <html lang="en" class="light-theme"> ) queda con la clase
function App() {
   const [theme, setTheme] = useState(getStorageTheme());

   useEffect(() => {
      // cambio el tema y lo almaceno en local storage
      document.documentElement.className = theme;
      localStorage.setItem('theme', theme);
   }, [theme]);

   const toggleTheme = () => {
      if (theme === 'light-theme') {
         setTheme('dark-theme');
      } else {
         setTheme('light-theme');
      }
   };

   return (
      <main>
         <nav>
            <div className="nav-center">
               <h1>overreacted</h1>
               <button className="btn" onClick={toggleTheme}>
                  toggle
               </button>
            </div>
         </nav>

         <section className="articles">
            {data.map(item => {
               return <Article key={item.id} {...item} />;
            })}
         </section>
      </main>
   );
}

export default App;
