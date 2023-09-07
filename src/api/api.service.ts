import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  task1(slackName: string, track: string) {
    const timestamp = getCurrentTimestamp();
    return {
      slack_name: slackName ? slackName : 'slack_name not provided',
      current_day: 'Monday',
      utc_time: timestamp,
      track: track ? track : 'track not provided',
      github_file_url:
        'https://github.com/Akinyeleib/zuri-hng-internship/blob/main/src/api/api.service.ts',
      github_repo_url: 'https://github.com/Akinyeleib/zuri-hng-internship',
      status_code: '200',
    };
  }
}

function getCurrentTimestamp(): string {
  return new Date().toISOString();
}
