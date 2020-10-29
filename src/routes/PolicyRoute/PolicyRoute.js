import React, {Component} from 'react'
import PrivacyPolicy from '../../components/Policy/PrivacyPolicy'
import TermsConditions from '../../components/Policy/Terms' 

class PrivacyRoute extends Component {
  render(){
    return (
      <>
        <div className='Privacy_Policy'>
          <PrivacyPolicy/>
        </div>
        <div className='Terms_and_Conditions'>
          <TermsConditions/>
        </div>
      </>
    );
  }
}

export default PrivacyRoute