import {Injectable} from '@angular/core';
import {TimelineEntry} from "../workspace/sheet/resume/timeline/timeline-entry/timeline-entry";

@Injectable({
  providedIn: 'root'
})
export class SheetContentService {


  experienceEntries: TimelineEntry[] = [
    {
      title: 'Majster',
      subtitle: 'Pomocnik u Mastra',
      dateRange: "od 1 do 31 I 2021",
      description: "głównie zamiatałem, ale też trochę wierciłem"
    },
    {
      title: 'Klub "Niebieska Ostryga"',
      subtitle: 'Bramkarz',
      dateRange: "od 1 do 31 II 2022",
      description: "wyjebywałem na zbity pysk"
    }
  ];
}
