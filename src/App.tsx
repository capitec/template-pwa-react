import { OmniHyperlink } from '@capitec/omni-components-react/hyperlink';
import { OmniLabel } from '@capitec/omni-components-react/label';
import { OmniSwitch } from '@capitec/omni-components-react/switch';

import { lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const ViewOne = lazy(() => import(/* webpackChunkName: "module_a" */ './modules/module-a/ViewOne'));
const ViewTwo = lazy(() => import(/* webpackChunkName: "module_a" */ './modules/module-a/ViewTwo'));
const ViewThree = lazy(() => import(/* webpackChunkName: "module_b" */ './modules/module-b/ViewThree'));

function App() {
    const _darkMediaQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : undefined;

    const [darkMode, setDarkMode] = useState(_darkMediaQuery?.matches ?? false);

    function _darkPreferenceChange(m: MediaQueryListEvent) {
        if (!darkMode && m.matches) {
            _toggleDarkMode();
        } else if (darkMode && !m.matches) {
            _toggleDarkMode();
        }
    }
    _darkMediaQuery?.addEventListener('change', _darkPreferenceChange);

    function _toggleDarkMode() {
        setDarkMode(!darkMode);
        if (!darkMode) {
            document.documentElement.setAttribute('dark', '');
        } else {
            document.documentElement.removeAttribute('dark');
        }
    }

    return (
        <div className="container">
            <header>
                <img src="logo.png" alt="Omni Logo" />
                <OmniLabel>Omni Starter React</OmniLabel>
            </header>
            <div className="navbar">
                <nav>
                    <OmniHyperlink href="/">One</OmniHyperlink>
                    <OmniHyperlink href="/two" label="Two"></OmniHyperlink>
                    <OmniHyperlink href="/three" label="Three"></OmniHyperlink>
                </nav>
                <OmniSwitch label="Dark Mode" checked={darkMode} onvaluechange={() => _toggleDarkMode()}></OmniSwitch>
            </div>
            <div className="router">
                <Router>
                    <Routes>
                        <Route path="/" element={<ViewOne />} />
                        <Route path="two" element={<ViewTwo />} />
                        <Route path="three" element={<ViewThree />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;
