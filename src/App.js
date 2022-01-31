
import './App.css';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../src/components/Home'
import Course from '../src/components/Course'
import Lesson from '../src/components/Lesson'
import Error from '../src/components/Error'
import Container from '@mui/material/Container';
import CssBaseline from "@mui/material/CssBaseline";

const kpTheme = createTheme({
  typography: {
    fontFamily:'Montserrat, Gowun Dodum,san serif',
    fontWeightLight: 300,
    fontWeightMedium: 400,
    fontWeightBold: 500,
    fontSize: 16,
  },
  

})


function App() {
  return (
    <Container>
      <ThemeProvider theme={kpTheme} >
        <BrowserRouter>
          <Routes>
              <Route path="/">
                {/* w3 includes: for the topbar sidebar perhaps <Route path="/" element={<Layout />}> */}
                <Route index element={<Home/>}/>
                <Route exact path="course/:courseid" element={<Course/>}/>
                <Route path="error" element={<Error />} />
                <Route exact path="course/:courseid/lesson/:lessonid" element={<Lesson />} />
              </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Container>
  );
}

export default App;
