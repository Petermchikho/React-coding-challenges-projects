import React from "react"
import Die from "../components/TenziesGame/Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
export default function TenziesGame(){
    const [dice,setDice]=React.useState(allNewArray())
    const [tenzies,setTenzies]=React.useState(false)
    React.useEffect(()=>{
        //Better

       const allHeld=dice.every(die => die.isHeld)
       const firstValue=dice[0].value
       const allSame=dice.every(die => die.value === firstValue)
       console.log(allHeld,allSame)
       if(allHeld && allSame){
            setTenzies(true)
            console.log("You have won ok!")

       }
       
        /*First
        let number=0;
        dice.forEach(item => {
            if(item.isHeld){
                number++
            }
        });
        let all=0;
        if(number===10){
            const diceNumber=dice[0].value
            dice.forEach(item => {
                if(item.value===diceNumber){
                    all++
                }
            });
            
        }
        
        if(all ===10){
            setTenzies(true)
            console.log("You have won!")
        }*/
    },[dice])
    function allNewArray(){
        let newArray=[]
        for (let i=0;i<10;i++){
            const randomPoint={value:Math.floor(Math.random() * (6) + 1 ),
                isHeld:false,
                id:nanoid()}
            newArray.push(randomPoint)
        }
        return newArray
    }
    function generateArray(){
        if(tenzies){
            setTenzies(false)
            setDice(allNewArray())
        }else{
            setDice((prev)=>{
                return (
                    prev.map((item)=>{
                      return (
                        item.isHeld===false ? 
                       {value:Math.floor(Math.random() * (6) + 1 ),
                        isHeld:false,
                        id:nanoid()} 
                        :item)
                    })
                )
    
            })
        }
        
    }
    function hold(id){
        setDice((prev)=>{
            return (
                prev.map((item)=>{
                  return item.id===id? {...item,isHeld:!item.isHeld} :item
                })
            )
        })
    }
    const diceElement=dice.map((item)=>{
        return( 
        <Die 
        key={item.id}
        id={item.id}
        value={item.value} 
        isHeld={item.isHeld}
        onHold={hold}
        />)
    })
    
    return(
        <>
        <main className="ts tenzies-styles">
            {tenzies ? <Confetti /> : null}
            <div className="container-main">
                <div className="tenzies-holder">
                    <h1 className="heading">
                       Tenzies
                    </h1>
                    <p className="instruction">
                        Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
                    </p>
                    <div className="die-container">
                        {diceElement}
                    </div>
                    <button className="roll-btn" onClick={generateArray}>{tenzies ?"New Game":"Roll"}</button>
                </div>

            </div>
        </main>
        
        </>
    )
}