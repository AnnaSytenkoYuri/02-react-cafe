// import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// import Alert from "./Alert";

// export default function App(){
//   return(
//     <>
//     <Alert/>
//     <Alert type ="success"/>
//     <Alert type ="error"/>

//     </>
//   )
// }

// export default function App() {
//   const [ clicks, setClicks ] = useState(0);
//   const handleClicks = () => {
//     setClicks(clicks + 1);
//   };
//   return <button onClick={handleClicks}>Current: {clicks}</button>;
// }


// interface Values {
//   x: number;
//   y: number;
// }

// export default function App(){
//   const [values, setValues] = useState<Values>({x:0, y:0});

  // const updateX = () => {
  //   setValues({
  //     ...values,
  //     x: values.x + 1,
  //   });
  // }

  // const updateY = () => {
  //   setValues({
  //     ...values,
  //     y: values.y + 1,
  //   });
  // }


// const updateValue = (key: keyof Values) => {
//   setValues({
//     ...values,
//     [key]: values[key] +1,
//   });
// }

//   return (
//     <div>
//       <p>x: {values.x}, y: {values.y}</p>
//       <button onClick = {()=> updateValue("x")}>Update x</button>
//       <button onClick = {()=> updateValue("y")}>Update y</button>
//     </div>
//   )

// };


// interface Book {
//   id: string;
//   name: string;
// }

// const books: Book[] = [
//  {id: "nhtg", name: "hardly"},
//  {id: "nhtg", name: "hardyy"},
// ]

// export default function App(){
//   return (
//     <>
//     <h1>Best Seller</h1>
//     <ul>
//     {books.map((book) => (
//       <li key={book.id}>{book.name}</li>
//     ))};
//     </ul>
//     </>
//   )
// }







