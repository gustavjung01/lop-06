import {
  BookOpen,
  GraduationCap,
  PlayCircle,
  UserRound,
  BarChart3,
  Sparkles,
  ChevronRight,
  Search,
  Layers3,
  Target,
  PenTool,
  Calculator,
  LibraryBig,
  Monitor,
  Download,
  Globe,
} from 'lucide-react';

// ===== ASSET HELPER =====
const asset = (path: string) => {
  const base = (import.meta as any).env?.BASE_URL || '/';
  return `${base}${path.replace(/^\/+/, '')}`;
};

// ===== DỮ LIỆU APP CARDS =====
const appCards = [
  {
    id: 'lop-6',
    name: 'Học tập Lớp 6',
    level: 'Cấp 2',
    levelCode: 'cap2',
    classCode: 'lop6',
    status: 'Sẵn sàng',
    badge: 'Đang ưu tiên',
    icon: Calculator,
    image: 'images/home/app-grade-6.webp',
    description: 'Bản học tập đầu tiên cho học sinh chuẩn bị và bắt đầu lớp 6.',
    subjects: ['Toán', 'Tiếng Anh', 'Ngữ văn'],
    hasWebApp: true,
    hasDesktop: true,
  },
  {
    id: 'lop-7',
    name: 'Học tập Lớp 7',
    level: 'Cấp 2',
    levelCode: 'cap2',
    classCode: 'lop7',
    status: 'Sắp mở',
    badge: 'Sau lớp 6',
    icon: BookOpen,
    image: 'images/home/app-grade-7.webp',
    description: 'Không gian học riêng cho lớp 7, mở rộng sau bản lớp 6.',
    subjects: ['Toán', 'Ngữ văn', 'Tiếng Anh'],
    hasWebApp: false,
    hasDesktop: false,
  },
  {
    id: 'lop-8',
    name: 'Học tập Lớp 8',
    level: 'Cấp 2',
    levelCode: 'cap2',
    classCode: 'lop8',
    status: 'Sắp mở',
    badge: null,
    icon: Target,
    image: null,
    description: 'Nằm trong lộ trình phát triển Cấp 2, dự kiến sau Lớp 7.',
    subjects: ['Toán', 'Văn', 'Anh', 'KHTN', 'Địa lý'],
    hasWebApp: false,
    hasDesktop: false,
  },
  {
    id: 'lop-9',
    name: 'Học tập Lớp 9',
    level: 'Cấp 2',
    levelCode: 'cap2',
    classCode: 'lop9',
    status: 'Sắp mở',
    badge: null,
    icon: PenTool,
    image: null,
    description: 'Chuẩn bị cho kỳ thi vào Cấp 3 với lộ trình ôn tập bài bản.',
    subjects: ['Toán', 'Văn', 'Anh', 'KHTN', 'Lịch sử', 'Địa lý'],
    hasWebApp: false,
    hasDesktop: false,
  },
  {
    id: 'cap-01',
    name: 'Học Tập Cấp 01',
    level: 'Cấp 1',
    levelCode: 'cap1',
    classCode: 'cap1',
    status: 'Sẵn sàng',
    badge: 'Đang có',
    icon: LibraryBig,
    image: 'images/home/app-primary.webp',
    description: 'App học tập cho Lớp 1-5.',
    subjects: ['Toán', 'Tiếng Việt'],
    hasWebApp: true,
    hasDesktop: false,
    link: 'https://hoctap-cap-01.vercel.app',
  },
  {
    id: 'lop-10',
    name: 'Học Tập Lớp 10',
    level: 'Cấp 3',
    levelCode: 'cap3',
    classCode: 'lop10',
    status: 'Sắp mở',
    badge: null,
    icon: BookOpen,
    image: 'images/home/app-highschool.webp',
    description: 'Không gian học tập cho học sinh bắt đầu Cấp 3.',
    subjects: ['Toán', 'Văn', 'Anh', 'Lý', 'Hóa'],
    hasWebApp: false,
    hasDesktop: false,
  },
  {
    id: 'lop-11',
    name: 'Học Tập Lớp 11',
    level: 'Cấp 3',
    levelCode: 'cap3',
    classCode: 'lop11',
    status: 'Sắp mở',
    badge: null,
    icon: BookOpen,
    image: 'images/home/app-highschool.webp',
    description: 'Tiếp nối lộ trình học tập Cấp 3.',
    subjects: ['Toán', 'Văn', 'Anh', 'Lý', 'Hóa', 'Sinh'],
    hasWebApp: false,
    hasDesktop: false,
  },
  {
    id: 'lop-12',
    name: 'Học Tập Lớp 12',
    level: 'Cấp 3',
    levelCode: 'cap3',
    classCode: 'lop12',
    status: 'Sắp mở',
    badge: null,
    icon: BookOpen,
    image: 'images/home/app-highschool.webp',
    description: 'Chuẩn bị cho kỳ thi tốt nghiệp THPT.',
    subjects: ['Toán', 'Văn', 'Anh', 'Lý', 'Hóa', 'Sinh'],
    hasWebApp: false,
    hasDesktop: false,
  },
];

// ===== HIGHLIGHTS - GIÁ TRỊ HỆ SINH THÁI =====
const highlights = [
  { icon: Globe, title: 'WebApp dùng nhanh', text: 'Không cần cài đặt, mở trình duyệt là học ngay.' },
  { icon: Download, title: 'Desktop học offline', text: 'Tải bản desktop để học không cần mạng.' },
  { icon: Layers3, title: 'Mỗi lớp có trang riêng', text: 'Nội dung được phân theo lớp, không lẫn lộn.' },
  { icon: BarChart3, title: 'Dữ liệu có cấu trúc', text: 'Bài học, luyện tập, tiến độ được tổ chức rõ ràng.' },
];

// ===== HƯỚNG DẪN SỬ DỤNG =====
const usageSteps = [
  { icon: Search, title: 'Chọn app học tập', text: 'Tìm app phù hợp với cấp học và lớp của bạn.' },
  { icon: Monitor, title: 'Mở WebApp', text: 'Dùng ngay trên trình duyệt không cần cài đặt.' },
  { icon: Download, title: 'Tải Desktop nếu cần', text: 'Muốn học offline? Tải bản desktop cho máy tính.' },
];

// ===== BỘ LỌC =====
const levelFilters = [
  { label: 'T\u1EA5t c\u1EA3', code: 'all', active: true },
  { label: 'Ti\u1EC3u h\u1ECDc', code: 'cap1', active: false },
  { label: 'THCS / C\u1EA5p 2', code: 'cap2', active: false },
  { label: 'THPT / C\u1EA5p 3', code: 'cap3', active: false },
];

// ===== COMPONENTS =====
const StatusBadge = ({ status }: { status: string }) => {
  const styles: Record<string, string> = {
    'Sẵn sàng': 'bg-[#6b8d35] text-white',
    'Sắp mở': 'bg-[#f1dfb5] text-[#74511e]',
    'Ý tưởng': 'bg-[#eee7dc] text-[#8a7c68]',
  };
  return (
    <span className={`rounded-full px-3 py-1 text-xs font-black ${styles[status] || styles['Ý tưởng']}`}>
      {status}
    </span>
  );
};

const PriorityBadge = () => (
  <span className="rounded-full bg-[#302819] px-3 py-1 text-xs font-black text-white">
    Đang ưu tiên
  </span>
);

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f6f0e5] text-[#2d2518]">
      <section className="mx-auto min-h-screen w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        {/* ===== HEADER ===== */}
        <header className="sticky top-4 z-20 mb-6 flex items-center justify-between rounded-[1.75rem] border border-[#e6d7bd] bg-white/82 px-4 py-3 shadow-sm backdrop-blur md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f1dfb5] shadow-inner">
              <GraduationCap className="h-7 w-7 text-[#74511e]" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#9b783e]">Học tập thông minh</p>
              <h1 className="text-lg font-black md:text-xl">Trung tâm ứng dụng học tập</h1>
            </div>
          </div>
          <nav className="hidden items-center gap-2 md:flex">
            <button className="inline-flex items-center gap-2 rounded-2xl border border-[#eadcc4] bg-white px-4 py-2 text-sm font-bold shadow-sm hover:bg-[#fbf6ed]">
              <Layers3 className="h-4 w-4" /> App học tập
            </button>
            <button className="inline-flex items-center gap-2 rounded-2xl border border-[#eadcc4] bg-white px-4 py-2 text-sm font-bold shadow-sm hover:bg-[#fbf6ed]">
              <BookOpen className="h-4 w-4" /> Hướng dẫn
            </button>
            <button className="inline-flex items-center gap-2 rounded-2xl border border-[#eadcc4] bg-white px-4 py-2 text-sm font-bold shadow-sm hover:bg-[#fbf6ed]">
              <UserRound className="h-4 w-4" /> Tài khoản
            </button>
            <button className="inline-flex items-center gap-2 rounded-2xl bg-[#302819] px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-[#4b3a22]">
              <Sparkles className="h-4 w-4" /> Xem app
            </button>
          </nav>
        </header>

        {/* ===== HERO TRUNG TÂM ===== */}
        <section className="relative overflow-hidden rounded-[2.25rem] border border-[#e6d7bd] bg-[#fffaf1] p-5 shadow-sm md:p-8 lg:p-10">
          <img
            src={asset('images/home/hero-learning-hub.webp')}
            alt="Hero background learning hub"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#fffaf1]/84 via-[#fffaf1]/72 to-[#fffaf1]/84" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#f1dfb5]/70 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 left-10 h-72 w-72 rounded-full bg-[#d8e4c0]/70 blur-3xl" />

          <div className="relative z-10">
            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#efe2c5] px-4 py-2 text-sm font-bold text-[#6f4c19]">
                <Sparkles className="h-4 w-4" /> Trung tâm giới thiệu các app học tập cho từng cấp, từng lớp
              </div>
              <h2 className="max-w-4xl text-4xl font-black leading-[1.04] tracking-tight md:text-6xl">
                <span className="animate-gradient-text bg-gradient-to-r from-[#6b4215] via-[#e6a51d] to-[#2f7d58] bg-clip-text text-transparent">
                  Công Cụ Học Tập Hỗ Trợ Cho Phụ Huynh & Học Sinh
                </span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#6d604d] md:text-lg">
                Chọn cấp học, chọn lớp, sau đó mở WebApp hoặc tải Desktop app phù hợp. 
                Mỗi lớp có trang riêng với đầy đủ môn học, bài giảng và luyện tập.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#302819] px-6 py-4 font-black text-white shadow-sm hover:bg-[#4b3a22]">
                  <PlayCircle className="h-5 w-5" /> Xem app đang có
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#dcc8a3] bg-white px-6 py-4 font-black text-[#302819] shadow-sm hover:bg-[#fbf6ed]">
                  Tìm theo lớp <ChevronRight className="h-5 w-5" />
                </button>
              </div>
{/* HIGHLIGHTS */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
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
          </div>
        </section>

        {/* ===== BỘ LỌC NHỎ ===== */}
        <section className="mt-6 rounded-[2rem] border border-[#e6d7bd] bg-white/78 p-4 shadow-sm md:p-6">
          <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#9b783e]">Bộ lọc</p>
              <h3 className="text-xl font-black md:text-2xl">Chọn nhanh cấp học</h3>
            </div>
          </div>

          {/* CẤP HỌC */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {levelFilters.map((item) => (
                <button
                  key={item.code}
                  className={`inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-black shadow-sm transition ${
                    item.active
                      ? 'border-[#302819] bg-[#302819] text-white'
                      : 'border-[#eadcc4] bg-white text-[#6d604d] hover:bg-[#fbf6ed]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
</section>

        {/* ===== DANH MỤC APP HỌC TẬP ===== */}
        <section className="mt-6">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#9b783e]">Danh mục</p>
              <h3 className="text-2xl font-black md:text-3xl">Các app học tập</h3>
            </div>
            <button className="hidden rounded-2xl border border-[#eadcc4] bg-white px-4 py-2 text-sm font-bold shadow-sm md:block">
              Xem tất cả
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {appCards.map((app) => {
              const Icon = app.icon;
              const isLocked = app.status !== 'Sẵn sàng';
              return (
                <article
                  key={app.id}
                  className={`rounded-3xl border p-5 shadow-sm ${
                    isLocked ? 'border-[#eadcc4] bg-[#fbf7ef] opacity-75' : 'border-[#e0cda9] bg-white'
                  }`}
                >
                  {/* HEADER CARD */}
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#f1dfb5] p-3">
                      <Icon className="h-7 w-7 text-[#74511e]" />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <StatusBadge status={app.status} />
                      {app.badge && <PriorityBadge />}
                    </div>
                  </div>

                  {/* IMAGE */}
                  {app.image && (
                    <img
                      src={asset(app.image)}
                      alt={app.name}
                      className="mb-4 h-44 w-full rounded-3xl object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  )}

                  {/* INFO */}
                  <h4 className="text-2xl font-black">{app.name}</h4>
                  <p className="mt-1 text-sm font-bold text-[#9b783e]">{app.level}</p>
                  <p className="mt-2 min-h-[48px] text-sm leading-6 text-[#736754]">{app.description}</p>

                  {/* SUBJECT TAGS */}
                  <div className="mt-4 flex flex-wrap gap-1">
                    {app.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="rounded-lg bg-[#f1dfb5]/50 px-2 py-1 text-xs font-bold text-[#74511e]"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <button
                      disabled={!app.hasWebApp}
                      className={`inline-flex items-center justify-center gap-1 rounded-xl px-3 py-2 text-sm font-black ${
                        app.hasWebApp
                          ? 'bg-[#302819] text-white hover:bg-[#4b3a22]'
                          : 'cursor-not-allowed bg-[#eee7dc] text-[#8a7c68]'
                      }`}
                    >
                      <Globe className="h-4 w-4" /> WebApp
                    </button>
                    <button
                      disabled={!app.hasDesktop}
                      className={`inline-flex items-center justify-center gap-1 rounded-xl px-3 py-2 text-sm font-black ${
                        app.hasDesktop
                          ? 'border border-[#302819] bg-white text-[#302819] hover:bg-[#fbf6ed]'
                          : 'cursor-not-allowed bg-[#eee7dc] text-[#8a7c68]'
                      }`}
                    >
                      <Download className="h-4 w-4" /> Desktop
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ===== HƯỚNG DẪN SỬ DỤNG ===== */}
        <section className="mt-6 rounded-[2rem] border border-[#e6d7bd] bg-white/78 p-5 shadow-sm md:p-7">
          <div className="mb-6 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#9b783e]">Hướng dẫn</p>
            <h3 className="text-2xl font-black md:text-3xl">Cách sử dụng app học tập</h3>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {usageSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative rounded-3xl border border-[#eadcc4] bg-[#fbf7ef] p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f1dfb5] font-black text-[#74511e]">
                      {index + 1}
                    </div>
                    <Icon className="h-6 w-6 text-[#8a6429]" />
                  </div>
                  <h4 className="text-lg font-black">{step.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-[#736754]">{step.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ===== FEATURES - CÁCH HỆ APP HOẠT ĐỘNG ===== */}
        <section className="mt-6 rounded-[2rem] border border-[#e6d7bd] bg-white/78 p-5 shadow-sm md:p-7">
          <div className="mb-6 text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#9b783e]">Cách hệ app hoạt động</p>
            <h3 className="text-2xl font-black md:text-3xl">Hệ sinh thái học tập</h3>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-[#eadcc4] bg-[#fbf7ef] p-5">
              <img
                src={asset('images/home/feature-webapp.webp')}
                alt="WebApp dung nhanh"
                className="mb-4 h-40 w-full rounded-2xl object-cover"
                loading="lazy"
                decoding="async"
              />
              <h4 className="text-lg font-black">WebApp dùng nhanh</h4>
              <p className="mt-2 text-sm leading-6 text-[#736754]">Không cần cài đặt, mở trình duyệt là học ngay.</p>
            </div>
            <div className="rounded-3xl border border-[#eadcc4] bg-[#fbf7ef] p-5">
              <img
                src={asset('images/home/feature-desktop.webp')}
                alt="Desktop hoc offline"
                className="mb-4 h-40 w-full rounded-2xl object-cover"
                loading="lazy"
                decoding="async"
              />
              <h4 className="text-lg font-black">Desktop học offline</h4>
              <p className="mt-2 text-sm leading-6 text-[#736754]">Tải bản desktop để học không cần mạng.</p>
            </div>
            <div className="rounded-3xl border border-[#eadcc4] bg-[#fbf7ef] p-5">
              <img
                src={asset('images/home/feature-structured-data.webp')}
                alt="Du lieu co cau truc"
                className="mb-4 h-40 w-full rounded-2xl object-cover"
                loading="lazy"
                decoding="async"
              />
              <h4 className="text-lg font-black">Dữ liệu có cấu trúc</h4>
              <p className="mt-2 text-sm leading-6 text-[#736754]">Bài học, luyện tập, tiến độ được tổ chức rõ ràng.</p>
            </div>
          </div>
        </section>

        {/* ===== CTA CUỐI TRANG ===== */}
        <section className="mt-7 overflow-hidden rounded-[2.25rem] border border-[#eadcc5] bg-[#2f281d] p-6 text-white shadow-[0_26px_90px_rgba(47,40,29,0.18)] md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_360px] md:items-center">
            <div>
              <p className="mb-2 text-sm font-black uppercase tracking-[0.18em] text-[#f3d47c]">
                Hỗ trợ chọn app
              </p>
              <h3 className="text-2xl font-black md:text-3xl">
                Cần hỗ trợ chọn app học tập?
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#decfb0]">
                Gọi hoặc nhắn Zalo để được hướng dẫn chọn app phù hợp cho học sinh.
              </p>
              <p className="mt-3 text-xl font-black text-white">
                0902964685
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:0902964685"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-4 font-black text-[#2f281d] transition hover:-translate-y-0.5 hover:bg-[#fff4d2]"
                >
                  Gọi ngay 0902964685
                </a>
                <a
                  href="https://zalo.me/0902964685"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#1d9bf0] px-5 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-[#187ed0]"
                >
                  Nhắn Zalo
                </a>
              </div>
            </div>

            <img
              src={asset('images/home/support-contact.webp')}
              alt="Ho tro chon app hoc tap"
              loading="lazy"
              decoding="async"
              className="h-64 w-full rounded-[2rem] object-cover shadow-lg md:h-72"
            />
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="mt-8 rounded-[2rem] border border-dashed border-[#d8c8a8] bg-white/60 p-5 text-center text-sm text-[#675b4a] md:p-6">
          <p className="font-black text-[#302819]">Học Tập Thông Minh — Trung tâm ứng dụng học tập cho từng cấp, từng lớp</p>
          <p className="mt-1">© 2025 Hệ sinh thái học tập. Chọn cấp học, chọn lớp, bắt đầu học.</p>
        </footer>
      </section>
    </main>
  );
}
