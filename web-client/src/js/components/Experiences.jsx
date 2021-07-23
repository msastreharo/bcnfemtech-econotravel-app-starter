import * as React from 'react';
import {useEffect, useState} from "react";
import {ExperienceApi} from "../apis/experiencesApi";
import {ExperienceCard} from "./ExperienceCard";


export const Experiences = (props) => {

    const [experiences, setExperiences] = useState([]);

    // useEffect con el parámetro "[]"
    // se puede usar para inicializar el componente.
    // Más info: https://es.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
    useEffect(() => {
        let experienceApi = new ExperienceApi()
        experienceApi.getExperiences()
            .then(experiences => setExperiences(experiences))
    }, []);

    return (
        <div className="experience">
            {props.experiences.map(experience =>
                <ExperienceCard experience = {experience} key={experience.id} />
            )}
        </div>)
}