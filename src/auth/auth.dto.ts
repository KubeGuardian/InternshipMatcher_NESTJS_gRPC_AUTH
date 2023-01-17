import { DefaultValuePipe } from '@nestjs/common';
import { IsEmail, isEnum, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { LoginRequest, RegisterRequest, ValidateRequest } from './auth.pb';
import { roleEnum } from './auth.roles.enum';

export class LoginRequestDto implements LoginRequest {
  @IsEmail()
  public readonly email: string;

  @IsString()
  public readonly password: string;
}

export class RegisterRequestDto implements RegisterRequest {
  
  @IsEmail()
  public readonly email: string;

  @IsString()
  @MinLength(8)
  public readonly password: string;

  @IsString()
  public readonly name: string;


  @IsOptional()
  public readonly role: roleEnum;
  
  @IsOptional()
  public readonly usefulLinks: string[];
}

export class ValidateRequestDto implements ValidateRequest {
  @IsString()
  public readonly token: string;
}
