import { OmniHyperlink } from '@capitec/omni-components-react/hyperlink';
import { OmniLabel } from '@capitec/omni-components-react/label';
import { OmniSwitch } from '@capitec/omni-components-react/switch';

import { lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const ViewHome = lazy(() => import(/* webpackChunkName: "module_a" */ './modules/module-a/ViewHome'));
const ViewComponents = lazy(() => import(/* webpackChunkName: "module_a" */ './modules/module-a/ViewComponents'));
const ViewThree = lazy(() => import(/* webpackChunkName: "module_b" */ './modules/module-b/ViewForm'));

function App() {
    const darkMediaQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : undefined;
    const [darkMode, setDarkMode] = useState(darkMediaQuery?.matches ?? false);
    
    darkMediaQuery?.addEventListener('change', (m: MediaQueryListEvent) => {
        if (!darkMode && m.matches) {
            toggleDarkMode();
        } else if (darkMode && !m.matches) {
            toggleDarkMode();
        }
    });

    function toggleDarkMode() {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.setAttribute('dark', '');
        } else {
            document.documentElement.removeAttribute('dark');
        }
    }

    if (darkMode) {
        document.documentElement.setAttribute('dark', '');
    }

    return (
        <div className="container">
            <header>
                <img src="logo.png" alt="Omni Logo" />
                <OmniLabel>Omni + React</OmniLabel>
            </header>
            <div className="navbar">
                <nav>
                    <OmniHyperlink href="/">Home</OmniHyperlink>
                    <OmniHyperlink href="/components" label="Components"></OmniHyperlink>
                    <OmniHyperlink href="/form" label="Form"></OmniHyperlink>
                </nav>
                <OmniSwitch label="Dark Mode" checked={darkMode} onvaluechange={() => toggleDarkMode()}></OmniSwitch>
            </div>
            <div className="router">
                <Router>
                    <Routes>
                        <Route path="" element={<ViewHome />}/>
                        <Route path="components" element={<ViewComponents />} />
                        <Route path="form" element={<ViewThree />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;
