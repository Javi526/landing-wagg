// Landing Principal

import One from "../../../assets/landing/principal/HowDoesItWork/one.svg";
import Two from "../../../assets/landing/principal/HowDoesItWork/two.svg";
import Three from "../../../assets/landing/principal/HowDoesItWork/three.svg";
import Image1 from "../../../assets/landing/principal/why-use-item/img-1.svg";
import Image2 from "../../../assets/landing/principal/why-use-item/img-2.svg";
import Image3 from "../../../assets/landing/principal/why-use-item/img-3.svg";
import Image4 from "../../../assets/landing/principal/why-use-item/img-4.svg";
import Image5 from "../../../assets/landing/principal/why-use-item/img-5.svg";
import Image6 from "../../../assets/landing/principal/why-use-item/img-6.svg";
import Image7 from "../../../assets/landing/principal/why-use-item/img-7.svg";
import OurTeam_Image_1 from "../../../assets/landing/principal/our-team-galery/image-1.svg";
import OurTeam_Image_2 from "../../../assets/landing/principal/our-team-galery/image-2.svg";
import OurTeam_Image_3 from "../../../assets/landing/principal/our-team-galery/image-3.svg";
import { Tabs_ClassName_Interface } from "../../../interface/landing/principal";

export const HowDoesItWorkData = [
    { id: 1, title: "Iniciá una consulta ", text: "Accedé a hablar con un veterinario matriculado", img: One, width: 54 },
    { id: 2, title: "Recibí un consejo", text: "El profesional responderá todas tus preguntas al instante", img: Two, width: 136 },
    { id: 3, title: "¡Listo!", text: "Volvé a consultar las veces que tu mascota lo necesite.", img: Three, width: 74 }
];

export const why_use = [
    { id: 1, title: "Estamos disponibles las 24 hs", text: "Facilitamos el acceso inmediato a  veterinarios cuando tu mascota necesite asistencia.", img: Image1, left: "26rem", top: "-4rem" },
    { id: 2, title: "Consejos de nutrición para tu mascota", text: "Consejos de nutrición para tu mascota", img: Image2, left: "8rem", top: "2rem" },
    { id: 3, title: "Determinamos la urgencia de tu situación", text: "Determinamos la urgencia de tu situación", img: Image3, left: "8rem", top: "2rem" },
    { id: 4, title: "Brindamos instrucciones precisas sobre cómo proceder", text: "Brindamos instrucciones precisas sobre cómo proceder", img: Image4, left: "8rem", top: "0" },
    { id: 5, title: "Te damos una segunda opinión", text: "Te damos una segunda opinión", img: Image5, left: "8rem", top: "2rem" },
    { id: 6, title: "Respondemos tus dudas sobre medicamentos y cuidados mascoteros", text: "Respondemos tus dudas sobre medicamentos y cuidados mascoteros", img: Image6, left: "8rem", top: "0" },
    { id: 7, title: "Ofrecemos tips sobre cómo educar a tu mascota", text: "Ofrecemos tips sobre cómo educar a tu mascota", img: Image7, left: "8rem", top: "25px" },
];

export const WhatYouShouldKnowData = [
    { id: 1, title: "¿Qué puedo consultar?", text: `Atendemos consultas sobre <strong>salud, bienestar, nutrición, comportamiento y definimos la urgencia de tu situación.</strong> El servicio wagg no reemplaza a una consulta presencial sino que la complementa!` },
    { id: 2, title: "¿Quién me va a atender?", text: `Contamos con un equipo de <strong> veterinarios </strong> con más de 5 años de experiencia en atención clínica de perros y gatos. Hoy en día son 6 veterinarios certificados y el equipo wagg sigue creciendo :)` },
    { id: 3, title: "¿Cuánto cuesta?", text: `Tenemos distintos <strong> planes que se amoldan a tu necesidad.</strong> No hace falta que te generés una cuenta, podés acceder a tu primer consulta ahora mismo.` }
];

export const Tabs = [
    { id: 1, title: "Organizaciones" },
    { id: 2, title: "Padres de mascotas" }
];

export const Tabs_Plan_basic = {
        title: "Plan Base",
        price: "$2000",
        time: "por 24h",
        description: "Recomendado para padres de 1 mascota",
        item: [
        { id: 1, text: "Acceso a consultas por 24hs" },
        { id: 2, text: "Atención de una mascota a la vez" },
        { id: 3, text: "Seguimiento y tips por 24hs" },
        { id: 4, text: "Acceso a una cuenta para futuras consultas" },
        ],
        button: "Obtener plan"
};

export const Tabs_Plan_day = {
    title: "Plan Día",
    price: "$800",
    time: "por 24h",
    item: [
        { id: 1, text: "Acceso al plan base por 1 semana" },
        { id: 2, text: "Atención hasta 3 mascotas" }
    ],
    button: "Obtener plan",
};

export const Tabs_Plan_week = {
    title: "Plan Semana",
    price: "$800",
    time: "por 24h",
    item: [
        { id: 1, text: "Acceso al plan base por 1 semana" },
        { id: 2, text: "Atención hasta 3 mascotas" },
    ],
    button: "Obtener plan",
};


export const Our_Team_Galery = [
    { id: 1, title: "Micaela Amor", credential: "MT:004567902141", experience: "5 años de experiencia", img: OurTeam_Image_1 },
    { id: 2, title: "Erica Fernández", credential: "MT:0045679000", experience: "7 años de experiencia", img: OurTeam_Image_2 },
    { id: 3, title: "Carla Irazabal", credential: "MT:0045679991", experience: "3 años de experiencia", img: OurTeam_Image_3 }
];

export const Impact_Data = [
        { id: 1, text: "Suscripciones gratuitas para los padres adoptantes" },
        { id: 2, text: "Capacitaciones a los refugios" },
        { id: 3, text: "Seguimiento personalizado post-adopción" }
];

export const ClassName_Landing: Tabs_ClassName_Interface = {
    Plan_content_item: "Plan-content-container-day-and-week-item",
    Plan_content_button_container: "Plan-content-tabs-card-week-button-container",
    Plan_content_button: "Plan-content-tabs-card-day-button"
};

export const ClassName_SelectPlan: Tabs_ClassName_Interface = {
    Plan_content_item: "Plan-select-content-container-day-and-week-item",
    Plan_content_button_container: "Plan-content-select-card-week-button-container",
    Plan_content_button: "Plan-content-select-card-day-button"
};

export const ClassName_Type = {
    Not_visible: (tab : number, tabType: number) : string => {
        if (tab !== tabType) return "Plan-content-week-item-not-visible"
        return ""
    }
};

export const PetParentPlanArray = [
    { id: 1, description: Tabs_Plan_day, tabType: 1 },
    { id: 2, description: Tabs_Plan_week, tabType: 2 },
];