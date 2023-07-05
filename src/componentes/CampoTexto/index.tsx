import './CampoTexto.css'

interface CampoTextoProps{
    aoAlterado: (valor: string) => void // funcao com o valor string, que n retorna nd -> void
    placeholder: string
    label: string
    valor: string
    obrigatorio?: boolean
    tipo?: 'date'
}

const CampoTexto = ( { aoAlterado, label, placeholder, valor, obrigatorio = false, tipo } :CampoTextoProps ) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholderModificada} type={tipo}/>
        </div>
    )
}

export default CampoTexto