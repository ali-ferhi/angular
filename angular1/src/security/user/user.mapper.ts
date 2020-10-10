import { NgForm } from '@angular/forms';
import { User, Role, RoleName } from './user.entity';
import { Token, RoleInToken } from './token.entity';

export class UserMapper {

  static mapUserFromRegisterForm(userFromForm: any): User {
    let toReturn = new User();
    toReturn.name = userFromForm.name;
    toReturn.pass = userFromForm.pass;
    toReturn.passConfirm = userFromForm.passConfirm;
    toReturn.roles = this.mapRolesFromRegisterForm(userFromForm.roles);
    return toReturn;
  }

  static mapRolesFromRegisterForm(roleFromForm: string): Array<Role> {
    let role = new Role();
    role.name = UserMapper.mapToRoleNameEnum(roleFromForm);
    let toReturn = new Array<Role>(role);
    return toReturn;
  }

  static mapUserFromToken(token: Token): User {
    let toReturn = new User();
    toReturn.name = token.sub;
    let userRolesFromToken = token.roles;  
    toReturn.roles = UserMapper.mapRolesFromToken(userRolesFromToken);
    return toReturn;
  }

  static mapRolesFromToken(rolesOfToken: Array<RoleInToken>): Array<Role> {
    let toReturn: Array<Role> = [];
    let role: Role;
    rolesOfToken.forEach( roleOfToken => {      
      role = new Role();
      role.name = UserMapper.mapToRoleNameEnum(roleOfToken.authority);
      toReturn.push(role);
    });
    return toReturn;
  }

  static mapToRoleNameEnum(roleName: string): RoleName {
    switch(roleName) {
      case "reader": {
        return RoleName.reader;
      } case "writer": {
        return RoleName.writer;
      } case "admin": {
        return RoleName.admin;
      } default : {
        return null;
      }
    }
  }

}