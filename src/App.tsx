import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { Admin } from "./pages/Admin";
import { UserProvider } from "@/context/UserContext";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppWidget } from "@/components/ui/WhatsAppWidget";

function App() {
    return (
        <UserProvider>
            <Router>
                <div className="relative min-h-screen bg-white overflow-x-hidden">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/admin" element={<Admin />} />
                    </Routes>
                    <Footer />
                    <WhatsAppWidget />
                </div>
            </Router>
        </UserProvider>
    );
}

export default App;