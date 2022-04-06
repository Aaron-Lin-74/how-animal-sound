import React from 'react'
import styled from 'styled-components'

function Terms() {
  return (
    <Container>
      <TextWrap>
        <h2>LEGAL NOTICE, TERMS AND PRIVACY POLICY</h2>
        <h2>(ENGLISH)</h2>
        <h3>Liability for Content</h3>
        <p>
          While the contents of our pages have been created with utmost care and
          due diligence, we cannot assume liability for the completeness and
          timeliness of the contents. In accordance with general law, as service
          provider we are responsible for our own content on this web page.
          However, we as service provider, are neither obliged to monitor
          transmitted or stored external information, nor to research
          circumstances that suggest an illegal activity. Obligations to remove
          or block the use of information remain, in accordance with legal
          regulations, unaffected. Any liability in this respect can be assumed
          only from the moment that knowledge of the specific breach of law is
          obtained. In the event that the corresponding violations become known,
          we shall remove these contents immediately.
        </p>
        <h3>Liability for Links</h3>
        <p>
          Our website contains links to external websites operated by third
          parties, on whose contents we have no influence. Therefore, we cannot
          assume liability for these contents. Instead, it is the relevant
          supplier or operator of the linked web pages who is responsible for
          the content of these pages. The linked pages were inspected for
          possible legal infringements at the time the link was established. At
          the time of linking, no unlawful contents were detectable. Permanent
          monitoring of the content of the linked pages is infeasible without
          any specific indication of an infringement of rights. In the event
          that corresponding violations become known, we shall remove the
          corresponding links immediately.
        </p>
        <h3>Copyright</h3>
        <p>
          The contents and works on these websites, as prepared and displayed by
          its operator, are subject to copyright law. Their duplication,
          processing, distribution, or any form of commercialization beyond the
          scope of the copyright law requires the written consent of the
          respective author or creator. Copies and downloads are allowed solely
          for private and non-commercial purposes. Insofar as this page&apos;s
          contents were not created by its operator, third-party copyrights will
          be respected and observed. Should you still have reason to believe
          that a copyright violation has occurred despite the precautionary
          measures taken, we kindly ask you to notify us. In the event that the
          corresponding violations become known, we shall remove this content
          immediately.
        </p>
        <h3>Data and Privacy Protection/Data Privacy</h3>
        <p>
          It is usually possible to use our web page without providing personal
          information. Collection of personal data (e.g. name, address, or
          email-address) will be optional where possible. Without your explicit
          consent, your data will not be passed on to third parties. Further
          particulars are governed by our General Terms and Conditions.
        </p>
        <p>
          We would like to point out that the transfer of data via the internet
          (e.g. when communicating via e-mail) may involve security gaps. A
          complete protection of data against third-party access is impossible.
        </p>
        <p>
          We explicitly prohibit the use of the contact data published within
          the framework of this imprint by third parties for sending
          non-requested advertising material and information. The operator of
          the pages reserve the right to take legal action in the case of
          transmission of non-solicited advertising material (e. g. spam mail).
        </p>
        <h3>Data Privacy Protection when using Newsletter</h3>
        <p>
          We offer you on our site the opportunity to subscribe to our
          newsletter. With this newsletter we inform you regularly about our
          updates. To receive our newsletter you need a valid e-mail address. We
          will check the e-mail address you entered to verify that you are the
          owner of the specified e-mail address or whose owner is authorized to
          receive the newsletter. By registering for our newsletter, we will
          save your IP address and the date and time of your registration. This
          is in the event that a third party abuses your e-mail address and
          subscribes to our newsletter without your knowledge, as a hedge on our
          part. Further data will not be collected on our part. The data
          collected in this way will be used exclusively to obtain our
          newsletter. A passing on to third does not take place. A comparison of
          the data collected with data, which may be collected by other
          components of our site, is also not done. You can cancel the
          subscription to this newsletter at any time. Details can be found in
          the confirmation e-mail as well as in each individual newsletter.
        </p>
        <h3>Server Logs</h3>
        <p>
          For technical reasons u.a. The following data, which your Internet
          browser transmits to us or to our web space provider, is recorded
          (so-called server log files):
        </p>
        <ul>
          <li>Browser type and version</li>
          <li>used operating system</li>
          <li>Website from which you visit us (Referrer URL)</li>
          <li>Website you visit</li>
          <li>Date and time of your access</li>
          <li>Your Internet Protocol (IP) address.</li>
        </ul>
        <p>
          These anonymous data are stored separately from any personal
          information that you may provide and so do not allow any conclusions
          to be drawn about a particular person. They are evaluated for
          statistical purposes in order to optimize our website and our offers.
        </p>
      </TextWrap>
    </Container>
  )
}

export default Terms

const Container = styled.main`
  padding: 30px calc(3.5vw + 5px);
  overflow: hidden;
  background: url('/images/home-background.png') cover no-repeat fixed center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const TextWrap = styled.article`
  width: 700px;
  h2 {
    text-align: center;
    padding: 20px 0;
  }
  h3 {
    padding: 15px 0;
  }
  p {
    padding: 5px 0;
  }
`
