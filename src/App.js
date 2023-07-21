import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout
              ? route.layout
              : route.layout === null
              ? Fragment
              : DefaultLayout; // nếu không có route.layout nó sẽ lấy DefaultLayout ngược lại
            const Page = route.component; // chuyển đổi component sang componentJSX
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  // lấy children cho component DefaultLayout
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
