import { OmniHyperlink } from '@capitec/omni-components-react/hyperlink';
import { OmniLabel } from '@capitec/omni-components-react/label';
import { OmniSwitch } from '@capitec/omni-components-react/switch';

import { lazy, useState, Suspense } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';

const ViewHome = lazy(() => import(/* webpackChunkName: "module_a" */ './modules/module-a/ViewHome'));
const ViewComponents = lazy(() => import(/* webpackChunkName: "module_a" */ './modules/module-a/ViewComponents'));
const ViewForm = lazy(() => import(/* webpackChunkName: "module_b" */ './modules/module-b/ViewForm'));

export default function App() {
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
    
    let navigate = useNavigate();

    function performNavigation(e: MouseEvent, path: string) {
        e.preventDefault();
        navigate(path);
    }

    return (
        <div className="container">
            <header>
                <img src="logo.png" alt="Omni Logo" />
                <OmniLabel>Omni + React</OmniLabel>
            </header>
            <div className="navbar">
                <nav>
                    <OmniHyperlink href="/" onclick={(e) => performNavigation(e, '/')}>Home</OmniHyperlink>
                    <OmniHyperlink href="/components" label="Components" onclick={(e) => performNavigation(e, '/components')}></OmniHyperlink>
                    <OmniHyperlink href="/form" label="Form" onclick={(e) => performNavigation(e, '/form')}></OmniHyperlink>
                </nav>
                <OmniSwitch checked={darkMode} onvaluechange={() => toggleDarkMode()}><span>Dark Mode</span></OmniSwitch>
            </div>
            <div className="router">
                <Routes>
                    <Route path="/" element={<Suspense><ViewHome /></Suspense>} />
                    <Route path="/components" element={<Suspense><ViewComponents /></Suspense>} />
                    <Route path="/form" element={<Suspense><ViewForm /></Suspense>}/>
                </Routes>
            </div>
        </div>
    );
}
