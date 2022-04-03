import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
export default function Layout({ children }) {
 return (
  <>
  {/* render data at any place to show them on website at sequence */}
   <Navbar />
   <Hero />
   <main>
    {children}
   </main>
  </>
 )
}