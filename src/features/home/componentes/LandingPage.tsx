import { useState, useEffect } from "react";
import ListadoPeliculas from "../../peliculas/componentes/ListadoPeliculas";
import type Pelicula from "../../peliculas/modelos/peliculas.model";

export default function LandingPage(){
    
  const [peliculas, setPeliculas] = useState<AppState>({});

  useEffect(()=> {
    setTimeout(() => {
  const enCines: Pelicula[]= [{
  id: 1,
  titulo : "MadMax",
  poster: "https://upload.wikimedia.org/wikipedia/commons/0/04/Mad_Max_Fury_Road_logo.png"
  }, {
    id: 2,
    titulo : "Batman",
    poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg"
  }]

  const proximosEstrenos: Pelicula[] = [{
    id: 3,
    titulo: "Jhon Wick",
    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/JohnWick_logo_bg.svg/330px-JohnWick_logo_bg.svg.png"
  }]

  setPeliculas({enCines, proximosEstrenos});

    }, 1000);
  }, [])
  
    return(
        <>
                      <h3>En Cines</h3>
              <ListadoPeliculas peliculas={peliculas.enCines}/>
        
              <h3>En Cines</h3>
              <ListadoPeliculas peliculas={peliculas.proximosEstrenos}/>
        </>

    )
}


interface AppState {
  enCines?: Pelicula[];
  proximosEstrenos?: Pelicula[];
}