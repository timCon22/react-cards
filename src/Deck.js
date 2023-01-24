import React, { useState, useRef, useEffect } from "react"
import axios from "axios"

function DrawFullDeck() {
    const [deck, setDeck] = useState(null)
    const [card, setCard] = useState(null)

    useEffect(function drawDeck(){
        async function getDeck(){
            const res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            setDeck(res.data.deck_id)
        }
        getDeck()
    }, [])

    useEffect(function drawCard(){
        async function getCard(){
            const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=2`)
            setCard(res.cards.image)
        }
        getCard()
    }, [])

    return (
        <div>
            <button onClick={}></button>
            <img src={}/>
        </div>
    )

}

export default DrawFullDeck