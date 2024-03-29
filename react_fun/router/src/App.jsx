// import { 
//   createBrowserRouter,
//   Route,
//   createRoutesFromElements,
//   RouterProvider,
// } from 'react-router-dom'

import './App.css'

// // pages
// import Home from './pages/Home'
// import About from './pages/About'
// import Careers, { careersLoader } from './pages/careers/careers'
// import NotFound from './pages/NotFound'

// // layouts
// import RootLayout from './layouts/rootLayout'
// import HelpLayout from './layouts/HelpLayout'
// import Faq from './pages/help/Faq'
// import Contact, { contactAction } from './pages/help/Contact'
// import CareersLayout from './layouts/CareersLayout'
// import CareerDetails, { careerDetailsLoader } from './pages/careers/CareerDetails'
// import CareersError from './pages/careers/CareersError'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<RootLayout />}>
//       <Route index element={<Home />} />
//       <Route path='about'  element={<About />} />
//       <Route path='help' element={<HelpLayout />}> 
//         <Route path='faq' element={ <Faq /> } />
//         <Route path='contact' element={ <Contact /> } action={contactAction} />
//       </Route> 

//       <Route path="careers" element={ <CareersLayout /> } errorElement={ <CareersError /> }>
//         <Route
//           index
//           element={ <Careers /> } 
//           loader ={careersLoader}
//         />
//         <Route
//           path=":id" 
//           element={ <CareerDetails /> }
//           loader={careerDetailsLoader}
          
//         />
//       </Route>

      

//       <Route path='*' element={ <NotFound /> } />
//     </Route>
//   )
// )

// export default function App() {

//   return (
//     <>
//           <RouterProvider router={router} />
//     </>
//   )
// }



import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './router/routes'

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}