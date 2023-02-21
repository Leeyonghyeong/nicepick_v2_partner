<template>
  <section>
    <article>
      <div class="ad">
        <div v-if="getDevice !== 'mobile'" class="top-title">
          프랜차이즈 파트너 광고 상품
        </div>

        <div class="ad-section">
          <div class="content">
            <div class="padding">
              <div class="title">프리미엄 서비스</div>
            </div>
            <div :class="{ style: showPremium === true }" class="box">
              <div class="left">
                <div class="name">
                  프리미엄 멤버십
                  <img
                    src="../../../assets/guide_partner/프리미엄.png"
                    alt="프리미엄"
                  />
                </div>
                <div class="sub">
                  해시태그(6개) + 페이지 상위 노출 + 다이렉트 고객 매칭
                </div>
              </div>
              <button @click="showPremium = !showPremium" class="detail-btn">
                상세보기
                <img
                  v-if="showPremium === false"
                  src="../../../assets/guide_partner/btn_open.png"
                  alt="열기"
                />
                <img
                  v-if="showPremium === true"
                  src="../../../assets/guide_partner/btn_close.png"
                  alt="닫기"
                />
              </button>
            </div>
            <div v-if="showPremium" class="detail">
              <div class="detail-category">
                <div
                  @click="premiumCategory = '해시태그'"
                  :class="{ select: premiumCategory === '해시태그' }"
                >
                  해시태그
                </div>
                <div
                  @click="premiumCategory = '리스트'"
                  :class="{ select: premiumCategory === '리스트' }"
                >
                  리스트
                </div>
                <div
                  @click="premiumCategory = '프로모션'"
                  :class="{ select: premiumCategory === '프로모션' }"
                >
                  프로모션
                </div>
                <div
                  @click="premiumCategory = '고객매칭'"
                  :class="{ select: premiumCategory === '고객매칭' }"
                >
                  고객 매칭
                </div>
              </div>
              <div class="detail-box">
                <div v-if="premiumCategory === '해시태그'" class="img-sub">
                  <div class="img-section">
                    <img
                      v-if="getDevice === 'tablet'"
                      src="../../../assets/guide_partner/ad/premium/tab1.png"
                      alt="해시태그"
                    />
                    <img
                      v-if="getDevice === 'mobile'"
                      src="../../../assets/guide_partner/ad/premium/mob1.png"
                      alt="해시태그"
                    />
                    <img
                      v-if="getDevice === 'pc'"
                      src="../../../assets/guide_partner/ad/premium/pc1.png"
                      alt="해시태그"
                    />
                  </div>
                  <div class="sub">
                    · 검색페이지 추천태그 영역에 노출됩니다.<br />
                    · 추천태그는 사용자에 따라 랜덤으로 노출될 수 있습니다.
                  </div>
                </div>
                <div v-if="premiumCategory === '리스트'" class="img-sub">
                  <div class="img-section">
                    <img
                      v-if="getDevice === 'tablet'"
                      src="../../../assets/guide_partner/ad/premium/tab2.png"
                      alt="리스트"
                    />
                    <img
                      v-if="getDevice === 'mobile'"
                      src="../../../assets/guide_partner/ad/premium/mob2.png"
                      alt="리스트"
                    />
                    <img
                      v-if="getDevice === 'pc'"
                      src="../../../assets/guide_partner/ad/premium/pc2.png"
                      alt="리스트"
                    />
                  </div>
                  <div class="sub">
                    · 검색 및 업종 브랜드 리스트 상위 영역에 노출됩니다.<br />
                    · 사용자 또는 업종/검색 내역에 따라 랜덤으로 노출될 수
                    있습니다.
                  </div>
                </div>
                <div v-if="premiumCategory === '프로모션'" class="img-sub">
                  <div class="img-section">
                    <img
                      v-if="getDevice === 'tablet'"
                      src="../../../assets/guide_partner/ad/premium/tab3.png"
                      alt="프로모션 "
                    />
                    <img
                      v-if="getDevice === 'mobile'"
                      src="../../../assets/guide_partner/ad/premium/mob3.png"
                      alt="프로모션 "
                    />
                    <img
                      v-if="getDevice === 'pc'"
                      src="../../../assets/guide_partner/ad/premium/pc3.png"
                      alt="프로모션 "
                    />
                  </div>
                  <div class="sub">
                    · 프로모션 페이지 리스트와 브랜드 상세페이지에
                    노출됩니다.<br />
                    · 프로모션 아이콘과 프로모션 작성 내용으로 표시됩니다.
                  </div>
                </div>
                <div v-if="premiumCategory === '고객매칭'" class="img-sub">
                  <div class="img-section match">
                    <div class="icon ready">
                      <i class="fa-solid fa-users"></i>
                      <div class="name">예비창업자</div>
                    </div>
                    <i class="fa-solid fa-arrows-left-right arrow"></i>
                    <div class="icon company">
                      <i class="fa-solid fa-building-user"></i>
                      <div class="name">
                        프랜차이즈 브랜드 <br />
                        (담당자)
                      </div>
                    </div>
                  </div>
                  <div class="sub">
                    · 브랜드 매치 통해 예비창업자를 다이렉트로 매칭하는
                    서비스입니다.<br />
                    · 다이렉트 매칭을 통해 창업 상담을 시작하세요!
                  </div>
                </div>
              </div>
              <div class="notice">
                <div class="name">
                  프리미엄 멤버십 유의사항
                  <span class="blue">프리미엄 멤버십 자주 묻는 질문 ></span>
                </div>
                · 1개월 무료 이용 혜택은 최초 1회만 제공됩니다.<br />
                · 멤버십 비용은 1개월 무료 이용(가입일 기준 ~ 1개월)이후부터
                매월 자동결제 됩니다.<br />
                · 멤버십 가격은 부가세와 결제 수수료가 포함되어 있습니다.<br />
                · 멤버십 결제 비용은 회원님이 선택하신 결제수단으로 구독 기간
                마지막 날에 다음달 멤버십 금액이 청구됩니다.<br />
                · 해지를 원하실 경우 멤버십 구독 기간이 끝나는 날로부터 최소
                24시간 전에 자동 갱신을 해지해야 합니다.<br />
                · 자동결제 해지는 [마이메뉴>이용내역>해지]에서 가능합니다. 해지
                이 후에는 다음 결제가 이루어 지지 않으며, 남은 기간 동안 서비스
                이용이 가능합니다. · 일부 구매 전용 상품은 멤버십으로 이용이
                불가능합니다.<br />
                · 도움이 필요하시면 1:1 문의를 이용해 주세요.
              </div>
            </div>
          </div>

          <div class="content">
            <div class="padding">
              <div class="title">브랜드 광고</div>
            </div>
            <div :class="{ style: showHope === true }" class="box">
              <div class="left">
                <div class="name">유망브랜드</div>
                <div class="sub">홈 메인 유망 브랜드 리스트 노출</div>
              </div>
              <button @click="showHope = !showHope" class="detail-btn">
                상세보기
                <img
                  v-if="showHope === false"
                  src="../../../assets/guide_partner/btn_open.png"
                  alt="열기"
                />
                <img
                  v-if="showHope === true"
                  src="../../../assets/guide_partner/btn_close.png"
                  alt="닫기"
                />
              </button>
            </div>
            <div v-if="showHope" class="detail">
              <div class="detail-box">
                <div class="img-sub">
                  <div class="img-section no-category">
                    <img
                      v-if="getDevice === 'tablet'"
                      src="../../../assets/guide_partner/ad/brand/유망tab.png"
                      alt="유망브랜드"
                    />
                    <img
                      v-if="getDevice === 'mobile'"
                      src="../../../assets/guide_partner/ad/brand/유망mob.png"
                      alt="유망브랜드"
                    />
                    <img
                      v-if="getDevice === 'pc'"
                      src="../../../assets/guide_partner/ad/brand/유망pc.png"
                      alt="유망브랜드"
                    />
                  </div>
                  <div class="sub">
                    · 홈 메인페이지 유망브랜드 리스트 영역에 노출됩니다.<br />
                    · 사용자에 따라 랜덤으로 브랜드가 노출됩니다.
                  </div>
                </div>
              </div>
            </div>

            <div :class="{ style: showHotclip === true }" class="box">
              <div class="left">
                <div class="name">브랜드 핫클립</div>
                <div class="sub">홈 메인 영상컨텐츠 노출</div>
              </div>
              <button @click="showHotclip = !showHotclip" class="detail-btn">
                상세보기
                <img
                  v-if="showHotclip === false"
                  src="../../../assets/guide_partner/btn_open.png"
                  alt="열기"
                />
                <img
                  v-if="showHotclip === true"
                  src="../../../assets/guide_partner/btn_close.png"
                  alt="닫기"
                />
              </button>
            </div>
            <div v-if="showHotclip" class="detail">
              <div class="detail-box">
                <div class="img-sub">
                  <div class="img-section no-category">
                    <img
                      v-if="getDevice === 'tablet'"
                      src="../../../assets/guide_partner/ad/brand/핫tab.png"
                      alt="핫클립"
                    />
                    <img
                      v-if="getDevice === 'mobile'"
                      src="../../../assets/guide_partner/ad/brand/핫mob.png"
                      alt="핫클립"
                    />
                    <img
                      v-if="getDevice === 'pc'"
                      src="../../../assets/guide_partner/ad/brand/핫pc.png"
                      alt="핫클립"
                    />
                  </div>
                  <div class="sub">
                    · 홈 메인 브랜드 핫클립 영역에 영상컨텐츠와 리스트로
                    노출됩니다.<br />
                    · 브랜드 핫클립은 사용자에 따라 랜덤으로 노출됩니다.
                  </div>
                </div>
              </div>
            </div>

            <div :class="{ style: showRecommend === true }" class="box">
              <div class="left">
                <div class="name">추천 브랜드 1</div>
                <div class="sub">검색 및 업종 리스트 상단 로고 노출</div>
              </div>
              <button
                @click="showRecommend = !showRecommend"
                class="detail-btn"
              >
                상세보기
                <img
                  v-if="showRecommend === false"
                  src="../../../assets/guide_partner/btn_open.png"
                  alt="열기"
                />
                <img
                  v-if="showRecommend === true"
                  src="../../../assets/guide_partner/btn_close.png"
                  alt="닫기"
                />
              </button>
            </div>
            <div v-if="showRecommend" class="detail">
              <div class="detail-category">
                <div
                  @click="recommendCategory = '업종리스트'"
                  :class="{ select: recommendCategory === '업종리스트' }"
                >
                  업종리스트
                </div>
                <div
                  @click="recommendCategory = '검색'"
                  :class="{ select: recommendCategory === '검색' }"
                >
                  검색
                </div>
              </div>
              <div class="detail-box">
                <div v-if="recommendCategory === '업종리스트'" class="img-sub">
                  <div class="img-section">
                    <img
                      v-if="getDevice === 'tablet'"
                      src="../../../assets/guide_partner/ad/brand/추천1tab.png"
                      alt="업종리스트"
                    />
                    <img
                      v-if="getDevice === 'mobile'"
                      src="../../../assets/guide_partner/ad/brand/추천1mob.png"
                      alt="업종리스트"
                    />
                    <img
                      v-if="getDevice === 'pc'"
                      src="../../../assets/guide_partner/ad/brand/추천1pc.png"
                      alt="업종리스트"
                    />
                  </div>
                  <div class="sub">
                    · 업종 리스트 상단 추천브랜드 영역에 노출됩니다.<br />
                    · 사용자에 따라 랜덤으로 노출됩니다.
                  </div>
                </div>
                <div v-if="recommendCategory === '검색'" class="img-sub">
                  <div class="img-section">
                    <img
                      v-if="getDevice === 'tablet'"
                      src="../../../assets/guide_partner/ad/brand/추천1_2tab.png"
                      alt="검색"
                    />
                    <img
                      v-if="getDevice === 'mobile'"
                      src="../../../assets/guide_partner/ad/brand/추천1_2mob.png"
                      alt="검색"
                    />
                    <img
                      v-if="getDevice === 'pc'"
                      src="../../../assets/guide_partner/ad/brand/추천1_2pc.png"
                      alt="검색"
                    />
                  </div>
                  <div class="sub">
                    · 검색페이지 추천브랜드 영역에 노출됩니다.<br />
                    · 추천브랜드 사용자에 따라 랜덤으로 노출될 수 있습니다.
                  </div>
                </div>
              </div>
            </div>

            <div :class="{ style: showRecommendSecond === true }" class="box">
              <div class="left">
                <div class="name">추천 브랜드 2</div>
                <div class="sub">브랜드 상세페이지 하단 브랜드 리스트 노출</div>
              </div>
              <button
                @click="showRecommendSecond = !showRecommendSecond"
                class="detail-btn"
              >
                상세보기
                <img
                  v-if="showRecommendSecond === false"
                  src="../../../assets/guide_partner/btn_open.png"
                  alt="열기"
                />
                <img
                  v-if="showRecommendSecond === true"
                  src="../../../assets/guide_partner/btn_close.png"
                  alt="닫기"
                />
              </button>
            </div>
            <div v-if="showRecommendSecond" class="detail">
              <div class="detail-box">
                <div class="img-sub">
                  <div class="img-section no-category">
                    <img
                      v-if="getDevice === 'tablet'"
                      src="../../../assets/guide_partner/ad/brand/추천2tab.png"
                      alt="추천2"
                    />
                    <img
                      v-if="getDevice === 'mobile'"
                      src="../../../assets/guide_partner/ad/brand/추천2mob.png"
                      alt="추천2"
                    />
                    <img
                      v-if="getDevice === 'pc'"
                      src="../../../assets/guide_partner/ad/brand/추천2pc.png"
                      alt="추천2"
                    />
                  </div>
                  <div class="sub">
                    · 브랜드 상세페이지 하단 영역에 추천 브랜드로 노출됩니다.
                    <br />
                    · 사용자 또는 브랜드 업종에 따라 랜덤으로 노출됩니다.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="content">
            <div class="padding">
              <div class="title">배너 광고</div>
            </div>
            <div :class="{ style: showTop === true }" class="box">
              <div class="left">
                <div class="name">메인 TOP</div>
                <div class="sub">홈 메인 배너</div>
              </div>
              <button @click="showTop = !showTop" class="detail-btn">
                상세보기
                <img
                  v-if="showTop === false"
                  src="../../../assets/guide_partner/btn_open.png"
                  alt="열기"
                />
                <img
                  v-if="showTop === true"
                  src="../../../assets/guide_partner/btn_close.png"
                  alt="닫기"
                />
              </button>
            </div>
            <div v-if="showTop" class="detail">
              <div class="detail-category">
                <div
                  @click="topCategory = '메인'"
                  :class="{ select: topCategory === '메인' }"
                >
                  메인
                </div>
                <div
                  @click="topCategory = '배너이미지'"
                  :class="{ select: topCategory === '배너이미지' }"
                >
                  배너 이미지
                </div>
              </div>
              <div class="detail-box">
                <div v-if="topCategory === '메인'" class="img-sub">
                  <div class="img-section">
                    <img
                      v-if="getDevice === 'tablet'"
                      src="../../../assets/guide_partner/ad/banner/탑tab.png"
                      alt="메인"
                    />
                    <img
                      v-if="getDevice === 'mobile'"
                      src="../../../assets/guide_partner/ad/banner/탑1mob.png"
                      alt="메인"
                    />
                    <img
                      v-if="getDevice === 'pc'"
                      src="../../../assets/guide_partner/ad/banner/탑pc.png"
                      alt="메인"
                    />
                  </div>
                  <div class="sub">
                    · 홈 메인페이지 최상단 메인배너 영역에 노출됩니다.<br />
                    · 홈페이지 접속 시 가장 먼저 보이는 곳으로 인기있는
                    광고상품입니다.
                  </div>
                </div>
                <div v-if="topCategory === '배너이미지'" class="img-sub">
                  <div class="img-section">
                    <img
                      v-if="getDevice === 'tablet'"
                      src="../../../assets/guide_partner/ad/banner/탑_2tab.png"
                      alt="배너이미지"
                    />
                    <img
                      v-if="getDevice === 'mobile'"
                      src="../../../assets/guide_partner/ad/banner/탑1_2mob.png"
                      alt="배너이미지"
                    />
                    <img
                      v-if="getDevice === 'pc'"
                      src="../../../assets/guide_partner/ad/banner/탑_2pc.png"
                      alt="배너이미지"
                    />
                  </div>
                  <div class="sub">
                    · 보고있는 이미지는 메인TOP 배너 예시입니다.<br />
                    · 이미지는 각 사이즈에 맞춰 제작 및 등록하여 주시기
                    바랍니다.
                  </div>
                </div>
              </div>
            </div>

            <div :class="{ style: showSpecial === true }" class="box">
              <div class="left">
                <div class="name">메인 Special 1</div>
                <div class="sub">
                  홈 첫번째 배너 + 커뮤니티 페이지 내 랜덤 노출
                </div>
              </div>
              <button @click="showSpecial = !showSpecial" class="detail-btn">
                상세보기
                <img
                  v-if="showSpecial === false"
                  src="../../../assets/guide_partner/btn_open.png"
                  alt="열기"
                />
                <img
                  v-if="showSpecial === true"
                  src="../../../assets/guide_partner/btn_close.png"
                  alt="닫기"
                />
              </button>
            </div>
            <div v-if="showSpecial" class="detail">
              <div class="detail-category">
                <div
                  @click="specialCategory = '메인'"
                  :class="{ select: specialCategory === '메인' }"
                >
                  메인
                </div>
                <div
                  @click="specialCategory = '커뮤니티'"
                  :class="{ select: specialCategory === '커뮤니티' }"
                >
                  커뮤니티
                </div>
                <div
                  @click="specialCategory = '문구/이미지'"
                  :class="{ select: specialCategory === '문구/이미지' }"
                >
                  문구/이미지
                </div>
              </div>
              <div class="detail-box">
                <div v-if="specialCategory === '메인'" class="img-sub">
                  <div class="img-section">
                    <img
                      v-if="getDevice === 'tablet'"
                      src="../../../assets/guide_partner/ad/banner/스페셜1tab.png"
                      alt="메인"
                    />
                    <img
                      v-if="getDevice === 'mobile'"
                      src="../../../assets/guide_partner/ad/banner/스페셜1mob.png"
                      alt="메인"
                    />
                    <img
                      v-if="getDevice === 'pc'"
                      src="../../../assets/guide_partner/ad/banner/스페셜1pc.png"
                      alt="메인"
                    />
                  </div>
                  <div class="sub">
                    · 홈 메인페이지 업종 하단, 유망브랜드 상단에 위치한 배너
                    영역에 노출됩니다. <br />
                    · 사용자에 따라 랜덤으로 노출됩니다.
                  </div>
                </div>
                <div v-if="specialCategory === '커뮤니티'" class="img-sub">
                  <div class="img-section">
                    <img
                      v-if="getDevice === 'tablet'"
                      src="../../../assets/guide_partner/ad/banner/스페셜1_2tab.png"
                      alt="커뮤니티"
                    />
                    <img
                      v-if="getDevice === 'mobile'"
                      src="../../../assets/guide_partner/ad/banner/스페셜1_2mob.png"
                      alt="커뮤니티"
                    />
                    <img
                      v-if="getDevice === 'pc'"
                      src="../../../assets/guide_partner/ad/banner/스페셜1_2pc.png"
                      alt="커뮤니티"
                    />
                  </div>
                  <div class="sub">
                    · 커뮤티니 페이지 게시글 첫번째 배너 영역에 노출됩니다.<br />
                    · 사용자에 따라 랜덤으로 노출됩니다.
                  </div>
                </div>
                <div v-if="specialCategory === '문구/이미지'" class="img-sub">
                  <div class="img-section">
                    <img
                      v-if="getDevice === 'tablet'"
                      src="../../../assets/guide_partner/ad/banner/문구_이미지tab.png"
                      alt="문구/이미지"
                    />
                    <img
                      v-if="getDevice === 'mobile'"
                      src="../../../assets/guide_partner/ad/banner/문구_이미지mob.png"
                      alt="문구/이미지"
                    />
                    <img
                      v-if="getDevice === 'pc'"
                      src="../../../assets/guide_partner/ad/banner/문구_이미지pc.png"
                      alt="문구/이미지"
                    />
                  </div>
                  <div class="sub">
                    · 배너 문구는 제목강조, 본문강조, 전체강조로 3가지 중에
                    자유롭게 선택 가능합니다.<br />
                    · 해당 상품 결제시 [문구작성 및 색상 선택 -> 배경 색상 선택
                    ->이미지 파일 첨부] 하여 등록하실 수 있습니다.
                  </div>
                </div>
              </div>
            </div>

            <div :class="{ style: showSpecialSecond === true }" class="box">
              <div class="left">
                <div class="name">메인 Special 2</div>
                <div class="sub">
                  홈 두번째 배너 + 커뮤니티 페이지 내 랜덤 노출
                </div>
              </div>
              <button
                @click="showSpecialSecond = !showSpecialSecond"
                class="detail-btn"
              >
                상세보기
                <img
                  v-if="showSpecialSecond === false"
                  src="../../../assets/guide_partner/btn_open.png"
                  alt="열기"
                />
                <img
                  v-if="showSpecialSecond === true"
                  src="../../../assets/guide_partner/btn_close.png"
                  alt="닫기"
                />
              </button>
            </div>
            <div v-if="showSpecialSecond" class="detail">
              <div class="detail-category">
                <div
                  @click="specialSecondCategory = '메인'"
                  :class="{ select: specialSecondCategory === '메인' }"
                >
                  메인
                </div>
                <div
                  @click="specialSecondCategory = '커뮤니티'"
                  :class="{ select: specialSecondCategory === '커뮤니티' }"
                >
                  커뮤니티
                </div>
                <div
                  @click="specialSecondCategory = '문구/이미지'"
                  :class="{ select: specialSecondCategory === '문구/이미지' }"
                >
                  문구/이미지
                </div>
              </div>
              <div class="detail-box">
                <div v-if="specialSecondCategory === '메인'" class="img-sub">
                  <div class="img-section">
                    <img
                      v-if="getDevice === 'tablet'"
                      src="../../../assets/guide_partner/ad/banner/스페셜2tab.png"
                      alt="메인"
                    />
                    <img
                      v-if="getDevice === 'mobile'"
                      src="../../../assets/guide_partner/ad/banner/스페셜2mob.png"
                      alt="메인"
                    />
                    <img
                      v-if="getDevice === 'pc'"
                      src="../../../assets/guide_partner/ad/banner/스페셜2pc.png"
                      alt="메인"
                    />
                  </div>
                  <div class="sub">
                    · 홈 메인페이지 브랜드 핫클립 하단, 주간검색순위 상단에
                    위치한 배너 영역에 노출됩니다.<br />
                    · 사용자에 따라 랜덤으로 노출됩니다.
                  </div>
                </div>
                <div
                  v-if="specialSecondCategory === '커뮤니티'"
                  class="img-sub"
                >
                  <div class="img-section">
                    <img
                      v-if="getDevice === 'tablet'"
                      src="../../../assets/guide_partner/ad/banner/스페셜2_2tab.png"
                      alt="커뮤니티"
                    />
                    <img
                      v-if="getDevice === 'mobile'"
                      src="../../../assets/guide_partner/ad/banner/스페셜2_2mob.png"
                      alt="커뮤니티"
                    />
                    <img
                      v-if="getDevice === 'pc'"
                      src="../../../assets/guide_partner/ad/banner/스페셜2_2pc.png"
                      alt="커뮤니티"
                    />
                  </div>
                  <div class="sub">
                    · 커뮤티니 페이지 게시글 두번째 배너 영역에 노출됩니다.<br />
                    · 사용자에 따라 랜덤으로 노출됩니다.
                  </div>
                </div>
                <div
                  v-if="specialSecondCategory === '문구/이미지'"
                  class="img-sub"
                >
                  <div class="img-section">
                    <img
                      v-if="getDevice === 'tablet'"
                      src="../../../assets/guide_partner/ad/banner/문구_이미지tab.png"
                      alt="문구/이미지"
                    />
                    <img
                      v-if="getDevice === 'mobile'"
                      src="../../../assets/guide_partner/ad/banner/문구_이미지mob.png"
                      alt="문구/이미지"
                    />
                    <img
                      v-if="getDevice === 'pc'"
                      src="../../../assets/guide_partner/ad/banner/문구_이미지pc.png"
                      alt="문구/이미지"
                    />
                  </div>
                  <div class="sub">
                    · 배너 문구는 제목강조, 본문강조, 전체강조로 3가지 중에
                    자유롭게 선택 가능합니다.<br />
                    · 해당 상품 결제시 [문구작성 및 색상 선택 -> 배경 색상 선택
                    ->이미지 파일 첨부] 하여 등록하실 수 있습니다.
                  </div>
                </div>
              </div>
            </div>

            <div :class="{ style: showSpecialThird }" class="box">
              <div class="left">
                <div class="name">메인 Special 3</div>
                <div class="sub">
                  홈 세번째 배너 + 커뮤니티 페이지 내 랜덤 노출
                </div>
              </div>
              <button
                @click="showSpecialThird = !showSpecialThird"
                class="detail-btn"
              >
                상세보기
                <img
                  v-if="showSpecialThird === false"
                  src="../../../assets/guide_partner/btn_open.png"
                  alt="열기"
                />
                <img
                  v-if="showSpecialThird === true"
                  src="../../../assets/guide_partner/btn_close.png"
                  alt="닫기"
                />
              </button>
            </div>
            <div v-if="showSpecialThird" class="detail">
              <div class="detail-category">
                <div
                  @click="specialThirdCategory = '메인'"
                  :class="{ select: specialThirdCategory === '메인' }"
                >
                  메인
                </div>
                <div
                  @click="specialThirdCategory = '커뮤니티'"
                  :class="{ select: specialThirdCategory === '커뮤니티' }"
                >
                  커뮤니티
                </div>
                <div
                  @click="specialThirdCategory = '문구/이미지'"
                  :class="{ select: specialThirdCategory === '문구/이미지' }"
                >
                  문구/이미지
                </div>
              </div>
              <div class="detail-box">
                <div v-if="specialThirdCategory === '메인'" class="img-sub">
                  <div class="img-section">
                    <img
                      v-if="getDevice === 'tablet'"
                      src="../../../assets/guide_partner/ad/banner/스페셜3tab.png"
                      alt="메인"
                    />
                    <img
                      v-if="getDevice === 'mobile'"
                      src="../../../assets/guide_partner/ad/banner/스페셜3mob.png"
                      alt="메인"
                    />
                    <img
                      v-if="getDevice === 'pc'"
                      src="../../../assets/guide_partner/ad/banner/스페셜3pc.png"
                      alt="메인"
                    />
                  </div>
                  <div class="sub">
                    · 홈 메인페이지 찜 많이 받은 브랜드 하단, 테마 브랜드 상단에
                    위치한 배너 영역에 노출됩니다.<br />
                    · 사용자에 따라 랜덤으로 노출됩니다.
                  </div>
                </div>
                <div v-if="specialThirdCategory === '커뮤니티'" class="img-sub">
                  <div class="img-section">
                    <img
                      v-if="getDevice === 'tablet'"
                      src="../../../assets/guide_partner/ad/banner/스페셜3_2tab.png"
                      alt="커뮤니티"
                    />
                    <img
                      v-if="getDevice === 'mobile'"
                      src="../../../assets/guide_partner/ad/banner/스페셜3_2mob.png"
                      alt="커뮤니티"
                    />
                    <img
                      v-if="getDevice === 'pc'"
                      src="../../../assets/guide_partner/ad/banner/스페셜3_2pc.png"
                      alt="커뮤니티"
                    />
                  </div>
                  <div class="sub">
                    · 커뮤티니 페이지 게시글 세번째 배너 영역에 노출됩니다.<br />
                    · 사용자에 따라 랜덤으로 노출됩니다.
                  </div>
                </div>
                <div
                  v-if="specialThirdCategory === '문구/이미지'"
                  class="img-sub"
                >
                  <div class="img-section">
                    <img
                      v-if="getDevice === 'tablet'"
                      src="../../../assets/guide_partner/ad/banner/문구_이미지tab.png"
                      alt="문구/이미지"
                    />
                    <img
                      v-if="getDevice === 'mobile'"
                      src="../../../assets/guide_partner/ad/banner/문구_이미지mob.png"
                      alt="문구/이미지"
                    />
                    <img
                      v-if="getDevice === 'pc'"
                      src="../../../assets/guide_partner/ad/banner/문구_이미지pc.png"
                      alt="문구/이미지"
                    />
                  </div>
                  <div class="sub">
                    · 배너 문구는 제목강조, 본문강조, 전체강조로 3가지 중에
                    자유롭게 선택 가능합니다.<br />
                    · 해당 상품 결제시 [문구작성 및 색상 선택 -> 배경 색상 선택
                    ->이미지 파일 첨부] 하여 등록하실 수 있습니다.
                  </div>
                </div>
              </div>
            </div>

            <div :class="{ style: showLast === true }" class="box">
              <div class="left">
                <div class="name">리스트 배너</div>
                <div class="sub">브랜드 리스트 페이지 내 랜덤 노출</div>
              </div>
              <button @click="showLast = !showLast" class="detail-btn">
                상세보기
                <img
                  v-if="showLast === false"
                  src="../../../assets/guide_partner/btn_open.png"
                  alt="열기"
                />
                <img
                  v-if="showLast === true"
                  src="../../../assets/guide_partner/btn_close.png"
                  alt="닫기"
                />
              </button>
            </div>
            <div v-if="showLast" class="detail">
              <div class="detail-category">
                <div
                  @click="lastCategory = '메인'"
                  :class="{ select: lastCategory === '메인' }"
                >
                  메인
                </div>
                <div
                  @click="lastCategory = '문구/이미지'"
                  :class="{ select: lastCategory === '문구/이미지' }"
                >
                  문구/이미지
                </div>
              </div>
              <div class="detail-box">
                <div v-if="lastCategory === '메인'" class="img-sub">
                  <div class="img-section">
                    <img
                      v-if="getDevice === 'tablet'"
                      src="../../../assets/guide_partner/ad/banner/라스트tab.png"
                      alt="메인"
                    />
                    <img
                      v-if="getDevice === 'mobile'"
                      src="../../../assets/guide_partner/ad/banner/라스트mob.png"
                      alt="메인"
                    />
                    <img
                      v-if="getDevice === 'pc'"
                      src="../../../assets/guide_partner/ad/banner/라스트pc.png"
                      alt="메인"
                    />
                  </div>
                  <div class="sub">
                    · 브랜드 검색 및 업종별 리스트 사이 영역에 노출됩니다.<br />
                    · 사용자 또는 업종에 따라 랜덤으로 노출됩니다.
                  </div>
                </div>
                <div v-if="lastCategory === '문구/이미지'" class="img-sub">
                  <div class="img-section">
                    <img
                      v-if="getDevice === 'tablet'"
                      src="../../../assets/guide_partner/ad/banner/문구_이미지tab.png"
                      alt="문구/이미지"
                    />
                    <img
                      v-if="getDevice === 'mobile'"
                      src="../../../assets/guide_partner/ad/banner/문구_이미지mob.png"
                      alt="문구/이미지"
                    />
                    <img
                      v-if="getDevice === 'pc'"
                      src="../../../assets/guide_partner/ad/banner/문구_이미지pc.png"
                      alt="문구/이미지"
                    />
                  </div>
                  <div class="sub">
                    · 배너 문구는 제목강조, 본문강조, 전체강조로 3가지 중에
                    자유롭게 선택 가능합니다.<br />
                    · 해당 상품 결제시 [문구작성 및 색상 선택 -> 배경 색상 선택
                    ->이미지 파일 첨부] 하여 등록하실 수 있습니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts" setup>
import { useWindowStore } from '../../../store/window'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const store = useWindowStore()
const { getDevice } = storeToRefs(store)

const showPremium = ref<boolean>(false)
const premiumCategory = ref<string>('해시태그')
const showHope = ref<boolean>(false)
const showHotclip = ref<boolean>(false)
const showRecommend = ref<boolean>(false)
const recommendCategory = ref<string>('업종리스트')
const showRecommendSecond = ref<boolean>(false)
const showTop = ref<boolean>(false)
const topCategory = ref<string>('메인')
const showSpecial = ref<boolean>(false)
const specialCategory = ref<string>('메인')
const showSpecialSecond = ref<boolean>(false)
const specialSecondCategory = ref<string>('메인')
const showSpecialThird = ref<boolean>(false)
const specialThirdCategory = ref<string>('메인')
const showLast = ref<boolean>(false)
const lastCategory = ref<string>('메인')
</script>

<style lang="scss" scoped>
@import '@/scss/main';

article {
  padding: 50px 44px 80px;
  .top-title {
    font-size: 24px;
    color: $fontMain;
    font-weight: $semi;
    border-bottom: 2px solid $fontMain;
    padding-bottom: 20px;
    margin-bottom: 50px;
  }

  .ad-section {
    display: flex;
    flex-direction: column;
    gap: 80px;
    .content {
      display: flex;
      flex-direction: column;
      gap: 30px;
      .title {
        font-size: 18px;
        color: $fontMain;
      }
      .box {
        background-color: white;
        display: flex;
        justify-content: space-between;
        padding: 30px;
        border-radius: 10px;
        border: 1px solid $iconLine;
        z-index: 1;
        .left {
          .name {
            font-size: 18px;
            color: $fontMain;
            font-weight: $medi;
            display: flex;
            align-items: center;
            gap: 6px;
            padding-bottom: 12px;
            img {
              width: 20px;
              height: 20px;
            }
          }
          .sub {
            font-size: 14px;
            color: $fontSub;
          }
        }
        .detail-btn {
          padding: 15px 16px;
          height: 50px;
          border-radius: 10px;
          border: 1px solid $iconLine;
          background-color: white;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 16px;
          color: $fontSub;
          font-family: $pre;
          cursor: pointer;
          img {
            width: 20px;
            height: 20px;
          }
        }
      }
      .style {
        border: 1px solid $mainColor;
      }
      .detail {
        margin-top: -40px;
        background-color: #fafafa;
        padding: 60px 30px 50px;
        border-radius: 10px;
        .detail-category {
          display: flex;
          justify-content: space-around;
          div {
            width: 100%;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: $sectionLine;
            border: 1px solid $iconLine;
            border-bottom: none;
            box-sizing: border-box;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            font-size: 15px;
            color: $fontSub;
            cursor: pointer;
          }
          .select {
            background-color: white;
            color: $mainColor;
          }
        }
        .detail-box {
          .img-sub {
            .img-section {
              background-color: white;
              border: 1px solid $iconLine;
              border-top: none;
              border-bottom-left-radius: 10px;
              border-bottom-right-radius: 10px;
              img {
                width: 100%;
              }
            }
            .no-category {
              border-top: 1px solid $iconLine;
              border-radius: 10px;
            }
            .match {
              padding: 148px 0;
              display: flex;
              justify-content: center;
              align-items: center;
              i {
                font-size: 60px;
                color: $fontMain;
              }
              .icon {
                text-align: center;
                .name {
                  font-size: 14px;
                  color: $fontMain;
                }
              }
              .ready {
                .name {
                  padding-top: 18px;
                }
              }
              .arrow {
                font-size: 30px;
                padding: 0 47px 0 60px;
                color: $subColor;
              }
              .company {
                i {
                  color: $mainColor;
                }
                .name {
                  padding-top: 10px;
                }
              }
            }
            .sub {
              font-size: 14px;
              color: $fontSub;
              line-height: 24px;
              padding-top: 30px;
            }
          }
        }
        .notice {
          font-size: 14px;
          line-height: 24px;
          color: $fontSub;
          border-top: 1px solid $sectionLine;
          padding-top: 30px;
          margin-top: 30px;
          .name {
            color: $fontMain;
            font-weight: $medi;
            padding-bottom: 10px;
            .blue {
              font-size: 12px;
              color: $mainColor;
              padding-left: 10px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}

@include mobile {
  article {
    padding: 0 0 10px 0;
    background-color: $iconLine;
    .ad {
      .ad-section {
        gap: 10px;
        .content {
          gap: 10px;
          .padding {
            padding: 30px 24px 0;
            background-color: white;
            margin-bottom: -10px;
            .title {
              padding-bottom: 20px;
              font-size: 16px;
              border-bottom: 1px solid $sectionLine;
            }
          }
          .box {
            flex-direction: column;
            gap: 30px;
            border-radius: 0;
            border: none;
            .left {
              .name {
                font-size: 16px;
                padding-bottom: 8px;
              }
              .sub {
                font-size: 11px;
              }
            }
            .detail-btn {
              justify-content: center;
              font-size: 14px;
            }
          }
          .style {
            border-bottom: 1px solid $mainColor;
          }
          .detail {
            margin-top: -10px;
            padding: 30px 24px;
            border-radius: 0;
            .detail-category {
              div {
                font-size: 13px;
              }
            }
            .detail-box {
              .match {
                padding: 111px 0;
                i {
                  font-size: 40px;
                }
                .icon {
                  .name {
                    font-size: 12px;
                  }
                }
                .arrow {
                  padding: 0 27px 0 49px;
                }
              }
              .sub {
                font-size: 13px;
                padding-top: 20px;
              }
            }
            .notice {
              font-size: 13px;
              .blue {
                font-size: 11px;
              }
            }
          }
        }
      }
    }
  }
}

@include pc {
  article {
    padding: 50px 0 80px 50px;
    width: 814px;
  }
}
</style>
