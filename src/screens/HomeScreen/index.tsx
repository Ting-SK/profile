import { AuthorizedLayout } from '../../components/AuthorizedLayout'
import { HomeComponent } from '../../components/HomeComponent'

export const HomeScreen = () => (
  <AuthorizedLayout>
    <HomeComponent />
  </AuthorizedLayout>
)
