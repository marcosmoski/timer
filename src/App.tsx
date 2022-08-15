import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { Button } from "./components/Button"

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Button variant="primary"/>
        <Button variant="secondary"/>
        <Button variant="success"/>
        <Button variant="danger"/>
        <Button variant="warning"/>
      </ThemeProvider>
    </div>
  )
}

export default App
