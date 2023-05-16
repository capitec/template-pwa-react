import { OmniIcon } from '@capitec/omni-components-react/icon';
import { OmniLabel } from '@capitec/omni-components-react/label';
import { OmniHyperlink } from '@capitec/omni-components-react/hyperlink';
import '../../common/BaseStyles.css';

export default function ViewHome() {

    document.title = 'Home';

    return (
       <div className='host'>
            <div className="info">
                <div className="item">
                    <OmniIcon size="large" symmetrical>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
                            <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"/>
                            <path d="M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83zm4.5 1.84c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z"/>
                        </svg>
                    </OmniIcon>
                    <div>
                        <OmniLabel label="Documentation" type="title"></OmniLabel>
                        <span>
                            You can find official documentation for the <OmniHyperlink href="https://capitec.github.io/open-source/docs/omni-components/" target="_blank">components</OmniHyperlink> here. Also refer to the <span style={{ fontFamily: 'monospace' }}>README.MD</span> file in this project for more setup info.
                        </span>
                    </div>
                </div>
                <div className="item">
                    <OmniIcon size="large" symmetrical>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
                            <path d="m21.67 18.17-5.3-5.3h-.99l-2.54 2.54v.99l5.3 5.3c.39.39 1.02.39 1.41 0l2.12-2.12a.996.996 0 0 0 0-1.41zm-2.83 1.42-4.24-4.24.71-.71 4.24 4.24-.71.71z"></path>
                            <path d="m17.34 10.19 1.41-1.41 2.12 2.12a3 3 0 0 0 0-4.24l-3.54-3.54-1.41 1.41V1.71l-.7-.71-3.54 3.54.71.71h2.83l-1.41 1.41 1.06 1.06-2.89 2.89-4.13-4.13V5.06L4.83 2.04 2 4.87 5.03 7.9h1.41l4.13 4.13-.85.85H7.6l-5.3 5.3a.996.996 0 0 0 0 1.41l2.12 2.12c.39.39 1.02.39 1.41 0l5.3-5.3v-2.12l5.15-5.15 1.06 1.05zm-7.98 5.15-4.24 4.24-.71-.71 4.24-4.24.71.71z"></path>
                        </svg>
                    </OmniIcon>
                    <div>
                        <OmniLabel label="Tooling" type="title"></OmniLabel>
                        <span>
                            We've included IDE support for <OmniHyperlink href="https://code.visualstudio.com/" target="_blank">VS Code</OmniHyperlink>. Additionally, bundling is supported via <OmniHyperlink href="https://www.npmjs.com/package/react-scripts" target="_blank">React Scripts</OmniHyperlink> (based on <OmniHyperlink href="https://webpack.js.org/" target="_blank">webpack</OmniHyperlink>), including chunking support. Static code analysis provided by <OmniHyperlink href="https://eslint.org/" target="_blank">ES Lint</OmniHyperlink> and code formatting provided by <OmniHyperlink href="https://prettier.io/" target="_blank">Prettier</OmniHyperlink>. Testing of components and views provided by <OmniHyperlink href="https://playwright.dev/" target="_blank">Playwright</OmniHyperlink>.
                        </span>
                    </div>
                </div>
            </div>
       </div>
    );
}
