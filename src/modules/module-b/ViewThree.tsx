//import { OmniButton, OmniCheck, OmniEmailField, OmniLabel, OmniPinField, OmniRadioGroup, OmniRadio } from '../../OmniComponents';
import { OmniButton } from '@capitec/omni-components-react/button';
import { OmniCheck, Check } from '@capitec/omni-components-react/check';
import { OmniEmailField, EmailField } from '@capitec/omni-components-react/email-field';
import { OmniIcon } from '@capitec/omni-components-react/icon';
import { OmniLabel } from '@capitec/omni-components-react/label';
import { OmniPinField, PinField } from '@capitec/omni-components-react/pin-field';
import { OmniRadio, OmniRadioGroup } from '@capitec/omni-components-react/radio';

import '../../common/BaseStyles.css';
import './ViewThreeStyles.css';

let formValid: boolean = false;

function ViewThree() {
    // Check the contents of the components to confirm if they are in a valid state.
    function _formSubmitted() {
        console.log('Form submitted');
        const check = document.querySelector('#form-check') as Check;
        const emailField = document.querySelector('#form-email-field') as EmailField;
        const pinField = document.querySelector('#form-pin-field') as PinField;

        if (check.checked && emailField.value && pinField.value) {
            //TODO replace with modal or toast once available
            formValid = true;
            alert('Your form is valid');
        } else {
            formValid = false;
            if (!emailField.value) {
                emailField.error = 'Please enter an email value';
            }

            if (!pinField.value) {
                pinField.error = 'Please enter a pin value';
            }

            if (!check.checked) {
                check.error = 'Please tick the checkbox if your fields have values';
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

    return (
        <div className="preview">
            <div className="form-container">
                <OmniLabel label="Input Examples" type="title" />
                <OmniEmailField
                    style={errorStyles}
                    id="form-email-field"
                    label="Email field"
                    hint="Enter a valid email address"
                    oninput={(e) => _emailFieldInput(e)}>
                    <OmniIcon size="medium" slot="suffix" className="suffix-slot">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%">
                            <path d="M22 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75V4A.75.75 0 0 1 2 3.25Zm-.75 3.19-8.82 6.174a.75.75 0 0 1-.76.06l-.1-.06-8.82-6.173V19.25h18.5V6.44Zm-.202-1.69H2.951L12 11.084l9.048-6.334Z" />
                        </svg>
                    </OmniIcon>
                </OmniEmailField>
                <OmniPinField
                    style={errorStyles}
                    id="form-pin-field"
                    label="Pin field"
                    hint="Enter a pin consisting of numeric values"
                    oninput={(e) => _pinFieldInput(e)}
                />
                <OmniRadioGroup>
                    <OmniRadio label="Developer" />
                    <OmniRadio label="Admin" />
                    <OmniRadio label="Casual User" checked />
                </OmniRadioGroup>
                <OmniCheck id="form-check" label="I agree all fields above are populated" onclick={(e) => _checkClicked(e)} />
                <OmniButton label="Submit" type="primary" onclick={() => _formSubmitted()} />
            </div>
        </div>
    );
}

export default ViewThree;
