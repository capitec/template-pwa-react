//import { OmniColorField, OmniIcon, OmniSelect } from "../../OmniComponents";
import { OmniColorField, ColorField } from '@capitec/omni-components-react/color-field';
import { OmniIcon } from '@capitec/omni-components-react/icon';
import { OmniLabel } from '@capitec/omni-components-react/label';
import { OmniHyperlink } from '@capitec/omni-components-react/hyperlink';
import { OmniSelect, Select } from '@capitec/omni-components-react/select';
import '../../common/BaseStyles.css';
import './ViewComponentsStyles.css';
import { useState } from 'react';

const initialColor: string | undefined = '#209dee';

const iconSizes = ['default', 'extra-small', 'small', 'medium', 'large'] as const;
type IconSizesTuple = typeof iconSizes;
type IconSize = IconSizesTuple[number];

function ViewComponents() {
    const [color, setColor] = useState(initialColor);
    const [size, setSize] = useState('large' as IconSize);

    function _colorChange(event: Event) {
        setColor((event.target as ColorField).value?.toString());
    }

    function _sizeChange(event: Event) {
        setSize((event.target as Select).value?.toString() as IconSize);
    }

    document.title = 'Components';

    return (
        <div className="host">
            <div className="info">
                <div className="item">
                    <OmniIcon size="large">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
                            <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
                        </svg>
                    </OmniIcon>
                    <div>
                        <OmniLabel label="Info" type="title"></OmniLabel>
                        <span>
                            This example illustrates the use of various input components, including iconography leveraging the <OmniHyperlink href="https://fonts.google.com/icons?icon.set=Material+Icons&query=material+icon" target="_blank">Google Material Icon</OmniHyperlink> library.
                        </span>
                    </div>
                </div>
            </div>
            <div
                className="preview"
                style={{
                    color: color
                }}>
                <OmniIcon size={size}>
                    <svg viewBox="0 0 459.419 459.419" style={{ width: '100%', height: '100%' }} width="100%" height="100%">
                        <path d="M83.115 172.911h293.189v286.508h82.473V106.956L223.178 0 .642 106.956v352.463h82.473z" />
                        <path d="M171.155 403.543h52.023v44.878h-52.023zm63.85 0h52.023v44.878h-52.023zm-127.692 0h52.023v44.878h-52.023zm63.842-61.558h52.023v44.878h-52.023zm-63.842 0h52.023v44.878h-52.023zm127.692 0h52.023v44.878h-52.023zm-63.85-61.549h52.023v44.878h-52.023zm-63.842 0h52.023v44.878h-52.023zm191.534 123.107h52.023v44.878h-52.023z" />
                    </svg>
                </OmniIcon>
                <OmniIcon size={size} icon="@material/dataset"></OmniIcon>
            </div>
            <div className="controls">
                <OmniColorField label="Colour" value={color} oninput={(e) => _colorChange(e)} />
                <OmniSelect label="Size" value={size} items={iconSizes as any} onchange={(e) => _sizeChange(e)} />
            </div>
        </div>
    );
}

export default ViewComponents;
