import WebHeader from '@/components/features/web-header/WebHeader'
import { Button } from '@/components/ui/button/Button'
import WebFooter from '@/components/features/web-footer/WebFooter'

export default function Home() {
  return (
    <>
      <WebHeader siteName="Copland UI" />

      <main>
        <Button variant="primary" size="M">Button</Button>
      </main>

      <WebFooter siteName="Copland UI" />
    </>
  )
}
