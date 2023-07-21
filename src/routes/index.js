import { HeaderOnly } from '~/components/Layout';
import { Home, Following, Profile, Upload, Search } from '~/pages';

const publicRoutes = [
  // dùng khi không cần đăng nhập vẫn xem đx
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];
const privateRoute = [
  // dùng khi phải  đăng nhập mới xem đx
];

export { publicRoutes, privateRoute };
