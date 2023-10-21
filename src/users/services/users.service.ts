import { Injectable } from '@nestjs/common';
import { CreateAnswerDto, UpdateAnswerDto } from '../dto/user.dto';
import { UserEntity } from '../entities/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  public async createUsers(body: CreateAnswerDto): Promise<UserEntity> {
    try {
      return await this.userRepository.save(body);
    } catch (error) {
      console.log(error.message, 'errrrrr');
      throw ErrorManager.createSignaturError(error.message);
    }
  }

  public async getAllUsers(): Promise<UserEntity[]> {
    try {
      const results: UserEntity[] = await this.userRepository.find();
      if (results.length === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No users found',
        });
      }
      return results;
    } catch (error) {
      throw new ErrorManager.createSignaturError(error.message);
    }
  }

  public async getUserById(id: string): Promise<UserEntity> {
    try {
      const result = await this.userRepository
        .createQueryBuilder('Answer')
        .where({ id })
        .getOne();

      if (!result) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No users found',
        });
      }
      return result;
    } catch (error) {
      throw new ErrorManager.createSignaturError(error.message);
    }
  }

  public async updateUser(
    id: string,
    body: UpdateAnswerDto,
  ): Promise<UpdateResult> {
    try {
      const updatedUser = await this.userRepository.update(id, body);
      if (updatedUser.affected === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'No users were updated',
        });
      }
      return updatedUser;
    } catch (error) {
      throw new ErrorManager.createSignaturError(error.message);
    }
  }

  public async deleteUser(id: string): Promise<DeleteResult | void> {
    try {
      const deleteUser = await this.userRepository.delete(id);
      if (deleteUser.affected === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: `User ${id} cannot be found or deleted`,
        });
      }
      return deleteUser;
    } catch (error) {
      throw new ErrorManager.createSignaturError(error.message);
    }
  }

};
