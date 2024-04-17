import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as moment from "moment-timezone";
import BaseEntity from 'src/application/core/base/base_entity';

@Entity()
export class BaseModel extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date;

  @BeforeInsert()
  setCreatedAt() {
    this.created_at = moment().tz('Asia/Phnom_Penh').toDate();
  }
}
