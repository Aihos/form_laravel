import { Breadcrumbs } from '@/components/breadcrumbs';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';

/* ### Sidebar Header - Fil d'Ariane ### */
/* # Composant qui gère l'affichage de l'entête de la navbar */
/* # Il contient le Trigger pour déplier la navbar et le fil d'ariane */
/* # Composant SidebarTrigger  qui gère l'affichage du Trigger pour déplier la navbar */
/* # Composant Breadcrumbs qui gère le fil d'ariane pour l'affichage d'une hiérachie */

export function AppSidebarHeader({ breadcrumbs = [] }: { breadcrumbs?: BreadcrumbItemType[] }) {
    return (
        <header className="border-sidebar-border/50 flex h-16 shrink-0 items-center gap-2 border-b px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" /> 
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>
        </header>
    );
}
