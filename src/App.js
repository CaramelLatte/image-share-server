import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/HomeComponent"
import Discord from "./components/DiscordComponent"
import Posts from "./components/PostsComponent"
import Tags from "./components/TagsComponent"
import Upload from "./components/UploadComponent"
import Error from "./components/ErrorComponent"
import Header from "./components/HeaderComponent"
import Footer from "./components/FooterComponent"
import { Container } from 'reactstrap'
import "./app.css";



function App() {
  return (
    <div className="app main-view">
      <BrowserRouter>
      <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/discord" element={<Discord />}/>
            <Route path="/tags" element={<Tags />}/>
            <Route path="/posts" element={<Posts />}/>
            <Route path="/upload" element={<Upload />}/>
            <Route path="*" element={<Error />}/>
          </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
