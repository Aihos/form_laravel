import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: LayoutGrid,
    },
    {
title: 'Home',
href:'/',
icon:BookOpen,

    },
];

const footerNavItems: NavItem[] = [
       {
        title: 'Majordhom',
        href: 'https://www.majordhom.fr/',
        icon: Folder,
    },
];
/* ### Sidebar ### */
/* # Composant qui gère le contenu afficher dans la navbar */
/* # Il contient le logo de l'application et les liens de navigation */



export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">  
            <SidebarHeader> 
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/" prefetch>                               
                               <span className='text-2xl font-bold '>Majordhom</span> 
                            </Link>                            
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>
           <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
