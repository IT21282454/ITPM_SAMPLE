import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Challenges from "./pages/Challenges";
import GlobalContextProvider from "./GlobalContext";
import QuizDetails from "./pages/QuizDetails";
import QuizRetrieve from "./pages/Admin/QuizRetrieve";
import QuizAdd from "./pages/Admin/QuizAdd";
import QuizEdit from "./pages/Admin/QuizEdit";
import ChooseChallenge from "./pages/ChooseChallenge";

function App() {
    return (
        <div>
            <BrowserRouter>
                <GlobalContextProvider>
                    <Routes>
                        <Route path="/" element={<Challenges />} />
                        <Route
                            path="/quizDetails/:id"
                            element={<QuizDetails />}
                        />
                        <Route
                            path="/chooseChallenge/:id"
                            element={<ChooseChallenge />}
                        />


                        <Route
                            path="/admin/retrieve"
                            element={<QuizRetrieve />}
                        />
                        <Route path="/admin/add" element={<QuizAdd />} />
                        <Route path="/admin/edit/:id" element={<QuizEdit />} />
                    </Routes>
                </GlobalContextProvider>
            </BrowserRouter>

            <Toaster position="top-left" />
        </div>
    );
}

export default App;
