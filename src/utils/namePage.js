import { usePathname } from "next/navigation";

export const NamePageHelper = () => {
    const {pathname  } = usePathname();
    if(pathname === '/') return 'Bienvenido';
    if(pathname ==='/clientes') return 'CRM';
    if(pathname === '/dashboard') return 'ERP';
    if(pathname === '/ventas') return 'Consultas';
}