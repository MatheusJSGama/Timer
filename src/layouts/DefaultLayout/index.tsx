import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'
import { CyclesContextProvider } from '../../context/CyclesContext'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <CyclesContextProvider>
        <Outlet />
      </CyclesContextProvider>

    </LayoutContainer>
  )
}
