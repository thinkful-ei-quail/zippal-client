import React, { Component } from "react";
import './Policy.css'

class TermsConditions extends Component {
  render() {
    return (
      <article id='terms'>
        <h2>Zip Pal Terms of Service</h2>
        <section>
        <h3>1. Terms</h3>
        <p>
          By accessing the website at{" "}
          <a href="http://zippals.vercel.app/">http://zippals.vercel.app/</a>,
          you are agreeing to be bound by these terms of service, all applicable
          laws and regulations, and agree that you are responsible for
          compliance with any applicable local laws. If you do not agree with
          any of these terms, you are prohibited from using or accessing this
          site. The materials contained in this website are protected by
          applicable copyright and trademark law.
        </p>
        </section>
        <section>
        <h3>2. Disclaimers</h3>
        <p>
            The materials on Zip Pal's website are provided on an 'as is' basis.
            Zip Pal makes no warranties, expressed or implied, and hereby
            disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
         </p>
         <p>
            Further, Zip Pal does not warrant or make any representations
            concerning the accuracy, likely results, or reliability of the use
            of the materials on its website or otherwise relating to such
            materials or on any sites linked to this site.
          </p>
        </section>
        <section>
        <h3>3. Limitations</h3>
        <p>
          In no event shall Zip Pal or its suppliers be liable for any damages
          (including, without limitation, damages for loss of data or profit, or
          due to business interruption) arising out of the use or inability to
          use the materials on Zip Pal's website, even if Zip Pal or a Zip Pal
          authorized representative has been notified orally or in writing of
          the possibility of such damage. Because some jurisdictions do not
          allow limitations on implied warranties, or limitations of liability
          for consequential or incidental damages, these limitations may not
          apply to you.
        </p>
        </section>
        <section>
        <h3>4. Accuracy of materials</h3>
        <p>
          The materials appearing on Zip Pal's website could include technical,
          typographical, or photographic errors. Zip Pal does not warrant that
          any of the materials on its website are accurate, complete or current.
          Zip Pal may make changes to the materials contained on its website at
          any time without notice. However Zip Pal does not make any commitment
          to update the materials.
        </p>
        </section>
        <h3>5. Links</h3>
        <p>
          Zip Pal has not reviewed all of the sites linked to its website and is
          not responsible for the contents of any such linked site. The
          inclusion of any link does not imply endorsement by Zip Pal of the
          site. Use of any such linked website is at the user's own risk.
        </p>
        <h3>6. Modifications</h3>
        <p>
          Zip Pal may revise these terms of service for its website at any time
          without notice. By using this website you are agreeing to be bound by
          the then current version of these terms of service.
        </p>
        <h3>7. Governing Law</h3>
        <p>
          These terms and conditions are governed by and construed in accordance
          with the laws of United States and you irrevocably submit to the
          exclusive jurisdiction of the courts in that State or location.
        </p>
        <p>
          <a
            href="https://getterms.io"
            title="Generate a free terms of use document"
          >
            Terms of Use created with GetTerms.
          </a>
        </p>
      </article>
    );
  }
}

export default TermsConditions;
