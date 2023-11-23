import { ReactNode } from 'react';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import customTheme from '../styles/mui/customTheme';

type AppProps = {
  children: ReactNode;
};

const App: React.FC<AppProps> = ({ children }: AppProps) => {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="app">{children}</div>
    </ThemeProvider>
  );
};

export default App;
