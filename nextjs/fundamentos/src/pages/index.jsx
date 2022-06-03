import Navegador from "../components/Navegador";

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador destino="/estiloso" texto="Estiloso"/>
            <Navegador destino="/exemplo" texto="Exemplo"cor="darkgreen"/>
            <Navegador destino="/jsx" texto="JSX" cor="crimson"/>
            <Navegador destino="/navegacao" texto="Navegação #01" cor="dodgerblue"/>
            <Navegador destino="/cliente/123" texto="Navegação #02" cor="orange"/>
            <Navegador destino="/estado" texto="Componente com Estado" cor="#555"/>
            <Navegador destino="/integracao1" texto="Integração com API #01" cor="magenta"/>
        </div>
    )
}