import { Navigate, Route, Routes } from 'react-router-dom';
import { Route as AppRoute } from 'types/enums/Route.enum';
import Navigation from 'components/layout/navigation/Navigation.component';
import ECU from 'modules/ecu/pages/ECU.page';
import HW from 'modules/hw/pages/HW.page';
import SW from 'modules/sw/pages/SW.page';
import S from './Layout.styles';

const Layout = () => (
  <S.Wrapper>
    <Navigation />

    <S.VerticalWrapper>
      <Routes>
        <Route path={AppRoute.ECU} element={<ECU />} />
        <Route path={AppRoute.HW} element={<HW />} />
        <Route path={AppRoute.SW} element={<SW />} />
        <Route path="*" element={<Navigate to={AppRoute.ECU} replace />} />
      </Routes>
    </S.VerticalWrapper>
  </S.Wrapper>
);

export default Layout;
