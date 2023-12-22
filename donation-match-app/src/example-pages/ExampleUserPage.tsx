import { useEffect, useState } from "react";
import {
  dummyUser1,
  dummyChallenge1,
  dummyChallenge2,
  dummyChallenge3,
} from "./dummyData";
import example_user from "./example_user.png";

export default function ExampleUserPage() {
  const [nameToUse, setNameToUse] = useState(dummyChallenge1.username);

  useEffect(() => {
    if (!dummyChallenge1.useUsername) {
      setNameToUse(dummyUser1.firstName);
    }
  }, []);

  return (
    <>
      {/* TODO: Reusable components for each challenge */}
      <div className="section user-section">
        <img
          src={example_user}
          alt="example user icon"
          width="100px"
          height="100px"
        />
        <h2>{nameToUse}'s Challenges </h2>
        <p className="user-metadata">
          Join date: {dummyUser1.joinDate.toLocaleDateString()} <br />
          Challenges hosted: {dummyUser1.challengeIds.size} <br />
          Challenges participated: 1 <br />
        </p>
      </div>
      <div className="section">
        <h2>Challenges hosted</h2>

        <div className="challenge-metadata-container">
          <div className="challenge-metadata-left">
            <h3>
              {dummyChallenge1.name} <br />
            </h3>
            <p>
              Charities supporting <br />
              {dummyChallenge1.charities} <br />
            </p>
          </div>
          <div className="challenge-metadata-mid">
            <p>
              <i>"{dummyChallenge1.personalMessage}"</i>
            </p>
          </div>
          <div className="challenge-metadata-right">
            <p>
              Pledge Amount Total: ${dummyChallenge1.pledgeAmountTotal} <br />
              Pledge Amount Remaining: ${
                dummyChallenge1.pledgeAmountRemaining
              }{" "}
              <br />
              Pledge Per Friend: ${dummyChallenge1.pledgePerUser} <br />
              Number of Friends Challenged: {dummyChallenge1.numMatchers} <br />
              Number of Friends Matched: {dummyChallenge1.numMatchComplete}{" "}
              <br />
              {/* Add logic for date in past, cannot edit! */}
              Expires: {dummyChallenge1.expires.toLocaleDateString()} <br />
              Challenge ID: {dummyChallenge1.id} <br />
              <br />
            </p>
          </div>
        </div>

        <div className="challenge-metadata-container">
          <div className="challenge-metadata-left">
            <h3>
              {dummyChallenge2.name} <br />
            </h3>
            <p>
              Charities supporting: <br />
              {dummyChallenge2.charities} <br />
            </p>
          </div>
          <div className="challenge-metadata-mid">
            <p>
              <i>"{dummyChallenge2.personalMessage}"</i>
            </p>
          </div>
          <div className="challenge-metadata-right">
            <p>
              Pledge Amount Total: ${dummyChallenge2.pledgeAmountTotal} <br />
              Pledge Amount Remaining: ${
                dummyChallenge2.pledgeAmountRemaining
              }{" "}
              <br />
              Pledge Per Friend: ${dummyChallenge2.pledgePerUser} <br />
              Number of Friends Challenged: {dummyChallenge2.numMatchers} <br />
              Number of Friends Matched: {dummyChallenge2.numMatchComplete}{" "}
              <br />
              Expires: {dummyChallenge2.expires.toLocaleDateString()} <br />
              Challenge ID: {dummyChallenge2.id} <br />
              <br />
            </p>
          </div>
        </div>

        <div>
          <button className="create-challenge-button">
            Create a new challenge!
          </button>
        </div>
      </div>

      <div className="section">
        <h2>Challenges participated</h2>
        <div className="challenge-metadata-container">
          <div className="challenge-metadata-left">
            <h3>
              {dummyChallenge3.name} <br />
            </h3>
            <p>
              by {dummyChallenge3.username} <br />
            </p>
            <p>
              Charities supported: <br />
              {dummyChallenge3.charities} <br />
            </p>
          </div>
          <div className="challenge-metadata-mid">
            <p>
              <i>"{dummyChallenge3.personalMessage}"</i>
            </p>
          </div>
          <div className="challenge-metadata-right">
            <p>
              Pledge Amount Total: ${dummyChallenge3.pledgeAmountTotal} <br />
              Pledge Amount Remaining: ${
                dummyChallenge3.pledgeAmountRemaining
              }{" "}
              <br />
              Pledge Per Friend: ${dummyChallenge3.pledgePerUser} <br />
              Number of Friends Challenged: {dummyChallenge3.numMatchers} <br />
              Number of Friends Matched: {dummyChallenge3.numMatchComplete}{" "}
              <br />
              Expires: {dummyChallenge3.expires.toLocaleDateString()} <br />
              Challenge ID: {dummyChallenge3.id} <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
