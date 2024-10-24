import { Review } from 'src/modules/operation/booksheet/entities/review.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: 'user' })
  rol: string;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Review, (review) => review.user)
  children: Review[];
}
