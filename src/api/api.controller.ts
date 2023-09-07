import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api') // slack_name=example_name&track=backend
export class ApiController {
  constructor(private apiService: ApiService) {}
  @Get()
  task1(
    @Query('slack_name') slackName: string,
    @Query('track') track: string,
  ): any {
    return this.apiService.task1(slackName, track);
  }
}
