import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  task1(slackName: string, track: string) {
    return {
      slack_name: slackName ? slackName : 'slack_name not provided',
      current_day: 'Monday',
      utc_time: '2023-08-21T15:04:05Z',
      track: track ? track : 'track not provided',
      github_file_url:
        'https://github.com/username/repo/blob/main/file_name.ext',
      github_repo_url: 'https://github.com/username/repo',
      status_code: '200',
    };
  }
}
