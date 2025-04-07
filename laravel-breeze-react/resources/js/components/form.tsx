import axios from 'axios';
import { useState } from 'react';

/* ### Form ### */
/* # Composant qui gère le formulaire de contact */
/* # Il contient les champs de saisie pour le nom, prénom, email, téléphone, motif et message */

const Form = () => {

    /* # useState est un hook qui permet de gérer l'état d'un composant */
    /* # Il prend en paramètre la valeur initiale de l'état et retourne un tableau contenant la valeur actuelle et une fonction pour mettre à jour cette valeur */
    /* # useState est utilisé pour gérer l'état des champs de saisie du formulaire */
    
    const [civilite, setCivilite] = useState('Mme');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [motif, setMotif] = useState('Demande de visite');
    const [message, setMessage] = useState('');
    const [disponibilites, setDisponibilites] = useState<string[]>([]);
    const [jour, setJour] = useState('Lundi');
    const [heure, setHeure] = useState('9h');
    const [minute, setMinute] = useState('00');
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    /* # Fonction qui gère l'ajout d'une disponibilité au tableau des disponibilités */

    const addDisponibilite = () => {
        const dispo = `${jour} à ${heure}${minute}`;
        if (!disponibilites.includes(dispo)) {
            setDisponibilites([...disponibilites, dispo]);
        }
    };

    /* # Fonction qui gère la suppression d'une disponibilité du tableau des disponibilités */

    const removeDisponibilite = (index: number) => {
        const updated = [...disponibilites];
        updated.splice(index, 1);
        setDisponibilites(updated);
    };

    /* # Fonction qui gère l'envoi du formulaire */

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        /* # Partie de l'envoie de la route web create-message */
        try { 
            const res = await axios.post('http://localhost:8000/create-message', {
                civilite,
                nom,
                prenom,
                email,
                telephone,
                motif,
                message,
                disponibilites,
            });

            if (res.status === 200) {
                setSuccess('✅ Message bien envoyé !');
                setNom('');
                setPrenom('');
                setEmail('');
                setTelephone('');
                setMessage('');
                setDisponibilites([]);
            } else {
                setError('Une erreur s’est produite...');
            }
        } catch (err) {
            console.error(err);
            setError('Impossible d’envoyer le message.');
        }
    };

    return (
      <div className='rounded-3xl p-4 border'>
         <h1 className="text-white text-left font-bold md:text-3xl max-md:text-2xl my-4">Contactez l'agence</h1>
         <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 rounded-3xl bg-[url(./../salon.png)] ">
            <div className="mr-8 flex flex-col gap-4">
                <h2 className="md:text-lg sm:text-sm font-medium text-white">Vos coordonnées</h2>
                <div className="flex flex-row justify-start gap-4">
                    <label className="text-sm font-medium text-white">
                        <input type="radio" name="civilite" value="Mme" checked={civilite === 'Mme'} onChange={() => setCivilite('Mme')} />
                        Mme
                    </label>
                    <label className="text-sm font-medium text-white">
                        <input type="radio" name="civilite" value="M" checked={civilite === 'M'} onChange={() => setCivilite('M')} />M
                    </label>
                </div>                
                <div className="flex sm:flex-row max-sm:flex-col justify-between gap-4">
                    <input
                        className="rounded-full bg-white px-2 py-1 shadow sm:w-[48%] max-sm:w-[90%]"
                        required
                        type="text"
                        placeholder="Nom"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        minlength="3"
                        maxlength="20"
                        pattern="(((\p{L}){3,20})(| |-|,)?)"
                        title="Il en faut au minimum 2 et au maximum 20 caractères composées de Lettres, d'espaces, de tirets ou d'apostrophes"
                    />
                    <input
                        className="rounded-full bg-white px-2 py-1 shadow sm:w-[48%] max-sm:w-[90%]"
                        required
                        type="text"
                        placeholder="Prénom"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                        minlength="3"
                        maxlength="20"
                        pattern="(((\p{L}){3,20})(| |-|,)?)"
                        title="Il en faut au minimum 2 et au maximum 20 caractères composées de Lettres, d'espaces, de tirets ou d'apostrophes"
                    />
                </div>
                <input
                    className="rounded-full bg-white px-2 py-1 shadow sm:w-full max-sm:w-[90%]"
                    required
                    type="email"
                    placeholder="Adresse mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="rounded-full bg-white px-2 py-1 shadow sm:w-full max-sm:w-[90%]"
                    required
                    type="tel"
                    placeholder="Téléphone"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    pattern="(^\d{10}$)"
                    title="Renseignez un téléphone, 10 caractères"
                />
            </div>
            <div className="mr-8 flex flex-col gap-4">
                <h2 className="md:text-lg sm:text-sm font-medium text-white">Votre message</h2>
                <div className="flex flex-row justify-between">
                    <label className="text-sm font-medium text-white">
                        <input
                            type="radio"
                            name="motif"
                            value="Demande de visite"
                            checked={motif === 'Demande de visite'}
                            onChange={() => setMotif('Demande de visite')}
                        />
                        Demande de visite
                    </label>
                    <label className="text-sm font-medium text-white">
                        <input
                            type="radio"
                            name="motif"
                            value="Être rappelé"
                            checked={motif === 'Être rappelé'}
                            onChange={() => setMotif('Être rappelé')}
                        />
                        Être rappelé
                    </label>
                    <label className="text-sm font-medium text-white">
                        <input
                            type="radio"
                            name="motif"
                            value="Plus de photos"
                            checked={motif === 'Plus de photos'}
                            onChange={() => setMotif('Plus de photos')}
                        />
                        Plus de photos
                    </label>
                </div>

                <textarea
                    className="h-full w-full rounded bg-white px-2 py-1 shadow sm:w-full max-sm:w-[90%]"
                    required
                    placeholder="Votre message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    minlength="10"
                    maxlength="150"
                    pattern="(((\p{L}){10,150})(| |-|,)?)"
                    title="Il en faut au minimum 10 caractères et au maximum 150 caractères composées de Lettres, d'espaces, de tirets ou d'apostrophes"
                />
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="md:text-lg sm:text-sm font-medium text-white">Disponibilités pour une visite</h2>
                <div className="sm:flex w-full sm:flex-row gap-4 max-sm:grid max-sm:grid-cols-2">
                    <select className="rounded-full bg-white px-2 py-1 shadow" required value={jour} onChange={(e) => setJour(e.target.value)}>
                        {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'].map((j) => (
                            <option key={j}>{j}</option>
                        ))}
                    </select>
                    <select className="rounded-full bg-white px-2 py-1 shadow" value={heure} onChange={(e) => setHeure(e.target.value)}>
                        {Array.from({ length: 24 }, (_, i) => `${i}h`).map((h) => (
                            <option key={h}>{h}</option>
                        ))}
                    </select>
                    <select className="rounded-full bg-white px-2 py-1 shadow" value={minute} onChange={(e) => setMinute(e.target.value)}>
                        {['00', '15', '30', '45'].map((m) => (
                            <option key={m}>{m}</option>
                        ))}
                    </select>
                    <button className="text-2sm rounded-full bg-purple-800 px-4 py-1 font-medium text-white" type="button" onClick={addDisponibilite}>
                        Ajouter dispo
                    </button>
                </div>

                <div>
                    {disponibilites.map((dispo, index) => (
                        <div className="flex max-w-1/2 flex-row justify-between rounded-full bg-gray-400 px-3 py-1" key={index}>
                            {dispo}{' '}
                            <button className="font-bold" type="button" onClick={() => removeDisponibilite(index)}>
                              X
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex h-full w-full items-center justify-end sm:pr-8 max-sm:pr-0">
                <button className="rounded-full bg-amber-400 px-8 py-1 text-lg font-medium text-white" type="submit">
                    Envoyer
                </button>

                {success && <p style={{ color: 'green' }}>{success}</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </form>
      </div>
       
    );
};

export default Form;
