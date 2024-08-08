import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LogActivity from "./pages/LogActivity";
import ActivityHistory from "./pages/ActivityHistory";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import { FitnessProvider } from "./context/FitnessContext";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <FitnessProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/logactivity" element={<LogActivity />} />
              <Route path="/activityhistory" element={<ActivityHistory />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </FitnessProvider>
    </div>
  );
}

export default App;
