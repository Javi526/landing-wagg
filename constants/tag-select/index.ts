import {
    TagSelect_Item_Interface,
    TagSelect_Option_Interface,
    TagSelect_State_Interface
} from "../../interface/tag-select";

export const TagSelect_Item : TagSelect_Item_Interface[] = [{
        id: 1,
        textOne: "Emergencia",
        textTwo: "La mascota necesita un tratamiento urgente",
        textThree: `La salud de tu mascota no puede esperar. <strong>Recomendamos una visita presencial con un veterinario en las próximas 4 horas.</strong>`,
        background: "#FDE5E5",
        border: "#EB5757"
    },
    {
        id: 2,
        textOne: "Preventiva",
        textTwo: "La salud de la mascota puede estar comprometiva y hay riesgo de futuras complicaciones.",
        textThree: `Tu mascota necesita ser atendida.<strong>Recomendamos una visita presencial con un veterinario lo antes posible dentro de la próximas 48hs</strong>`,
        background: "#FFEEDE",
        border: "#F2994A"
    },
    {
        id: 3,
        textOne: "Crítica",
        textTwo: "La salud de la mascota se encuentra severamente compremetida",
        textThree: `Tu mascota necesita ser atendida. <strong>Recomendamos una visita presencial con un veterinario lo antes posible dentro de la próximas 24hs</strong>`,
        background: "#FDF8E5",
        border: "#FED849"
    },
    {
        id: 4,
        textOne: "Urgente",
        textTwo: "La salud de la mascota se encuentra moderada-mente comprometida",
        textThree: `Puedes llevar a tu mascota a la próxima cita disponible con tu veterinario.<strong> Recomendamos que la visita sea en un plazo máximo de 3 días </strong>`,
        background: "#ECEDF0",
        border: "#9496A1"
    },
    {
        id: 5,
        textOne: "Condicional",
        textTwo: "La salud de la mascota se encuentra ligeramente afectada y se deben seguir ciertos pasos para que el cuadro no empeore",
        textThree: `Seguí las instrucciones de tu veterinario online desde casa.<strong> Si tu mascota no mejora dentro de los próximos 3 días, acercate a tu veterinario presencial</strong>`,
        background: "#E4EBFF",
        border: "#2F80ED"
    },
    {
        id: 6,
        textOne: "Flexible",
        textTwo: "Si bien la salud de la mascota esta levemente afectada, no se espera que empeore",
        textThree: `Tu mascota está fuera de peligro. <strong> Sin embargo, recomendamos que sea vista por un veterinario en los próximos 20 días </strong>`,
        background: "#DAF5E5",
        border: "#27AE60"
    },
    {
        id: 7,
        textOne: "No-urgente",
        textTwo: "La salud de la mascota no está comprometida",
        textThree: `Tu mascota se encuentra bien. <strong> Recomendamos sólo que tengas en cuenta el problema reportado en la próxima visita de control con tu veterinario.</strong>`,
        background: "#EAE9FF",
        border: "#9188FD"
    }
];

export const TagSelect_option: TagSelect_Option_Interface[] = [
    { id: 1, value: "Gastrointestinal" },
    { id: 2, value: "Dermatológico" },
    { id: 3, value: "Respiratorio" },
    { id: 4, value: "Musculoesquelético" },
    { id: 5, value: "Masa o tumoración" },
    { id: 6, value: "Oftálmico" },
    { id: 7, value: "Aural (orejas)" },
    { id: 8, value: "Urinario" },
    { id: 9, value: "Ingestión accidental (ej: cuerpo extraño)" },
    { id: 10, value: "Comportamiento" },
    { id: 11, value: "Nutricional" },
    { id: 12, value: "Evento traumático/heridas" },
    { id: 13, value: "Toxicidad/exposición a tóxicos" },
    { id: 14, value: "Dental" },
    { id: 15, value: "Neurológico" },
    { id: 16, value: "Reproductivo" },
    { id: 17, value: "Cardiovascular" },
    { id: 18, value: "Contactar administrador"},
];

export const TagSelect_State : TagSelect_State_Interface = {
    select_item1: false,
    select_item2: false,
    select_item3: false,
    select_item4: false,
    select_item5: false,
    select_item6: false,
    select_item7: false,
}