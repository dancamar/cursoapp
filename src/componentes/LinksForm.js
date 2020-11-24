import React, { useEffect, useState } from 'react';
import {db} from '../firebase';


const LinksForm = (props)=>{

    const initialStateValues={
        url: '',
        nombre:'',
        descripcion:''
    }


    const [values, setvalues]=useState(initialStateValues);

    const handleInputChange=(e)=>{
        const {name, value}=e.target;
        setvalues({...values,[name]: value});
        }

        const handleSubmit=(e)=>{
            e.preventDefault();
            props.addOrEditLink(values);
            setvalues({...initialStateValues});
        }

        const getLinkById=async(id)=>{
            const doc=await db.collection('links').doc(id).get();
            setvalues({...doc.data()});
        }

        useEffect(()=>{
            if(props.currentId===''){
                setvalues({...initialStateValues});
            }else{
                getLinkById(props.currentId);
            }
        }, [props.currentId]);



    return (
        <form className="card card-body"   onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                <i className="material-icons">insert_link</i>
                </div>

                <input type="text" className="form-control" placeholder="http://www.url.com" name="url" onChange={handleInputChange} value={values.url}/>
                
               
            </div>

            <div className="form-group input-group">
            <div className="input-group-text bg-light">
                <i className="material-icons">create</i>
                </div>
                <input type="text" className="form-control" placeholder="Nombre de la URL" name="nombre" onChange={handleInputChange} value={values.nombre} />
            </div>

            <div className="form-group">
                <textarea name="descripcion" rows="3" className="form-control" placeholder="Describa la url" onChange={handleInputChange} value={values.descripcion}/>
            </div>

            <button className="btn btn-primary btn-block">
                {props.currentId===''? 'Guardar': 'Actualizar'}
            </button>

        </form>
    
    )

    
}

export default LinksForm;