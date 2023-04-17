//import { OmniColorField, OmniIcon, OmniSelect } from "../../OmniComponents";
import { OmniColorField, ColorField } from '@capitec/omni-components-react/color-field';
import { OmniIcon } from '@capitec/omni-components-react/icon';
import { OmniSelect, Select } from '@capitec/omni-components-react/select';
import '../../common/BaseStyles.css';
import './ViewTwoStyles.css';
import { useState } from 'react';

const initialColor: string | undefined = '#209dee';

const iconSizes = ['default', 'extra-small', 'small', 'medium', 'large'] as const;
type IconSizesTuple = typeof iconSizes;
type IconSize = IconSizesTuple[number];

function ViewTwo() {
    const [color, setColor] = useState(initialColor);
    const [size, setSize] = useState('large' as IconSize);

    function _colorChange(event: Event) {
        setColor((event.target as ColorField).value?.toString());
    }

    function _sizeChange(event: Event) {
        setSize((event.target as Select).value?.toString() as IconSize);
    }

    return (
        <div className="host">
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

export default ViewTwo;
