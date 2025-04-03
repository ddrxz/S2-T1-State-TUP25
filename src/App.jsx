import { useState } from 'react'
import './App.css'

function App() {
  // Múltiples estados para diferentes ejemplos
  const [count, setCount] = useState(0)
  const [inputText, setInputText] = useState('')
  const [isHovered, setIsHovered] = useState(false)
  const [selectedOption, setSelectedOption] = useState('opción1')

  // Manejadores de eventos
  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  const handleInputChange = (event) => {
    setInputText(event.target.value)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    alert(`Formulario enviado con texto: ${inputText}`)
  }

  return (
    <>
      <div className="container">
        <h1>Ejemplos de Eventos con State en React</h1>
        {/* Ejemplo 1: Eventos de click con contador */}
        <section className="example-section">
          <h2>Ejemplo 1: Eventos de Click</h2>
          <p>Contador actual: <strong>{count}</strong></p>
          <div className="button-group">
            <button onClick={handleIncrement}>Incrementar</button>
            <button onClick={handleDecrement}>Decrementar</button>
            <button onClick={() => setCount(0)}>Reiniciar</button>
          </div>
        </section>

        {/* Ejemplo 2: Eventos de input */}
        <section className="example-section">
          <h2>Ejemplo 2: Eventos de Input</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="textInput">Escribe algo:</label>
              <input 
                id="textInput"
                type="text" 
                value={inputText} 
                onChange={handleInputChange} 
                placeholder="Escribe aquí..."
              />
            </div>
            <p>Texto escrito: <strong>{inputText}</strong></p>
            <button type="submit">Enviar</button>
          </form>
        </section>

        {/* Ejemplo 3: Eventos de mouse */}
        <section className="example-section">
          <h2>Ejemplo 3: Eventos de Mouse</h2>
          <div 
            className={`hover-box ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isHovered ? 'Estoy activado!' : 'Pasa el mouse sobre mí'}
          </div>
          <p>Estado de hover: <strong>{isHovered ? 'Activado' : 'Desactivado'}</strong></p>
        </section>

        {/* Ejemplo 4: Eventos de select */}
        <section className="example-section">
          <h2>Ejemplo 4: Eventos de Select</h2>
          <div className="form-group">
            <label htmlFor="selectOption">Selecciona una opción:</label>
            <select 
              id="selectOption"
              value={selectedOption} 
              onChange={handleSelectChange}
            >
              <option value="opción1">Opción 1</option>
              <option value="opción2">Opción 2</option>
              <option value="opción3">Opción 3</option>
            </select>
          </div>
          <p>Opción seleccionada: <strong>{selectedOption}</strong></p>
        </section>
      </div>
    </>
  )
}

export default App
