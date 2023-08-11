import React, { useEffect } from "react";

import ProductList from "../../components/ProductList";
import * as S from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Link from "next/link";

import { useRouter } from "next/router";

function HomePage(props) {
  const history = useRouter();

  const carouselShowcase = props.showcases.data.filter(
    (hit) => hit.display === "carousel"
  )[0];
  const lowerShowcase = props.showcases.data.filter(
    (hit) => hit.display === "lower"
  )[0];

  useEffect(() => {
    if (
      props.banners !== false &&
      props.banners !== undefined &&
      props.banners.web.length > 0
    ) {
      const promotions = props.banners.web.map((banner, key) => ({
        creative_name: banner.alt,
        item_name: banner.title,
        index: key,
      }));
      window.dataLayer &&
        window.dataLayer.push({
          event: "view_promotion",
          ecommerce: {
            items: promotions,
          },
        });
    }
  }, []);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <S.BoxNextArrow>
        <div
          className={className}
          style={{
            ...style,
            display: "flex",
            position: "absolute",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            width: "30px",
            zIndex: "1",

            right: "0px",
          }}
          onClick={onClick}
        />
      </S.BoxNextArrow>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <S.BoxPrevArrow>
        <div
          className={className}
          style={{
            ...style,
            display: "flex",
            position: "absolute",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            width: "30px",
            zIndex: "1",

            left: "0px",
          }}
          onClick={onClick}
        />
      </S.BoxPrevArrow>
    );
  }

  const settings1 = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    speed: 500,

    slidesToShow: 1,
    slidesToScroll: 1,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  let settingsPromotions = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 1500,
    autoplay: false,
    autoplaySpeed: 2000,
    variableWidth: true,
    slidesToShow:
      props?.promotions?.web?.length >= 6 ? 6 : props?.promotions?.web?.length,
    slidesToScroll:
      props?.promotions?.web?.length >= 6 ? 6 : props?.promotions?.web?.length,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: true,

          arrows: false,
          speed: 500,
          slidesToShow:
            props?.promotions?.web?.length >= 5
              ? 5
              : props?.promotions?.web?.length,
          slidesToScroll:
            props?.promotions?.web?.length >= 5
              ? 5
              : props?.promotions?.web?.length,
        },
      },
      {
        breakpoint: 576,
        settings: {
          dots: true,

          arrows: false,
          speed: 500,
          slidesToShow:
            props?.promotions?.web?.length >= 4
              ? 4
              : props?.promotions?.web?.length,
          slidesToScroll:
            props?.promotions?.web?.length >= 4
              ? 4
              : props?.promotions?.web?.length,
        },
      },
      {
        breakpoint: 414,
        settings: {
          dots: true,

          arrows: false,
          speed: 500,
          slidesToShow:
            props?.promotions?.web?.length >= 3
              ? 3
              : props?.promotions?.web?.length,
          slidesToScroll:
            props?.promotions?.web?.length >= 3
              ? 3
              : props?.promotions?.web?.length,
        },
      },
    ],
  };

  let settings = {
    dots: false,
    infinite: false,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: props?.menu?.length >= 6 ? 6 : props?.menu?.length,
    slidesToScroll: props?.menu?.length >= 6 ? 6 : props?.menu?.length,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          dots: false,

          arrows: true,

          slidesToShow: props?.menu?.length >= 5 ? 5 : props?.menu?.length,
          slidesToScroll: props?.menu?.length >= 5 ? 5 : props?.menu?.length,
        },
      },
      {
        breakpoint: 1550,
        settings: {
          dots: false,
          arrows: true,

          slidesToShow: props?.menu?.length >= 4 ? 4 : props?.menu?.length,
          slidesToScroll: props?.menu?.length >= 4 ? 4 : props?.menu?.length,
        },
      },
      {
        breakpoint: 1350,
        settings: {
          dots: false,

          arrows: true,

          slidesToShow: props?.menu?.length >= 3 ? 3 : props?.menu?.length,
          slidesToScroll: props?.menu?.length >= 3 ? 3 : props?.menu?.length,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          dots: false,

          arrows: true,

          slidesToShow: props?.menu?.length >= 3 ? 3 : props?.menu?.length,
          slidesToScroll: props?.menu?.length >= 3 ? 3 : props?.menu?.length,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: props?.menu?.length > 2 ? 2 : props?.menu?.length,
          slidesToScroll: props?.menu?.length > 2 ? 2 : props?.menu?.length,
        },
      },
    ],
  };

  let settingsSellers = {
    dots: false,
    arrows: true,
    infinite: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: props?.sellers?.length >= 6 ? 6 : props?.sellers?.length,
    slidesToScroll: props?.sellers?.length >= 6 ? 6 : props?.sellers?.length,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          dots: false,

          arrows: true,

          slidesToShow:
            props?.sellers?.length >= 5 ? 5 : props?.sellers?.length,
          slidesToScroll:
            props?.sellers?.length >= 5 ? 5 : props?.sellers?.length,
        },
      },
      {
        breakpoint: 1550,
        settings: {
          dots: false,
          arrows: true,

          slidesToShow:
            props?.sellers?.length >= 4 ? 4 : props?.sellers?.length,
          slidesToScroll:
            props?.sellers?.length >= 4 ? 4 : props?.sellers?.length,
        },
      },
      {
        breakpoint: 1350,
        settings: {
          dots: false,

          arrows: true,

          slidesToShow:
            props?.sellers?.length >= 3 ? 3 : props?.sellers?.length,
          slidesToScroll:
            props?.sellers?.length >= 3 ? 3 : props?.sellers?.length,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          dots: false,

          arrows: true,

          slidesToShow:
            props?.sellers?.length >= 3 ? 3 : props?.sellers?.length,
          slidesToScroll:
            props?.sellers?.length >= 3 ? 3 : props?.sellers?.length,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: props?.sellers?.length > 1 ? 1 : props?.sellers?.length,
          slidesToScroll:
            props?.sellers?.length > 1 ? 1 : props?.sellers?.length,
        },
      },
    ],
  };

  function redirect(url) {
    window.location.href = url;
  }

  return (
    <S.ContainerGeneral>
      {props.banners !== false && props.banners !== undefined && (
        <S.BannerContainer>
          <S.SliderDesktop>
            <Slider {...settings1}>
              {props.banners.web !== undefined &&
                props.banners.web.length > 0 &&
                props.banners.web.map((item, index) => (
                  <S.ImageBannerWeb
                    key={index}
                    onClick={() => {
                      window?.dataLayer &&
                        window?.dataLayer.push({
                          event: "select_promotion",
                          ecommerce: {
                            items: [
                              {
                                creative_name: item.alt,
                                item_name: item.title,
                                index: index,
                              },
                            ],
                          },
                        }),
                        item.url !== "" && redirect(item.url);
                    }}
                    alt={item.alt}
                    title={item.title}
                    src={item.img}
                  />
                ))}
            </Slider>
          </S.SliderDesktop>

          <S.SliderMobile>
            <Slider {...settings1}>
              {props.banners.mobile !== undefined &&
                props.banners.mobile.length > 0 &&
                props.banners.mobile.map((item, index) => (
                  <S.ImageBannerMobile
                    alt={item.alt}
                    title={item.title}
                    src={item.img}
                    key={index}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window?.dataLayer &&
                        window.dataLayer.push({
                          event: "select_promotion",
                          ecommerce: {
                            items: [
                              {
                                creative_name: item.alt,
                                item_name: item.title,
                                index: index,
                              },
                            ],
                          },
                        }),
                        item.url !== "" && redirect(item.url);
                    }}
                  />
                ))}
            </Slider>
          </S.SliderMobile>
        </S.BannerContainer>
      )}

      {props.promotions &&
        props.promotions.web &&
        props.promotions.web.length > 0 && (
          <S.SliderPromotions lengthPromotions={props.promotions?.web?.length}>
            <Slider {...settingsPromotions}>
              {props?.promotions?.web?.map((attr, index) => (
                <Link key={index} href={attr.url ? attr.url : "/search"}>
                  <S.PromotionContainer>
                    <img
                      src={attr.img && attr.img}
                      alt={attr.alt ? attr.alt : "promoções"}
                    />
                  </S.PromotionContainer>
                </Link>
              ))}
            </Slider>
          </S.SliderPromotions>
        )}

      <S.ContainerBottom>
        <h2 className="labelshowcase">{carouselShowcase.showcase_title}</h2>
        <ProductList
          hits={carouselShowcase}
          page="home"
          mktName={props.mktName}
        />
      </S.ContainerBottom>

      <S.SecondaryBanner>
        <S.BannerDesktop>
          {props.banners !== false &&
          props.banners !== undefined &&
          props.banners["web-secondary"] !== undefined ? (
            <a
              style={{ cursor: "pointer" }}
              onClick={() => redirect(props.banners["web-secondary"][0].url)}
            >
              <S.ImageBannerWeb
                alt={props.banners["web-secondary"][0].alt}
                title={props.banners["web-secondary"][0].title}
                src={props.banners["web-secondary"][0].img}
              />
            </a>
          ) : (
            ""
          )}
        </S.BannerDesktop>

        <S.BannerMobile>
          {props.banners !== false &&
          props.banners !== undefined &&
          props.banners["mobile-secondary"] !== undefined ? (
            <a
              style={{ cursor: "pointer" }}
              onClick={() => redirect(props.banners["mobile-secondary"][0].url)}
            >
              <S.ImageBannerMobile
                alt={props.banners["mobile-secondary"][0].alt}
                title={props.banners["mobile-secondary"][0].title}
                src={props.banners["mobile-secondary"][0].img}
              />
            </a>
          ) : (
            ""
          )}
        </S.BannerMobile>
      </S.SecondaryBanner>

      <S.SliderCategory>
        <h2 className="labelshowcase">Categorias</h2>
        <Slider {...settings}>
          {props?.menu?.map((attr) => (
            <Link key={attr.id} href={`/category/${attr.name}`}>
              <div className="category">
                <img src={attr.image_detail} alt={attr.name} />
                <div className="nameSeller">{attr.name}</div>
              </div>
            </Link>
          ))}
        </Slider>
      </S.SliderCategory>

      <S.SliderCategory>
        <h2 className="labelshowcase">Lojas Destaque</h2>
        <Slider {...settingsSellers}>
          {props?.sellers !== undefined &&
            props?.sellers?.map((attr) => (
              <Link key={attr.id} href={`/seller/${attr.url}`}>
                <S.SellerContainer>
                  <img
                    src={
                      attr.logo !== null
                        ? `${"https://plataz.net/storage"}/${attr.logo}`
                        : "/images/produto-marcacao.png"
                    }
                    alt={attr.name}
                  />
                  <div className="nameSeller">{attr.name}</div>
                </S.SellerContainer>
              </Link>
            ))}
        </Slider>
      </S.SliderCategory>

      <S.SearchSellersContainer>
        <S.SearchButton>
          <button
            className="positiveButton"
            onClick={() => history.push(`/allsellers`)}
          >
            VER MAIS
          </button>{" "}
        </S.SearchButton>
      </S.SearchSellersContainer>

      {props.photobookModuleActive === "true" && (
        <S.ConjuntoMid>
          <S.BlocoExplore onClick={() => history.push("/inspire")}>
            <div className="blocoImage">
              <img
                src="/images/inspire.png"
                loading="lazy"
                alt="Sala com sofá azul no centro"
              />
            </div>
            <span>Inspire-se</span>
          </S.BlocoExplore>
          <S.BlocoExplore onClick={() => history.push("/findpromoters")}>
            <div className="blocoImage">
              <img
                loading="lazy"
                src="/images/findpromoters.png"
                alt="Arquiteto desenhando"
              />
            </div>
            <span>Encontre profissionais</span>
          </S.BlocoExplore>
        </S.ConjuntoMid>
      )}

      <S.ContainerBottom>
        <h2 className="labelshowcase noSlider">
          {lowerShowcase.showcase_title}
        </h2>
        <ProductList hits={lowerShowcase} page="home" mktName={props.mktName} />
      </S.ContainerBottom>
    </S.ContainerGeneral>
  );
}

export default HomePage;
