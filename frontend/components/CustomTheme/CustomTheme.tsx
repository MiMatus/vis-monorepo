import React, { FC } from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
html,
body,
body > div#__next {
  padding: 0;
  margin: 0;
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont,'Arial';
  font-size: 16px;
  background: #fff;

  width: 100%;
  height: 100%;  
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`

export const CustomTheme: FC = ({ children }) => {
  const styles = {
    margin: {
      sm: "10px",
      md: "15px",
      lg: "20px",
      xl: "25px",
      xxl: "30px",
      xxxl: "40px",
    },
    padding: {
      sm: "10px",
      md: "15px",
      lg: "20px",
      xl: "25px",
    },
    font: {
      size: {
        sm: "12px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        xxl: "",
      },
    },
    border: {
      color: "#C2C2C2",
    },
    success: {
      color: "#0ACF83",
    },
    error: {
      color: "#F24E1E",
    },
    breakpoint: {
      mobile: 481,
      tablet: 901,
    },
  }

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={styles}>{children}</ThemeProvider>
    </>
  )
}
