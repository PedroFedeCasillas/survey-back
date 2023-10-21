import { IsNotEmpty, IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateAnswerDto {
  @IsNotEmpty()
  @IsString()
  full_name: string;

  @IsNotEmpty()
  @IsString()
  phone_number: string;

  @IsOptional()
  @IsString()
  start_date: string;

  @IsNotEmpty()
  @IsString()
  preferred_language: string;

  @IsNotEmpty()
  @IsString()
  how_found: string;

  @IsOptional()
  @IsBoolean()
  newsletter_subscription: boolean;
}

export class UpdateAnswerDto {
    @IsOptional()
    @IsString()
    full_name: string;
  
    @IsOptional()
    @IsString()
    phone_number: string;
  
    @IsOptional()
    @IsString()
    start_date: string;
  
    @IsOptional()
    @IsString()
    preferred_language: string;
  
    @IsOptional()
    @IsString()
    how_found: string;
  
    @IsOptional()
    @IsBoolean()
    newsletter_subscription: boolean;
  }