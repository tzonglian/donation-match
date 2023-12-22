import { useEffect, useState } from "react";
import { dummyUser1, dummyChallenge1 } from "./dummyData";

export default function ExampleChallengePage() {
  const [nameToUse, setNameToUse] = useState(dummyChallenge1.username);

  useEffect(() => {
    if (!dummyChallenge1.useUsername) {
      setNameToUse(dummyUser1.firstName);
    }
  }, []);

  function openCharityWebsite() {
    window.open(`${dummyChallenge1.againstMalariaURL}`, "_blank");
  }

  return (
    <>
      <div className="section super-section">
        <h2>
          {/* TODO cases: if 1, if 2, if 3-5, if 6+ */}
          {/* TODO: username links to their profile page */}
          {/* TODO: charity name links to their website */}
          <u>{nameToUse}</u> challenges you to donate to{" "}
          <a
            className="section-header-link"
            href={dummyChallenge1.againstMalariaURL}
            target="_blank"
            rel="noreferrer"
          >
            <u>{dummyChallenge1.charitiesAllowed}</u>
          </a>
        </h2>
        <p>
          <i>"{dummyChallenge1.personalMessage}"</i>
        </p>
      </div>
      <div className="section">
        <h2>How does this work?</h2>
        <p>
          {nameToUse} has agreed to match your donations to{" "}
          <u>{dummyChallenge1.charitiesAllowed}</u>, up to $
          <u>{dummyChallenge1.pledgePerUser}</u>. {nameToUse} has challenged{" "}
          {dummyChallenge1.numMatchers - 1} other people to match this, for a
          maximum of $<u>{dummyChallenge1.pledgeAmountTotal}</u>. There is $
          <u>{dummyChallenge1.pledgeAmountRemaining}</u> left in the matching
          pot until <u>{dummyChallenge1.expires.toLocaleString()}</u>!
        </p>
      </div>
      <div className="section">
        <h2>How do I participate?</h2>
        <p>
          1. Click the "Donate" button below to make a donation to{" "}
          <u>{dummyChallenge1.charitiesAllowed}</u>. <br />
          You will be redirected to the donation page for this charity. <br />
          <br />
          2. Once you have made your donation, take a screenshot of the donation
          receipt. <br /> Return to this page to upload a screenshot of it.{" "}
          <br /> <br />
          3. {nameToUse} will verify the donation and match!
        </p>
      </div>
      <div className="button-group">
        <button onClick={openCharityWebsite}>
          I accept the challenge to donate!
        </button>
        <button>I am uploading screenshot proof!</button>
      </div>
    </>
  );
}
