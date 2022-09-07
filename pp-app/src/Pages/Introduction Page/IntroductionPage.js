import "../../Fonts/Poppins-Bold.ttf"
import "../../Components/NavBar/navBar.css"
import "./IntroductionPage.css"
import NavBar from '../../Components/NavBar/NavBar'

const navigation = [


  { name: '¿Por qué desnutrición?', href: 'https://patapila.org/desnutricion.php' },
  { name: 'Nuestro Trabajo', href: 'https://patapila.org/impacto.php' },
  { name: 'Sobre Nosotros', href: 'https://patapila.org/nosotros.php' },
  { name: 'Involucrate', href: 'https://patapila.org/involucrate.php' },
]

export default function IntroductionPage() {
  return (
      <div className="mx-auto relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 image h-screen bg-cover">
        <NavBar></NavBar>
      </div>

  )
}