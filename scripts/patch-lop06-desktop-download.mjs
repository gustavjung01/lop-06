import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const filePath = path.join(root, 'src', 'app', 'Lop6App.tsx');
const downloadUrl = 'https://pub-53f18eb6ccaf40f5a7c141e65e97dfb3.r2.dev/app-updates/app-lop-06/HocHungKhoi_Lop06-Win.exe';

let source = fs.readFileSync(filePath, 'utf8');
let changed = false;

const assetMarker = "const ASSET_BASE_URL = (import.meta as any).env?.BASE_URL || '/';";
const constantsBlock = `${assetMarker}\nconst DESKTOP_DOWNLOAD_URL = '${downloadUrl}';`;

if (!source.includes('const DESKTOP_DOWNLOAD_URL = ')) {
  if (!source.includes(assetMarker)) {
    throw new Error('Không tìm thấy ASSET_BASE_URL để thêm DESKTOP_DOWNLOAD_URL.');
  }
  source = source.replace(assetMarker, constantsBlock);
  changed = true;
}

const oldHandler = `  const handleDownloadClick = () => {
    sound.play('ui_tap_soft');
    toast.info('Tải app', 'Bản desktop đang chuẩn bị. Em dùng bản web trước nhé.');
  };`;

const newHandler = `  const handleDownloadClick = () => {
    sound.play('ui_tap_soft');
    if (typeof window !== 'undefined') {
      window.open(DESKTOP_DOWNLOAD_URL, '_blank', 'noopener,noreferrer');
    }
    toast.success('Tải app desktop', 'Đang mở link tải app Windows Lớp 06.');
  };`;

if (source.includes(oldHandler)) {
  source = source.replace(oldHandler, newHandler);
  changed = true;
} else if (!source.includes("window.open(DESKTOP_DOWNLOAD_URL")) {
  throw new Error('Không tìm thấy handleDownloadClick cũ để vá nút tải app.');
}

source = source.replaceAll('title="Bản desktop đang chuẩn bị"', 'title="Tải app desktop Windows Lớp 06"');
source = source.replaceAll('Bản desktop đang chuẩn bị', 'Tải app desktop Windows Lớp 06');

if (changed) {
  fs.writeFileSync(filePath, source, 'utf8');
  console.log('OK: đã vá nút Tải app Lớp 06 sang link desktop Windows.');
} else {
  console.log('OK: nút Tải app Lớp 06 đã được vá từ trước.');
}
