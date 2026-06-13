import React from 'react';
import {
  BookOpen,
  GraduationCap,
  Lock,
  PlayCircle,
  UserRound,
  BarChart3,
  Sparkles,
  ChevronRight,
  Brain,
  Trophy,
  Search,
  Clock3,
  CheckCircle2,
  Star,
  Layers3,
  Target,
  PenTool,
  Calculator,
  Languages,
  LibraryBig,
} from 'lucide-react';

const levelFilters = [
  { label: 'Cấp 1', range: 'Lớp 1–5', active: false, locked: true },
  { label: 'Cấp 2', range: 'Lớp 6–9', active: true, locked: false },
  { label: 'Cấp 3', range: 'Lớp 10–12', active: false, locked: true },
];

const classFilters = [
  { label: 'Lớp 6', active: true, locked: false },
  { label: 'Lớp 7', active: false, locked: true },
  { label: 'Lớp 8', active: false, locked: true },
  { label: 'Lớp 9', active: false, locked: true },
];

const subjectCards = [
  {
    name: 'Toán',
    icon: Calculator,
    description: 'Số tự nhiên, phân số, hình học trực quan và luyện tập theo bài.',
    progress: 28,
    lessons: 5,
    status: 'Đang học',
  },
  {
    name: 'Ngữ văn',
    icon: PenTool,
    description: 'Đọc hiểu, tiếng Việt, làm văn và ghi nhớ ý chính bằng thẻ học.',
    progress: 12,
    lessons: 3,
    status: 'Mẫu thử',
  },
  {
    name: 'Tiếng Anh',
    icon: Languages,
    description: 'Từ vựng, mẫu câu, nghe đọc cơ bản và bài tập trắc nghiệm nhanh.',
    progress: 8,
    lessons: 2,
    status: 'Mẫu thử',
  },
  {
    name: 'Khoa học tự nhiên',
    icon: LibraryBig,
    description: 'Quan sát, khái niệm nền tảng và bài học ngắn gọn dễ theo dõi.',
    progress: 0,
    lessons: 0,
    status: 'Sắp mở',
  },
];

const highlights = [
  { icon: BookOpen, title: 'Bài học ngắn', text: 'Lý thuyết, ví dụ, ghi nhớ theo từng thẻ.' },
  { icon: Target, title: 'Luyện đúng trọng tâm', text: 'Câu hỏi đi theo bài, có giải thích sau khi làm.' },
  { icon: BarChart3, title: 'Theo dõi tiến độ', text: 'Biết học sinh đang học tới đâu, môn nào còn yếu.' },
];

const studyPath = [
  'Chọn lớp',
  'Chọn môn',
  'Học bài ngắn',
  'Làm luyện tập',
  'Lưu tiến độ',
];

export default function HocTapLop06Canvas() {
  return (
    <main className="min-h-screen bg-[#f6f0e5] text-[#2d2518]">
      <section className="mx-auto min-h-screen w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-20 mb-6 flex items-center justify-between rounded-[1.75rem] border border-[#e6d7bd] bg-white/82 px-4 py-3 shadow-sm backdrop-blur md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f1dfb5] shadow-inner">
              <GraduationCap className="h-7 w-7 text-[#74511e]" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#9b783e]">Học tập thông minh</p>
              <h1 className="text-lg font-black md:text-2xl">Trung tâm ứng dụng học tập</h1>
            </div>
          </div>
          <nav className="hidden items-center gap-2 md:flex">
            <button className="inline-flex items-center gap-2 rounded-2xl border border-[#eadcc4] bg-white px-4 py-2 text-sm font-bold shadow-sm hover:bg-[#fbf6ed]">
              <Search className="h-4 w-4" /> Tìm app
            </button>
            <button className="inline-flex items-center gap-2 rounded-2xl border border-[#eadcc4] bg-white px-4 py-2 text-sm font-bold shadow-sm hover:bg-[#fbf6ed]">
              <UserRound className="h-4 w-4" /> Hồ sơ
            </button>
            <button className="inline-flex items-center gap-2 rounded-2xl bg-[#302819] px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-[#4b3a22]">
              <BarChart3 className="h-4 w-4" /> Ứng dụng
            </button>
          </nav>
        </header>

        <section className="relative overflow-hidden rounded-[2.25rem] border border-[#e6d7bd] bg-[#fffaf1] p-5 shadow-sm md:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#f1dfb5]/70 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 left-10 h-72 w-72 rounded-full bg-[#d8e4c0]/70 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#efe2c5] px-4 py-2 text-sm font-bold text-[#6f4c19]">
                <Sparkles className="h-4 w-4" /> Trung tâm giới thiệu các app học tập cho từng cấp, từng lớp
              </div>
              <h2 className="max-w-3xl text-4xl font-black leading-[1.04] tracking-tight md:text-6xl">
                Trung tâm ứng dụng học tập cho từng cấp, từng lớp\.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#6d604d] md:text-lg">
                Trang này là sảnh chính của hệ sinh thái học tập. Từ đây người dùng chọn cấp, chọn lớp, rồi đi vào trang riêng của từng app học tập hoặc tải bản desktop khi có.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#302819] px-6 py-4 font-black text-white shadow-sm hover:bg-[#4b3a22]">
                  <PlayCircle className="h-5 w-5" /> Xem app đang có
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#dcc8a3] bg-white px-6 py-4 font-black text-[#302819] shadow-sm hover:bg-[#fbf6ed]">
                  Tìm theo lớp <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-3xl border border-[#eadcc4] bg-white/76 p-4 shadow-sm">
                      <Icon className="mb-3 h-6 w-6 text-[#8a6429]" />
                      <p className="font-black">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-[#736754]">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <aside className="rounded-[2rem] border border-[#e0cda9] bg-[#302819] p-5 text-white shadow-md md:p-7">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-[#e8d8b6]">Hệ sinh thái học tập</p>
                  <h3 className="mt-2 text-2xl font-black md:text-3xl">WebApp và Desktop</h3>
                  <p className="mt-2 text-sm leading-6 text-[#d8c9ad]">Mỗi lớp có trang riêng, có thể mở app web hoặc tải bản desktop phù hợp.</p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12">
                  <Brain className="h-7 w-7 text-[#f3d27b]" />
                </div>
              </div>

              <div className="rounded-3xl bg-white/9 p-4">
                <div className="mb-3 flex items-center justify-between text-sm text-[#e8d8b6]">
                  <span>App đầu tiên</span>
                  <span className="font-black text-white">Lớp 6</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/15">
                  <div className="h-full w-[34%] rounded-full bg-[#f3d27b]" />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-white/9 p-3">
                  <p className="text-xl font-black">12</p>
                  <p className="text-xs text-[#d8c9ad]">Khối lớp</p>
                </div>
                <div className="rounded-2xl bg-white/9 p-3">
                  <p className="text-xl font-black">2</p>
                  <p className="text-xs text-[#d8c9ad]">Kiểu dùng</p>
                </div>
                <div className="rounded-2xl bg-white/9 p-3">
                  <p className="text-xl font-black">1</p>
                  <p className="text-xs text-[#d8c9ad]">App sẵn</p>
                </div>
              </div>

              <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 font-black text-[#302819] shadow-sm hover:bg-[#fff4d3]">
                <Clock3 className="h-5 w-5" /> Xem hệ app
              </button>
            </aside>
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] border border-[#e6d7bd] bg-white/78 p-4 shadow-sm md:p-6">
          <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#9b783e]">Bộ lọc học tập</p>
              <h3 className="text-2xl font-black">Chọn nhanh cấp, lớp và môn</h3>
            </div>
            <p className="text-sm text-[#736754]">Các cấp/lớp là card nhỏ, không chiếm toàn bộ trang chủ.</p>
          </div>

          <div className="space-y-4">
            <div>
              <p className="mb-2 text-sm font-black text-[#6d604d]">Cấp học</p>
              <div className="grid gap-3 md:grid-cols-3">
                {levelFilters.map((item) => (
                  <button
                    key={item.label}
                    className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left shadow-sm transition ${
                      item.active
                        ? 'border-[#9b783e] bg-[#f4e2b7]'
                        : 'border-[#eadcc4] bg-[#fbf7ef] text-[#8a7c68]'
                    }`}
                  >
                    <span>
                      <span className="block font-black">{item.label}</span>
                      <span className="text-sm">{item.range}</span>
                    </span>
                    {item.locked ? <Lock className="h-4 w-4" /> : <CheckCircle2 className="h-5 w-5 text-[#6b8d35]" />}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm font-black text-[#6d604d]">Lớp</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {classFilters.map((item) => (
                  <button
                    key={item.label}
                    className={`rounded-2xl border px-4 py-3 text-sm font-black shadow-sm ${
                      item.active
                        ? 'border-[#302819] bg-[#302819] text-white'
                        : 'border-[#eadcc4] bg-[#fbf7ef] text-[#8a7c68]'
                    }`}
                  >
                    <span className="inline-flex items-center justify-center gap-2">
                      {item.label} {item.locked && <Lock className="h-3 w-3" />}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_340px]">
          <div className="rounded-[2rem] border border-[#e6d7bd] bg-white/78 p-5 shadow-sm md:p-7">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#9b783e]">Danh mục app</p>
                <h3 className="text-2xl font-black md:text-3xl">Các app học tập</h3>
              </div>
              <button className="hidden rounded-2xl border border-[#eadcc4] bg-white px-4 py-2 text-sm font-bold shadow-sm md:block">Xem tất cả</button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {subjectCards.map((subject) => {
                const Icon = subject.icon;
                const locked = subject.status === 'Sắp mở';
                return (
                  <article key={subject.name} className={`rounded-3xl border p-5 shadow-sm ${locked ? 'border-[#eadcc4] bg-[#fbf7ef] opacity-75' : 'border-[#e0cda9] bg-white'}`}>
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#f1dfb5] p-3">
                        <Icon className="h-7 w-7 text-[#74511e]" />
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs font-black ${locked ? 'bg-[#eee7dc] text-[#8a7c68]' : 'bg-[#302819] text-white'}`}>{subject.status}</span>
                    </div>
                    <h4 className="text-2xl font-black">{subject.name}</h4>
                    <p className="mt-2 min-h-[56px] text-sm leading-6 text-[#736754]">{subject.description}</p>
                    <div className="mt-4 flex items-center justify-between text-sm text-[#736754]">
                      <span>{subject.lessons} bài</span>
                      <span className="font-black text-[#302819]">{subject.progress}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#e7dcc8]">
                      <div className="h-full rounded-full bg-[#9b783e]" style={{ width: `${subject.progress}%` }} />
                    </div>
                    <button className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-black ${locked ? 'bg-[#eee7dc] text-[#8a7c68]' : 'bg-[#302819] text-white hover:bg-[#4b3a22]'}`}>
                      {locked ? 'Đang chuẩn bị' : 'Vào môn học'} {!locked && <ChevronRight className="h-4 w-4" />}
                    </button>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="grid gap-6">
            <section className="rounded-[2rem] border border-[#e6d7bd] bg-white/78 p-5 shadow-sm md:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-2xl bg-[#f1dfb5] p-3">
                  <Layers3 className="h-6 w-6 text-[#74511e]" />
                </div>
                <div>
                  <p className="text-sm font-black text-[#9b783e]">Lộ trình</p>
                  <h3 className="text-xl font-black">Cách học đề xuất</h3>
                </div>
              </div>
              <div className="space-y-3">
                {studyPath.map((step, index) => (
                  <div key={step} className="flex items-center gap-3 rounded-2xl border border-[#eadcc4] bg-[#fbf7ef] p-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-sm font-black shadow-sm">{index + 1}</div>
                    <p className="font-bold">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-[#e6d7bd] bg-[#fffaf1] p-5 shadow-sm md:p-6">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-black">Thành tích hôm nay</h3>
                <Star className="h-6 w-6 text-[#9b783e]" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
                  <p className="text-2xl font-black">12</p>
                  <p className="text-xs text-[#736754]">phút học</p>
                </div>
                <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
                  <p className="text-2xl font-black">4/5</p>
                  <p className="text-xs text-[#736754]">câu đúng</p>
                </div>
              </div>
              <p className="mt-4 rounded-2xl bg-[#f1dfb5]/70 p-4 text-sm leading-6 text-[#6d604d]">
                Gợi ý: tiếp tục bài “Số tự nhiên” trước khi mở thêm bài mới.
              </p>
            </section>
          </aside>
        </section>

        <section className="mt-6 rounded-[2rem] border border-dashed border-[#d8c8a8] bg-white/60 p-5 text-sm leading-7 text-[#675b4a] md:p-6">
          <p className="font-black text-[#302819]">Ghi chú bàn giao cho dev</p>
          <p>
            HomePage là trang chủ trung tâm của hệ sinh thái app học tập, không phải trang riêng của lớp 6. Hero phải giới thiệu chung về các app học tập theo cấp/lớp. Lớp 6 chỉ là một card app trong danh mục bên dưới. Mỗi lớp sau này có landing page riêng, rồi từ đó trỏ sang WebApp hoặc tải Desktop app.
          </p>
        </section>
      </section>
    </main>
  );
}
