import React from "react"
import { 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route } from "react-router-dom";
import TenziesGame from "./pages/TenziesGame";
import Layout from "./components/Layout";
function App() {
  const router=createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<TenziesGame />}/>

    </Route>
  ))
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
