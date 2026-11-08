/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Gift,
  Lightbulb,
  LockKeyhole,
  ShieldCheck,
  X,
  Zap,
} from 'lucide-react';
import {
  ANA_AVATAR,
  CARLA_AVATAR,
  FERNANDA_AVATAR,
  JULIANA_AVATAR,
} from './avatars';

const MARIA_AVATAR =
  'data:image/webp;base64,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';

const RECIPES: [string, string, string][] = [
  ['Peru Assado com Ervas', '350 calorias', '/assets/peru-BE_0udlc.webp'],
  ['Tender de Natal com Abacaxi', '280 calorias', '/assets/tender-BVKAARxz.webp'],
  ['Rabanada Especial de Natal', '220 calorias', '/assets/rabanada-ClG0yOWC.webp'],
  ['Panettone Caseiro Tradicional', '245 calorias', '/assets/panettone-DxiM5q9k.webp'],
  ['Chester Glaceado com Mel', '320 calorias', '/assets/chester-DlTM4BNV.webp'],
  ['Farofa Natalina Completa', '180 calorias', '/assets/farofa-9v0BTy9y.webp'],
  ['Bacalhau à Portuguesa', '265 calorias', '/assets/bacalhau-DRgMljjI.webp'],
  ['Arroz de Natal com Frutas', '195 calorias', '/assets/arroz-DMA0lgdr.webp'],
  ['Pavê de Chocolate Cremoso', '310 calorias', '/assets/pave-CyVlOzFU.webp'],
  ['Torta de Nozes e Castanhas', '285 calorias', '/assets/torta-Dcsg9zkF.webp'],
  ['Salada de Frutas Tropicais', '120 calorias', '/assets/salada-Ch_TZCNX.webp'],
  ['Bolo Rei Português', '230 calorias', '/assets/bolo-sjsIzYvd.webp'],
  ['Ponche de Frutas Natalino', '145 calorias', '/assets/ponche-BRRVJuk6.webp'],
  ['Cookies de Gengibre de Natal', '165 calorias', '/assets/cookies-D2H6NO9l.webp'],
];

const FAQS: [string, string][] = [
  [
    '💡 São realmente 250 receitas diferentes de Natal?',
    'Sim! São 250 receitas únicas e diferentes, especialmente selecionadas para o período natalino. Você nunca mais ficará sem ideias para sua ceia!',
  ],
  [
    '📩 Como vou receber as 250 receitas?',
    'Você recebe o acesso pelo WhatsApp após a confirmação do pagamento e pode baixar todo o conteúdo imediatamente.',
  ],
  [
    '👩‍🍳 Não sou muito boa cozinhando... isso é para mim?',
    'Absolutamente! Todas as 250 receitas são simples, passo a passo, e perfeitas para iniciantes e especialistas.',
  ],
  [
    '📱 Posso acessar do meu celular?',
    'Sim! Você pode ver e usar as 250 receitas em qualquer smartphone, tablet ou computador.',
  ],
  [
    '💸 E se eu não gostar? Tem reembolso?',
    'Sim! Você está protegido pela nossa garantia de devolução do dinheiro de 7 dias. Sem perguntas.',
  ],
];

const COMMENTS = [
  {
    name: 'Maria Silva',
    time: '2h',
    likes: '23',
    text: 'As 250 Receitas de Natal são INCRÍVEIS! Usei várias na minha ceia e todo mundo adorou. Minha família está impressionada com tanta variedade! 🎄',
    avatar: MARIA_AVATAR,
  },
  {
    name: 'Ana Paula Souza',
    time: '3h',
    likes: '19',
    text: 'Comprei a edição Premium e os bônus salvaram meu planejamento! O guia da Ceia Econômica vale cada centavo, fizemos uma mesa linda gastando pouco. ✨',
    avatar: ANA_AVATAR,
  },
  {
    name: 'Fernanda Costa',
    time: '5h',
    likes: '31',
    text: 'As receitas são super fáceis de seguir! Fiz o Panettone Caseiro e a Rabanada Especial para testar antes do Natal e ficaram perfeitos!',
    avatar: FERNANDA_AVATAR,
  },
  {
    name: 'Juliana Mendes',
    time: '6h',
    likes: '27',
    text: 'Recebi no meu WhatsApp na mesma hora! Material muito bem organizado, com ingredientes simples que a gente já tem em casa. Recomendo demais! ❤️',
    avatar: JULIANA_AVATAR,
  },
  {
    name: 'Carla Ribeiro',
    time: '8h',
    likes: '42',
    text: 'Melhor compra que fiz para este fim de ano! O Chester Glaceado com Mel e o Pavê de Chocolate Cremoso já estão garantidos no nosso cardápio! 🎄🍗',
    avatar: CARLA_AVATAR,
  },
];

function CtaButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="cta"
      onClick={() =>
        document.querySelector('#ofertas')?.scrollIntoView({ behavior: 'smooth' })
      }
    >
      {children}
    </button>
  );
}

function TopTimerBar() {
  return (
    <div className="timer">
      ⌛ <strong>Oferta especial disponível por tempo limitado</strong>
    </div>
  );
}

function PriceCard({
  premium = false,
  onBuyClick,
}: {
  premium?: boolean;
  onBuyClick?: () => void;
}) {

  const features = premium
    ? [
        '250 Receitas de Natal Completas',
        'Entradas, Pratos Principais, Sobremesas e Bebidas',
        'Ingredientes Fáceis de Encontrar',
        'Passo a Passo Detalhado',
        'Acesso Vitalício',
        'Acesso imediato pelo WhatsApp após a confirmação do pagamento',
        'Garantia de 7 dias',
      ]
    : [
        '250 Receitas de Natal - Acesso Vitalício',
        'Acesso imediato pelo WhatsApp após a confirmação do pagamento',
        'Receitas Completas e Testadas',
        'Somente o livro principal com as 250 receitas',
        'Garantia de 7 dias',
      ];

  const bonuses = [
    'Guia da Ceia Fitness de Natal – Receitas Leves e Saudáveis',
    'Guia de Decoração e Montagem da Mesa de Natal',
    "Mini Livro da 'Ceia Econômica' – 10 Menus Prontos por Menos de R$150",
    'Versão Imprimível',
  ];

  return (
    <article className={`price-card ${premium ? 'premium' : ''}`}>
      {premium && <span className="popular">★ MAIS POPULAR</span>}
      <span className="offer-label">
        {premium ? '🌟 EDIÇÃO PREMIUM' : '🎁 OFERTA BÁSICA'}
      </span>
      <h3
        onClick={onBuyClick}
        className={onBuyClick ? 'cursor-pointer' : undefined}
      >
        {premium ? (
          <>
            250 Receitas de Natal Edição <b>PREMIUM</b>
          </>
        ) : (
          '250 Receitas de Natal'
        )}
      </h3>
      <ul>
        {features.map((item) => (
          <li key={item}>
            ✓ <span>{item}</span>
          </li>
        ))}
      </ul>
      {premium && (
        <div className="bonus-box">
          <b className="bonus-title">🎁 BÔNUS EXCLUSIVOS GRÁTIS</b>
          {bonuses.map((bonus) => (
            <div className="bonus-item" key={bonus}>
              <Gift />
              <span>{bonus}</span>
            </div>
          ))}
          <p className="bonus-note">
            A opção Premium inclui o livro completo, todos os bônus exclusivos e a
            versão imprimível.
          </p>
        </div>
      )}
      <div className="price">
        <span>R$ {premium ? '60,00' : '36,00'}</span>
        <small>-55%</small>
        <strong>R$ {premium ? '17' : '12'}</strong>
        <em>Pagamento Único</em>
      </div>
      <button type="button" onClick={onBuyClick} className="buy w-full">
        COMPRAR AGORA
      </button>
      <div className="trust">
        <span>
          <LockKeyhole /> Compra Segura
        </span>
        <span>
          <ShieldCheck /> Garantia de 7 Dias
        </span>
      </div>
    </article>
  );
}

const FALLING_TREES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  drift: i % 2 === 0 ? 'snow-fall-left' : 'snow-fall-right',
  slot: `snow-slot-${(i % 12) + 1}`,
  speed: `snow-speed-${(i % 6) + 1}`,
  sizeClass: i % 3 === 0 ? 'flake-lg' : i % 3 === 1 ? 'flake-md' : 'flake-sm',
}));

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [commentIndex, setCommentIndex] = useState(0);
  const [promoPrice, setPromoPrice] = useState<'13,82' | '14,82' | null>(null);

  const currentComment = COMMENTS[commentIndex];

  return (
    <main>
      <TopTimerBar />

      <section className="hero">
        <div className="hero-snow" aria-hidden="true">
          {FALLING_TREES.map((tree) => (
            <span
              key={tree.id}
              className={`snowflake ${tree.drift} ${tree.slot} ${tree.speed} ${tree.sizeClass}`}
            >
              🎄
            </span>
          ))}
        </div>
        <div className="container hero-inner">
          <h1>
            <span className="grad-text">
              250 Receitas de Natal – A Grande Enciclopédia
              <br className="desktop-break" /> da Ceia Perfeita
            </span>
          </h1>
          <p>
            Receitas deliciosas, práticas e tradicionais, incluindo drinks e
            bebidas, para encantar toda a família
            <br className="desktop-break" /> neste Natal <b>🎄✨</b>
          </p>
          <div className="book-wrap">
            <img
              src="/assets/ebook-250.webp"
              alt="Mockup do E-book 250 Receitas de Natal"
              width={640}
              height={400}
              fetchPriority="high"
              decoding="sync"
            />
            <span>🎄 ESPECIAL NATAL</span>
          </div>
          <div className="hero-price">
            <span>⭐ Oferta Especial de Natal</span>
            <p>
              <s>De R$ 36,00</s> → Agora por apenas
            </p>
            <strong>R$ 12</strong>
          </div>
          <CtaButton>🧑‍🍳 QUERO MINHAS RECEITAS DE NATAL</CtaButton>
          <b className="instant">
            ⚡ Acesso imediato pelo WhatsApp após a confirmação do pagamento
          </b>
        </div>
      </section>

      <section className="advantages">
        <div className="narrow">
          <h2>
            <span className="gold-star">🌟</span>{' '}
            <span className="grad-text">Vantagens do Produto</span>
          </h2>
          {(
            [
              ['🎄', '250 Receitas Exclusivas de Natal'],
              [
                '🍗',
                'Cardápios completos: entradas, pratos principais, sobremesas e bebidas',
              ],
              ['✨', 'Inspiração das ceias tradicionais e modernas'],
              ['⏰', 'Economia de tempo com instruções simples e diretas'],
              ['👩‍🍳', 'Ideal para iniciantes e amantes da cozinha'],
              ['💚', 'Ingredientes fáceis de encontrar em qualquer mercado'],
            ] as const
          ).map(([emoji, text]) => (
            <div className="advantage" key={text}>
              <i>✓</i>
              <span>{emoji}</span>
              <b>{text}</b>
            </div>
          ))}
        </div>
      </section>

      <section className="why">
        <div className="container">
          <h2>🎁 Por Que Este Livro É Indispensável</h2>
          <div className="why-list">
            {(
              [
                [
                  'apple',
                  '✨ Sabores de Natal em Cada Página',
                  'Clássicos natalinos e novas ideias para surpreender toda a família e fazer sua ceia brilhar.',
                ],
                [
                  'zap',
                  '🍴 Variedade Infinita',
                  'Receitas com carnes, aves, sobremesas, versões leves e vegetarianas. Opções para todos os gostos e necessidades.',
                ],
                [
                  'light',
                  '💫 Feito com Amor e Tradição',
                  'Cada receita foi criada para unir a família e deixar a ceia inesquecível, com aquele toque especial de Natal.',
                ],
              ] as const
            ).map(([iconType, title, desc]) => (
              <article key={title}>
                <div className="round-icon">
                  {iconType === 'zap' ? (
                    <Zap />
                  ) : iconType === 'light' ? (
                    <Lightbulb />
                  ) : (
                    '♡'
                  )}
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </article>
            ))}
          </div>
          <CtaButton>🎄 SIM, QUERO MINHAS RECEITAS DE NATAL</CtaButton>
        </div>
      </section>

      <section className="testimonials">
        <div className="wide">
          <h2>Veja os Prints das Conversas das Nossas Clientes:</h2>
          <div className="prints-carousel">
            <div className="prints-track">
              {(() => {
                const PRINTS = [
                  [
                    'Patrícia Rocha',
                    'Rabanadas',
                    '/assets/depoimento-patricia-C9LjZa8P.webp',
                  ],
                  [
                    'Marta Oliveira',
                    'Tender',
                    '/assets/depoimento-marta-6KIPOH96.webp',
                  ],
                  [
                    'Sônia Almeida',
                    'Pavê de Chocolate',
                    '/assets/depoimento-sonia-CKFPrSGf.webp',
                  ],
                  [
                    'Cláudia Ferreira',
                    'Bacalhau Gratinado',
                    '/assets/depoimento-claudia-250.webp',
                  ],
                ] as const;
                return [...PRINTS, ...PRINTS, ...PRINTS, ...PRINTS].map(
                  ([clientName, recipeName, imgSrc], idx) => (
                    <figure
                      className="print"
                      key={`${clientName}-${idx}`}
                      aria-hidden={idx >= PRINTS.length ? 'true' : undefined}
                    >
                      <img
                        src={imgSrc}
                        alt={`Conversa no WhatsApp da cliente: ${clientName} · ${recipeName}`}
                        width={420}
                        height={747}
                        fetchPriority="low"
                        decoding="async"
                      />
                      <figcaption>
                        <strong className="print-client">
                          🎄 {clientName}
                        </strong>
                        <span className="print-sep" aria-hidden="true">
                          ·
                        </span>
                        <span className="print-recipe">{recipeName}</span>
                      </figcaption>
                    </figure>
                  )
                );
              })()}
            </div>
          </div>
          <CtaButton>🎄 SIM, QUERO MINHAS 250 RECEITAS</CtaButton>
        </div>
      </section>

      <section className="recipes">
        <div className="wide">
          <h2>Veja Algumas das 250 Receitas de Natal:</h2>
          <p>
            250 Receitas Especiais para Transformar Seu Natal em uma Celebração
            Inesquecível!
          </p>
          <div className="recipe-carousel">
            <div className="recipe-track">
              {[...RECIPES, ...RECIPES].map(([title, calories, imgSrc], idx) => (
                <article
                  key={`${title}-${idx}`}
                  aria-hidden={idx >= RECIPES.length ? 'true' : undefined}
                >
                  <img
                    src={imgSrc}
                    alt={title}
                    width={368}
                    height={280}
                    fetchPriority="low"
                    decoding="async"
                  />
                  <h3>{title}</h3>
                  <b>🎄 {calories}</b>
                </article>
              ))}
            </div>
          </div>
          <div className="more">
            <h3>...e muito mais!</h3>
            <p>Receitas deliciosas, tradicionais e especiais para o Natal.</p>
            <CtaButton>🎄 QUERO AS RECEITAS</CtaButton>
          </div>
        </div>
      </section>

      <section className="bonuses">
        <div className="container">
          <h2>
            🎁{' '}
            <span className="grad-text">
              Compre Hoje e Receba 3 Bônus Exclusivos Grátis
            </span>
          </h2>
          <p className="bonuses-subtitle">
            Presentes especiais de Natal para deixar sua ceia organizada, linda e
            econômica — inclusos gratuitamente no seu pedido hoje.
          </p>
          <div className="bonus-grid">
            {(
              [
                [
                  'BÔNUS 1',
                  '🥗 Guia da Ceia Fitness de Natal',
                  'Receitas leves, saudáveis e deliciosas para preparar uma ceia natalina completa, equilibrada e cheia de sabor, sem abrir mão da tradição.',
                  '29,90',
                  '/assets/bonus-1-fitness.webp',
                ],
                [
                  'BÔNUS 2',
                  '🎀 Decoração e Mesa de Natal',
                  'Ideias simples de cores, arranjos e montagem de mesa para encantar seus convidados.',
                  '24,90',
                  '/assets/bonus-2-decoracao.webp',
                ],
                [
                  'BÔNUS 3',
                  '🍗 Mini Livro da Ceia Econômica',
                  '10 cardápios natalinos completos, testados e deliciosos por menos de R$ 150.',
                  '19,90',
                  '/assets/bonus-3-economica.webp',
                ],
              ] as const
            ).map(([badge, title, desc, oldPrice, imgSrc]) => (
              <article key={title}>
                <span className="bonus-badge">
                  <Gift className="bonus-badge-icon" /> {badge}
                </span>
                <div className="bonus-img-wrap">
                  <img
                    src={imgSrc}
                    alt={title}
                    width={312}
                    height={392}
                    fetchPriority="low"
                    decoding="async"
                  />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="bonus-price-row">
                  <span className="bonus-old-price">
                    De <s>R$ {oldPrice}</s>
                  </span>
                  <b className="bonus-free-tag">GRÁTIS</b>
                </div>
              </article>
            ))}
          </div>
          <div className="bonuses-summary">
            <p className="bonuses-total">
              🎄 Valor total dos 3 bônus: <s>R$ 74,70</s> →{' '}
              <strong>SAI POR R$ 0,00 HOJE!</strong>
            </p>
            <CtaButton>🎁 SIM, QUERO MINHAS 250 RECEITAS + BÔNUS</CtaButton>
          </div>
        </div>
      </section>

      <section className="offers" id="ofertas">
        <div className="wide">
          <h2>
            🎄 <span className="grad-text">Escolha Sua Oferta Especial de Natal</span>
          </h2>
          <div className="price-grid">
            <PriceCard onBuyClick={() => setPromoPrice('13,82')} />
            <PriceCard premium onBuyClick={() => setPromoPrice('14,82')} />
          </div>
        </div>
      </section>

      <section className="comments-section">
        <div className="container">
          <h2>
            O Que Dizem Nossos Clientes Sobre
            <br /> 250 Receitas de Natal:
          </h2>
          <article className="comment">
            <div className="comment-head">
              {COMMENTS.map((c, idx) => (
                <img
                  key={c.name}
                  src={c.avatar}
                  alt={c.name}
                  width={40}
                  height={40}
                  decoding="sync"
                  className={idx === commentIndex ? '' : 'is-hidden'}
                />
              ))}
              <div>
                <b>{currentComment.name}</b>
                <small>{currentComment.time}</small>
              </div>
              <span>•••</span>
            </div>
            <p>{currentComment.text}</p>
            <div className="comment-foot">
              <span>♥️ &nbsp;{currentComment.likes}</span>
              <span>Curtir　 Comentar　 Compartilhar</span>
            </div>
            <button
              className="arrow left"
              aria-label="Depoimento anterior"
              onClick={() =>
                setCommentIndex(
                  (prev) => (prev - 1 + COMMENTS.length) % COMMENTS.length
                )
              }
            >
              <ChevronLeft />
            </button>
            <button
              className="arrow right"
              aria-label="Próximo depoimento"
              onClick={() =>
                setCommentIndex((prev) => (prev + 1) % COMMENTS.length)
              }
            >
              <ChevronRight />
            </button>
          </article>
          <div className="dots">
            {COMMENTS.map((c, idx) => (
              <i
                key={c.name}
                className={idx === commentIndex ? 'active' : ''}
                onClick={() => setCommentIndex(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="narrow">
          <h2>PERGUNTAS FREQUENTES (FAQ)</h2>
          {FAQS.map(([question, answer], idx) => (
            <article key={question}>
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                aria-expanded={openFaq === idx}
              >
                <b>{question}</b>
                <ChevronDown className={openFaq === idx ? 'open' : ''} />
              </button>
              {openFaq === idx && <p>{answer}</p>}
            </article>
          ))}
        </div>
      </section>

      <footer>
        <strong>
          🎄
          <br />
          250 Receitas de Natal
        </strong>
        <p>© 2026 – 250 Receitas de Natal | Todos os Direitos Reservados</p>
      </footer>

      {promoPrice && (
        <div
          className="promo-modal-backdrop"
          onClick={() => setPromoPrice(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="promo-modal-title"
        >
          <div
            className="promo-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="promo-close"
              onClick={() => setPromoPrice(null)}
              aria-label="Fechar promoção"
            >
              <X />
            </button>

            <span className="promo-badge">🎁 ESPERE! PROMOÇÃO EXCLUSIVA</span>

            <h3 id="promo-modal-title">
              250 Receitas de Natal Edição <b>PREMIUM</b> por apenas R${' '}
              {promoPrice}
            </h3>

            <p className="promo-desc">
              Aproveite esta promoção especial para levar as{' '}
              <strong>
                250 Receitas de Natal Edição PREMIUM + Todos os 3 Bônus
                Exclusivos
              </strong>{' '}
              por apenas <strong>R$ {promoPrice}</strong>!
            </p>

            <div className="promo-perks">
              <div>✓ 250 Receitas de Natal Completas + Versão Imprimível</div>
              <div>🎁 Bônus 1: 🥗 Guia da Ceia Fitness de Natal</div>
              <div>🎁 Bônus 2: 🎀 Decoração e Mesa de Natal</div>
              <div>🎁 Bônus 3: 🍗 Mini Livro da Ceia Econômica</div>
            </div>

            <div className="promo-price-box">
              <span className="promo-old">
                De <s>R$ 17,00</s> por apenas:
              </span>
              <strong className="promo-new">R$ {promoPrice}</strong>
              <em className="promo-note">
                Pagamento Único · Acesso Imediato no WhatsApp
              </em>
            </div>

            <a
              href="#ofertas"
              onClick={() => setPromoPrice(null)}
              className="buy promo-cta"
            >
              🎄 QUERO A EDIÇÃO PREMIUM POR R$ {promoPrice}
            </a>

            {promoPrice === '13,82' && (
              <a
                href="#ofertas"
                onClick={() => setPromoPrice(null)}
                className="promo-skip"
              >
                Não, obrigado. Quero continuar apenas com a oferta básica sem bônus por R$ 12,00
              </a>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
