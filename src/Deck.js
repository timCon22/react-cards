import React, { useState, useRef, useEffect } from "react"
import axios from "axios"

function DrawFullDeck() {
    const [deck, setDeck] = useState(null)
    const [card, setCard] = useState(null)

    const drawDeck = () => {
        async function getDeck(){
            const res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            setDeck(res.data.deck_id)
        }
        getDeck()
    }
    
    
    const drawCard = (deck) => {
        async function getCard(deck){
            const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`)
            setCard(res.data.cards[0].image)
        }
        getCard(deck)
    }
    
    return (
        <div>
            <div>
                <button onClick={drawDeck}>Draw a deck!</button>
                <button onClick={() => drawCard(deck)}>Draw a card!</button>
            </div>
            <img src={card}/>
        </div>
    )
    
}

export default DrawFullDeck