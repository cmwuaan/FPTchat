export interface FetcherExtraArgument<T> {
  arg: T;
}

export interface ApiErrorData {
  error: string;
}

export interface QuickQuestion {
  title: string;
  description: string;
}

export interface HistoryQuestions extends QuickQuestion {
  date: string;
}

export interface ResponseData {
  msg: string;
  data: string;
}

export interface ConversionType {
  text: string;
  isBot: boolean;
}

export interface GetResponseQuery {
  query: string;
}
