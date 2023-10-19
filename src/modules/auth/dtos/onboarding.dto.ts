import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, MinLength } from 'class-validator';

export class OnboardingDto {
  @ApiProperty({
    description: 'The user email',
    type: String,
    format: 'email',
    example: 'example@email.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The user password',
    type: String,
    example: 'password',
  })
  @MinLength(8)
  password: string;

  @ApiProperty({
    description: 'The user username',
    type: String,
    example: 'username123',
  })
  @MinLength(3)
  username: string;
}