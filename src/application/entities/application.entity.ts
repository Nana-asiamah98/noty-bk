import { Template } from '../../template/entities/template.entity';
import { User } from '../../user/entities/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';

@Entity('tbl_application')
export class Application extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsNotEmpty()
  @IsString()
  @Column({ type: 'varchar', unique: true, nullable: true })
  name: string;

  @IsString()
  @IsEmpty()
  @Column({ type: 'text', unique: false, nullable : false })
  description: string;

  @Column({ type: 'varchar', unique: true, nullable: true })
  @IsNotEmpty()
  username: string;

  @Column({ default: true, name: 'is_active' })
  isActive: boolean;

  @ManyToOne((type) => User, (user) => user.id)
  user: User;

  @OneToMany((type) => Template, (template) => template.applicaiton)
  template: Template[];

  @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
  updatedAt: Date;
}
