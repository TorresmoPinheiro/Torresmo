import { 
  Nav , 
  Products ,
  Banner ,
  About ,
  Contacts ,
  Location
 } from "./components/components"

export default function Home() {
  return (
    <div className="bg-orange-900">
      <Nav/>
      <Banner/>
      <Products/>
      <About/>
      <Contacts/>
      <Location/>
    </div>
  )}
