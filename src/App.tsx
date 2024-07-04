import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components/macro';
import Layout from 'components/layout/Layout.component';
import GlobalStyle from 'components/global-style/GlobalStyle.component';
import { theme } from 'styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
