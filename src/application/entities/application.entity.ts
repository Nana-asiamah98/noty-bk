import { type } from 'os';
import { User } from 'src/user/entities/user.entity';
import { Status } from 'src/utils/app-constants.utils';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tbl_application')
export class Application extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({type: 'text'})
  description: string;

  @Column({default: true, name: "is_active"})
  isActive: boolean;

  @ManyToOne(type => User, user => user.id)
  user: User;

  @CreateDateColumn({ type: 'timestamptz', name : "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name : "updated_at" })
  updatedAt: Date;
}
