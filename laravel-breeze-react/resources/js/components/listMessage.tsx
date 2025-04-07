import { type BreadcrumbItem } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

type Message = {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    motif: string;
    message: string;
    disponibilites: string[];
};

/* ### ListMessage ### */
/* # Composant qui gère l'affichage de la liste des messages envoyés par le formulaire. */

const listMessage = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios
            .get('http://localhost:8000/messages')
            .then((res) => setMessages(res.data))
            .catch((err) => {
                console.error(err);
                setError('Erreur lors du chargement des messages');
            });
    }, []);

    return (
        <div>
            {error && <p className="text-red-500">{error}</p>}
            <ul className="space-y-2">
                <li className="grid sm:grid-cols-7 max-sm:grid-cols-2 max-sm:gap-4 rounded bg-gray-500 p-3 dark:bg-gray-800">
                    <strong>Nom</strong>
                    <p>Prénom</p>                    
                    <p>Téléphone</p>
                    <p>Motif</p>
                    <p>Email</p>
                    <p>Disponibilites</p>
                    <p>Message</p>
                </li>
                {messages.map((message) => (
                    <li key={message.id} className="grid sm:grid-cols-7 max-sm:grid-cols-2 max-sm:gap-4 rounded bg-gray-100 p-3 dark:bg-gray-900">
                        <strong>{message.nom}</strong>
                        <p className='sm:text-lg max-sm:text-sm'>{message.prenom}</p>                        
                        <p className='sm:text-lg max-sm:text-sm'> {message.telephone}</p>
                        <p className='sm:text-lg max-sm:text-sm'> {message.motif}</p>
                        <p className='sm:text-lg max-sm:text-sm'> {message.email}</p>
                        <p className='sm:text-lg max-sm:text-sm'>{message.disponibilites}</p>
                        <p className='sm:text-lg max-sm:text-sm'>{message.message}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default listMessage;
