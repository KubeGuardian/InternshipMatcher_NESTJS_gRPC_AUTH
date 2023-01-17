import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { roleEnum } from './auth.roles.enum';

@Entity()
export class Auth extends BaseEntity {
  @PrimaryGeneratedColumn()
  public idUser!: number;

  @Column({ type: 'varchar' })
  public email!: string;

  @Column({ type: 'varchar' })
  public password!: string;

  @Column({ type: 'varchar' })
  public name!: string;

  @Column({ type: 'enum',
    enum: roleEnum,
    default: roleEnum.STUDENT })
  public role!: roleEnum;

  @Column({ type: 'varchar' })
  public usefulLinks!: string[];
}
