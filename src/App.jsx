import './App.css'
import { Frutas } from './componentes/Frutas'
import { ListaAnimales } from './Componentes/ListaAnimales'
import { DiasdeSemana } from './componentes/DiasdeSemana'
function App() {
    const animales = [{nombre: "gato", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJAPquPYDGaYWDWNIr6dJckaCwIZ7nVjwObg&s"},
                      {nombre: "perro", imagen: "https://png.pngtree.com/png-vector/20250111/ourmid/pngtree-golden-retriever-dog-pictures-png-image_15147078.png"},
                       {nombre: "Conejo", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaiA7D1SqLmXt2Y8iwpcEMGXhYWPs4c4_Ujg&s"},
    ]
    const frutas = ["Platano", "Naranja", "Manzana"]
    
    const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
  return (
    <>
      <h1>Lista de Animales</h1>
      {animales.map(function(animal){
      return <ListaAnimales imagen = {animal.imagen} nombre={animal.nombre}/>
        })}
  
      <h2>Lista frutas</h2>
      <ul>
         {frutas.map(function(fruta){
            return <Frutas nombre = {fruta}/>
         })}
      </ul>

      <h2>Dias de la semana</h2>
      <ul>
        {dias.map(function(dia){
          return <DiasdeSemana nombre = {dia}/>
        })}
      </ul>
    </>
  )
}

export default App

