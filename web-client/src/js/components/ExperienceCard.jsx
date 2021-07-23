import * as React from 'react';

export const ExperienceCard = (props) => {
    return (
        <div className="experienceCard">
            <h1>{props.experience.name}</h1>
            <h3>{props.experience.price} € por persona</h3>
            <p><b>Duración:</b> {props.experience.duration}</p>
            <p>Esta actividad se desarrolla en: {props.experience.tag}</p>
            <p><b>Accesibilidad:</b> <br/>{props.experience.accessibility}</p>
            <p><b>Descripción de la actividad: </b> <br/> {props.experience.description}</p>
        </div>
    )
}