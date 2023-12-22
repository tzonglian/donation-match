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
  };

export const dummyChallenge1 = {
    id: 1,
    username: "ashenkestrel",
    pledgeName: "Dummy Pledge Name 1",
    useUsername: false,
    pledgeAmountTotal: 1000,
    pledgePerUser: 100,
    pledgeAmountRemaining: 600,
    charitiesAllowed: new Set(["Against Malaria Foundation"]),
    personalMessage:
      "Example personal message: Against Malaria Foundation is an extremely cost-effective charity that donates mosquito nets to prevent malaria.  For every 1000 nets donated (which cost about $2 each), about one life is saved.  This cause is really important to me.  Also, I really hate mosquitoes.",
    expires: new Date("2024-12-31"),
    // potentialMatchers: new Set([1]),
    // matchedUsers: new Set([1]),
    // BELOW: DUMMY DATA FOR NOW
    numMatchers: 5,
    againstMalariaURL: "https://www.againstmalaria.com/"
  };

export const dummyChallenge2 = {
    id: 2,
    pledgeName: "Dummy Pledge Name 2",
    useUsername: true,
    pledgeAmountTotal: 99,
    pledgePerUser: 1,
    pledgeAmountRemaining: 99,
  };
