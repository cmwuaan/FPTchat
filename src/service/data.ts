import { HistoryQuestions, QuickQuestion } from './types';

export const quickQuestions: QuickQuestion[] = [
  {
    title: 'Học phí',
    description: 'Học phí của chương trình đào tạo tại FPT là bao nhiêu?',
  },
  {
    title: 'Học bổng',
    description: 'FPT',
  },
  { title: 'Điểm chuẩn', description: 'Điểm chuẩn vào học viện FPT là bao nhiêu?' },
  {
    title: 'Danh sách ngành',
    description: 'Danh sách ngành học tại FPT bao gồm những ngành nào?',
  },
];

export const historyQuestions: HistoryQuestions[] = [
  {
    title: 'Học phí',
    description: 'Học phí của chương trình đào tạo tại FPT là bao nhiêu?',
    date: 'Today',
  },
  {
    title: 'Học bổng',
    description: 'FPT Poly',
    date: 'Yesterday',
  },
  {
    title: 'Điểm chuẩn',
    description: 'Điểm chuẩn vào học viện FPT là bao nhiêu?',
    date: 'Previous 3 days',
  },
  {
    title: 'Danh sách ngành',
    description: 'Danh sách ngành học tại FPT bao gồm những ngành nào?',
    date: 'Previous 7 days',
  },
];
