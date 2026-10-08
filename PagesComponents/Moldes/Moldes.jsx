import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as S from "./style";

import thumbCamisa from "../../public/images/bio/molde_camisa_classica.webp";
import thumbSaia from "../../public/images/bio/molde_saia_enviesada.webp";
import thumbBlusa from "../../public/images/bio/molde_blusa_simples.webp";

const MOLDES_DATA = [
  {
    id: "camisa-classica",
    title: "Camisa Clássica Feminina",
    category: "Camisas",
    categoryKey: "camisas",
    sizes: "Tamanhos 38 ao 54",
    image: thumbCamisa,
    alt: "Molde Digital Camisa Clássica Feminina — Grazyela Couto",
    description:
      "A camisa curinga do guarda-roupa sofisticado. Modelagem refinada com colarinho estruturado, vista frontal de botões, carcela de manga e pala anatômica.",
    features: [
      "Grade completa do tamanho 38 ao 54",
      "Margem de costura já inclusa no molde",
      "Arquivo PDF para imprimir em A4 ou Plotter",
      "Quadrado de teste (5x5 cm) para conferência de escala",
    ],
    buyUrl:
      "https://hotmart.com/pt-br/marketplace/produtos/molde-digital-camisa-classica-feminina/R106672757A",
  },
  {
    id: "saia-enviesada",
    title: "Saia Enviesada (Slip Skirt)",
    category: "Saias",
    categoryKey: "saias",
    sizes: "Tamanhos 38 ao 54",
    image: thumbSaia,
    alt: "Molde Digital Saia Enviesada — Grazyela Couto",
    description:
      "O corte a 45° no fio enviesado cria caimento fluido e elegante que abraça as curvas com movimento. Perfeita para cetim, seda, viscose ou linho.",
    features: [
      "Grade completa do tamanho 38 ao 54",
      "Sentido do fio enviesado claramente demarcado",
      "Opções para cós limpo, revel ou elástico embutido",
      "PDF otimizado para montagem simples em casa",
    ],
    buyUrl:
      "https://hotmart.com/pt-br/marketplace/produtos/molde-digital-saia-enviesada-tamanho-38-a-54/Y107019938P",
  },
  {
    id: "blusa-simples",
    title: "Blusa Simples (Regata Clássica)",
    category: "Blusas",
    categoryKey: "blusas",
    sizes: "Grade Multitamanhos",
    image: thumbBlusa,
    alt: "Molde Digital Blusa Simples — Grazyela Couto",
    description:
      "A base indispensável para o dia a dia! Decote redondo e pence de busto anatômica que elimina qualquer sobra nas cavas, garantindo vestibilidade perfeita.",
    features: [
      "Pence de busto projetada para caimento sem folgas",
      "Linhas nítidas com indicação de dobras e margens",
      "Ideal para iniciantes e confecções rápidas",
      "Acesso imediato no e-mail logo após a confirmação",
    ],
    buyUrl:
      "https://pay.hotmart.com/U107233693H?bid=1787171331094",
  },
];

const FAQ_ITEMS = [
  {
    q: "Como recebo o molde após a compra?",
    a: "O envio é 100% digital e imediato! Assim que o pagamento for confirmado pela plataforma da Hotmart, você recebe no seu e-mail os dados de acesso e o link para download de todos os arquivos em PDF.",
  },
  {
    q: "Consigo imprimir em qualquer impressora de casa?",
    a: "Sim! Os moldes são diagramados especialmente para folhas comuns no formato A4. Basta imprimir em escala 100% (sem ajuste de página) e juntar as folhas pelas linhas-guia numeradas. Você também recebe a versão em arquivo para Plotter caso prefira imprimir em gráfica.",
  },
  {
    q: "Como conferir se a impressão saiu no tamanho correto?",
    a: "Todo molde digital da Grazyela Couto acompanha um quadrado de teste de 5x5 cm na primeira folha. Ao medir com uma fita métrica ou régua, você tem certeza absoluta de que a escala impressa está perfeita antes de cortar seu tecido.",
  },
  {
    q: "Os moldes já vêm com margem de costura?",
    a: "Sim, os moldes são desenvolvidos com margens de costura adequadas para cada tipo de acabamento, facilitando o corte direto e garantindo precisão milimétrica.",
  },
  {
    q: "Qual a garantia da minha compra?",
    a: "Você conta com garantia incondicional de 7 dias protegida pela plataforma da Hotmart.",
  },
];

export default function MoldesPage() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [openFaq, setOpenFaq] = useState(null);

  const filteredMoldes =
    selectedCategory === "todos"
      ? MOLDES_DATA
      : MOLDES_DATA.filter((m) => m.categoryKey === selectedCategory);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <S.Page>
      {/* ── 1. HERO ── */}
      <S.Hero>
        <S.HeroInner>
          <span className="badge">📐 Moldes Digitais Prontos em PDF</span>
          <h1>
            Loja de Moldes de <em>Alta Costura</em>
          </h1>
          <p>
            Modelagens profissionais testadas e aprovadas pela professora{" "}
            <strong>Grazyela Couto</strong>. Baixe em PDF, imprima em casa em
            folhas A4 e costure peças com caimento impecável de ateliê.
          </p>

          <S.TrustBar>
            <div className="trustItem">
              <span className="icon">⚡</span>
              <span>Acesso Imediato no E-mail</span>
            </div>
            <div className="trustItem">
              <span className="icon">🖨️</span>
              <span>Pronto para Impressão A4</span>
            </div>
            <div className="trustItem">
              <span className="icon">📏</span>
              <span>Margens e Escala Testadas</span>
            </div>
            <div className="trustItem">
              <span className="icon">🔒</span>
              <span>Pagamento Seguro Hotmart</span>
            </div>
          </S.TrustBar>
        </S.HeroInner>
      </S.Hero>

      {/* ── 2. FILTROS POR CATEGORIA ── */}
      <S.FilterSection>
        <S.FilterBtn
          type="button"
          $active={selectedCategory === "todos"}
          onClick={() => setSelectedCategory("todos")}
        >
          Todos os Moldes
        </S.FilterBtn>
        <S.FilterBtn
          type="button"
          $active={selectedCategory === "camisas"}
          onClick={() => setSelectedCategory("camisas")}
        >
          Camisas
        </S.FilterBtn>
        <S.FilterBtn
          type="button"
          $active={selectedCategory === "saias"}
          onClick={() => setSelectedCategory("saias")}
        >
          Saias
        </S.FilterBtn>
        <S.FilterBtn
          type="button"
          $active={selectedCategory === "blusas"}
          onClick={() => setSelectedCategory("blusas")}
        >
          Blusas
        </S.FilterBtn>
      </S.FilterSection>

      {/* ── 3. VITRINE DE PRODUTOS ── */}
      <S.ProductsSection>
        {filteredMoldes.map((molde) => (
          <S.ProductCard key={molde.id}>
            <S.CardMedia>
              <Image
                src={molde.image}
                alt={molde.alt}
                width={500}
                height={500}
                priority
              />
            </S.CardMedia>

            <S.CardBody>
              <div className="metaRow">
                <span className="category">{molde.category}</span>
                <span className="sizes">{molde.sizes}</span>
              </div>

              <h2>{molde.title}</h2>
              <p className="desc">{molde.description}</p>

              <ul className="featuresList">
                {molde.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <div className="actionArea">
                <a
                  href={molde.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btnBuy"
                >
                  Comprar Molde na Hotmart →
                </a>
                <span className="formatNote">
                  Download em PDF · Acesso Vitalício na Hotmart
                </span>
                <a
                  href="#tabela-de-medidas"
                  style={{
                    textAlign: "center",
                    fontSize: "0.82rem",
                    color: "#6b5d50",
                    textDecoration: "underline",
                    fontFamily: "var(--atelier-ui)",
                    fontWeight: "600",
                    marginTop: "0.35rem",
                    cursor: "pointer",
                  }}
                >
                  Consultar tabela de medidas (cm) 📏
                </a>
              </div>
            </S.CardBody>
          </S.ProductCard>
        ))}
      </S.ProductsSection>

      {/* ── 3.1 TABELA DE MEDIDAS (REFERÊNCIA DE ATELIÊ) ── */}
      <S.TabelaSection id="tabela-de-medidas">
        <S.TabelaCard>
          <S.TabelaHeader>
            <span className="eyebrow">Referência de Modelagem</span>
            <h2>Tabela de medidas</h2>
            <p className="subtitle">
              As medidas são sem folga de vestibilidade.
            </p>
          </S.TabelaHeader>

          <S.TabelaWrapper>
            <S.StyledTable>
              <thead>
                <tr className="rowSiglas">
                  <th scope="col" aria-label="Medida"></th>
                  <th scope="col">PP</th>
                  <th scope="col">P</th>
                  <th scope="col">M</th>
                  <th scope="col">M</th>
                  <th scope="col">G</th>
                  <th scope="col">G</th>
                  <th scope="col">GG</th>
                  <th scope="col">GG</th>
                </tr>
                <tr className="rowNumeros">
                  <th scope="row">Tamanho</th>
                  <th scope="col">36</th>
                  <th scope="col">38</th>
                  <th scope="col">40</th>
                  <th scope="col">42</th>
                  <th scope="col">44</th>
                  <th scope="col">46</th>
                  <th scope="col">48</th>
                  <th scope="col">50</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Busto</td>
                  <td>82</td>
                  <td>86</td>
                  <td>90</td>
                  <td>94</td>
                  <td>98</td>
                  <td>102</td>
                  <td>106</td>
                  <td>110</td>
                </tr>
                <tr>
                  <td>Cintura</td>
                  <td>66</td>
                  <td>70</td>
                  <td>74</td>
                  <td>78</td>
                  <td>82</td>
                  <td>86</td>
                  <td>90</td>
                  <td>94</td>
                </tr>
                <tr>
                  <td>Quadril</td>
                  <td>88</td>
                  <td>92</td>
                  <td>96</td>
                  <td>100</td>
                  <td>104</td>
                  <td>108</td>
                  <td>112</td>
                  <td>116</td>
                </tr>
                <tr>
                  <td>Altura do corpo</td>
                  <td>39</td>
                  <td>40</td>
                  <td>41</td>
                  <td>42</td>
                  <td>43</td>
                  <td>44</td>
                  <td>45</td>
                  <td>46</td>
                </tr>
                <tr>
                  <td>Altura do Quadril</td>
                  <td>18</td>
                  <td>19</td>
                  <td>19</td>
                  <td>20</td>
                  <td>20</td>
                  <td>21</td>
                  <td>21</td>
                  <td>21</td>
                </tr>
                <tr>
                  <td>Costas</td>
                  <td>34</td>
                  <td>35</td>
                  <td>36</td>
                  <td>37</td>
                  <td>38</td>
                  <td>39</td>
                  <td>39</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td>Ombro</td>
                  <td>11</td>
                  <td>11,5</td>
                  <td>12</td>
                  <td>12,5</td>
                  <td>13</td>
                  <td>13,5</td>
                  <td>14</td>
                  <td>14,5</td>
                </tr>
                <tr>
                  <td>Altura da Cava</td>
                  <td>16,5</td>
                  <td>17</td>
                  <td>17,5</td>
                  <td>18</td>
                  <td>19</td>
                  <td>20</td>
                  <td>21</td>
                  <td>22</td>
                </tr>
                <tr>
                  <td>Altura do busto</td>
                  <td>22</td>
                  <td>23</td>
                  <td>24</td>
                  <td>25</td>
                  <td>26</td>
                  <td>27</td>
                  <td>28</td>
                  <td>29</td>
                </tr>
                <tr>
                  <td>Separação busto</td>
                  <td>16</td>
                  <td>17</td>
                  <td>18</td>
                  <td>19</td>
                  <td>20</td>
                  <td>21</td>
                  <td>22</td>
                  <td>23</td>
                </tr>
              </tbody>
            </S.StyledTable>
          </S.TabelaWrapper>

          <S.TabelaFooterNote>
            * Medidas em centímetros (cm). Meça o corpo com fita métrica rente e sem folga.
          </S.TabelaFooterNote>
        </S.TabelaCard>
      </S.TabelaSection>

      {/* ── 4. COMO FUNCIONA O MOLDE DIGITAL ── */}
      <S.HowItWorksSection>
        <div className="inner">
          <div className="header">
            <span className="eyebrow">Passo a Passo</span>
            <h2>Como funciona o Molde Digital?</h2>
            <p>
              Praticidade total: da compra à peça pronta na sua máquina de costura.
            </p>
          </div>

          <div className="stepsGrid">
            <div className="stepCard">
              <span className="stepNum">01</span>
              <h3>Compra Segura</h3>
              <p>
                Escolha seu molde e finalize com segurança na Hotmart com cartão,
                Pix ou boleto.
              </p>
            </div>

            <div className="stepCard">
              <span className="stepNum">02</span>
              <h3>Receba no E-mail</h3>
              <p>
                Em segundos, você recebe o link de download do arquivo PDF em
                alta definição.
              </p>
            </div>

            <div className="stepCard">
              <span className="stepNum">03</span>
              <h3>Imprima em Casa (A4)</h3>
              <p>
                Imprima em tamanho 100% e una as folhas numeradas com facilidade
                e conferência de régua.
              </p>
            </div>

            <div className="stepCard">
              <span className="stepNum">04</span>
              <h3>Corte e Costure!</h3>
              <p>
                Posicione sobre o tecido e costure com as margens de costura já
                calculadas para você.
              </p>
            </div>
          </div>
        </div>
      </S.HowItWorksSection>

      {/* ── 5. BANNER PARA O CURSO COMPLETO ── */}
      <S.CourseBannerSection>
        <div className="bannerCard">
          <div className="content">
            <span className="tag">Deseja dar o próximo passo?</span>
            <h2>Aprenda a criar seus próprios moldes do zero</h2>
            <p>
              Quer ir além de reproduzir moldes prontos e entender a lógica da
              modelagem plana para adaptar qualquer peça às suas medidas? Conheça
              nosso curso completo com mais de 300 aulas.
            </p>
          </div>
          <Link href="/aprenda-a-costurar" className="ctaBtn">
            Conhecer Curso Completo →
          </Link>
        </div>
      </S.CourseBannerSection>

      {/* ── 6. DÚVIDAS FREQUENTES ── */}
      <S.FaqSection>
        <div className="faqHeader">
          <span className="eyebrow">Tire suas dúvidas</span>
          <h2>Perguntas Frequentes</h2>
        </div>

        <div className="faqList">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <S.FaqItem key={index}>
                <S.FaqBtn
                  type="button"
                  $open={isOpen}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{item.q}</span>
                  <span className="icon">+</span>
                </S.FaqBtn>
                <S.FaqAnswer $open={isOpen}>{item.a}</S.FaqAnswer>
              </S.FaqItem>
            );
          })}
        </div>
      </S.FaqSection>
    </S.Page>
  );
}
