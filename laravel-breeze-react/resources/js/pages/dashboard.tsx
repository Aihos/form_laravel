import ListMessage from '@/components/listMessage';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

/* ### Dashboard ### */
/* # Composant qui gère l"affichage du dashboard de l'application.*/
/* # Il est composé de plusieurs composants qui sont affiché dans la page. */
/* # Le composant AppLayout est le layout principal de l'application. */
/* # Le composant ListMessage est le composant qui affiche la liste des messages. */
/* # Le composant Head est le composant qui gère le head de la page. */
/* # Le composant breadcrumbs est le composant qui gère le fil d'ariane. */


export default function Dashboard() { // view dashboard qui gère le coté administrateur que je voulais montrer. 
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" /> {/* Composant qu gère le head de la page comme la balise head en HTML */}
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">                
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <ListMessage /> {/* Composant qui montre la liste des messages envoyé du form vers la BDD */}
                </div> 
            </div>
        </AppLayout>
    );
}
