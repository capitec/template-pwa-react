import { OmniButton } from '@capitec/omni-components-react/button';
import { OmniCheck, Check } from '@capitec/omni-components-react/check';
import { OmniEmailField, EmailField } from '@capitec/omni-components-react/email-field';
import { OmniIcon } from '@capitec/omni-components-react/icon';
import { OmniLabel } from '@capitec/omni-components-react/label';
import { OmniPinField, PinField } from '@capitec/omni-components-react/pin-field';
import { OmniRadio, OmniRadioGroup } from '@capitec/omni-components-react/radio';

import '../../common/BaseStyles.css';
import './ViewForm.css';

function ViewForm() {
    // Check the contents of the components to confirm if they are in a valid state.
    function _formSubmitted() {
        console.log('Form submitted');
        const check = document.querySelector('#form-check') as Check;
        const emailField = document.querySelector('#form-email-field') as EmailField;
        const pinField = document.querySelector('#form-pin-field') as PinField;

        if (check.checked && emailField.value && pinField.value) {
            alert('Your form is valid');
        } else {
            if (!emailField.value) {
                emailField.error = 'Please enter an email value';
            }

            if (!pinField.value) {
                pinField.error = 'Please enter a pin value';
            }

            if (!check.checked) {
                check.error = 'Please accept the terms';
            }
        }
    }

    // Event functions for Check, Email field and Pin field components
    function _checkClicked(event: Event) {
        const check = event.target as Check;
        check.error = '';
    }

    function _pinFieldInput(event: Event) {
        const pinField = event.target as PinField;
        pinField.error = '';
    }

    function _emailFieldInput(event: Event) {
        const emailField = event.target as EmailField;
        emailField.error = '';
    }

    // Used to override Omni component CSS variables
    const errorStyles = {
        '--omni-error-font-color': 'orangered',
        '--omni-error-border-color': 'orangered'
    } as React.CSSProperties & Record<string, string>;

    const suffixSlotStyle = {
        marginRight: '10px'
    } as React.CSSProperties & Record<string, string>;

    document.title = 'Form';

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
                            This example illustrates the use of various components to produce a basic form.
                        </span>
                    </div>
                </div>
            </div>
            <div className="preview">
                <div className="form-container">
                    <OmniLabel label="Input Examples" type="title" />
                    <OmniEmailField
                        id="form-email-field"
                        style={errorStyles}
                        label="Email"
                        hint="Your email address"
                        oninput={(e) => _emailFieldInput(e)}>
                        <OmniIcon size="medium" slot="suffix" className="suffix-slot">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
                                <path d="M22 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75V4A.75.75 0 0 1 2 3.25Zm-.75 3.19-8.82 6.174a.75.75 0 0 1-.76.06l-.1-.06-8.82-6.173V19.25h18.5V6.44Zm-.202-1.69H2.951L12 11.084l9.048-6.334Z" />
                            </svg>
                        </OmniIcon>
                    </OmniEmailField>
                    <OmniPinField
                        id="form-pin-field"
                        style={errorStyles}
                        label="Pin"
                        hint="Your pin"
                        oninput={(e) => _pinFieldInput(e)} />
                    <OmniRadioGroup label="Account Type" horizontal>
                        <OmniRadio label="Developer" />
                        <OmniRadio label="Admin" />
                        <OmniRadio label="Casual User" checked />
                    </OmniRadioGroup>
                    <OmniCheck id="form-check" label="I agree all fields above are populated" onclick={(e) => _checkClicked(e)} />
                    <OmniButton label="Submit" type="primary" onclick={() => _formSubmitted()} />
                </div>
            </div>
        </div>
    );
}

export default ViewForm;
