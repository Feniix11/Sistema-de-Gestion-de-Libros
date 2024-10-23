import { Inject, Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review) private reviewRepository: Repository<Review>,
  ) {}

  create(createReviewDto: CreateReviewDto) {
    const reviewNew = this.reviewRepository.save(createReviewDto);
    return reviewNew;
  }

  findAll() {
    return this.reviewRepository.find({
      relations: ['user'],
    });
  }

  findOne(id: number) {
    return this.reviewRepository.findOneBy({ id });
  }

  async update(id: number, updateReviewDto: UpdateReviewDto) {
    const reviewUpdate = await this.reviewRepository.update(
      id,
      updateReviewDto,
    );
    return `La reseña con id: ${id} se actualizo con exito`;
  }

  remove(id: number) {
    return this.reviewRepository.softDelete({ id });
  }
}
