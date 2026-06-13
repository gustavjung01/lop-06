import { lazy, Suspense, useEffect, useState } from 'react';

import {
  Bell,
  Brain,
  Calculator,
  ChevronRight,
  Database,
  Download,
  Flame,
  GraduationCap,
  Hammer,
  History,
  Languages,
  Laptop,
  Leaf,
  Menu,
  Palette,
  PenLine,
  PlayCircle,
  Settings,
  Target,
  Trophy,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react';

import { AchievementsPanel } from '../shared/components/AchievementsPanel';
import { RootErrorBoundary } from '../shared/components/RootErrorBoundary';
import { ToastProvider, useToast } from '../shared/components/ToastProvider';
import { useSound, type SoundSettings, type SoundVolume } from '../shared/hooks/useSound';
import { activateLop6License, getStoredLop6Entitlement, isLop6EntitlementActive } from '../shared/services/lop6LicenseService';

const MathHomePage = lazy(() =>
  import('../modules/math/pages/MathHomePage').then((module) => ({ default: module.MathHomePage })),
);

const EnglishHomePage = lazy(() =>
  import('../modules/english/pages/EnglishHomePage').then((module) => ({ default: module.EnglishHomePage })),
);

const KhtnHomePage = lazy(() =>
  import('../modules/khtn/pages/KhtnHomePage').then((module) => ({ default: module.KhtnHomePage })),
);

const NguVanHomePage = lazy(() =>
  import('../modules/ngu-van/pages/NguVanHomePage').then((module) => ({ default: module.NguVanHomePage })),
);

const LichSuDiaLiHomePage = lazy(() =>
  import('../modules/lich-su-dia-li/pages/LichSuDiaLiHomePage').then((module) => ({ default: module.LichSuDiaLiHomePage })),
);

const TinHocHomePage = lazy(() =>
  import('../modules/tin-hoc/pages/TinHocHomePage').then((module) => ({ default: module.TinHocHomePage })),
);

const CongNgheHomePage = lazy(() =>
  import('../modules/cong-nghe/pages/CongNgheHomePage').then((module) => ({ default: module.CongNgheHomePage })),
);

const GdcdHomePage = lazy(() =>
  import('../modules/gdcd/pages/GdcdHomePage').then((module) => ({ default: module.GdcdHomePage })),
);

const MATH_LESSON_COUNT = 38;
const MATH_QUESTION_COUNT = 1520;
const MATH_NEXT_LESSON = 'Tập hợp và phần tử';
const ENGLISH_LESSON_COUNT = 36;
const ENGLISH_NEXT_LESSON = 'Unit 1 - My New School: Vocabulary';
const KHTN_LESSON_COUNT = 30;
const KHTN_NEXT_LESSON = 'Khoa học tự nhiên và phương pháp học tập';
const NGU_VAN_LESSON_COUNT = 24;
const NGU_VAN_NEXT_LESSON = 'Tôi và các bạn';
const LICH_SU_DIA_LI_LESSON_COUNT = 32;
const TIN_HOC_LESSON_COUNT = 19;
const CONG_NGHE_LESSON_COUNT = 19;
const GDCD_LESSON_COUNT = 16;
const LICH_SU_DIA_LI_NEXT_LESSON = 'Lịch sử và cuộc sống';

type AppView = 'dashboard' | 'math' | 'english' | 'khtn' | 'ngu-van' | 'lich-su-dia-li' | 'tin-hoc' | 'cong-nghe' | 'gdcd' | 'achievements';

type Subject = {
  id: string;
  name: string;
  description: string;
  icon: typeof Calculator;
  lessons: number;
  progress: number;
  color: string;
  nextLesson: string;
};

type QuickAction = {
  title: string;
  text: string;
  icon: typeof PlayCircle;
  action?: () => void;
};

type AppThemeId =
  | 'default'
  | 'study-blue'
  | 'energy-yellow'
  | 'focus-dark'
  | 'warm-paper'
  | 'soft-sage'
  | 'bright-sea'
  | 'soft-lavender';

type AppTheme = {
  id: AppThemeId;
  name: string;
  description: string;
};

const buttonMotion =
  'transition duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200';

const THEME_STORAGE_KEY = 'lop6-theme';
const MATH_PRACTICE_QUESTION_COUNT_STORAGE_KEY = 'lop6.math.practiceQuestionCount';

const appThemes: AppTheme[] = [
  { id: 'default', name: 'Mặc định', description: 'Sáng, gọn, cân bằng cho học hằng ngày.' },
  { id: 'study-blue', name: 'Xanh học tập', description: 'Xanh dịu, rõ nút chính, dễ tập trung.' },
  { id: 'energy-yellow', name: 'Vàng năng lượng', description: 'Ấm nhẹ, tạo cảm giác vui mà không chói.' },
  { id: 'focus-dark', name: 'Tối tập trung', description: 'Nền tối mềm, giảm sáng khi học muộn.' },
  { id: 'warm-paper', name: 'Giấy ấm', description: 'Kem nhạt như giấy vở, hợp đọc lâu buổi tối.' },
  { id: 'soft-sage', name: 'Xanh lá dịu', description: 'Sage rất nhạt, thư giãn cho phiên học dài.' },
  { id: 'bright-sea', name: 'Biển sáng', description: 'Xanh trời sạch, nhẹ, không cyan gắt.' },
  { id: 'soft-lavender', name: 'Lavender mềm', description: 'Tím rất nhạt, sáng tạo mà vẫn nghiêm túc.' },
];

const ASSET_BASE_URL = (import.meta as any).env?.BASE_URL || '/';

function getStoredTheme(): AppThemeId {
  if (typeof window === 'undefined') return 'default';

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  return appThemes.some((theme) => theme.id === storedTheme) ? (storedTheme as AppThemeId) : 'default';
}

const subjects: Subject[] = [
  {
    id: 'toan',
    name: 'Toán',
    description: 'Số tự nhiên, phép tính và luyện tập có giải thích.',
    icon: Calculator,
    lessons: MATH_LESSON_COUNT,
    progress: 25,
    color: 'from-blue-600 to-cyan-500',
    nextLesson: MATH_NEXT_LESSON,
  },
  {
    id: 'ngu-van',
    name: 'Ngữ văn',
    description: 'Đọc hiểu, tiếng Việt, viết, nói và nghe theo chủ đề.',
    icon: PenLine,
    lessons: NGU_VAN_LESSON_COUNT,
    progress: 16,
    color: 'from-rose-500 to-orange-400',
    nextLesson: NGU_VAN_NEXT_LESSON,
  },
  {
    id: 'tieng-anh',
    name: 'Tiếng Anh',
    description: 'Từ vựng, ngữ pháp, mẫu giao tiếp và luyện tập theo unit.',
    icon: Languages,
    lessons: ENGLISH_LESSON_COUNT,
    progress: 18,
    color: 'from-violet-500 to-indigo-500',
    nextLesson: ENGLISH_NEXT_LESSON,
  },
  {
    id: 'khtn',
    name: 'Khoa học tự nhiên',
    description: 'Khái niệm, ví dụ đời sống và luyện tập KHTN theo chủ đề.',
    icon: Leaf,
    lessons: KHTN_LESSON_COUNT,
    progress: 14,
    color: 'from-emerald-500 to-teal-500',
    nextLesson: KHTN_NEXT_LESSON,
  },
  {
    id: 'lich-su-dia-li',
    name: 'Lịch sử & Địa lí',
    description: 'Mốc thời gian, bản đồ, địa danh và câu hỏi luyện tập.',
    icon: History,
    lessons: LICH_SU_DIA_LI_LESSON_COUNT,
    progress: 13,
    color: 'from-amber-500 to-yellow-400',
    nextLesson: LICH_SU_DIA_LI_NEXT_LESSON,
  },
  {
    id: 'tin-hoc',
    name: 'Tin học',
    description: 'Máy tính, dữ liệu và internet an toàn.',
    icon: Laptop,
    lessons: TIN_HOC_LESSON_COUNT,
    progress: 10,
    color: 'from-cyan-500 to-blue-500',
    nextLesson: 'Thông tin và dữ liệu',
  },
  {
    id: 'cong-nghe',
    name: 'Công nghệ',
    description: 'Nhà ở, thực phẩm, trang phục, đồ dùng điện và dự án gia đình.',
    icon: Hammer,
    lessons: CONG_NGHE_LESSON_COUNT,
    progress: 9,
    color: 'from-orange-500 to-amber-400',
    nextLesson: 'Nhà ở đối với con người',
  },
  {
    id: 'gdcd',
    name: 'GDCD',
    description: 'Tự nhận thức, ứng xử phù hợp và trách nhiệm với cộng đồng.',
    icon: Brain,
    lessons: GDCD_LESSON_COUNT,
    progress: 8,
    color: 'from-violet-500 to-rose-400',
    nextLesson: 'Tự hào về truyền thống gia đình, dòng họ',
  },
];

const settingsGroups = [
  {
    title: 'Tùy chọn học tập',
    icon: Bell,
    items: ['Gợi ý học tập', 'Thông báo học bài', 'Dữ liệu học tập'],
  },
  {
    title: 'Ứng dụng',
    icon: Database,
    items: ['Quản lý thiết bị', 'Ngôn ngữ'],
  },
];

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="app-progress-track h-2 w-full rounded-full">
      <div className="app-progress-bar h-2 rounded-full transition-all" style={{ width: `${value}%` }} />
    </div>
  );
}

function DopiAvatar({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClass = {
    sm: 'h-14 w-14',
    md: 'h-16 w-16',
    lg: 'h-20 w-20',
  }[size];

  return (
    <div
      className={`${sizeClass} dopi-float shrink-0 rounded-[1.5rem] bg-gradient-to-br from-sky-100 to-blue-100 p-1.5 shadow-xl shadow-blue-200/80 ring-1 ring-white/80`}
    >
      <img
        src={`${ASSET_BASE_URL}dopi-avatar.png`}
        alt="Dopi"
        className="h-full w-full object-contain drop-shadow-[0_10px_14px_rgba(37,99,235,0.28)]"
      />
    </div>
  );
}

type StatusChipsProps = {
  onOpenPlan: () => void;
  onOpenAccount: () => void;
  onOpenCredit: () => void;
};

function StatusChips({ onOpenPlan, onOpenAccount, onOpenCredit }: StatusChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={onOpenPlan}
        className="app-chip rounded-full border px-3 py-1.5 text-xs font-black shadow-sm"
      >
        Gói: Dùng thử
      </button>
      <button
        type="button"
        onClick={onOpenAccount}
        className="app-chip rounded-full border px-3 py-1.5 text-xs font-black shadow-sm"
      >
        TK: Khách
      </button>
      <button
        type="button"
        onClick={onOpenCredit}
        className="app-chip rounded-full border px-3 py-1.5 text-xs font-black shadow-sm"
      >
        Dopi: 0 credit
      </button>
    </div>
  );
}

function SettingsPanel({
  onClose,
  selectedTheme,
  soundSettings,
  onSoundEnabledChange,
  onSoundVolumeChange,
  onThemeChange,
}: {
  onClose: () => void;
  selectedTheme: AppThemeId;
  soundSettings: SoundSettings;
  onSoundEnabledChange: (enabled: boolean) => void;
  onSoundVolumeChange: (volume: SoundVolume) => void;
  onThemeChange: (theme: AppThemeId) => void;
}) {
  return (
    <div className="app-panel absolute right-0 top-11 z-50 w-[min(92vw,380px)] rounded-3xl border p-4 shadow-2xl">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-black">Cài đặt dự kiến</p>
          <p className="app-muted-text text-xs font-medium">Theme được lưu trên máy này.</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className={`app-ghost-button rounded-xl border p-2 ${buttonMotion}`}
          aria-label="Đóng cài đặt"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="space-y-3">
        <section className="app-soft rounded-2xl p-3">
          <div className="mb-3 flex items-center gap-2">
            <Palette className="app-accent-text h-4 w-4" />
            <p className="text-sm font-black">Theme giao diện</p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {appThemes.map((theme) => {
              const isSelected = selectedTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => onThemeChange(theme.id)}
                  className={`theme-option rounded-2xl border p-3 text-left transition ${
                    isSelected ? 'theme-option--active' : ''
                  }`}
                  data-theme-preview={theme.id}
                  aria-pressed={isSelected}
                >
                  <span className="flex items-center gap-2">
                    <span className="theme-swatch h-4 w-4 rounded-full" />
                    <span className="text-xs font-black">{theme.name}</span>
                  </span>
                  <span className="app-muted-text mt-1 block text-[11px] font-semibold leading-4">
                    {theme.description}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="app-soft rounded-2xl p-3">
          <div className="mb-3 flex items-center gap-2">
            {soundSettings.enabled ? (
              <Volume2 className="app-accent-text h-4 w-4" />
            ) : (
              <VolumeX className="app-accent-text h-4 w-4" />
            )}
            <p className="text-sm font-black">Âm thanh</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => onSoundEnabledChange(!soundSettings.enabled)}
              className={`theme-option rounded-full border px-3 py-1.5 text-xs font-black ${
                soundSettings.enabled ? 'theme-option--active' : ''
              }`}
            >
              {soundSettings.enabled ? 'Đang bật' : 'Đang tắt'}
            </button>
            {[
              ['off', 'Tắt'],
              ['low', 'Nhỏ'],
              ['medium', 'Vừa'],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => onSoundVolumeChange(value as SoundVolume)}
                className={`theme-option rounded-full border px-3 py-1.5 text-xs font-black ${
                  soundSettings.volume === value ? 'theme-option--active' : ''
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <p className="app-muted-text mt-2 text-[11px] font-semibold leading-4">
            Âm ngắn, nhỏ và chỉ phát sau thao tác của người dùng.
          </p>
        </section>

        {settingsGroups.map((group) => {
          const Icon = group.icon;
          return (
            <section key={group.title} className="app-soft rounded-2xl p-3">
              <div className="mb-2 flex items-center gap-2">
                <Icon className="app-accent-text h-4 w-4" />
                <p className="text-sm font-black">{group.title}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="app-chip rounded-full border px-3 py-1 text-xs font-bold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

type PlanKeyTab = 'plan' | 'account' | 'key';

function PlanKeyPanel({
  initialTab = 'plan',
  onClose,
}: {
  initialTab?: PlanKeyTab;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<PlanKeyTab>(initialTab);
  const [licenseKey, setLicenseKey] = useState('');
  const [formError, setFormError] = useState('');
  const [notice, setNotice] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const [entitlement, setEntitlement] = useState(() => getStoredLop6Entitlement());
  const [isActive, setIsActive] = useState(() => isLop6EntitlementActive());

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const showSupportNotice = (message: string) => {
    setNotice(message);
    toast.info('Đang chuẩn bị', message);
  };

  const handleActivateKey = async () => {
    setNotice('');

    if (!licenseKey.trim()) {
      setFormError('Vui lòng nhập mã key.');
      return;
    }

    setFormError('');
    setIsLoading(true);

    try {
      const result = await activateLop6License(licenseKey.trim());
      
      if (result.ok && result.status === 'active') {
        const newEntitlement = getStoredLop6Entitlement();
        setEntitlement(newEntitlement);
        setIsActive(true);
        toast.success('Thành công', 'Kích hoạt Lớp 06 thành công!');
        setNotice('Kích hoạt Lớp 06 thành công. Bạn đã có thể sử dụng đầy đủ tính năng!');
        setLicenseKey('');
      } else {
        setFormError(result.error || 'Lỗi không xác định khi kích hoạt.');
      }
    } catch (err) {
      setFormError('Lỗi mạng. Vui lòng thử lại sau.');
    } finally {
      setIsLoading(false);
    }
  };

  const quickInfo = isActive && entitlement 
    ? [`Gói hiện tại: ${entitlement.productName}`, 'Tài khoản: Khách', 'Dopi Credit: 0']
    : ['Gói hiện tại: Dùng thử', 'Tài khoản: Khách', 'Dopi Credit: 0'];

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center px-4 py-6">
      <button
        type="button"
        className="absolute inset-0 cursor-default bg-slate-950/35 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Đóng popup gói học"
      />

      <section className="app-panel relative z-10 max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border p-4 shadow-2xl sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-950">Gói học &amp; kích hoạt key</h2>
            <p className="mt-2 max-w-2xl text-sm font-semibold leading-6 text-slate-600">
              Đăng ký gói học hoặc nhập key đã mua để mở quyền học tập trên app Lớp 6.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className={`app-ghost-button rounded-2xl border p-2.5 ${buttonMotion}`}
            aria-label="Đóng gói học và kích hoạt key"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {quickInfo.map((item) => (
            <span key={item} className="app-chip rounded-full border px-3 py-1.5 text-xs font-black shadow-sm">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-3 rounded-2xl border border-blue-100 bg-blue-50/50 px-4 py-2.5 text-sm font-semibold text-blue-800">
          {isActive ? (
            <span>🎉 Trạng thái: Đã kích hoạt Lớp 06. Bạn có thể sử dụng tất cả nội dung.</span>
          ) : (
            <span>Trạng thái: Chưa kích hoạt key. Bạn vẫn có thể xem bản hiện tại, phần khóa nội dung sẽ bật ở giai đoạn sau.</span>
          )}
        </div>

        <div className="app-soft mt-5 grid grid-cols-3 gap-2 rounded-2xl p-1.5">
          {[
            ['plan', 'Đăng ký gói'],
            ['account', 'Tài khoản'],
            ['key', 'Kích hoạt key'],
          ].map(([tab, label]) => (
            <button
              key={tab}
              type="button"
              onClick={() => {
                setActiveTab(tab as PlanKeyTab);
                setFormError('');
                setNotice('');
              }}
              className={`rounded-xl px-3 py-2.5 text-sm font-black transition ${
                activeTab === tab ? 'app-primary shadow-md' : 'app-secondary'
              }`}
              aria-pressed={activeTab === tab}
            >
              {label}
            </button>
          ))}
        </div>

        {activeTab === 'plan' ? (
          <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_0.75fr]">
            <div className="app-soft rounded-3xl p-4">
              <h3 className="text-lg font-black text-slate-950">Chọn gói học phù hợp</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                Hiện app đang hỗ trợ học thử môn Toán Lớp 6. Các môn khác sẽ được mở dần theo kế hoạch.
              </p>
              <ul className="mt-4 grid gap-2 text-sm font-semibold text-slate-700">
                {[
                  'Vào dashboard Lớp 6',
                  'Học và luyện tập môn Toán',
                  'Xem Thành tích và huy hiệu',
                  'Đổi theme và âm thanh học tập',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-blue-50/70 p-4">
              <p className="text-sm font-black text-slate-950">Dùng thử hiện tại</p>
              <p className="mt-2 text-3xl font-black text-blue-700">Toán Lớp 6</p>
              <p className="mt-2 text-xs font-semibold leading-5 text-slate-600">
                Thanh toán tự động đang được chuẩn bị. Phụ huynh cần đăng ký hoặc nhận key vui lòng liên hệ: 0902964685.
              </p>
              <button
                type="button"
                onClick={() => showSupportNotice('Phụ huynh vui lòng liên hệ 0902964685 để được tư vấn gói học và cấp key.')}
                className={`app-primary mt-4 w-full rounded-2xl px-4 py-3 text-sm font-black shadow-md ${buttonMotion}`}
              >
                Liên hệ đăng ký gói
              </button>
            </div>
          </div>
        ) : activeTab === 'account' ? (
          <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_0.75fr]">
            <div className="app-soft rounded-3xl p-4">
              <h3 className="text-lg font-black text-slate-950">Tài khoản sẽ đồng bộ qua web chủ</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                Hiện em dùng chế độ Khách để học trước. Khi kết nối tài khoản, tiến độ, huy hiệu và các quyền học tập sẽ đồng bộ qua web chủ.
              </p>
              <ul className="mt-4 grid gap-2 text-sm font-semibold text-slate-700">
                {[
                  'Lưu tiến độ học tập',
                  'Đồng bộ huy hiệu và thành tích',
                  'Mở rộng quyền học theo gói đã đăng ký',
                  'Quản lý credit sau khi có tài khoản',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-blue-50/70 p-4">
              <p className="text-sm font-black text-slate-950">Trạng thái hiện tại</p>
              <p className="mt-2 text-3xl font-black text-blue-700">Khách</p>
              <p className="mt-2 text-xs font-semibold leading-5 text-slate-600">
                Tài khoản sẽ đồng bộ qua web chủ khi có gói học phù hợp. Hiện em vẫn có thể học thử Toán bình thường.
              </p>
              <button
                type="button"
                onClick={() => setActiveTab('plan')}
                className={`app-primary mt-4 w-full rounded-2xl px-4 py-3 text-sm font-black shadow-md ${buttonMotion}`}
              >
                Xem gói học
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-5 grid gap-4">
            <div className="app-soft rounded-3xl p-4">
              <h3 className="text-lg font-black text-slate-950">Kích hoạt key học tập</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                Nhập mã key được cấp để mở quyền học tập Lớp 06.
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-1">
                <label className="grid gap-1.5 text-sm font-bold text-slate-700">
                  Mã key
                  <input
                    value={licenseKey}
                    onChange={(event) => setLicenseKey(event.target.value)}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold uppercase tracking-wide text-slate-800 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                    placeholder="LOP6-XXXX-XXXX"
                  />
                </label>
              </div>

              {formError ? (
                <p className="mt-3 rounded-2xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-bold text-rose-700">
                  {formError}
                </p>
              ) : null}

              {notice ? (
                <p className="mt-3 rounded-2xl border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700">
                  {notice}
                </p>
              ) : null}

              <p className="mt-3 text-xs font-semibold leading-5 text-slate-600">
                Key dùng để mở quyền học tập đã đăng ký. Vui lòng không chia sẻ key cho người khác.
              </p>
              <p className="mt-1 text-xs font-semibold leading-5 text-slate-500">
                Một key có thể dùng cho 1 phiên học web tại một thời điểm. Nếu dùng app desktop, key sẽ gắn với thiết bị đã kích hoạt.
              </p>

              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <button
                  type="button"
                  onClick={handleActivateKey}
                  disabled={isLoading}
                  className={`app-primary rounded-2xl px-5 py-3 text-sm font-black shadow-md ${buttonMotion} ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? 'Đang kích hoạt...' : 'Kích hoạt key'}
                </button>
                <button
                  type="button"
                  onClick={() => showSupportNotice('Phụ huynh vui lòng liên hệ 0902964685 để được tư vấn gói học và cấp key.')}
                  className={`app-secondary rounded-2xl border px-5 py-3 text-sm font-black ${buttonMotion}`}
                >
                  Tôi chưa có key
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

function SubjectCard({
  subject,
  onOpenSubject,
}: {
  subject: Subject;
  onOpenSubject: (subjectId: string) => void;
}) {
  const Icon = subject.icon;
  const isOpen =
    subject.id === 'toan' ||
    subject.id === 'tieng-anh' ||
    subject.id === 'khtn' ||
    subject.id === 'ngu-van' ||
    subject.id === 'lich-su-dia-li' ||
    subject.id === 'tin-hoc' ||
    subject.id === 'cong-nghe' ||
    subject.id === 'gdcd';

  return (
    <article className="app-card group overflow-hidden rounded-2xl border shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className={`h-1.5 bg-gradient-to-r ${subject.color}`} />
      <div className="p-3.5 sm:p-5">
        <div className="flex items-start justify-between gap-2">
          <div className={`rounded-2xl bg-gradient-to-br ${subject.color} p-2.5 text-white shadow-md sm:p-3`}>
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} />
          </div>
          <span className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-bold text-slate-600">
            {subject.lessons} bài
          </span>
        </div>

        <div className="mt-3 sm:mt-4">
          <h3 className="text-base font-black text-slate-950 sm:text-xl">{subject.name}</h3>
          <p className="mt-1.5 min-h-10 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">
            {subject.description}
          </p>
        </div>

        <div className="app-soft mt-3 rounded-2xl p-3 sm:mt-4">
          <div className="mb-2 flex items-center justify-between text-xs sm:text-sm">
            <span className="font-bold text-slate-700">Tiến độ</span>
            <span className="font-black text-blue-700">{subject.progress}%</span>
          </div>
          <ProgressBar value={subject.progress} />
          <p className="mt-2 line-clamp-1 text-[11px] font-medium text-slate-500 sm:text-xs">
            {subject.nextLesson}
          </p>
        </div>

        {isOpen ? (
          <button
            type="button"
            onClick={() => onOpenSubject(subject.id)}
            className={`app-primary mt-3 flex w-full items-center justify-center gap-1.5 rounded-2xl px-3 py-2.5 text-xs font-black shadow-md sm:mt-4 sm:text-sm ${buttonMotion}`}
          >
            Vào học
            <ChevronRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="button"
            disabled
            className="mt-3 flex w-full cursor-not-allowed items-center justify-center rounded-2xl bg-slate-200 px-3 py-2.5 text-xs font-black text-slate-600 sm:mt-4 sm:text-sm"
          >
            Sắp mở
          </button>
        )}
      </div>
    </article>
  );
}

type SupportAssistantProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

function SupportAssistant({ isOpen, onOpen, onClose }: SupportAssistantProps) {
  const toast = useToast();

  const handlePlaceholderAction = (label: string) => {
    toast.info('Dopi', `${label} đang được chuẩn bị. Em có thể dùng gợi ý học tiếp bên dưới.`);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      {isOpen ? (
        <div className="w-[min(92vw,340px)] rounded-3xl border border-blue-100 bg-blue-50/95 p-4 shadow-2xl backdrop-blur">
          <div className="mb-3 flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <DopiAvatar size="sm" />
              <div>
                <p className="text-sm font-black text-slate-950">Dopi - Hỗ trợ học Lớp 6</p>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  Dopi sẽ giúp em hỏi bài, luyện tập và gợi ý học tiếp.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className={`rounded-xl border border-slate-200 px-2 py-1 text-xs font-bold text-slate-600 hover:bg-slate-100 ${buttonMotion}`}
            >
              Đóng
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {['Hỏi bài với Dopi', 'Luyện tập cùng Dopi', 'Giải thích lỗi sai', 'Xem gợi ý học tiếp'].map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => handlePlaceholderAction(label)}
                className={`rounded-xl border border-slate-200 px-3 py-2 text-left text-xs font-bold text-slate-700 hover:border-blue-200 hover:bg-blue-50 ${buttonMotion}`}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => handlePlaceholderAction('Trò chuyện với Dopi')}
            className={`mt-3 inline-flex rounded-xl bg-blue-600 px-4 py-2 text-sm font-black text-white shadow-md shadow-blue-100 hover:bg-blue-700 ${buttonMotion}`}
          >
            Chat với Dopi
          </button>
          <p className="mt-2 text-xs text-slate-500">Tính năng trò chuyện sẽ được hoàn thiện thêm ở bước sau.</p>
        </div>
      ) : null}

      <button
        type="button"
        onClick={onOpen}
        className={`dopi-float inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white p-1 shadow-xl shadow-blue-300/70 ring-1 ring-blue-100 hover:bg-blue-50 ${buttonMotion}`}
        aria-label="Mở hỗ trợ Dopi"
        title="Hỗ trợ Dopi"
      >
        <span className="sr-only">Dopi</span>
        <img src={`${ASSET_BASE_URL}dopi-avatar.png`} alt="Dopi" className="h-10 w-10 object-contain drop-shadow-md" />
      </button>
    </div>
  );
}

function Lop6AppContent() {
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlanKeyOpen, setIsPlanKeyOpen] = useState(false);
  const [planKeyTab, setPlanKeyTab] = useState<PlanKeyTab>('plan');
  const [view, setView] = useState<AppView>('dashboard');
  const [selectedTheme, setSelectedTheme] = useState<AppThemeId>(() => getStoredTheme());
  const sound = useSound();
  const toast = useToast();

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, selectedTheme);
  }, [selectedTheme]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = '';
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleMobileMenuKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleMobileMenuKeyDown);

    return () => {
      window.removeEventListener('keydown', handleMobileMenuKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  const handleThemeChange = (theme: AppThemeId) => {
    setSelectedTheme(theme);
    sound.play('notify_soft');
  };

  const handleSoundEnabledChange = (enabled: boolean) => {
    sound.setEnabled(enabled);
    if (enabled) {
      sound.play('notify_soft');
    }
  };

  const handleSoundVolumeChange = (volume: SoundVolume) => {
    sound.setVolume(volume);
    if (volume !== 'off') {
      window.setTimeout(() => sound.play('notify_soft'), 20);
    }
  };

  const handleDownloadClick = () => {
    sound.play('ui_tap_soft');
    toast.info('Tải app', 'Bản desktop đang chuẩn bị. Em dùng bản web trước nhé.');
  };

  const openPlanKeyPanel = (tab: PlanKeyTab) => {
    sound.play('ui_tap_soft');
    setPlanKeyTab(tab);
    setIsPlanKeyOpen(true);
  };

  const totalProgress = Math.round(
    subjects.reduce((sum, subject) => sum + subject.progress, 0) / subjects.length,
  );

  const quickActions: QuickAction[] = [
    {
      title: 'Học tiếp Toán',
      text: 'Vào 8 bài đầu về số tự nhiên.',
      icon: PlayCircle,
      action: () => setView('math'),
    },
    {
      title: 'Ôn câu sai',
      text: 'Khu ôn lỗi đang được chuẩn bị.',
      icon: Brain,
      action: () => toast.info('Ôn câu sai', 'Khu ôn lỗi đang được chuẩn bị. Em có thể vào Toán để luyện tiếp.'),
    },
    {
      title: 'Luyện 10 câu',
      text: 'Luyện nhanh mỗi ngày.',
      icon: Target,
      action: () => {
        window.localStorage.setItem(MATH_PRACTICE_QUESTION_COUNT_STORAGE_KEY, '10');
        toast.info('Luyện 10 câu', 'Toán sẽ mở ở chế độ luyện nhanh 10 câu.');
        setView('math');
      },
    },
  ];

  if (view === 'math') {
    return (
      <main className="app-shell min-h-screen font-sans antialiased" data-theme={selectedTheme}>
        <Suspense
          fallback={
            <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
              <div className="app-card rounded-3xl border p-6 text-sm font-bold text-slate-600 shadow-sm">
                Đang mở dữ liệu Toán...
              </div>
            </section>
          }
        >
          <MathHomePage onBackToDashboard={() => setView('dashboard')} />
        </Suspense>
        <SupportAssistant
          isOpen={isSupportOpen}
          onOpen={() => setIsSupportOpen(true)}
          onClose={() => setIsSupportOpen(false)}
        />
      </main>
    );
  }

  if (view === 'english') {
    return (
      <main className="app-shell min-h-screen font-sans antialiased" data-theme={selectedTheme}>
        <Suspense
          fallback={
            <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
              <div className="app-card rounded-3xl border p-6 text-sm font-bold text-slate-600 shadow-sm">
                Đang mở dữ liệu Tiếng Anh...
              </div>
            </section>
          }
        >
          <EnglishHomePage onBackToDashboard={() => setView('dashboard')} />
        </Suspense>
        <SupportAssistant
          isOpen={isSupportOpen}
          onOpen={() => setIsSupportOpen(true)}
          onClose={() => setIsSupportOpen(false)}
        />
      </main>
    );
  }

  if (view === 'khtn') {
    return (
      <main className="app-shell min-h-screen font-sans antialiased" data-theme={selectedTheme}>
        <Suspense
          fallback={
            <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
              <div className="app-card rounded-3xl border p-6 text-sm font-bold text-slate-600 shadow-sm">
                Đang mở dữ liệu Khoa học tự nhiên...
              </div>
            </section>
          }
        >
          <KhtnHomePage onBackToDashboard={() => setView('dashboard')} />
        </Suspense>
        <SupportAssistant
          isOpen={isSupportOpen}
          onOpen={() => setIsSupportOpen(true)}
          onClose={() => setIsSupportOpen(false)}
        />
      </main>
    );
  }

  if (view === 'ngu-van') {
    return (
      <main className="app-shell min-h-screen font-sans antialiased" data-theme={selectedTheme}>
        <Suspense
          fallback={
            <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
              <div className="app-card rounded-3xl border p-6 text-sm font-bold text-slate-600 shadow-sm">
                Đang mở dữ liệu Ngữ văn...
              </div>
            </section>
          }
        >
          <NguVanHomePage onBackToDashboard={() => setView('dashboard')} />
        </Suspense>
        <SupportAssistant
          isOpen={isSupportOpen}
          onOpen={() => setIsSupportOpen(true)}
          onClose={() => setIsSupportOpen(false)}
        />
      </main>
    );
  }

  if (view === 'lich-su-dia-li') {
    return (
      <main className="app-shell min-h-screen font-sans antialiased" data-theme={selectedTheme}>
        <Suspense
          fallback={
            <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
              <div className="app-card rounded-3xl border p-6 text-sm font-bold text-slate-600 shadow-sm">
                Đang mở dữ liệu Lịch sử & Địa lí...
              </div>
            </section>
          }
        >
          <LichSuDiaLiHomePage onBackToDashboard={() => setView('dashboard')} />
        </Suspense>
        <SupportAssistant
          isOpen={isSupportOpen}
          onOpen={() => setIsSupportOpen(true)}
          onClose={() => setIsSupportOpen(false)}
        />
      </main>
    );
  }

  if (view === 'tin-hoc') {
    return (
      <main className="app-shell min-h-screen font-sans antialiased" data-theme={selectedTheme}>
        <Suspense
          fallback={
            <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
              <div className="app-card rounded-3xl border p-6 text-sm font-bold text-slate-600 shadow-sm">
                Đang mở dữ liệu Tin học...
              </div>
            </section>
          }
        >
          <TinHocHomePage onBackToDashboard={() => setView('dashboard')} />
        </Suspense>
        <SupportAssistant
          isOpen={isSupportOpen}
          onOpen={() => setIsSupportOpen(true)}
          onClose={() => setIsSupportOpen(false)}
        />
      </main>
    );
  }

  if (view === 'cong-nghe') {
    return (
      <main className="app-shell min-h-screen font-sans antialiased" data-theme={selectedTheme}>
        <Suspense
          fallback={
            <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
              <div className="app-card rounded-3xl border p-6 text-sm font-bold text-slate-600 shadow-sm">
                Đang mở dữ liệu Công nghệ...
              </div>
            </section>
          }
        >
          <CongNgheHomePage onBackToDashboard={() => setView('dashboard')} />
        </Suspense>
        <SupportAssistant
          isOpen={isSupportOpen}
          onOpen={() => setIsSupportOpen(true)}
          onClose={() => setIsSupportOpen(false)}
        />
      </main>
    );
  }

  if (view === 'gdcd') {
    return (
      <main className="app-shell min-h-screen font-sans antialiased" data-theme={selectedTheme}>
        <Suspense
          fallback={
            <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
              <div className="app-card rounded-3xl border p-6 text-sm font-bold text-slate-600 shadow-sm">
                ?ang m? d? li?u GDCD...
              </div>
            </section>
          }
        >
          <GdcdHomePage onBackToDashboard={() => setView('dashboard')} />
        </Suspense>
        <SupportAssistant
          isOpen={isSupportOpen}
          onOpen={() => setIsSupportOpen(true)}
          onClose={() => setIsSupportOpen(false)}
        />
      </main>
    );
  }

  if (view === 'achievements') {
    return (
      <main className="app-shell min-h-screen font-sans antialiased" data-theme={selectedTheme}>
        <AchievementsPanel onBackToDashboard={() => setView('dashboard')} />
        <SupportAssistant
          isOpen={isSupportOpen}
          onOpen={() => setIsSupportOpen(true)}
          onClose={() => setIsSupportOpen(false)}
        />
      </main>
    );
  }

  return (
    <main className="app-shell min-h-screen font-sans antialiased" data-theme={selectedTheme}>
      <header className="app-header relative sticky top-0 z-40 border-b backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-blue-600 p-2 text-white shadow-lg shadow-blue-200">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-blue-700">Học Tập Thông Minh</p>
              <h1 className="text-base font-black tracking-tight text-slate-950">Lớp 6</h1>
            </div>
          </div>

          <nav className="hidden items-center gap-1 text-sm font-bold lg:flex">
            <a className={`app-nav-link rounded-xl px-3 py-2 ${buttonMotion}`} href="#mon-hoc">Học tập</a>
            <button
              type="button"
              onClick={() => openPlanKeyPanel('plan')}
              className={`app-nav-link rounded-xl px-3 py-2 ${buttonMotion}`}
            >
              Gói học
            </button>
            <button
              type="button"
              onClick={() => openPlanKeyPanel('account')}
              className={`app-nav-link rounded-xl px-3 py-2 ${buttonMotion}`}
            >
              Tài khoản
            </button>
            <button
              type="button"
              onClick={() => {
                sound.play('ui_tap_soft');
                setView('achievements');
              }}
              className={`app-nav-link inline-flex items-center gap-2 rounded-xl px-3 py-2 ${buttonMotion}`}
            >
              <Trophy className="h-4 w-4" />
              Thành tích
            </button>
            <button
              type="button"
              onClick={handleDownloadClick}
              className={`app-nav-link rounded-xl px-3 py-2 ${buttonMotion}`}
              title="Bản desktop đang chuẩn bị"
            >
              Tải app
            </button>
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  sound.play('ui_tap_soft');
                  setIsSettingsOpen((open) => !open);
                }}
                className={`app-nav-link inline-flex items-center gap-2 rounded-xl px-3 py-2 ${buttonMotion}`}
              >
                <Settings className="h-4 w-4" />
                Cài đặt
              </button>
            </div>
          </nav>
          {isSettingsOpen ? (
            <SettingsPanel
              onClose={() => setIsSettingsOpen(false)}
              selectedTheme={selectedTheme}
              soundSettings={sound.settings}
              onSoundEnabledChange={handleSoundEnabledChange}
              onSoundVolumeChange={handleSoundVolumeChange}
              onThemeChange={handleThemeChange}
            />
          ) : null}

          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              onClick={handleDownloadClick}
              title="Bản desktop đang chuẩn bị"
              className={`app-secondary inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-black shadow-sm ${buttonMotion}`}
            >
              <Download className="h-3.5 w-3.5" />
              Tải app
            </button>
            <button
              type="button"
              onClick={() => openPlanKeyPanel('key')}
              className={`app-primary rounded-full px-3.5 py-1.5 text-xs font-black shadow-md ${buttonMotion}`}
            >
              Gói & key
            </button>
            <button
              type="button"
              onClick={() => openPlanKeyPanel('plan')}
              className={`app-secondary rounded-full border px-3.5 py-1.5 text-xs font-black shadow-sm ${buttonMotion}`}
            >
              Nâng cấp
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className={`app-secondary rounded-xl border p-2 shadow-sm lg:hidden ${buttonMotion}`}
            aria-label="Mở menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {isMobileMenuOpen ? (
          <div className="fixed inset-0 z-50 flex lg:hidden">
            <button
              type="button"
              className="absolute inset-0 bg-slate-950/30 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Đóng menu"
            />
            <div
              className="relative ml-auto h-[100dvh] w-full max-w-[320px] overflow-y-auto bg-white p-4 shadow-2xl overscroll-contain app-mobile-drawer"
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-sm font-black">Menu</p>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`app-ghost-button rounded-xl border p-2 ${buttonMotion}`}
                  aria-label="Đóng menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="grid gap-2 text-sm font-bold">
                <a
                  className={`app-nav-link rounded-xl px-3 py-3 ${buttonMotion}`}
                  href="#mon-hoc"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Học tập
                </a>
                <button
                  type="button"
                  onClick={() => {
                    openPlanKeyPanel('plan');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`app-nav-link rounded-xl px-3 py-3 text-left ${buttonMotion}`}
                >
                  Gói học
                </button>
                <button
                  type="button"
                  onClick={() => {
                    openPlanKeyPanel('account');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`app-nav-link rounded-xl px-3 py-3 text-left ${buttonMotion}`}
                >
                  Tài khoản
                </button>
                <button
                  type="button"
                  onClick={() => {
                    sound.play('ui_tap_soft');
                    setView('achievements');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`app-nav-link rounded-xl px-3 py-3 text-left ${buttonMotion}`}
                >
                  Thành tích
                </button>
                <button
                  type="button"
                  className={`app-nav-link rounded-xl px-3 py-3 text-left ${buttonMotion}`}
                  onClick={() => {
                    handleDownloadClick();
                    setIsMobileMenuOpen(false);
                  }}
                  title="Bản desktop đang chuẩn bị"
                >
                  Tải app
                </button>
                <button
                  type="button"
                  onClick={() => {
                    sound.play('ui_tap_soft');
                    setIsSettingsOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`app-nav-link rounded-xl px-3 py-3 text-left ${buttonMotion}`}
                >
                  Cài đặt
                </button>
                <button
                  type="button"
                  onClick={() => {
                    openPlanKeyPanel('key');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`app-nav-link rounded-xl px-3 py-3 text-left ${buttonMotion}`}
                >
                  Gói & key
                </button>
                <button
                  type="button"
                  onClick={() => {
                    openPlanKeyPanel('plan');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`app-nav-link rounded-xl px-3 py-3 text-left ${buttonMotion}`}
                >
                  Nâng cấp
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      {isPlanKeyOpen ? <PlanKeyPanel initialTab={planKeyTab} onClose={() => setIsPlanKeyOpen(false)} /> : null}

      <section className="app-section-band">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-5 sm:px-6 md:grid-cols-[minmax(0,1fr)_260px] lg:px-8 lg:py-7">
          <div className="hero-learning-panel relative overflow-hidden rounded-[1.85rem] border backdrop-blur">
            <button
              type="button"
              className={`app-chip absolute right-4 top-4 z-10 inline-flex items-center justify-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-black shadow-sm sm:right-5 sm:top-5 ${buttonMotion}`}
              onClick={handleDownloadClick}
              title="Bản desktop đang chuẩn bị"
            >
              <Download className="h-3.5 w-3.5" />
              Tải app
            </button>
            <div className="grid gap-5 p-5 sm:p-6 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-center">
              <div className="flex items-center gap-4">
                <DopiAvatar size="lg" />
                <div className="min-w-0 lg:hidden">
                  <h2 className="text-3xl font-black tracking-tight text-slate-950">Chào bạn!</h2>
                </div>
              </div>

              <div className="min-w-0">
                <h2 className="hidden text-4xl font-black tracking-tight text-slate-950 lg:block">Chào bạn!</h2>
                <p className="mt-2 max-w-xl text-sm font-medium leading-6 text-slate-600 sm:text-base">
                  Mở bài Toán tiếp theo, luyện ngắn và giữ nhịp học mỗi ngày.
                </p>

                <div id="tai-khoan" className="mt-4">
                  <StatusChips
                    onOpenPlan={() => openPlanKeyPanel('plan')}
                    onOpenAccount={() => openPlanKeyPanel('account')}
                    onOpenCredit={() => {
                      sound.play('ui_tap_soft');
                      toast.info('Dopi credit', 'Credit sẽ đồng bộ sau khi có tài khoản.');
                      openPlanKeyPanel('account');
                    }}
                  />
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setView('math')}
                    className={`app-primary inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black shadow-xl ${buttonMotion}`}
                  >
                    Tiếp tục học
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setView('math')}
                    className={`app-secondary inline-flex items-center justify-center gap-2 rounded-full border px-4 py-3 text-sm font-black shadow-sm ${buttonMotion}`}
                  >
                    Vào môn Toán
                  </button>
                  <button
                    type="button"
                    onClick={() => openPlanKeyPanel('key')}
                    className={`app-secondary inline-flex items-center justify-center rounded-full border px-3.5 py-2 text-xs font-black shadow-sm ${buttonMotion}`}
                  >
                    Gói & key
                  </button>
                  <button
                    type="button"
                    onClick={() => openPlanKeyPanel('plan')}
                    className={`app-secondary inline-flex items-center justify-center rounded-full border px-3.5 py-2 text-xs font-black shadow-sm ${buttonMotion}`}
                  >
                    Nâng cấp
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div id="goi-hoc" className="app-surface rounded-[1.75rem] border p-4 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-wide text-slate-500">Tiến độ Toán</p>
                <p className="mt-1 text-3xl font-black text-slate-950">0/{MATH_LESSON_COUNT}</p>
              </div>
              <div className="rounded-2xl bg-amber-100 p-3 text-amber-700">
                <Flame className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-4">
              <ProgressBar value={totalProgress} />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              <div className="app-soft rounded-2xl p-3">
                <p className="font-bold text-slate-500">Bài còn lại</p>
                <p className="mt-1 text-lg font-black text-slate-950">{MATH_LESSON_COUNT}</p>
              </div>
              <div className="app-soft rounded-2xl p-3">
                <p className="font-bold text-slate-500">Câu hỏi</p>
                <p className="mt-1 text-lg font-black text-slate-950">{MATH_QUESTION_COUNT}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setView('math')}
              className={`app-primary mt-4 flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-black shadow-md ${buttonMotion}`}
            >
              Tiếp tục học
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      <section id="mon-hoc" className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700">Học tập</p>
            <h2 className="mt-1 text-2xl font-black text-slate-950">Môn học</h2>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">
            Đã mở đủ 8 môn Lớp 6
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              onOpenSubject={(subjectId) => {
                if (subjectId === 'toan') setView('math');
                if (subjectId === 'tieng-anh') setView('english');
                if (subjectId === 'khtn') setView('khtn');
                if (subjectId === 'ngu-van') setView('ngu-van');
                if (subjectId === 'lich-su-dia-li') setView('lich-su-dia-li');
                if (subjectId === 'tin-hoc') setView('tin-hoc');
                if (subjectId === 'cong-nghe') setView('cong-nghe');
                if (subjectId === 'gdcd') setView('gdcd');
              }}
            />
          ))}
        </div>
      </section>

      <section id="luyen-tap" className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-amber-700">Gợi ý học tiếp</p>
            <h2 className="mt-1 text-2xl font-black text-slate-950">Việc nhỏ hôm nay</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <article key={action.title} className="app-card rounded-2xl border p-3.5 shadow-sm sm:p-5">
                <div className="app-soft app-accent-text mb-3 flex h-10 w-10 items-center justify-center rounded-2xl">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-black text-slate-950 sm:text-lg">{action.title}</h3>
                <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6">{action.text}</p>
                <button
                  type="button"
                  onClick={action.action}
                  className={`app-secondary mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-black ${buttonMotion}`}
                >
                  Bắt đầu
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </article>
            );
          })}
        </div>
      </section>

      <SupportAssistant
        isOpen={isSupportOpen}
        onOpen={() => setIsSupportOpen(true)}
        onClose={() => setIsSupportOpen(false)}
      />
    </main>
  );
}

export default function Lop6App() {
  return (
    <RootErrorBoundary>
      <ToastProvider>
        <Lop6AppContent />
      </ToastProvider>
    </RootErrorBoundary>
  );
}
