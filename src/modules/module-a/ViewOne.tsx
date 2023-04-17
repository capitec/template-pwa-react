import { OmniLabel } from '@capitec/omni-components-react/label';
import '../../common/BaseStyles.css';

function ViewOne() {
  return (
    <>
        {/* Review the naming of this React component.*/}
        <div className="host">
          <OmniLabel label='Welcome' type='title'/>
          <OmniLabel label='Simple starter template that utilises React + Webpack, navigate around for some more examples.' type='subtitle' />
        </div>    
    </>
  );
}

export default ViewOne;