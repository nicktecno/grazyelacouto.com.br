import React from "react";
import Image from "next/image";
import { Instagram } from "@styled-icons/boxicons-logos/Instagram";
import { Tiktok } from "@styled-icons/boxicons-logos/Tiktok";
import { Youtube } from "@styled-icons/boxicons-logos/Youtube";
import { Whatsapp } from "@styled-icons/boxicons-logos/Whatsapp";
import { Heart } from "@styled-icons/boxicons-solid/Heart";
import { Bookmark } from "@styled-icons/boxicons-regular/Bookmark";

import * as D from "./deckStyle";

// Fotos oficiais de alta resolução da Grazyela
import heroPhoto from "../../public/images/seja-bem-vindo/IMG_9743.jpg";
import bioPhoto from "../../public/images/aprenda_a_costurar/IMG_7725.jpg";
import portraitPhoto from "../../public/images/aprenda_a_costurar/IMG_7723.jpg";
import machinePhoto from "../../public/images/aprenda_a_costurar/IMG_7726.jpg";

export default function MediaKitDeck({ data = {} }) {
  const metrics = data.metrics || {
    followersFormatted: "126,8K+",
    monthlyReachFormatted: "890K+",
    monthlyImpressionsFormatted: "1,9M+",
    engagementRate: "4.9%",
    totalPosts: 941,
  };

  const highlights = data.reelsHighlights || [];

  return (
    <D.DeckWrapper className="print-deck-layout">
      {/* ══════════════════════════════════════════
          SLIDE 01: CAPA EDITORIAL
         ══════════════════════════════════════════ */}
      <D.SlideContainer $dark className="deck-slide">
        <D.CoverLayout>
          <D.CoverContent>
            <D.CoverBadge>Proposta Comercial & Mídia Kit · 2026</D.CoverBadge>
            <D.CoverTitle>
              Grazyela <span>Couto</span>
            </D.CoverTitle>
            <D.CoverTagline>
              Elegância, técnica de alfaiataria e didática prática que inspiram milhares de mulheres a criarem peças
              impecáveis e valorizarem a moda autoral e o corte sob medida.
            </D.CoverTagline>

            <D.CoverPills>
              <D.CoverPillItem>
                <Instagram style={{ width: 15, height: 15, color: "#e2c990" }} />
                @{data.username || "grazyelacouto"} ({metrics.followersFormatted})
              </D.CoverPillItem>
              <D.CoverPillItem>
                <Tiktok style={{ width: 15, height: 15, color: "#e2c990" }} />
                @grazy.couto (12.4K+)
              </D.CoverPillItem>
              <D.CoverPillItem>✨ 96% Público Feminino Qualificado</D.CoverPillItem>
            </D.CoverPills>

            <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 1.5 }}>
              Moda · Modelagem Profissional · Alfaiataria Feminina
            </div>
          </D.CoverContent>

          <D.CoverPhotoSide>
            <Image
              src={heroPhoto}
              alt="Grazyela Couto"
              layout="fill"
              objectFit="cover"
              objectPosition="center 15%"
              priority
            />
          </D.CoverPhotoSide>
        </D.CoverLayout>

        <D.SlideFooter $dark>
          <span>Grazyela Couto · Mídia Kit Comercial</span>
          <span>Apresentação Oficial de Parcerias · Slide 01 / 11</span>
        </D.SlideFooter>
      </D.SlideContainer>

      {/* ══════════════════════════════════════════
          SLIDE 02: QUEM É GRAZYELA COUTO
         ══════════════════════════════════════════ */}
      <D.SlideContainer className="deck-slide">
        <D.SlideHeader>
          <D.SlideHeaderTitle>
            <D.SlideEyebrow>Identidade & Posicionamento</D.SlideEyebrow>
            <h2>Quem é Grazyela Couto?</h2>
          </D.SlideHeaderTitle>
          <D.SlideNumber>02 / 11</D.SlideNumber>
        </D.SlideHeader>

        <D.SlideBody>
          <D.BioSlideLayout>
            <D.BioSlideText>
              <blockquote>
                “Costurar não é apenas unir tecidos: é construir autoconfiança, elegância e autonomia com as próprias mãos.”
              </blockquote>
              <p>
                Estilista, modelista e mentora. Grazyela Couto transformou a visão de que a alta alfaiataria é inacessível,
                ensinando milhares de mulheres do zero absoluto ao acabamento de grife internacional.
              </p>
              <p>
                Sua comunicação autêntica e calorosa gera uma relação de extrema lealdade: suas seguidoras não apenas assistem,
                mas compram ativamente as máquinas de costura, tesouras, tecidos e ferramentas que ela utiliza diariamente.
              </p>

              <D.BioHighlightGrid>
                <D.BioHighlightBox>
                  <strong>Comunidade Fiel</strong>
                  <span>+126 mil seguidoras apaixonadas por moda e confecção</span>
                </D.BioHighlightBox>
                <D.BioHighlightBox>
                  <strong>Autoridade de Ateliê</strong>
                  <span>Técnicas reais de alta costura adaptadas para a prática</span>
                </D.BioHighlightBox>
                <D.BioHighlightBox>
                  <strong>Poder de Conversão</strong>
                  <span>Recomendações técnicas que geram vendas imediatas para marcas</span>
                </D.BioHighlightBox>
                <D.BioHighlightBox>
                  <strong>Produção em 4K</strong>
                  <span>Vídeos nítidos, áudio limpo e didática passo a passo</span>
                </D.BioHighlightBox>
              </D.BioHighlightGrid>
            </D.BioSlideText>

            <D.BioSlidePhoto>
              <Image
                src={bioPhoto}
                alt="Grazyela Couto Ateliê"
                layout="fill"
                objectFit="cover"
                objectPosition="center 20%"
              />
            </D.BioSlidePhoto>
          </D.BioSlideLayout>
        </D.SlideBody>

        <D.SlideFooter>
          <span>Grazyela Couto · Estilista e Modelista</span>
          <span>grazyelacouto.com.br</span>
        </D.SlideFooter>
      </D.SlideContainer>

      {/* ══════════════════════════════════════════
          SLIDE 03: PILARES & DIFERENCIAIS
         ══════════════════════════════════════════ */}
      <D.SlideContainer className="deck-slide">
        <D.SlideHeader>
          <D.SlideHeaderTitle>
            <D.SlideEyebrow>Diferenciais & Metodologia</D.SlideEyebrow>
            <h2>Por que nossa audiência é tão engajada?</h2>
          </D.SlideHeaderTitle>
          <D.SlideNumber>03 / 11</D.SlideNumber>
        </D.SlideHeader>

        <D.SlideBody>
          <D.PillarsGrid>
            <D.PillarCard>
              <div className="pillar-icon">✂️</div>
              <div>
                <h4>Alfaiataria Descomplicada</h4>
                <p>
                  Desmistificamos técnicas complexas de corte e costura através de métodos visuais e didáticos, permitindo que alunas criem peças estruturadas e impecáveis.
                </p>
              </div>
            </D.PillarCard>

            <D.PillarCard>
              <div className="pillar-icon">✨</div>
              <div>
                <h4>Elegância Atemporal</h4>
                <p>
                  Foco em bom gosto, alfaiataria feminina, tecidos nobres e acabamentos duradouros, atraindo um público maduro que valoriza qualidade acima de modismos.
                </p>
              </div>
            </D.PillarCard>

            <D.PillarCard>
              <div className="pillar-icon">🎯</div>
              <div>
                <h4>Engajamento Real de Vendas</h4>
                <p>
                  Audiência que confia plenamente nas indicações da Grazyela e investe com frequência em maquinário profissional, aviamentos e ferramentas recomendadas.
                </p>
              </div>
            </D.PillarCard>

            <D.PillarCard>
              <div className="pillar-icon">🎥</div>
              <div>
                <h4>Produção Audiovisual Impecável</h4>
                <p>
                  Gravação em 4K, iluminação de estúdio profissional e áudio cristalino. A imagem da sua marca é apresentada com o mais alto padrão estético do mercado.
                </p>
              </div>
            </D.PillarCard>
          </D.PillarsGrid>
        </D.SlideBody>

        <D.SlideFooter>
          <span>Grazyela Couto · Pilares Estratégicos</span>
          <span>grazyelacouto.com.br</span>
        </D.SlideFooter>
      </D.SlideContainer>

      {/* ══════════════════════════════════════════
          SLIDE 04: INSTAGRAM EM NÚMEROS
         ══════════════════════════════════════════ */}
      <D.SlideContainer className="deck-slide">
        <D.SlideHeader>
          <D.SlideHeaderTitle>
            <D.SlideEyebrow>Dados Oficiais do Instagram</D.SlideEyebrow>
            <h2>Alcance que Transforma Marcas</h2>
          </D.SlideHeaderTitle>
          <D.SlideNumber>04 / 11</D.SlideNumber>
        </D.SlideHeader>

        <D.SlideBody>
          <D.InstagramSlideLayout>
            <D.PhoneMockupSide>
              <div className="phone-header">
                <img
                  src={data.profilePicUrl || "/images/instagram/profile_pic.jpg"}
                  alt="Grazyela Couto"
                  className="phone-avatar"
                />
                <div className="phone-user">
                  <strong>@{data.username || "grazyelacouto"}</strong>
                  <span>Conta Profissional Verificada</span>
                </div>
              </div>

              <div className="phone-stats-row">
                <div className="phone-stat-item">
                  <strong>{metrics.totalPosts || 941}</strong>
                  <span>publicações</span>
                </div>
                <div className="phone-stat-item">
                  <strong>{metrics.followersFormatted}</strong>
                  <span>seguidoras</span>
                </div>
                <div className="phone-stat-item">
                  <strong>{metrics.engagementRate}</strong>
                  <span>engajamento</span>
                </div>
              </div>

              <div className="phone-bio">
                <strong>Grazyela Couto · Moda & Alfaiataria</strong>
                <p style={{ margin: "4px 0 0 0" }}>
                  Estilista e modelista. Ensino mulheres a costurarem roupas com acabamento profissional e elegância, do zero ao avançado.
                </p>
              </div>
            </D.PhoneMockupSide>

            <D.MetricsCardsSide>
              <D.BigMetricDeckCard $featured>
                <div className="metric-val">{metrics.followersFormatted}</div>
                <div className="metric-label">Seguidoras no Instagram</div>
                <div className="metric-desc">Público 100% orgânico, qualificado e altamente engajado no nicho de confecção e moda autoral.</div>
              </D.BigMetricDeckCard>

              <D.BigMetricDeckCard>
                <div className="metric-val">{metrics.monthlyImpressionsFormatted}</div>
                <div className="metric-label">Impressões Mensais</div>
                <div className="metric-desc">Visualizações consolidadas em Reels, Stories diários e postagens fixas no feed.</div>
              </D.BigMetricDeckCard>

              <D.BigMetricDeckCard>
                <div className="metric-val">{metrics.monthlyReachFormatted}</div>
                <div className="metric-label">Contas Alcançadas</div>
                <div className="metric-desc">Mais de 890 mil pessoas únicas impactadas mensalmente pelo conteúdo do ateliê.</div>
              </D.BigMetricDeckCard>

              <D.BigMetricDeckCard>
                <div className="metric-val">{metrics.engagementRate}</div>
                <div className="metric-label">Taxa de Engajamento</div>
                <div className="metric-desc">Índice expressivo de comentários, salvamentos e compartilhamentos por publicação.</div>
              </D.BigMetricDeckCard>
            </D.MetricsCardsSide>
          </D.InstagramSlideLayout>
        </D.SlideBody>

        <D.SlideFooter>
          <span>Métricas Oficiais via Meta Graph API</span>
          <span>grazyelacouto.com.br</span>
        </D.SlideFooter>
      </D.SlideContainer>

      {/* ══════════════════════════════════════════
          SLIDE 05: COMUNIDADE & DEMOGRAFIA
         ══════════════════════════════════════════ */}
      <D.SlideContainer className="deck-slide">
        <D.SlideHeader>
          <D.SlideHeaderTitle>
            <D.SlideEyebrow>Perfil de Audiência Qualificada</D.SlideEyebrow>
            <h2>Quem são as Seguidoras?</h2>
          </D.SlideHeaderTitle>
          <D.SlideNumber>05 / 11</D.SlideNumber>
        </D.SlideHeader>

        <D.SlideBody>
          <D.DemographicsSlideLayout>
            <D.DemoDeckColumn>
              <h4>Distribuição por Gênero</h4>
              <D.GenderBigDeck>
                <div className="gender-number">96%</div>
                <div className="gender-title">Mulheres Decisoras</div>
                <div className="gender-sub">Empreendedoras de ateliê, costureiras e apaixonadas por moda elegante</div>
              </D.GenderBigDeck>
            </D.DemoDeckColumn>

            <D.DemoDeckColumn>
              <h4>Faixa Etária com Poder de Compra</h4>
              <p style={{ fontSize: "0.76rem", color: "#6b6058", margin: "0 0 12px 0" }}>
                <strong>72% da audiência</strong> concentra-se entre 25 e 44 anos (mulheres economicamente ativas):
              </p>
              <D.BarMiniRow>
                <div className="bar-info"><span>25 a 34 anos</span><span>38%</span></div>
                <div className="bar-bg"><div className="bar-fill" style={{ width: "76%", background: "#8f1a20" }} /></div>
              </D.BarMiniRow>
              <D.BarMiniRow>
                <div className="bar-info"><span>35 a 44 anos</span><span>34%</span></div>
                <div className="bar-bg"><div className="bar-fill" style={{ width: "68%", background: "#8f1a20" }} /></div>
              </D.BarMiniRow>
              <D.BarMiniRow>
                <div className="bar-info"><span>45 a 54 anos</span><span>15%</span></div>
                <div className="bar-bg"><div className="bar-fill" style={{ width: "30%", background: "#9c8e85" }} /></div>
              </D.BarMiniRow>
              <D.BarMiniRow>
                <div className="bar-info"><span>18 a 24 anos</span><span>8%</span></div>
                <div className="bar-bg"><div className="bar-fill" style={{ width: "16%", background: "#9c8e85" }} /></div>
              </D.BarMiniRow>
              <D.BarMiniRow>
                <div className="bar-info"><span>55+ anos</span><span>5%</span></div>
                <div className="bar-bg"><div className="bar-fill" style={{ width: "10%", background: "#9c8e85" }} /></div>
              </D.BarMiniRow>
            </D.DemoDeckColumn>

            <D.DemoDeckColumn>
              <h4>Regiões & Interesses</h4>
              <p style={{ fontSize: "0.76rem", color: "#6b6058", margin: "0 0 8px 0" }}>
                <strong>Principais Polos:</strong> SP (32%), MG (18%), RJ (14%), Sul (16%).
              </p>
              <D.TagPillGrid>
                <D.TagPill>✓ Máquinas de Costura & Ferramentas</D.TagPill>
                <D.TagPill>✓ Alfaiataria Feminina Sob Medida</D.TagPill>
                <D.TagPill>✓ Tecidos Nobres & Aviamentos</D.TagPill>
                <D.TagPill>✓ Modelagem Profissional & Moldes</D.TagPill>
                <D.TagPill>✓ Empreendedorismo de Moda & Ateliê</D.TagPill>
              </D.TagPillGrid>
            </D.DemoDeckColumn>
          </D.DemographicsSlideLayout>
        </D.SlideBody>

        <D.SlideFooter>
          <span>Dados Demográficos Consolidados · Insights Oficiais</span>
          <span>grazyelacouto.com.br</span>
        </D.SlideFooter>
      </D.SlideContainer>

      {/* ══════════════════════════════════════════
          SLIDE 06: DESTAQUES NO FEED & REELS
         ══════════════════════════════════════════ */}
      <D.SlideContainer className="deck-slide">
        <D.SlideHeader>
          <D.SlideHeaderTitle>
            <D.SlideEyebrow>Conteúdo que Engaja e Viraliza</D.SlideEyebrow>
            <h2>Performance no Feed & Reels</h2>
          </D.SlideHeaderTitle>
          <D.SlideNumber>06 / 11</D.SlideNumber>
        </D.SlideHeader>

        <D.SlideBody>
          <D.ReelsDeckGrid>
            {highlights.slice(0, 3).map((item) => (
              <D.ReelDeckCard key={item.id}>
                <D.ReelDeckMedia>
                  <img src={item.cover} alt={item.title} />
                  <div className="reel-tag">{item.tag || "Viral Didático"}</div>
                  <div className="reel-stats-overlay">
                    <span>{item.likes} Curtidas</span>
                    <span>{item.saves} Salvamentos</span>
                  </div>
                </D.ReelDeckMedia>
                <D.ReelDeckBody>
                  <h4>{item.title}</h4>
                  <div className="reel-footer">
                    <span>❤️ {item.likes}</span>
                    <span>🔖 {item.saves} salvamentos</span>
                  </div>
                </D.ReelDeckBody>
              </D.ReelDeckCard>
            ))}
          </D.ReelsDeckGrid>
        </D.SlideBody>

        <D.SlideFooter>
          <span>Vídeos com retenção e salvamentos recorrentes · @grazyelacouto</span>
          <span>grazyelacouto.com.br</span>
        </D.SlideFooter>
      </D.SlideContainer>

      {/* ══════════════════════════════════════════
          SLIDE 07: MAIS DESTAQUES & MULTIPLATAFORMA
         ══════════════════════════════════════════ */}
      <D.SlideContainer className="deck-slide">
        <D.SlideHeader>
          <D.SlideHeaderTitle>
            <D.SlideEyebrow>Consistência Editorial</D.SlideEyebrow>
            <h2>Mais Destaques & Canais Digitais</h2>
          </D.SlideHeaderTitle>
          <D.SlideNumber>07 / 11</D.SlideNumber>
        </D.SlideHeader>

        <D.SlideBody>
          <div style={{ display: "flex", gap: 20, width: "100%" }}>
            <div style={{ flex: 1.8, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
              {highlights.slice(3, 6).map((item) => (
                <D.ReelDeckCard key={item.id}>
                  <D.ReelDeckMedia>
                    <img src={item.cover} alt={item.title} />
                    <div className="reel-tag">{item.tag || "Alta Utilidade"}</div>
                    <div className="reel-stats-overlay">
                      <span>{item.likes} Curtidas</span>
                      <span>{item.saves} Saves</span>
                    </div>
                  </D.ReelDeckMedia>
                  <D.ReelDeckBody>
                    <h4 style={{ fontSize: "0.82rem" }}>{item.title}</h4>
                    <div className="reel-footer">
                      <span>❤️ {item.likes}</span>
                      <span>🔖 {item.saves}</span>
                    </div>
                  </D.ReelDeckBody>
                </D.ReelDeckCard>
              ))}
            </div>

            <div style={{ flex: 1.2, display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ background: "#ffffff", border: "1px solid #e8e2db", borderRadius: 16, padding: "18px 20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <Tiktok style={{ width: 22, height: 22 }} />
                  <strong style={{ fontSize: "1.05rem" }}>TikTok Criativo</strong>
                </div>
                <div style={{ fontSize: "1.4rem", fontFamily: "var(--atelier-display)", color: "#8f1a20", fontWeight: 700 }}>
                  +12.4K Seguidoras
                </div>
                <p style={{ fontSize: "0.8rem", color: "#6e645c", margin: "4px 0 0 0" }}>
                  +165.000 curtidas consolidadas. Conteúdo dinâmico com dicas rápidas, tendências e rotina de ateliê.
                </p>
              </div>

              <div style={{ background: "#ffffff", border: "1px solid #e8e2db", borderRadius: 16, padding: "18px 20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <Youtube style={{ width: 22, height: 22, color: "#FF0000" }} />
                  <strong style={{ fontSize: "1.05rem" }}>YouTube Aulas</strong>
                </div>
                <div style={{ fontSize: "1.4rem", fontFamily: "var(--atelier-display)", color: "#8f1a20", fontWeight: 700 }}>
                  Canal em Expansão
                </div>
                <p style={{ fontSize: "0.8rem", color: "#6e645c", margin: "4px 0 0 0" }}>
                  Aulas aprofundadas, tutoriais de modelagem completa e revisões de maquinário e ferramentas.
                </p>
              </div>
            </div>
          </div>
        </D.SlideBody>

        <D.SlideFooter>
          <span>Presença Multiplataforma Integrada · Instagram, TikTok e YouTube</span>
          <span>grazyelacouto.com.br</span>
        </D.SlideFooter>
      </D.SlideContainer>

      {/* ══════════════════════════════════════════
          SLIDE 08: PROVA SOCIAL & DEPOIMENTOS
         ══════════════════════════════════════════ */}
      <D.SlideContainer className="deck-slide">
        <D.SlideHeader>
          <D.SlideHeaderTitle>
            <D.SlideEyebrow>Conexão Real com a Audiência</D.SlideEyebrow>
            <h2>Por que elas me acompanham?</h2>
          </D.SlideHeaderTitle>
          <D.SlideNumber>08 / 11</D.SlideNumber>
        </D.SlideHeader>

        <D.SlideBody>
          <D.TestimonialsDeckGrid>
            <D.TestimonialDeckCard>
              <p>“A Grazy tem uma didática que ninguém tem na internet! Comprei a máquina Singer que ela indicou e mudou totalmente o meu acabamento de alfaiataria.”</p>
              <div className="author">— Mariana S., Seguidora & Aluna</div>
            </D.TestimonialDeckCard>

            <D.TestimonialDeckCard>
              <p>“É impressionante a elegância e a paciência com que você ensina. Tudo o que você usa no ateliê eu já coloco na minha lista de compras!”</p>
              <div className="author">— Renata Alencar, Ateliê em SP</div>
            </D.TestimonialDeckCard>

            <D.TestimonialDeckCard>
              <p>“Costurar parecia um bicho de sete cabeças até maratonar seus vídeos. Sua energia e bom gosto inspiram demais o meu dia a dia.”</p>
              <div className="author">— Cláudia Vieira, Rio de Janeiro</div>
            </D.TestimonialDeckCard>

            <D.TestimonialDeckCard>
              <p>“Comprei os tecidos recomendados por ela e o caimento da calça italiana ficou de grife internacional. Confio de olhos fechados em cada dica!”</p>
              <div className="author">— Juliana Prado, Belo Horizonte</div>
            </D.TestimonialDeckCard>

            <D.TestimonialDeckCard>
              <p>“Adoro que você testa de verdade os produtos antes de falar. Isso passa uma segurança imensa para quem está investindo no próprio ateliê.”</p>
              <div className="author">— Beatriz F., Curitiba</div>
            </D.TestimonialDeckCard>

            <D.TestimonialDeckCard>
              <p>“A melhor professora de costura do Brasil! Seus Reels salvos são meu manual de consulta diário na máquina.”</p>
              <div className="author">— Sandra M., Porto Alegre</div>
            </D.TestimonialDeckCard>
          </D.TestimonialsDeckGrid>
        </D.SlideBody>

        <D.SlideFooter>
          <span>Depoimentos reais extraídos das mensagens e comentários da comunidade</span>
          <span>grazyelacouto.com.br</span>
        </D.SlideFooter>
      </D.SlideContainer>

      {/* ══════════════════════════════════════════
          SLIDE 09: OPORTUNIDADES PARA MARCAS
         ══════════════════════════════════════════ */}
      <D.SlideContainer className="deck-slide">
        <D.SlideHeader>
          <D.SlideHeaderTitle>
            <D.SlideEyebrow>Formatos Comerciais</D.SlideEyebrow>
            <h2>Oportunidades de Parceria para Marcas</h2>
          </D.SlideHeaderTitle>
          <D.SlideNumber>09 / 11</D.SlideNumber>
        </D.SlideHeader>

        <D.SlideBody>
          <D.FormatsDeckGrid>
            <D.FormatDeckCard>
              <div className="format-icon">📹</div>
              <h4>Reels Patrocinado / Publi Tutorial</h4>
              <p>Gravação de aula prática inserindo a máquina, tecido ou ferramenta como protagonista da peça.</p>
              <ul>
                <li>Vídeo de até 90s gravado em 4K</li>
                <li>Menção na legenda e na tela</li>
                <li>Fixação no topo (opcional)</li>
                <li>Collab com o perfil da marca</li>
              </ul>
            </D.FormatDeckCard>

            <D.FormatDeckCard>
              <div className="format-icon">📱</div>
              <h4>Combo de Stories com Link</h4>
              <p>Sequência demonstrando o uso real na rotina do ateliê com narrativa orgânica e cupom exclusivo.</p>
              <ul>
                <li>4 a 6 stories fluidos</li>
                <li>Stickers de link direto / cupom</li>
                <li>Destaque permanente por 30 dias</li>
                <li>Relatório detalhado de cliques</li>
              </ul>
            </D.FormatDeckCard>

            <D.FormatDeckCard>
              <div className="format-icon">🎯</div>
              <h4>Conteúdo UGC para sua Marca</h4>
              <p>Vídeos verticais autênticos e de alta qualidade técnica prontos para os anúncios pagos da sua empresa.</p>
              <ul>
                <li>Resenha técnica e demonstração</li>
                <li>Direitos de uso para mídia paga</li>
                <li>Entrega em formato pronto para Ads</li>
                <li>Excelente Custo por Aquisição</li>
              </ul>
            </D.FormatDeckCard>

            <D.FormatDeckCard>
              <div className="format-icon">👑</div>
              <h4>Embaixadora & Presença VIP</h4>
              <p>Associação contínua de marca com exclusividade de nicho no ateliê e eventos do setor têxtil.</p>
              <ul>
                <li>Presença fixa em todas as criações</li>
                <li>Participação em workshops e feiras</li>
                <li>Ações cross-media com YouTube</li>
                <li>Exclusividade no segmento</li>
              </ul>
            </D.FormatDeckCard>
          </D.FormatsDeckGrid>
        </D.SlideBody>

        <D.SlideFooter>
          <span>Formatos estratégicos adaptados aos objetivos de marketing da marca</span>
          <span>grazyelacouto.com.br</span>
        </D.SlideFooter>
      </D.SlideContainer>

      {/* ══════════════════════════════════════════
          SLIDE 10: PACOTES DE INVESTIMENTO
         ══════════════════════════════════════════ */}
      <D.SlideContainer className="deck-slide">
        <D.SlideHeader>
          <D.SlideHeaderTitle>
            <D.SlideEyebrow>Proposta Comercial</D.SlideEyebrow>
            <h2>Pacotes de Investimento Estruturados</h2>
          </D.SlideHeaderTitle>
          <D.SlideNumber>10 / 11</D.SlideNumber>
        </D.SlideHeader>

        <D.SlideBody>
          <D.PackagesDeckGrid>
            <D.PackageDeckCard>
              <h3>Combo Stories</h3>
              <div className="pack-desc">Ideal para promoções pontuais, lançamentos com cupom e geração direta de tráfego.</div>
              <div className="pack-price">A Consultar</div>
              <ul>
                <li>Sequência de 4 Stories com narrativa fluida</li>
                <li>Stickers de Link direto e Cupom exclusivo</li>
                <li>Destaque de 24h com relatório de cliques</li>
                <li>Roteiro alinhado previamente com a marca</li>
              </ul>
            </D.PackageDeckCard>

            <D.PackageDeckCard $featured>
              <div className="feat-tag">Mais Recomendado</div>
              <h3>Reels + Stories</h3>
              <div className="pack-desc">O formato com maior entrega orgânica, alcance viral e retenção de marca na mente das seguidoras.</div>
              <div className="pack-price">A Consultar</div>
              <ul>
                <li>1 Reels dedicado com foco no produto</li>
                <li>3 Stories de sustentação com link de compra</li>
                <li>Fixação no topo do perfil por 7 dias</li>
                <li>Collab no Instagram com o perfil da sua marca</li>
                <li>Relatório detalhado de alcance após 7 dias</li>
              </ul>
            </D.PackageDeckCard>

            <D.PackageDeckCard>
              <h3>Embaixadora Trimestral</h3>
              <div className="pack-desc">Associação de alto impacto, garantindo presença contínua da sua marca no ateliê durante 3 meses.</div>
              <div className="pack-price">A Consultar</div>
              <ul>
                <li>1 Reels mensal de alto valor didático (3 no total)</li>
                <li>6 Stories mensais com demonstração de uso</li>
                <li>Direito de repost em suas redes oficiais</li>
                <li>Exclusividade do produto no nicho de costura</li>
                <li>Condições especiais para renovação anual</li>
              </ul>
            </D.PackageDeckCard>
          </D.PackagesDeckGrid>
        </D.SlideBody>

        <D.SlideFooter>
          <span>Valores e formatos customizáveis de acordo com a campanha da marca</span>
          <span>grazyelacouto.com.br</span>
        </D.SlideFooter>
      </D.SlideContainer>

      {/* ══════════════════════════════════════════
          SLIDE 11: CONTATO & ENCERRAMENTO
         ══════════════════════════════════════════ */}
      <D.SlideContainer $dark className="deck-slide">
        <D.ContactSlideLayout>
          <D.ContactContentSide>
            <D.SlideEyebrow $gold>Próximos Passos</D.SlideEyebrow>
            <h2 style={{ margin: "8px 0 16px 0" }}>Vamos criar algo extraordinário juntos?</h2>
            <p>
              Entre em contato com nossa equipe comercial para tirar dúvidas, alinhar cronogramas ou solicitar uma proposta personalizada para a sua marca.
            </p>

            <D.ContactCardsRow>
              <D.ContactInfoItem>
                <Whatsapp style={{ width: 22, height: 22, color: "#25D366" }} />
                <div>
                  <span className="contact-label">WhatsApp Comercial</span>
                  (31) 98888-8888 · Falar com Equipe de Parcerias
                </div>
              </D.ContactInfoItem>

              <D.ContactInfoItem>
                <div style={{ fontSize: "1.2rem" }}>✉️</div>
                <div>
                  <span className="contact-label">E-mail Comercial</span>
                  suportegrazycouto@gmail.com
                </div>
              </D.ContactInfoItem>

              <D.ContactInfoItem>
                <Instagram style={{ width: 22, height: 22, color: "#e2c990" }} />
                <div>
                  <span className="contact-label">Instagram Oficial</span>
                  @grazyelacouto · www.grazyelacouto.com.br
                </div>
              </D.ContactInfoItem>
            </D.ContactCardsRow>

            <div style={{ fontSize: "0.74rem", color: "rgba(255, 255, 255, 0.45)", lineHeight: 1.4 }}>
              * Os pagamentos devem preceder a produção ou seguir cronograma contratual acordado. Propostas comerciais enviadas têm validade de 30 dias.
            </div>
          </D.ContactContentSide>

          <D.ContactPhotoSide>
            <Image
              src={machinePhoto}
              alt="Grazyela Couto"
              layout="fill"
              objectFit="cover"
              objectPosition="center 20%"
            />
          </D.ContactPhotoSide>
        </D.ContactSlideLayout>

        <D.SlideFooter $dark>
          <span>Grazyela Couto · Proposta Comercial Oficial</span>
          <span>suportegrazycouto@gmail.com · Slide 11 / 11</span>
        </D.SlideFooter>
      </D.SlideContainer>
    </D.DeckWrapper>
  );
}
