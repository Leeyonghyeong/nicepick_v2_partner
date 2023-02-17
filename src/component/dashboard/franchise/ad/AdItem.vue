<template>
  <section>
    <article>
      <div class="padding">
        <div class="top-title">광고 상품</div>

        <div class="content-gap">
          <div class="premium-service content">
            <div class="title">프리미엄 서비스</div>
            <div :class="{ boxstyle: showPremium }" class="box">
              <div class="name-sub">
                <div class="name">
                  프리미엄 멤버십
                  <img
                    src="../../../../assets/dashboard/premium.png"
                    alt="프리미엄"
                  />
                </div>
                <div class="sub">
                  해시태그(6개) + 리스트 상위 노출 + 프로모션 + 다이렉트 고객
                  매칭
                </div>
              </div>
              <div class="flex">
                <div class="cost-vat flex">
                  <div class="cost">
                    <div class="ballon">
                      <i class="fa-solid fa-gem"></i>
                      지금 신청하면 1개월 무료
                    </div>
                    <span class="medi">월 <span class="red">88,000</span></span>
                    원
                  </div>
                  <div class="vat">VAT 포함</div>
                </div>
                <div class="btn">
                  <button class="detail" @click="showPremium = !showPremium">
                    상세보기
                    <img
                      v-if="!showPremium"
                      src="../../../../assets/dashboard/arrow_more.png"
                      alt="down"
                    />
                    <img
                      v-if="showPremium"
                      src="../../../../assets/dashboard/arrow_close.png"
                      alt="up"
                    />
                  </button>
                  <button class="cart" @click="showAddCart">
                    <i class="fa-solid fa-cart-plus"></i>
                  </button>
                  <button class="apply">신청하기</button>
                </div>
              </div>
            </div>

            <div class="premium-more more-box" v-if="showPremium">
              <div class="menu-detail">
                <div class="menu">
                  <div
                    :class="{ select: detailPremium === 'hashtag' }"
                    @click="detailPremium = 'hashtag'"
                  >
                    해시태그
                  </div>
                  <div
                    :class="{ select: detailPremium === 'list' }"
                    @click="detailPremium = 'list'"
                  >
                    리스트
                  </div>
                  <div
                    :class="{ select: detailPremium === 'promotion' }"
                    @click="detailPremium = 'promotion'"
                  >
                    프로모션
                  </div>
                  <div
                    :class="{ select: detailPremium === 'matching' }"
                    @click="detailPremium = 'matching'"
                  >
                    고객 매칭
                  </div>
                </div>

                <Hashtag v-if="detailPremium === 'hashtag'" />
                <List v-if="detailPremium === 'list'" />
                <Matching v-if="detailPremium === 'matching'" />
                <Promotion v-if="detailPremium === 'promotion'" />
              </div>
              <div class="guide">
                <div class="guide-title">
                  프리미엄 멤버십 유의사항
                  <span class="blue">프리미엄 멤버십 자주 묻는 질문></span>
                </div>
                <div class="guide-ment">
                  · 1개월 무료 이용 혜택은 최초 1회만 제공됩니다.<br />
                  · 멤버십 비용은 1개월 무료 이용(가입일 기준 ~ 1개월)이후부터
                  매월 자동결제 됩니다.<br />
                  · 멤버십 가격은 부가세와 결제 수수료가 포함되어 있습니다.<br />
                  · 멤버십 결제 비용은 회원님이 선택하신 결제수단으로 구독 기간
                  마지막 날에 다음달 멤버십 금액이 청구됩니다.<br />
                  · 해지를 원하실 경우 멤버십 구독 기간이 끝나는 날로부터 최소
                  24시간 전에 자동 갱신을 해지해야 합니다.
                  <br />
                  · 자동결제 해지는 [마이메뉴>이용내역>해지]에서 가능합니다.
                  해지 이 후에는 다음 결제가 이루어 지지 않으며, 남은 기간 동안
                  서비스 이용이 가능합니다.<br />
                  · 일부 구매 전용 상품은 멤버십으로 이용이 불가능합니다.<br />
                  · 도움이 필요하시면 1:1 문의를 이용해 주세요.
                </div>
              </div>
            </div>
          </div>

          <div class="brand-ad content">
            <div class="title">브랜드 광고</div>
            <div class="box-gap">
              <div>
                <div :class="{ boxstyle: showHopeful }" class="box">
                  <div class="name-sub">
                    <div class="name">
                      유망브랜드 ({{ periodSelect }})
                      <img
                        @click="showPeriodList"
                        src="../../../../assets/dashboard/arrow_down_black.png"
                        alt="down_black"
                      />
                    </div>
                    <div class="sub">홈 유망 브랜드 리스트 노출</div>
                  </div>
                  <div class="flex">
                    <div class="cost-vat flex">
                      <div class="cost">
                        <span class="red">550,000</span> 원
                      </div>
                      <div class="vat">VAT 포함</div>
                    </div>
                    <div class="btn">
                      <button
                        class="detail"
                        @click="showHopeful = !showHopeful"
                      >
                        상세보기
                        <img
                          v-if="!showHopeful"
                          src="../../../../assets/dashboard/arrow_more.png"
                          alt="down"
                        />
                        <img
                          v-if="showHopeful"
                          src="../../../../assets/dashboard/arrow_close.png"
                          alt="up"
                        />
                      </button>
                      <button class="cart">
                        <i class="fa-solid fa-cart-plus"></i>
                      </button>
                      <button class="apply">신청하기</button>
                    </div>
                  </div>
                </div>
                <PeriodList
                  v-if="selectPeriod"
                  @showPeriodList="showPeriodList"
                />
                <div class="more-box" v-if="showHopeful">
                  <div class="menu-detail">
                    <div v-if="getDevice === 'tablet'" class="detail">
                      <img
                        class="first"
                        src="../../../../assets/dashboard/ad/hopeful/tab.png"
                        alt=""
                      />
                      <img
                        class="second"
                        src="../../../../assets/dashboard/ad/hopeful/tab_2.png"
                        alt=""
                      />
                    </div>
                    <div v-if="getDevice === 'pc'" class="detail">
                      <img
                        class="first"
                        src="../../../../assets/dashboard/ad/hopeful/pc.png"
                        alt=""
                      />
                      <img
                        class="second"
                        src="../../../../assets/dashboard/ad/hopeful/pc_2.png"
                        alt=""
                      />
                    </div>
                    <div v-if="getDevice === 'mobile'" class="detail">
                      <img
                        class="first"
                        src="../../../../assets/dashboard/ad/hopeful/mob.png"
                        alt=""
                      />
                      <img
                        class="second"
                        src="../../../../assets/dashboard/ad/hopeful/mob_2.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="ment">
                    · 홈 메인페이지 유망브랜드 리스트 영역에 노출됩니다.<br />
                    · 사용자에 따라 랜덤으로 브랜드가 노출됩니다.
                  </div>
                </div>
              </div>

              <div>
                <div :class="{ boxstyle: showHotclip }" class="box">
                  <div class="name-sub">
                    <div class="name">
                      브랜드 핫클립 (30일)
                      <img
                        src="../../../../assets/dashboard/arrow_down_black.png"
                        alt="down_black"
                      />
                    </div>
                    <div class="sub">홈 영상콘텐츠 노출</div>
                  </div>
                  <div class="flex">
                    <div class="cost-vat flex">
                      <div class="cost">
                        <span class="red">550,000</span> 원
                      </div>
                      <div class="vat">VAT 포함</div>
                    </div>
                    <div class="btn">
                      <button
                        class="detail"
                        @click="showHotclip = !showHotclip"
                      >
                        상세보기
                        <img
                          v-if="!showHotclip"
                          src="../../../../assets/dashboard/arrow_more.png"
                          alt="down"
                        />
                        <img
                          v-if="showHotclip"
                          src="../../../../assets/dashboard/arrow_close.png"
                          alt="up"
                        />
                      </button>
                      <button class="cart">
                        <i class="fa-solid fa-cart-plus"></i>
                      </button>
                      <button class="apply">신청하기</button>
                    </div>
                  </div>
                </div>
                <div class="more-box" v-if="showHotclip">
                  <div class="menu-detail">
                    <div v-if="getDevice === 'tablet'" class="detail">
                      <img
                        class="first"
                        src="../../../../assets/dashboard/ad/hotclip/tab.png"
                        alt=""
                      />
                      <img
                        class="second"
                        src="../../../../assets/dashboard/ad/hotclip/tab_2.png"
                        alt=""
                      />
                    </div>
                    <div v-if="getDevice === 'pc'" class="detail">
                      <img
                        class="first"
                        src="../../../../assets/dashboard/ad/hotclip/pc.png"
                        alt=""
                      />
                      <img
                        class="second"
                        src="../../../../assets/dashboard/ad/hotclip/pc_2.png"
                        alt=""
                      />
                    </div>
                    <div v-if="getDevice === 'mobile'" class="detail">
                      <img
                        class="first"
                        src="../../../../assets/dashboard/ad/hotclip/mob.png"
                        alt=""
                      />
                      <img
                        class="second"
                        src="../../../../assets/dashboard/ad/hotclip/mob_2.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="ment">
                    · 홈 메인 브랜드 핫클립 영역에 영상컨텐츠와 리스트로
                    노출됩니다.<br />
                    · 브랜드 핫클립은 사용자에 따라 랜덤으로 노출됩니다.
                  </div>
                </div>
              </div>

              <div>
                <div :class="{ boxstyle: showFirstRecommend }" class="box">
                  <div class="name-sub">
                    <div class="name">
                      추천 브랜드 1 (30일)
                      <img
                        src="../../../../assets/dashboard/arrow_down_black.png"
                        alt="down_black"
                      />
                    </div>
                    <div class="sub">검색 및 업종 리스트 상단 로고 노출</div>
                  </div>
                  <div class="flex">
                    <div class="cost-vat flex">
                      <div class="cost">
                        <span class="red">330,000</span> 원
                      </div>
                      <div class="vat">VAT 포함</div>
                    </div>
                    <div class="btn">
                      <button
                        class="detail"
                        @click="showFirstRecommend = !showFirstRecommend"
                      >
                        상세보기
                        <img
                          v-if="!showFirstRecommend"
                          src="../../../../assets/dashboard/arrow_more.png"
                          alt="down"
                        />
                        <img
                          v-if="showFirstRecommend"
                          src="../../../../assets/dashboard/arrow_close.png"
                          alt="up"
                        />
                      </button>
                      <button class="cart">
                        <i class="fa-solid fa-cart-plus"></i>
                      </button>
                      <button class="apply">신청하기</button>
                    </div>
                  </div>
                </div>
                <div class="more-box" v-if="showFirstRecommend">
                  <div class="menu-detail">
                    <div class="menu">
                      <div
                        :class="{
                          select: detailFirstRecommend === 'brandcategorylist',
                        }"
                        @click="detailFirstRecommend = 'brandcategorylist'"
                      >
                        업종 리스트
                      </div>
                      <div
                        :class="{ select: detailFirstRecommend === 'search' }"
                        @click="detailFirstRecommend = 'search'"
                      >
                        검색
                      </div>
                    </div>

                    <BrandCategoryList
                      v-if="detailFirstRecommend === 'brandcategorylist'"
                    />
                    <Search v-if="detailFirstRecommend === 'search'" />
                  </div>
                </div>
              </div>

              <div>
                <div :class="{ boxstyle: showSecondRecommend }" class="box">
                  <div class="name-sub">
                    <div class="name">
                      추천 브랜드 2 (30일)
                      <img
                        src="../../../../assets/dashboard/arrow_down_black.png"
                        alt="down_black"
                      />
                    </div>
                    <div class="sub">
                      브랜드 상세페이지 하단 브랜드 리스트 노출
                    </div>
                  </div>
                  <div class="flex">
                    <div class="cost-vat flex">
                      <div class="cost">
                        <span class="original">1,100,000원</span>
                        <span class="red">330,000</span> 원
                      </div>
                      <div class="vat">
                        <span class="discount">
                          <img
                            src="../../../../assets/dashboard/arrow_down.png"
                            alt="down_blue"
                          />
                          10% 할인 ·
                        </span>
                        VAT 포함
                      </div>
                    </div>
                    <div class="btn">
                      <button
                        class="detail"
                        @click="showSecondRecommend = !showSecondRecommend"
                      >
                        상세보기
                        <img
                          v-if="!showSecondRecommend"
                          src="../../../../assets/dashboard/arrow_more.png"
                          alt="down"
                        />
                        <img
                          v-if="showSecondRecommend"
                          src="../../../../assets/dashboard/arrow_close.png"
                          alt="up"
                        />
                      </button>
                      <button class="cart">
                        <i class="fa-solid fa-cart-plus"></i>
                      </button>
                      <button class="apply">신청하기</button>
                    </div>
                  </div>
                </div>
                <div class="more-box" v-if="showSecondRecommend">
                  <div class="menu-detail">
                    <div v-if="getDevice === 'tablet'" class="detail">
                      <img
                        class="first"
                        src="../../../../assets/dashboard/ad/recommend-2/tab.png"
                        alt=""
                      />
                      <img
                        class="second"
                        src="../../../../assets/dashboard/ad/recommend-2/tab_2.png"
                        alt=""
                      />
                    </div>
                    <div v-if="getDevice === 'pc'" class="detail">
                      <img
                        class="first"
                        src="../../../../assets/dashboard/ad/recommend-2/pc.png"
                        alt=""
                      />
                      <img
                        class="second"
                        src="../../../../assets/dashboard/ad/recommend-2/pc_2.png"
                        alt=""
                      />
                    </div>
                    <div v-if="getDevice === 'mobile'" class="detail">
                      <img
                        class="first"
                        src="../../../../assets/dashboard/ad/recommend-2/mob.png"
                        alt=""
                      />
                      <img
                        class="second"
                        src="../../../../assets/dashboard/ad/recommend-2/mob_2.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="ment">
                    · 브랜드 상세페이지 하단 영역에 추천 브랜드로 노출됩니다.<br />
                    · 사용자 또는 브랜드 업종에 따라 랜덤으로 노출됩니다.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="banner-ad content">
            <div class="title">배너 광고</div>
            <div class="box-gap">
              <div>
                <div :class="{ boxstyle: showMaintop }" class="box">
                  <div class="name-sub">
                    <div class="name">
                      메인 TOP (30일)
                      <img
                        src="../../../../assets/dashboard/arrow_down_black.png"
                        alt="down_black"
                      />
                    </div>
                    <div class="sub">홈 메인 배너</div>
                  </div>
                  <div class="flex">
                    <div class="cost-vat flex">
                      <div class="cost">
                        <span class="original">1,100,000원</span>
                        <span class="red">990,000</span> 원
                      </div>
                      <div class="vat">
                        <span class="discount">
                          <img
                            src="../../../../assets/dashboard/arrow_down.png"
                            alt="down_blue"
                          />
                          10% 할인 ·
                        </span>
                        VAT 포함
                      </div>
                    </div>
                    <div class="btn">
                      <button
                        class="detail"
                        @click="showMaintop = !showMaintop"
                      >
                        상세보기
                        <img
                          v-if="!showMaintop"
                          src="../../../../assets/dashboard/arrow_more.png"
                          alt="down"
                        />
                        <img
                          v-if="showMaintop"
                          src="../../../../assets/dashboard/arrow_close.png"
                          alt="up"
                        />
                      </button>
                      <button class="cart">
                        <i class="fa-solid fa-cart-plus"></i>
                      </button>
                      <button class="apply">신청하기</button>
                    </div>
                  </div>
                </div>
                <div class="more-box" v-if="showMaintop">
                  <div class="menu-detail">
                    <div class="menu">
                      <div
                        :class="{
                          select: detailMaintop === 'maintopMain',
                        }"
                        @click="detailMaintop = 'maintopMain'"
                      >
                        메인
                      </div>
                      <div
                        :class="{ select: detailMaintop === 'bannerImg' }"
                        @click="detailMaintop = 'bannerImg'"
                      >
                        배너 이미지
                      </div>
                    </div>

                    <Main v-if="detailMaintop === 'maintopMain'" />
                    <BannerImage v-if="detailMaintop === 'bannerImg'" />
                  </div>
                </div>
              </div>

              <div>
                <div :class="{ boxstyle: showFirstSpecial }" class="box">
                  <div class="name-sub">
                    <div class="name">
                      메인 Special 1 (30일)
                      <img
                        src="../../../../assets/dashboard/arrow_down_black.png"
                        alt="down_black"
                      />
                    </div>
                    <div class="sub">
                      홈 첫번째 배너 + 커뮤니티 페이지 내 랜덤 노출
                    </div>
                  </div>
                  <div class="flex">
                    <div class="cost-vat flex">
                      <div class="cost">
                        <span class="original">1,100,000원</span>
                        <span class="red">990,000</span> 원
                      </div>
                      <div class="vat">
                        <span class="discount">
                          <img
                            src="../../../../assets/dashboard/arrow_down.png"
                            alt="down_blue"
                          />
                          10% 할인 ·
                        </span>
                        VAT 포함
                      </div>
                    </div>
                    <div class="btn">
                      <button
                        class="detail"
                        @click="showFirstSpecial = !showFirstSpecial"
                      >
                        상세보기
                        <img
                          v-if="!showFirstSpecial"
                          src="../../../../assets/dashboard/arrow_more.png"
                          alt="down"
                        />
                        <img
                          v-if="showFirstSpecial"
                          src="../../../../assets/dashboard/arrow_close.png"
                          alt="up"
                        />
                      </button>
                      <button class="cart">
                        <i class="fa-solid fa-cart-plus"></i>
                      </button>
                      <button class="apply">신청하기</button>
                    </div>
                  </div>
                </div>
                <div class="more-box" v-if="showFirstSpecial">
                  <div class="menu-detail">
                    <div class="menu">
                      <div
                        :class="{
                          select: detailFirstSpecial === 'firstSpecialMain',
                        }"
                        @click="detailFirstSpecial = 'firstSpecialMain'"
                      >
                        메인
                      </div>
                      <div
                        :class="{
                          select:
                            detailFirstSpecial === 'firstSpecialCommunity',
                        }"
                        @click="detailFirstSpecial = 'firstSpecialCommunity'"
                      >
                        커뮤니티
                      </div>
                      <div
                        :class="{ select: detailFirstSpecial === 'mentImg' }"
                        @click="detailFirstSpecial = 'mentImg'"
                      >
                        문구/이미지
                      </div>
                    </div>

                    <FirstSpecialMain
                      v-if="detailFirstSpecial === 'firstSpecialMain'"
                    />
                    <FirstSpecialCommunity
                      v-if="detailFirstSpecial === 'firstSpecialCommunity'"
                    />
                    <MentAndImg v-if="detailFirstSpecial === 'mentImg'" />
                  </div>
                </div>
              </div>

              <div>
                <div :class="{ boxstyle: showSecondSpecial }" class="box">
                  <div class="name-sub">
                    <div class="name">
                      메인 Special 2 (30일)
                      <img
                        src="../../../../assets/dashboard/arrow_down_black.png"
                        alt="down_black"
                      />
                    </div>
                    <div class="sub">
                      홈 두번째 배너 + 커뮤니티 페이지 내 랜덤 노출
                    </div>
                  </div>
                  <div class="flex">
                    <div class="cost-vat flex">
                      <div class="cost">
                        <span class="original">1,100,000원</span>
                        <span class="red">990,000</span> 원
                      </div>
                      <div class="vat">
                        <span class="discount">
                          <img
                            src="../../../../assets/dashboard/arrow_down.png"
                            alt="down_blue"
                          />
                          10% 할인 ·
                        </span>
                        VAT 포함
                      </div>
                    </div>
                    <div class="btn">
                      <button
                        class="detail"
                        @click="showSecondSpecial = !showSecondSpecial"
                      >
                        상세보기
                        <img
                          v-if="!showSecondSpecial"
                          src="../../../../assets/dashboard/arrow_more.png"
                          alt="down"
                        />
                        <img
                          v-if="showSecondSpecial"
                          src="../../../../assets/dashboard/arrow_close.png"
                          alt="up"
                        />
                      </button>
                      <button class="cart">
                        <i class="fa-solid fa-cart-plus"></i>
                      </button>
                      <button class="apply">신청하기</button>
                    </div>
                  </div>
                </div>
                <div class="more-box" v-if="showSecondSpecial">
                  <div class="menu-detail">
                    <div class="menu">
                      <div
                        :class="{
                          select: detailSecondSpecial === 'secondSpecialMain',
                        }"
                        @click="detailSecondSpecial = 'secondSpecialMain'"
                      >
                        메인
                      </div>
                      <div
                        :class="{
                          select:
                            detailSecondSpecial === 'secondSpecialCommunity',
                        }"
                        @click="detailSecondSpecial = 'secondSpecialCommunity'"
                      >
                        커뮤니티
                      </div>
                      <div
                        :class="{ select: detailSecondSpecial === 'mentImg' }"
                        @click="detailSecondSpecial = 'mentImg'"
                      >
                        문구/이미지
                      </div>
                    </div>

                    <SecondSpecialMain
                      v-if="detailSecondSpecial === 'secondSpecialMain'"
                    />
                    <SecondSpecialCommunity
                      v-if="detailSecondSpecial === 'secondSpecialCommunity'"
                    />
                    <MentAndImg v-if="detailSecondSpecial === 'mentImg'" />
                  </div>
                </div>
              </div>
              <div>
                <div :class="{ boxstyle: showThirdSpecial }" class="box">
                  <div class="name-sub">
                    <div class="name">
                      메인 Special 3 (30일)
                      <img
                        src="../../../../assets/dashboard/arrow_down_black.png"
                        alt="down_black"
                      />
                    </div>
                    <div class="sub">
                      홈 세번째 배너 + 커뮤니티 페이지 내 랜덤 노출
                    </div>
                  </div>
                  <div class="flex">
                    <div class="cost-vat flex">
                      <div class="cost">
                        <span class="original">1,100,000원</span>
                        <span class="red">990,000</span> 원
                      </div>
                      <div class="vat">
                        <span class="discount">
                          <img
                            src="../../../../assets/dashboard/arrow_down.png"
                            alt="down_blue"
                          />
                          10% 할인 ·
                        </span>
                        VAT 포함
                      </div>
                    </div>
                    <div class="btn">
                      <button
                        class="detail"
                        @click="showThirdSpecial = !showThirdSpecial"
                      >
                        상세보기
                        <img
                          v-if="!showThirdSpecial"
                          src="../../../../assets/dashboard/arrow_more.png"
                          alt="down"
                        />
                        <img
                          v-if="showThirdSpecial"
                          src="../../../../assets/dashboard/arrow_close.png"
                          alt="up"
                        />
                      </button>
                      <button class="cart">
                        <i class="fa-solid fa-cart-plus"></i>
                      </button>
                      <button class="apply">신청하기</button>
                    </div>
                  </div>
                </div>
                <div class="more-box" v-if="showThirdSpecial">
                  <div class="menu-detail">
                    <div class="menu">
                      <div
                        :class="{
                          select: detailThirdSpecial === 'thirdSpecialMain',
                        }"
                        @click="detailThirdSpecial = 'thirdSpecialMain'"
                      >
                        메인
                      </div>
                      <div
                        :class="{
                          select:
                            detailThirdSpecial === 'thirdSpecialCommunity',
                        }"
                        @click="detailThirdSpecial = 'thirdSpecialCommunity'"
                      >
                        커뮤니티
                      </div>
                      <div
                        :class="{ select: detailThirdSpecial === 'mentImg' }"
                        @click="detailThirdSpecial = 'mentImg'"
                      >
                        문구/이미지
                      </div>
                    </div>

                    <ThirdSpecialMain
                      v-if="detailThirdSpecial === 'thirdSpecialMain'"
                    />
                    <ThirdSpecialCommunity
                      v-if="detailThirdSpecial === 'thirdSpecialCommunity'"
                    />
                    <MentAndImg v-if="detailThirdSpecial === 'mentImg'" />
                  </div>
                </div>
              </div>
              <div>
                <div :class="{ boxstyle: showLastBanner }" class="box">
                  <div class="name-sub">
                    <div class="name">
                      리스트 배너 (30일)
                      <img
                        src="../../../../assets/dashboard/arrow_down_black.png"
                        alt="down_black"
                      />
                    </div>
                    <div class="sub">브랜드 리스트 페이지 내 랜덤 노출</div>
                  </div>
                  <div class="flex">
                    <div class="cost-vat flex">
                      <div class="cost">
                        <span class="original">1,100,000원</span>
                        <span class="red">990,000</span> 원
                      </div>
                      <div class="vat">
                        <span class="discount">
                          <img
                            src="../../../../assets/dashboard/arrow_down.png"
                            alt="down_blue"
                          />
                          10% 할인 ·
                        </span>
                        VAT 포함
                      </div>
                    </div>
                    <div class="btn">
                      <button
                        class="detail"
                        @click="showLastBanner = !showLastBanner"
                      >
                        상세보기
                        <img
                          v-if="!showLastBanner"
                          src="../../../../assets/dashboard/arrow_more.png"
                          alt="down"
                        />
                        <img
                          v-if="showLastBanner"
                          src="../../../../assets/dashboard/arrow_close.png"
                          alt="up"
                        />
                      </button>
                      <button class="cart">
                        <i class="fa-solid fa-cart-plus"></i>
                      </button>
                      <button class="apply">신청하기</button>
                    </div>
                  </div>
                </div>
                <div class="more-box" v-if="showLastBanner">
                  <div class="menu-detail">
                    <div class="menu">
                      <div
                        :class="{
                          select: detailLast === 'brandlist',
                        }"
                        @click="detailLast = 'brandlist'"
                      >
                        브랜드 리스트
                      </div>
                      <div
                        :class="{ select: detailLast === 'mentImg' }"
                        @click="detailLast = 'mentImg'"
                      >
                        문구/이미지
                      </div>
                    </div>

                    <LastList v-if="detailLast === 'brandlist'" />
                    <MentAndImg v-if="detailLast === 'mentImg'" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="premium-free">
        <img
          v-if="getDevice === 'pc'"
          src="../../../../assets/dashboard/pc_banner.png"
          alt="eventbanner"
        />
        <img
          v-if="getDevice === 'tablet'"
          src="../../../../assets/dashboard/tab_banner.png"
          alt="eventbanner"
        />
        <img
          v-if="getDevice === 'mobile'"
          src="../../../../assets/dashboard/mobile_banner.png"
          alt="eventbanner"
        />
      </div>

      <AddCart v-if="showModal" @showAddCart="showAddCart" />
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../../../store/window'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import AddCart from '../../../common/modal/dashboard/AddCart.vue'
import Hashtag from '../../../common/dashboard/ad/premium/Hashtag.vue'
import List from '../../../common/dashboard/ad/premium/List.vue'
import Matching from '../../../common/dashboard/ad/premium/Matching.vue'
import Promotion from '../../../common/dashboard/ad/premium/Promotion.vue'
import BrandCategoryList from '../../../common/dashboard/ad/brandad/BrandCategoryList.vue'
import Search from '../../../common/dashboard/ad/brandad/Search.vue'
import Main from '../../../common/dashboard/ad/bannerad/MaintopMain.vue'
import BannerImage from '../../../common/dashboard/ad/bannerad/BannerImage.vue'
import FirstSpecialMain from '../../../common/dashboard/ad/bannerad/FirstSpecialMain.vue'
import FirstSpecialCommunity from '../../../common/dashboard/ad/bannerad/FirstSpecialCommunity.vue'
import MentAndImg from '../../../common/dashboard/ad/bannerad/MentAndImg.vue'
import SecondSpecialMain from '../../../common/dashboard/ad/bannerad/SecondSpecialMain.vue'
import SecondSpecialCommunity from '../../../common/dashboard/ad/bannerad/SecondSpecialCommunity.vue'
import ThirdSpecialMain from '../../../common/dashboard/ad/bannerad/ThirdSpecialMain.vue'
import ThirdSpecialCommunity from '../../../common/dashboard/ad/bannerad/ThirdSpecialCommunity.vue'
import LastList from '../../../common/dashboard/ad/bannerad/LastList.vue'
import PeriodList from '../../../common/dashboard/PeriodList.vue'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)

const showModal = ref<boolean>(false)
const showAddCart = () => {
  showModal.value = !showModal.value
}

const showPremium = ref<boolean>(false)
const detailPremium = ref<string>('hashtag')

const showFirstRecommend = ref<boolean>(false)
const detailFirstRecommend = ref<string>('brandcategorylist')

const showMaintop = ref<boolean>(false)
const detailMaintop = ref<string>('maintopMain')

const showFirstSpecial = ref<boolean>(false)
const detailFirstSpecial = ref<string>('firstSpecialMain')

const showSecondSpecial = ref<boolean>(false)
const detailSecondSpecial = ref<string>('secondSpecialMain')

const showThirdSpecial = ref<boolean>(false)
const detailThirdSpecial = ref<string>('thirdSpecialMain')

const showLastBanner = ref<boolean>(false)
const detailLast = ref<string>('brandlist')

const showHopeful = ref<boolean>(false)
const showHotclip = ref<boolean>(false)
const showSecondRecommend = ref<boolean>(false)

const periodSelect = ref<string>('30일')
const selectPeriod = ref<boolean>(false)
const showPeriodList = () => {
  selectPeriod.value = !selectPeriod.value
}
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  .padding {
    padding: 50px 24px 0 24px;
    .top-title {
      font-size: 20px;
      font-weight: $medi;
      color: $fontMain;
    }

    .content-gap {
      padding-top: 50px;
      display: flex;
      flex-direction: column;
      gap: 60px;
      .content {
        .title {
          font-size: 18px;
          color: $fontMain;
          padding-bottom: 20px;
        }
        .box-gap {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .box {
          position: relative;
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 50px;
          background-color: white;
          border-radius: 10px;
          box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
          .name-sub {
            .name {
              display: flex;
              align-items: center;
              gap: 6px;
              font-size: 18px;
              color: $fontMain;
              font-weight: $medi;
              img {
                width: 20px;
                height: 20px;
                cursor: pointer;
              }
            }
            .sub {
              padding-top: 10px;
              font-size: 14px;
              color: $fontSub;
            }
          }
          .flex {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            .cost-vat {
              display: flex;
              gap: 12px;
              .ballon {
                padding: 12px;
                position: relative;
                display: flex;
                align-items: center;
                gap: 6px;
                background: white;
                border-radius: 10px;
                border: 1px solid $iconLine;
                font-size: 11px;
                color: $fontSub;
                filter: drop-shadow(1px 1px 10px rgba(0, 0, 0, 0.05));
                animation: motion 0.8s linear 0s infinite alternate;
                i {
                  font-size: 16px;
                  color: #9dccf6;
                }
              }
              .ballon:after {
                content: '';
                width: 0;
                position: absolute;
                top: 40%;
                right: -5px;
                z-index: 1;
                border: 5px solid transparent;
                border-left-color: white;
                border-right: 0;
              }
              .ballon:before {
                content: '';
                width: 0;
                position: absolute;
                top: 40%;
                right: -6px;
                z-index: 0;
                border-width: 0 16px 20px 17.5px;
                border: 5px solid transparent;
                border-left-color: $iconLine;
                border-right: 0;
              }

              .cost {
                display: flex;
                align-items: center;
                font-size: 18px;
                color: $fontMain;
              }
              .medi {
                font-weight: $medi;
              }
              .original {
                padding-right: 10px;
                font-size: 15px;
                color: $fontSub;
                text-decoration: line-through;
              }
              .red {
                color: $subColor;
              }
              .vat {
                display: flex;
                gap: 2px;
                font-size: 12px;
                color: $fontSub;
                .discount {
                  display: flex;
                  color: $mainColor;
                  img {
                    width: 14px;
                    height: 14px;
                  }
                }
              }
            }
            .btn {
              padding-top: 20px;
              width: 100%;
              height: 50px;
              display: flex;
              gap: 10px;
              .detail,
              .cart {
                border-radius: 10px;
                border: 1px solid $iconLine;
                background-color: white;
                font-family: Pretendard;
                font-size: 16px;
                font-weight: $reg;
                color: $fontSub;
                cursor: pointer;
              }
              .addcart {
                border: 1px solid $subColor;
                color: $subColor;
              }
              .detail {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                img {
                  width: 20px;
                  height: 20px;
                }
              }
              .cart {
                width: 25%;
              }
              .apply {
                width: 100%;
                border-radius: 10px;
                border: none;
                background-color: $mainColor;
                font-family: Pretendard;
                font-size: 16px;
                font-weight: $reg;
                color: white;
                cursor: pointer;
              }
            }
          }
        }
        .boxstyle {
          box-shadow: 0 0 0 1px $mainColor inset;
        }

        .more-box {
          margin-top: -20px;
          padding: 0 30px 50px 30px;
          background-color: #fafafa;
          border: 1px solid $iconLine;
          border-radius: 10px;
          .menu-detail {
            padding: 50px 0 0;
            .menu {
              display: flex;
              justify-content: space-around;
              div {
                width: 100%;
                height: 42px;
                background-color: $sectionLine;
                display: flex;
                justify-content: center;
                align-items: center;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                border: 1px solid $iconLine;
                border-bottom: none;
                font-size: 15px;
                color: $fontSub;
                cursor: pointer;
              }
              .select {
                background-color: white;
                color: $mainColor;
              }
            }
            .detail {
              padding: 25px 0 0;
              background-color: white;
              border-radius: 10px;
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 50px;
              .first {
                width: 140px;
                height: 350px;
              }
              .second {
                width: 408px;
                height: 325px;
              }
            }
          }
          .ment {
            padding-top: 30px;
            font-size: 14px;
            color: $fontSub;
            line-height: 24px;
          }
        }
      }
      .premium-service {
        .box {
          .name-sub {
            .name {
              img {
                cursor: default;
              }
            }
          }
          .flex {
            .cost-vat {
              gap: 0;
            }
          }
        }

        .premium-more {
          .menu-detail {
            padding-bottom: 30px;
            .detail {
              border-top-left-radius: 0;
              border-top-right-radius: 0;
            }
          }
          .ment {
            padding-bottom: 30px;
          }
          .guide {
            padding-top: 30px;
            border-top: 1px solid $sectionLine;
            .guide-title {
              padding-bottom: 10px;
              font-weight: $medi;
              color: $fontMain;
              .blue {
                padding-left: 10px;
                font-size: 12px;
                color: $mainColor;
                font-weight: $reg;
                cursor: pointer;
              }
            }
            .guide-ment {
              font-size: 14px;
              color: $fontSub;
              line-height: 24px;
            }
          }
        }
      }
    }
  }
  .premium-free {
    padding-top: 60px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

@include mobile {
  article {
    padding: 0 0 58px 0;
    .padding {
      padding: 0;
      .top-title {
        display: flex;
        align-items: center;
        gap: 8px;
        position: absolute;
        top: 20px;
        left: 24px;
        font-size: 16px;
        padding: 0;
      }

      .content-gap {
        padding: 0;
        gap: 10px;
        .content {
          background-color: white;
          padding: 30px 0 0;
          .title {
            padding: 0 0 20px 24px;
            font-size: 14px;
          }
          .box {
            padding: 30px 24px;
            border-radius: 0;
            box-shadow: none;
            border-top: 1px solid $sectionLine;
            .name-sub {
              .name {
                font-size: 16px;
              }
              .sub {
                font-size: 11px;
              }
            }
            .flex {
              .cost-vat {
                .cost {
                  font-size: 16px;
                }
                .vat {
                  font-size: 10px;
                }
              }
              .btn {
                .detail,
                .apply {
                  font-size: 14px;
                }
                .cart {
                  width: 40%;
                }
              }
            }
          }

          .boxstyle {
            box-shadow: none;
            border-bottom: 1px solid $mainColor;
          }

          .more-box {
            margin-top: 0;
            border-radius: 0;
            padding: 0 30px 30px;
            border: none;
            .menu-detail {
              padding: 30px 0 20px;
              .menu {
                div {
                  font-size: 13px;
                }
              }
              .detail {
                padding: 25px 40px 0;
                gap: 45px;
                .first {
                  width: 55%;
                  height: 100%;
                }
                .second {
                  width: 100%;
                  height: 100%;
                }
              }
            }
            .ment {
              padding: 0;
              font-size: 13px;
            }
            .guide {
              padding: 20px 0 0;
              .guide-title {
                font-size: 14px;
                .blue {
                  font-size: 11px;
                }
              }
              .guide-ment {
                font-size: 13px;
              }
            }
          }
        }

        .premium-more {
          .ment {
            padding-bottom: 20px;
          }
        }
      }
    }
    .premium-free {
      padding-top: 10px;
    }
  }
}

@include pc {
  article {
    padding: 0;

    .padding {
      padding: 50px 160px 0;
      .content-gap {
        gap: 80px;
        .content {
          .box {
            width: 1270px;
            box-sizing: border-box;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .name-sub {
              width: 100%;
            }
            .flex {
              width: 100%;
              flex-direction: row;
              align-items: center;
              gap: 30px;
              .cost-vat {
                width: 60%;
                flex-direction: column;
                align-items: flex-end;
                .cost {
                  position: relative;
                  .ballon {
                    width: 160px;
                    padding: 12px 0;
                    justify-content: center;
                    position: absolute;
                    top: -60px;
                    left: -30px;
                    animation: motion-pc 0.8s linear 0s infinite alternate;
                  }
                  .ballon:after {
                    top: 98%;
                    right: 50%;
                    transform: translate(50%, 0%);
                    border-top: 7px solid white;
                    border-left: 7px solid transparent;
                    border-right: 7px solid transparent;
                    border-bottom: 0px solid transparent;
                  }
                  .ballon:before {
                    top: 100%;
                    right: 50%;
                    transform: translate(50%, 0%);
                    border-top: 7px solid $iconLine;
                    border-left: 7px solid transparent;
                    border-right: 7px solid transparent;
                    border-bottom: 0px solid transparent;
                  }
                }
              }

              .btn {
                width: 100%;
                padding: 0;
                .cart {
                  width: 40%;
                }
              }
            }
          }

          .more-box {
            width: 1270px;
            box-sizing: border-box;
            .menu-detail {
              .detail {
                flex-direction: row;
                justify-content: center;
                align-items: flex-start;
                gap: 200px;
                .second {
                  width: 546px;
                  height: 372px;
                }
              }
            }
          }
        }

        .premium-service {
          .box {
            .flex {
              .cost-vat {
                gap: 12px;
              }
            }
          }
        }
      }
    }
    .premium-free {
      padding-top: 80px;
      img {
        width: 100%;
      }
    }
  }
}

@keyframes motion-pc {
  0% {
    margin-top: 0px;
  }
  100% {
    margin-top: 8px;
  }
}

@keyframes motion {
  0% {
    margin-right: 10px;
  }
  100% {
    margin-right: 18px;
  }
}
</style>
