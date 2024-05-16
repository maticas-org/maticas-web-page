import blackLogo from '/maticas-tech-logo.svg'
import colorLogo from '/maticas-tech-logo-color-2.svg'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
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
          <Link href="/">
            <NavigationMenuLink asChild>
              <img src={colorLogo} alt="Maticas Tech" className="h-12" />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <Separator orientation='vertical' className= 'bg-gray-200 h-5' />

        {/* Direct link for 'Inicio' */}
        <NavigationMenuItem>
          {/* Trigger for the dropdown */}
          <NavigationMenuTrigger>Blog</NavigationMenuTrigger>

          {/* Content of the dropdown */}
          <NavigationMenuContent className="bg-white shadow-lg rounded-md p-4">
            {/* Individual links within the dropdown */}
            <NavigationMenuLink asChild>
              <Link href="/blog/article-1">
                <a className="block p-2 hover:bg-gray-100 rounded">Artículo 1</a>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="/blog/article-2">
                <a className="block p-2 hover:bg-gray-100 rounded">Artículo 2</a>
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link href="/blog/article-3">
                <a className="block p-2 hover:bg-gray-100 rounded">Artículo 3</a>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <Separator orientation='vertical' className= 'bg-gray-200 h-5' />

        {/* Direct link for 'Sobre Nosotros'*/}
        <NavigationMenuItem>
          <Link href="/about-us">
            <NavigationMenuLink asChild>
              <a className={navigationMenuTriggerStyle()}>Contáctanos</a>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}