import { Header } from '@/components/features/header/Header'
import { Button } from '@/components/ui/button/Button'
import { Footer } from '@/components/features/footer/Footer'

export default function Home() {
  return (
    <>
      <Header>
        <Header.Logo>Copland UI</Header.Logo>
        <Header.Nav>
          <Header.NavItem href="/">ホーム</Header.NavItem>
        </Header.Nav>
      </Header>

      <main>
        <Button variant="primary" size="M">
          Button
        </Button>
      </main>

      <Footer>
        <Footer.Copy siteName="Copland UI" />
      </Footer>
    </>
  )
}
