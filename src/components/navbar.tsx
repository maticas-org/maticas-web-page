import colorLogo from '/maticas-tech-logo-color-2.svg'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import { Link } from "@radix-ui/react-navigation-menu";


export const Navbar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        
        {/* Direct link for the logo */}
        <NavigationMenuItem>
          <Link href="/es">
            <NavigationMenuLink asChild>
              <img src={colorLogo} alt="Maticas Tech" className="h-12" />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <Separator orientation='vertical' className= 'bg-gray-200 h-5' />

        {/* Direct link for 'Inicio' */}
        <NavigationMenuItem>
          {/* Trigger for the dropdown */}
          <Link href="/es/blog">
            <NavigationMenuLink asChild>
              <a className={navigationMenuTriggerStyle()}>Blog</a>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <Separator orientation='vertical' className= 'bg-gray-200 h-5' />

        {/* Direct link for 'Sobre Nosotros'*/}
        <NavigationMenuItem>
          <Link href="/es/contactanos">
            <NavigationMenuLink asChild>
              <a className={navigationMenuTriggerStyle()}>Contáctanos</a>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}