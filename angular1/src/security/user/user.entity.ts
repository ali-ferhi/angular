
export class User {

    id: number;

    name: string;

    pass: string;

    passConfirm: string;

    roles: Array<Role> = [];

    isWriter(): boolean {
        return this.isOfRole(RoleName.writer);
    }
    
    isAdmin(): boolean {
        return this.isOfRole(RoleName.admin);
    }

    isOfRole(roleName : RoleName): boolean {
        for(let role of this.roles) {
            if(role.name == roleName) {                  
                return true;
            }
        }
        return false;
    }
}

export class Role {
    id: number;
    name: RoleName;
}

export enum RoleName {
    reader = "reader",
    writer = "writer",
    admin = "admin"
}