import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Application } from '../../application/entities/application.entity';
import { User } from '../../user/entities/user.entity';

@Entity('tbl_template')
export class Template extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'template_name', type: 'varchar' })
  name: string;

  @Column({ name: 'template_description', type: 'text' })
  templateDescription: string;

  @Column({name : "template_id" , type : "varchar", unique: true, nullable: true})
  templateId : string;

  @ManyToOne((type) => User, (user) => user.id)
  user: User;

  @ManyToOne((type) => Application, (application) => application.id)
  applicaiton: Application;

  @Column({ name: 'is_active', type: 'boolean', default: true })
  isActive: boolean;


  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt: Date;
}
