import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('tbl_mail')
export class Mail {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', name: 'message_id', nullable: true })
  messageId: string;

  @Column({ type: 'varchar', name: 'template_tite', nullable: true })
  templateTitle: string;

  @Column({ type: 'varchar', name: 'status', nullable: true })
  status: string;

  @Column({ type: 'varchar', name: 'to', nullable: true })
  to: string;

  @Column({ type: 'varchar', name: 'receiver', nullable: true })
  receiver: string;

  @ManyToOne((type) => User, (user) => user.id)
  createdBy : User;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;
}
