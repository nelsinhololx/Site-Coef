import Image from "next/image"; // Importando o componente Image
import Link from "next/link"; // Importando o Link do Next.js
import NavItem, { NavItemInterface } from "../NavItem";
import "./index.css"


export default function Navbar() {
    const items: NavItemInterface[] = [
        {
            url: "/",
            label: "Inicio"
        },
        {
            url: "/about",
            label: "Sobre"
        },
        {
            url: "/products",
            label: "Produtos"
        },
        {
            url: "/Services",
            label: "Serviços"
        },
        {
            url: "/contacts",
            label: "Contatos"
        },
    ]
    return (
        <header>
            <nav className="navbar">
                <Link href="/" className="logo">
                    <Image 
                        src="/logo-nav.png" 
                        width={150} 
                        height={150} 
                        alt="Logo do sistema" 
                    />
                </Link>
                <ul className="nav-items">
                    {items.map((item, index)=>(
                    <NavItem 
                    key={index}
                url={item.url}
                label={item.label}
            
            />

                    ))}
                    
                </ul>

                <button className="btn-default">
                    Contatar
                </button>
            </nav>
        </header>
    );
}