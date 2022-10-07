import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <>
     <SectionWrapper
       title="Your own store of Nifty NFTS. Start selling and Growing."
       description="Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million people using ProNef Marketplace."
       showBtn
       mockUpImg={assets.homeHero}
       banner="banner"
     />
     <SectionWrapper
       title="Smart User Interface Marketplace"
       description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design"
       mockUpImg={assets.homeCards}
       reverse
     />
     <Features />
     <SectionWrapper
       title="Deployment"
       description="ProNef is built using Expo which runs natively on all devices. You will enjoy the smooth UI experience"
       showBtn
       mockUpImg={assets.feature}
       banner="banner"
     />
     <SectionWrapper
       title="Creative way to showcase the store"
       description="The app contain two screens. The first screen lists all NFTs while second one shows the details of a specific NFT."
       mockUpImg={assets.mockup}
       banner="banner02"
     />
     <Download />
     <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
       <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {""}
        <span className="bold">Umesh U</span>
       </p>
     </div>
    </>
  )
}

export default App;