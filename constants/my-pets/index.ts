import Image1_cat from "../../assets/my-pets/image1-cat.svg";
import Image2_dog from "../../assets/my-pets/image2-dog.svg";

import {
    My_Pets_Info_Interface,
    My_Pets_Info_List_Title_Interface,
    My_Pets_Info_List_Interface,
    My_Pets_Card_Interface
} from "../../interface/my-pets";

export const My_Pets_Info: My_Pets_Info_Interface[] = [
    { id: 1, title: "Raza", description: "Persa" },
    { id: 2, title: "Nacimiento", description: "23 Septiembre 2010" },
    { id: 3, title: "Género", description: "Hembra" },
    { id: 4, title: "Estado", description: "Castrado" },
];

export const My_Pets_list_Title: My_Pets_Info_List_Title_Interface[] = [
    { id: 1, title: "Fecha" },
    { id: 2, title: "Motivo de consulta" },
    { id: 3, title: "Archivos adjuntos" }
];

export const My_Pets_Card: My_Pets_Card_Interface[] = [
    { id: 1, title: "Greta", img: Image1_cat, alt:"Image1_cat" },
    { id: 2, title: "Caos", img: Image2_dog, alt:"Image2_dog" },
    { id: 3, title: "Lupita", img: Image2_dog, alt:"Image2_dog2" },
    { id: 4, title: "Malbec", img: Image1_cat, alt:"Image1_cat2" },
];

export const My_Pets_list : My_Pets_Info_List_Interface[] = [
    { id: 1, date: "08/11/2022", reason: "Consulta general", attached: "2 documentos", opacity: false },
    { id: 2, date: "23/09/2022", reason: "Emergencia", attached: "1 documento", opacity: false },
    { id: 3, date: "03/08/2022", reason: "Emergencia", attached: "Sin documentos", opacity: true },
    { id: 3, date: "01/07/2022", reason: "Consulta general", attached: "2 documentos", opacity: false }
];