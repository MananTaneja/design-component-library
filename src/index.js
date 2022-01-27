import React, { useState } from 'react'
import ReactDom from 'react-dom'
import { PrimaryButton, SecondaryButton, TertiaryButton } from './components'
import { GlobalStyle } from './utils'
import { ThemeProvider } from 'styled-components'
import { darkTheme, defaultTheme } from './utils'

const App = () => {
    const [useDarkTheme, setUseDarkTheme] = useState(false)
    return (
        <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
            <button
                style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
                onClick={() => setUseDarkTheme(true)}
            >
                Dark theme
            </button>
            <button
                style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
                onClick={() => setUseDarkTheme(false)}
            >
                Default theme
            </button>
            <div
                style={{
                    background: useDarkTheme
                        ? defaultTheme.primaryColor
                        : darkTheme.primaryColor,
                    width: "100vw",
                    height: "90vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around"
                }}
            >
                <PrimaryButton modifiers={["small", "warning"]}>Hello World</PrimaryButton>
                <SecondaryButton modifiers={["large"]}>Goodbye World</SecondaryButton>
                <TertiaryButton>Hey</TertiaryButton>
                <GlobalStyle />
            </div>
        </ThemeProvider>
    )
}

ReactDom.render(<App />, document.getElementById('root'))