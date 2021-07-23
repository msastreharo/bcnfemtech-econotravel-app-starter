import * as React from 'react';
import {NavBar} from "./NavBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Home} from "./Home";
import {About} from "./About";
import {Experiences} from "./Experiences";
import {FormReserva} from "./FormReserva";


export const App = () => {

    const experienceList = [
        {
            id: 1,
            name: "Paseo en bicicleta por el Montseny",
            price: 250,
            duration: "5h",
            tag: "Montaña",
            accessibility: "Actividad disponible para todas las edades. Disponemos de bicicletas accesibles para personas con movilidad reducida en el tren inferior así como sillines con capacidad para niños menores de 5 años (peso máximo 20kg).",
            description: "Disfruta de un hermoso paseo en bicicleta por el increíble Parque Natural del Montseny. Una escapada veraniega perfecta para parejas, familias y amigos que nos permitirá conocer nuevos y sorprendentes lugares. El recorrido que os proponemos comienza con una larga subida con algunos descansos, combinando asfalto y pistas anchas, culminando en un mirador con magníficas vistas del Vallés y el mar. Desde aquí continuaremos la bajada combinando senderos, pistas y algún tramo de carretera y terreno mixto para visitar la zona de Santa Fe, donde descubriremos la Ermita y el Bosque de las Secuoyas. Para finalizar, acudiremos al restaurante María Rosa de Palautordera, donde disfrutaremos de una excelente comida casera con butifarra blanca y negra y munxetes del Montseny."
        },
        {
            id: 2,
            name: "Descubre la costa en barco de vela",
            price: 280,
            duration: "4h",
            tag: "Playa",
            accessibility: "Actividad disponible para todas las edades. Pasarela para silla de ruedas disponible bajo reserva.",
            description: "Disfruta de un hermoso paseo acuático en barco de vela por la increíble costa de Barcelona. Una escapada veraniega apta incluso para los días más calurosos del año. Descubre los encantadores alrededores de la ciudad de Barcelona y visita desde el mar sus más impresionantes playas y calas. Comenzaremos la excursión en el Puerto de Barcelona, desde donde partiremos hacia el norte para visitar playas como la Mar Bella, la Playa de la Mora y la Playa de los Pescadores. A bordo de la embarcación podremos disfrutar de una selección de quesos y embutidos catalanes acompañada de cava brut y zumos de frutas. Asimismo, pararemos cerca de la Playa de Montgat para realizar una actividad de buceo de superficie que nos permitirá apreciar la diversidad de la fauna marítima local y su ecosistema. Finalizaremos la excursión en el mismo puerto del que partimos."
        },
        {
            id: 3,
            name: "Descubre la Barcelona Modernista de noche",
            price: 200,
            duration: "4h",
            tag: "Ciudad",
            accessibility: "Actividad disponible para todas las edades. Accesibilidad garantizada para sillas de ruedas.",
            description: "Desplazarse a pie es una de las mejores formas de descubrir las maravillas modernistas que se esconden en el barcelonés distrito del Eixample, ubicado en el centro de la ciudad. En esta excursión de cuatro horas, descubriremos los principales emblemas del modernismo y visitaremos los templos y edificios más célebres del arquitecto Gaudí. El tour incluye visita guiada al interior de la Casa Batlló y la Sagrada Familia, así como parada para cenar en el restaurante típico catalán Can Masiá, donde disfrutaremos de las mejores carnes de la región acompañadas de vinos de las tierras del Baix Empordá. El restaurante también ofrece opciones vegetarianas y veganas así como menú para niños. Cava aparte."
        },
        {
            id: 4,
            name: "Del huerto a la mesa",
            price: 145,
            duration: "3h",
            tag: "Montaña",
            accessibility: "Actividad disponible para todas las edades. El acceso al huerto en silla de ruedas está garantizado.",
            description: "Comparte con los más pequeños las maravillas de la naturaleza. En esta excursión breve de tres horas, podréis plantar vuestras propias hortalizas y verduras en el huerto de Can Gilabert, ubicado en el corazón del Montbaig. Durante una hora y media, aprenderéis a cuidar de vuestro propio huerto, plantaréis y abonaréis vuestras propias plantas, y también recogeréis parte de los ingredientes que los expertos chefs de Can Gilabert utilizarán para preparar la posterior cena, donde disfrutaréis de la experiencia de consumir productos recién recogidos de la tierra con vuestras propias manos. Actividad ideal para familiarizar a los más pequeños de la familia con el estilo de vida rural y la agricultura sostenible. Asimismo, obtendréis como obsequio una botella de aceite virgen extra cultivado y preparado en Can Gilabert, obra de la familia Gilabert, que lleva más de 80 años cultivando olivos."
        },
        {
            id: 5,
            name: "Arte en la montaña sagrada",
            price: 125,
            duration: "2h",
            tag: "Montaña",
            accessibility: "Actividad disponible para todas las edades. El acceso al museo y al restaurante en silla de ruedas está garantizado.",
            description: "Disfruta de la impresionante Montaña de Montserrat donde encontraréis el Museo con las salas modernistas de Puig i Cadafalch, lugar que acoge colecciones de gran valor en el corazón de la emblemática montaña. En el Museo encontraréis pinturas del Renacimiento y del Barroco que conviven con autores de los siglos XIX y XX, objetos del Próximo Oriente y orfebrería. Además de disfrutar de un paseo guiado por la montaña y el Museo, esta actividad incluye tentempié variado acompañado de vino espumoso, cava brut o refresco."
        }
    ]

    return <div className={"App"}>
        <Router>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/experiences">
                    <Experiences experiences={experienceList} />
                </Route>
                <Route path="/reserva">
                    <FormReserva />
                </Route>
            </Switch>
        </Router>
    </div>


}
