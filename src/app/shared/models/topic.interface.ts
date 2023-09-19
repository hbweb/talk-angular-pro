export interface Topic {
  id: number;
  title: string;
  icon: string;
  path: string;
}


export interface TopicsResponse {
  data: Topic[];
  status: number;
}


export interface TopicCard {
  title: string;
  url: string;
}
