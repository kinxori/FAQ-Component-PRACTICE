import { useEffect, useState } from "react"
import "./PanelComp.css"
import myArrowIcon from "/src/assets/arrow-icon.png"

export default function PanelComp(){
    const [character, setCharacter] = useState<{
        id:number,
        name:string,
        image: any,
        status: string,
        species: string,
        gender: string,
        isOpen: any,
        handleCLick: any,
        key: any,
    }[]>([])
    const [isOpen, setIsOpen] = useState<any>(null)

const arrowIcon : string = myArrowIcon;
// METHOD 1 

    // const handleCLick = (id) => {
    //     if (isOpen !== id){
    //         setIsOpen(id)
    //     }
    //     else {
    //         setIsOpen(false)
    //     }
    // }

// METHOD 2 

    // const handleCLick = (id) => {
    // setIsOpen(isOpen !== id ? id : false)
    // }

// METHOD 3

    const handleCLick = (id : any) => {
        setIsOpen((currentValue : any) => currentValue !== id ? id : false)
    }

    useEffect (()=>{
        const getData = async () => {
            const response = await fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5,6")
            const data = await response.json()
            setCharacter(data)
        }
        getData();
    },[]);

 return(
    <div className="buttonsArrange" >
        <h1 className="head">FAQs</h1>
        <p className="titleDesc">Rick & Morty Characters</p>

        {character.map((item) =>  
            (<Buttons 
                key={item.id} 
                id={item.id} 
                isOpen={isOpen}
                handleCLick={handleCLick} 
                name={item.name} 
                image={item.image} 
                status={item.status} 
                species={item.species}
                gender={item.gender}
                arrowIcon={arrowIcon}
            />)
        )}
    </div>
 )
}

//-----------------------------------------


const Buttons = ({isOpen, name, id, status, species, gender, image, handleCLick, arrowIcon}
    :
    {isOpen: any, name: string, id: number, status: string, species:string, gender:string, image: any, handleCLick: any, arrowIcon: string})=>{

    return (
        <div className={isOpen === id ? "openClass" : "closeClass"} > 
            <div>
                <img src={image} alt={name} className="pfp" />
                <p className="description">{isOpen === id ? "Hide Description" : "Show Description"} </p>
                <button onClick={()=>handleCLick(id)}> 
                    <img className="arrow" src={arrowIcon} alt="" />
                </button>
               
            </div>
            {isOpen === id && 
            <span>
                <p>Name: {name}</p>
                <p>Status: {status}</p>
                <p>Specie: {species}</p>
                <p>Gender: {gender}</p>
            </span>}
        </div>
    )
}






