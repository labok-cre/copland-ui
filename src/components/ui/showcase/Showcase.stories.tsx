import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { useState } from 'react'

// UI Components
import { Button } from '../button/Button'
import { Check } from '../check/Check'
import { Radio } from '../radio/Radio'
import { Title } from '../title/Title'
import {
  Input,
  InputHeader,
  InputLabel,
  InputHint,
  InputField,
} from '../input/Input'
import {
  Textarea,
  TextareaHeader,
  TextareaLabel,
  TextareaCounter,
  TextareaField,
} from '../textarea/Textarea'
import { Label } from '../label/Label'
import { ButtonSpinner } from '../spinner/Spinner'
import {
  Select,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '../select/Select'
import {
  Pagination,
  PaginationItem,
  PaginationPrev,
  PaginationNext,
  PaginationEllipsis,
} from '../pagination/Pagination'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../breadcrumb/Breadcrumb'

// Features
import { Header } from '../../features/header/Header'
import { Footer } from '../../features/footer/Footer'

const meta: Meta = {
  title: 'Overview/Showcase',
  component: () => null,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'すべての提供コンポーネントを一覧して動作・デザインを確認できるショーケースです。',
      },
    },
  },
}

export default meta

export const AllComponents: StoryObj = {
  name: 'コンポーネント一覧ショーケース',
  render: () => {
    // Select state
    const [selectValue, setSelectValue] = useState('')
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1)
    // Checkbox states
    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(true)
    // Radio state
    const [radioValue, setRadioValue] = useState('option1')
    // Textarea text state
    const [textareaText, setTextareaText] = useState('')

    return (
      <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', paddingBottom: '60px' }}>
        {/* Header Preview */}
        <Header>
          <Header.Logo>Copland UI Showcase</Header.Logo>
          <Header.Nav>
            <Header.NavItem href="#">コンポーネント</Header.NavItem>
            <Header.NavItem href="#">ドキュメント</Header.NavItem>
          </Header.Nav>
        </Header>

        <div style={{ maxWidth: '1200px', margin: '40px auto 0 auto', padding: '0 20px' }}>
          {/* Page Intro */}
          <div style={{ marginBottom: '40px', borderBottom: '1px solid #e1e6eb', paddingBottom: '20px' }}>
            <Title size="XL" tag="h1">
              Copland UI Showcase
            </Title>
            <p style={{ color: '#6e7b91', fontSize: '15px', marginTop: '8px' }}>
              現在リポジトリで提供されているすべてのコンポーネントと、それらのスタイルのショーケースです。
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>
            {/* 1. Typography & Labels */}
            <section style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e1e6eb' }}>
              <div style={{ marginBottom: '20px', borderBottom: '1px solid #f1f3f5', paddingBottom: '10px' }}>
                <Title size="L" tag="h2">
                  1. Typography & Labels
                </Title>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <h4 style={{ fontSize: '12px', color: '#6e7b91', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Title Component
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <Title size="XL">サイズ XL タイトル</Title>
                    <Title size="L">サイズ L タイトル</Title>
                    <Title size="M" required>
                      サイズ M タイトル (必須マーク付き)
                    </Title>
                    <Title size="S">サイズ S タイトル</Title>
                    <Title size="XS">サイズ XS タイトル</Title>
                  </div>
                </div>

                <div>
                  <h4 style={{ fontSize: '12px', color: '#6e7b91', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Label Component
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    <Label appearance="contained" color="blue" shape="pill">
                      Contained Blue
                    </Label>
                    <Label appearance="contained" color="green" shape="pill" isStatus>
                      稼働中
                    </Label>
                    <Label appearance="contained" color="yellow" shape="pill" isStatus>
                      一時停止
                    </Label>
                    <Label appearance="contained" color="red" shape="pill" isStatus>
                      停止
                    </Label>
                    <Label appearance="contained" color="white" shape="square">
                      白背景 & 枠線
                    </Label>
                    <Label appearance="outlined" color="red" shape="square" isBold>
                      Outlined Red Bold
                    </Label>
                    <Label appearance="outlined" color="gray" shape="pill">
                      Gray Outlined
                    </Label>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Navigation */}
            <section style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e1e6eb' }}>
              <div style={{ marginBottom: '20px', borderBottom: '1px solid #f1f3f5', paddingBottom: '10px' }}>
                <Title size="L" tag="h2">
                  2. Navigation
                </Title>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <h4 style={{ fontSize: '12px', color: '#6e7b91', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Breadcrumb Component (Default icon-based separator)
                  </h4>
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">ホーム</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">ドキュメント</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>クイックスタート</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>

                <div>
                  <h4 style={{ fontSize: '12px', color: '#6e7b91', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Pagination Component (State Controlled)
                  </h4>
                  <Pagination>
                    <PaginationPrev
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                    />
                    <PaginationItem onClick={() => setCurrentPage(1)} isCurrent={currentPage === 1}>
                      1
                    </PaginationItem>
                    <PaginationItem onClick={() => setCurrentPage(2)} isCurrent={currentPage === 2}>
                      2
                    </PaginationItem>
                    <PaginationItem onClick={() => setCurrentPage(3)} isCurrent={currentPage === 3}>
                      3
                    </PaginationItem>
                    <PaginationEllipsis />
                    <PaginationItem onClick={() => setCurrentPage(10)} isCurrent={currentPage === 10}>
                      10
                    </PaginationItem>
                    <PaginationNext
                      onClick={() => setCurrentPage((p) => Math.min(10, p + 1))}
                      disabled={currentPage === 10}
                    />
                  </Pagination>
                  <p style={{ fontSize: '13px', color: '#6e7b91', marginTop: '8px' }}>
                    現在の選択ページ: <strong>{currentPage}</strong>
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Form Controls */}
            <section style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e1e6eb' }}>
              <div style={{ marginBottom: '20px', borderBottom: '1px solid #f1f3f5', paddingBottom: '10px' }}>
                <Title size="L" tag="h2">
                  3. Form Controls
                </Title>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {/* Buttons */}
                <div>
                  <h4 style={{ fontSize: '12px', color: '#6e7b91', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Button Component
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
                    <Button variant="primary" size="M">
                      Primary (M)
                    </Button>
                    <Button variant="secondary" size="M">
                      Secondary (M)
                    </Button>
                    <Button variant="tertiary" size="M">
                      Tertiary (M)
                    </Button>
                    <Button variant="primary" size="S">
                      Size S
                    </Button>
                    <Button variant="primary" size="L">
                      Size L
                    </Button>
                    <Button variant="primary" size="XL">
                      Size XL
                    </Button>
                    <Button variant="primary" size="M" isLoading>
                      Loading
                    </Button>
                    <Button variant="primary" size="M" disabled>
                      Disabled
                    </Button>
                  </div>
                </div>

                {/* Check & Radio */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <h4 style={{ fontSize: '12px', color: '#6e7b91', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Check Component (Checkbox)
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <Check
                        label="未選択状態"
                        checked={checked1}
                        onChange={(e) => setChecked1(e.target.checked)}
                      />
                      <Check
                        label="選択状態"
                        checked={checked2}
                        onChange={(e) => setChecked2(e.target.checked)}
                      />
                      <Check label="一部選択状態 (Indeterminate)" indeterminate readOnly checked />
                      <Check label="無効状態" disabled />
                    </div>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '12px', color: '#6e7b91', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Radio Component
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <Radio
                        label="オプション 1"
                        name="showcase-radio"
                        value="option1"
                        checked={radioValue === 'option1'}
                        onChange={() => setRadioValue('option1')}
                      />
                      <Radio
                        label="オプション 2"
                        name="showcase-radio"
                        value="option2"
                        checked={radioValue === 'option2'}
                        onChange={() => setRadioValue('option2')}
                      />
                      <Radio label="無効状態" name="showcase-radio-disabled" disabled readOnly />
                    </div>
                  </div>
                </div>

                {/* Input & Textarea */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <h4 style={{ fontSize: '12px', color: '#6e7b91', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Input Component
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <Input>
                        <InputHeader>
                          <InputLabel>メールアドレス</InputLabel>
                        </InputHeader>
                        <InputField placeholder="example@copland.com" />
                      </Input>

                      <Input>
                        <InputHeader>
                          <InputLabel>パスワード</InputLabel>
                          <InputHint>8文字以上</InputHint>
                        </InputHeader>
                        <InputField type="password" defaultValue="123456" error />
                      </Input>
                    </div>
                  </div>

                  <div>
                    <h4 style={{ fontSize: '12px', color: '#6e7b91', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Textarea Component (Auto-resize)
                    </h4>
                    <Textarea>
                      <TextareaHeader>
                        <TextareaLabel>自己紹介</TextareaLabel>
                        <TextareaCounter>{textareaText.length}/200</TextareaCounter>
                      </TextareaHeader>
                      <TextareaField
                        placeholder="自己紹介文を入力してください（自動的に高さが伸びます）"
                        maxLength={200}
                        value={textareaText}
                        onChange={(e) => setTextareaText(e.target.value)}
                      />
                    </Textarea>
                  </div>
                </div>

                {/* Select */}
                <div>
                  <h4 style={{ fontSize: '12px', color: '#6e7b91', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Select Component
                  </h4>
                  <div style={{ maxWidth: '320px' }}>
                    <Select value={selectValue} onValueChange={setSelectValue}>
                      <SelectLabel>プロジェクト種別</SelectLabel>
                      <SelectTrigger>
                        <SelectValue placeholder="選択してください" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web">Web アプリケーション</SelectItem>
                        <SelectItem value="mobile">モバイルアプリ</SelectItem>
                        <SelectItem value="desktop">デスクトップアプリ</SelectItem>
                        <SelectItem value="api">API サーバー</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Spinners */}
            <section style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e1e6eb' }}>
              <div style={{ marginBottom: '20px', borderBottom: '1px solid #f1f3f5', paddingBottom: '10px' }}>
                <Title size="L" tag="h2">
                  4. Feedback & Miscellaneous
                </Title>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <span style={{ fontSize: '14px', color: '#6e7b91' }}>スピナー単体:</span>
                <span style={{ display: 'inline-flex', padding: '8px', backgroundColor: 'var(--bg-key)', borderRadius: '4px', color: '#fff' }}>
                  <ButtonSpinner />
                </span>
              </div>
            </section>
          </div>
        </div>

        {/* Footer Preview */}
        <div style={{ marginTop: '80px' }}>
          <Footer>
            <Footer.Copy siteName="Copland UI Showcase" />
          </Footer>
        </div>
      </div>
    )
  },
}
