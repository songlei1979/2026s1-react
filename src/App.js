import logo from './logo.svg';
import './App.css';
import Helloworld from "./components/Helloworld";
import Helloworld2 from "./components/Helloworld2";
import Loop from "./components/Loop";
import Condition from "./components/Condition";
import Form from "./components/Form";
import Loadingdata from "./components/Loadingdata";
import {BrowserRouter, Route, Routes} from "react-router";
import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from "./components/Counter";
import Loadposts from "./components/Loadposts";
import CountReducer from "./components/Count_reducer";
import Register from "./components/Register";
import Login from "./components/Login";
import PostList from "./components/post_list";

function App() {
    function clickMe() {
        alert("From App.js");
    }

    return (
        <div className="App">
            <Navigation/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Helloworld/>}/>
                    <Route path="/helloworld2" element={<Helloworld2/>}/>
                    <Route path="/loop" element={<Loop names={["C#", "Java", "Python", "JavaScript"]}/>}/>
                    <Route path="/condition" element={<Condition/>}/>
                    <Route path="/form" element={<Form/>}/>
                    <Route path="/loadingdata" element={<Loadingdata/>}/>
                    <Route path="/counter" element={<Counter/>}/>
                    <Route path="/loadposts" element={<Loadposts/>}/>
                    <Route path="/countreducer" element={<CountReducer/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/postlist" element={<PostList/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
