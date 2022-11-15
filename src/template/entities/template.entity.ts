import { type } from 'os';
import { Application } from 'src/application/entities/application.entity';
import { User } from 'src/user/entities/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tbl_template')
export class Template extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'template_name', type: 'varchar' })
  name: string;

  @Column({ name: 'template_description', type: 'text' })
  templateDescription: string;

  @Column({ name: 'is_active', type: 'boolean', default: true })
  isActive: boolean;

  @ManyToOne((type) => User, (user) => user.id)
  user: User;

  @ManyToOne((type) => Application, (application) => application.id)
  applicaiton: Application;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;
}
