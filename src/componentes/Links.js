import React, { useEffect, useState } from 'react';

import { db } from '../firebase';

import LinksForm from './LinksForm';
import {toast} from 'react-toastify';


const Links = () => {
    const [links, setLinks] = useState([]);
    const [currentId, setCurrentId] = useState('');
    



    const addOrEditLink = async (linkObject) => {
        if (currentId === '') {
            await db.collection('links').doc().set(linkObject);
            toast("Nuevo dato agregado",{
                type: 'success'
            });
        } else {
            await db.collection('links').doc(currentId).update(linkObject);
            toast("Dato actualizado",{
                type: 'info'
            });
        }

        setCurrentId('');
    }

    const getLinks = async () => {
        db.collection('links').onSnapshot((querySnapshot) => {
            const docs = [];

            querySnapshot.forEach(doc => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setLinks(docs);
        });
    }

    const onDelete = async (id) => {
        if (window.confirm('Estas seguro eliminar el  link')) {
            await db.collection('links').doc(id).delete();
            toast("Dato eliminado",{
                type: 'error',
                autoClose: 2000
            });
        }
    }

    useEffect(() => {
        getLinks();
    }, []);



    return (
        <div className="container">
            <div className="col-md-6 p-2">
                <LinksForm {...{ addOrEditLink, currentId, links }} />
            </div>

            <div className="col-md-6">
                {
                    links.map(link => (
                        <div className="card card-body" key={link.id}>
                            <div className="d-flex justify-content-between">
                    <h3>{link.nombre}</h3>
                    
                            
                            <div>
                            </div>

                    <p>{link.descripcion}</p>
                    <a href={link.url} target="_blank" rel="noreferrer">ir al sitio..</a>

                    <i className="material-icons text-danger" onClick={()=>onDelete(link.id)}>close</i>
                    <i className="material-icons " onClick={()=>setCurrentId(link.id)}>create</i>


                        </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Links;






