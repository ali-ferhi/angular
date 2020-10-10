
export class Token {

    sub: string;
    roles: Array<RoleInToken>;
}

export class RoleInToken {
    authority: string;
}