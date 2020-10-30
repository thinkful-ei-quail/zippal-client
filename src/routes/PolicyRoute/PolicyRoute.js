import React, {Component} from 'react'
import PrivacyPolicy from '../../components/Policy/PrivacyPolicy'
import TermsConditions from '../../components/Policy/Terms' 

class PrivacyRoute extends Component {
  render(){
    return (
      <main id='Policy_Container'>
        <article id='Privacy_Policy'>
          <PrivacyPolicy/>
        </article>
        <article id='Terms_and_Conditions'>
          <TermsConditions/>
        </article>
      </main>
    );
  }
}

export default PrivacyRoute