import { useState } from 'react'
import Layout from '../components/Layout'

export default function Estado() {
    const state = useState(0)

    let [numero, alternarNumero ]= state

    function incrementar() {
        alternarNumero(numero + 1)
    }

    return (
        <Layout titulo="Componente com Estado">
            <div>{numero}</div>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}