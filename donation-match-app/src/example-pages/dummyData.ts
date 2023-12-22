export const dummyUser1 = {
    id: 1,
    firstName: "Annabel",
    lastName: "Lee",
    email: "ashen.kestrel@gmail.com",
    password: "password",
    username: "ashenkestrel",
    nickname: "Ashen Kestrel",
    profilePic: "",
    challengeIds: new Set([1, 2]),
    joinDate: new Date("2023-12-22"),
  };

export const dummyChallenge1 = {
    id: 1,
    username: "ashenkestrel",
    name: "Raise funds for Against Malaria Foundation!",
    useUsername: false,
    pledgeAmountTotal: 1000,
    pledgePerUser: 100,
    pledgeAmountRemaining: 600,
    charities: new Set(["Against Malaria Foundation"]),
    personalMessage:
      "Example personal message: Against Malaria Foundation is an extremely cost-effective charity that donates mosquito nets to prevent malaria.  For every 1000 nets donated (which cost about $2 each), about one life is saved.  This cause is really important to me.  Also, I really hate mosquitoes.",
    expires: new Date("2024-12-31"),
    // potentialMatchers: new Set([1]),
    // matchedUsers: new Set([1]),
    // BELOW: DUMMY DATA FOR NOW
    numMatchers: 10,
    numMatchComplete: 4,
    againstMalariaURL: "https://www.againstmalaria.com/"
  };

export const dummyChallenge2 = {
    id: 2,
    username: "ashenkestrel",
    name: "Raise funds for Give Directly!",
    useUsername: true,
    pledgeAmountTotal: 99,
    pledgePerUser: 5,
    pledgeAmountRemaining: 99,
    charities: new Set(["Give Directly"]),
    personalMessage:
      "Give Directly is an effective charity!",
    expires: new Date("2023-12-01"),
    // potentialMatchers: new Set([1]),
    // matchedUsers: new Set([1]),
    // BELOW: DUMMY DATA FOR NOW
    numMatchers: 99,
    numMatchComplete: 0,
  };

  export const dummyChallenge3 = {
    id: 3,
    username: "R. Braun",
    name: "Yo, join my challenge",
    useUsername: true,
    pledgeAmountTotal: 1000,
    pledgePerUser: 20,
    pledgeAmountRemaining: 555,
    charities: new Set(["Malaria Consortium, Give Directly"]),
    personalMessage:
      "These are my favorite charities, and I want to raise money for them!",
    expires: new Date("2023-12-01"),
    // potentialMatchers: new Set([1]),
    // matchedUsers: new Set([1]),
    // BELOW: DUMMY DATA FOR NOW
    numMatchers: 128,
    numMatchComplete: 22,
  };