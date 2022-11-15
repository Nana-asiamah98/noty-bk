import { Injectable } from '@nestjs/common';
import { Exception } from 'handlebars';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { ApplicationRepository } from './application.repository';
import { CreateApplicationDto } from './dto/create-application.dto';
import { FetchApplicationDTO } from './dto/fetch-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { Application } from './entities/application.entity';

@Injectable()
export class ApplicationService {
  constructor(
    private applicationRepository: ApplicationRepository,
    private userService: UserService,
  ) {}

  async create(
    createApplicationDto: CreateApplicationDto,
  ): Promise<Application> {
    const { name, description, userId } = createApplicationDto;

    const user = await this.userService.findOne(userId);

    const savedApplication = this.applicationRepository.save({
      name,
      description,
      user,
    });
    return savedApplication;
  }

  async findAll(): Promise<FetchApplicationDTO[] | []> {
    const apps: Application[] = await this.applicationRepository.find({
      order: {
        name: 'ASC',
      },
      relations: {
        user: true,
        template: true,
      },
    });
    const fetchApplicationDTO: FetchApplicationDTO[] | [] = apps
      ? apps.map((app) => {
          const { id, name, description, isActive, template } = app;
          let fetchDto: FetchApplicationDTO = new FetchApplicationDTO();
          fetchDto.id = id;
          fetchDto.name = name;
          fetchDto.description = description;
          fetchDto.isActive = isActive;
          fetchDto.template = template;
          return fetchDto;
        })
      : [];
    return fetchApplicationDTO;
  }

  findOne(id: string): Promise<Application> {
    const application = this.applicationRepository.findOneBy({ id: id });
    if (!application) {
      throw new Exception('There are no results');
    }

    return application;
  }

  async update(
    id: string,
    updateApplicationDto: UpdateApplicationDto,
  ): Promise<Application | null> {
    const application: Application = await this.findOne(id);
    if (application) {
      const { name, description, userId } = updateApplicationDto;
      application.name = name;
      application.description = description;
      const user: User = await this.userService.findOne(userId);
      application.user = user;
      return this.applicationRepository.save(application);
    }
    return new Application();
  }

  async toggleApplication(id: string): Promise<boolean> {
    const application: Application = await this.findOne(id);
    if (application) {
      application.isActive = !application.isActive;
      return application.isActive;
    }
    return false;
  }
}
