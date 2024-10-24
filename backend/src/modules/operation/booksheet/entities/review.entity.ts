import { Users } from 'src/modules/administration/users/entities/user.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, (user) => user.children)
  user: Users;

  @Column()
  content: string;

  @Column()
  score: number;

  @DeleteDateColumn()
  deletedAt: Date;
}
