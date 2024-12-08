import './App.css'
import { MainPage } from './pages/MainPage';
import { ThemeProvider } from './providers/ThemeProvider';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <MainPage />
    </ThemeProvider>
  )
}

export default App;
