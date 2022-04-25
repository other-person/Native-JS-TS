import {makeHairStyle, UserType} from "./10";

test ("referense type test", () => {

    let user: UserType = {
        name: 'Tarik',
        hair: 32,
        address: {
            title: 'Minsk'
        }
    }

    const awesomeUser = makeHairStyle(user, 2)

    user = awesomeUser;

    expect(awesomeUser.hair).toBe(16);
    expect(user.hair).toBe(32);
    expect(user.address).toBe(user.address);

    const awesomeUser = moveUser(user, 2)

    expect(awesomeUser.hair).toBe(16);
    expect(user.hair).toBe(32);
    expect(user.address).toBe(user.address);
})