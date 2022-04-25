export type UserType = {
    name: string,
    hair: number,
    address: {title: string}
}
export type lapTopType = {
    title: string
}

export type UserWithlapTopType = {
    UserType & { lapTop: LapTopType}
}
 export function makeHairStyle (u: UserType, power: number ) {

    const copy = {
        ...u,

        hair: u.hair / power
    }
    //copy.hair =u.hair / power

    return copy;
}