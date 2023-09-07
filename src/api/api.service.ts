import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
  task1(slackName: string, track: string) {
    const [timestamp, currentDayOfWeek] = getDateTime();
    return {
      slack_name: slackName ? slackName : 'Akinyele Ibrahim',
      current_day: currentDayOfWeek,
      utc_time: timestamp,
      track: track ? track : 'Backend',
      github_file_url:
        'https://github.com/Akinyeleib/zuri-hng-internship/blob/main/src/api/api.service.ts',
      github_repo_url: 'https://github.com/Akinyeleib/zuri-hng-internship',
      status_code: '200',
    };
  }
}

function getDateTime(): string[] {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: 'long' };
  return [date.toISOString(), date.toLocaleDateString('en-US', options)];
}
