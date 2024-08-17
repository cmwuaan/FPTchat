import { HistoryQuestions, QuickQuestion } from './types';

export const quickQuestions: QuickQuestion[] = [
  {
    title: 'Học phí',
    description: 'Học phí các chuyên ngành năm 2024',
  },
  { title: 'Điểm trung bình', description: 'Cách tính điểm trung bình' },
  {
    title: 'Danh sách ngành',
    description: 'Khối đào tạo ngành học của FPT',
  },
  {
    title: 'Địa chỉ',
    description: 'Địa chỉ đại học FPT Quy Nhơn',
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
