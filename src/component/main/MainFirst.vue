<template>
  <section id="main-first">
    <div class="title">
      <div class="title-padding">성공적인 사업파트너,</div>
      <div><span>창업픽</span>과 함께 하세요!</div>
    </div>

    <div class="hand">
      <img src="../../assets/main/hand.png" alt="악수" />
    </div>

    <div class="value">
      <div class="box">
        <div class="value-title">영업중인 프랜차이즈</div>
        <div class="value-number">{{ franchiseCount.toLocaleString() }}+</div>
      </div>

      <div class="box">
        <div class="value-title">창업픽 앱 다운로드</div>
        <div class="value-number">{{ downloadCount.toLocaleString() }}+</div>
      </div>

      <div class="box">
        <div class="value-title">월 방문자 수</div>
        <div class="value-number">{{ monthVisitCount.toLocaleString() }}+</div>
      </div>

      <div class="box">
        <div class="value-title">재방문율</div>
        <div class="value-number">
          {{ Math.floor(visitPer).toLocaleString() }}%+
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const franchiseCount = ref<number>(0)
const downloadCount = ref<number>(0)
const monthVisitCount = ref<number>(0)
const visitPer = ref<number>(0)

class NumberCounter {
  count = 0 // 시작 값 (현재 값)
  diff = 0 // 카운트 할 값에서 현재 값을 뺀 값
  target_count: number // 카운트 할 값
  duration: number // 카운트 지속 시간
  type: string // 카운트 타입
  timer: null | ReturnType<typeof setTimeout> = null // 타이머

  /**
   * 클래스 생성자
   * @param target_number // 타겟의 최종 값을 전달
   * @param duration // 카운트의 지속 시간 전달
   * @param type // 카운트 타입 전달
   */
  constructor(target_number: number, duration: number, type: string) {
    this.target_count = target_number
    this.duration = duration
    this.type = type
    this.counter()
  }

  counter(): void {
    this.diff = this.target_count - this.count

    // this.target_count / this.duration 은 최종 값이 틀려도 같은 시간에 끝 낼 수 있도록 최종 값에서 시간으로 나눈다
    // 위 값이 this.count 와 더해졌을 때 최종 값 보다 크다면 this.count 에 this.diff 값을 더해준다
    if (this.count + this.target_count / this.duration < this.target_count) {
      this.count += this.target_count / this.duration
    } else {
      this.count += this.diff
    }

    // 각 카운트 타입에 맞게 값을 재 할당 (소수점을 버리기 위해 Math.floor로 감싸 줘야 한다)
    if (this.type === 'franchiseCount') {
      franchiseCount.value = Math.floor(this.count)
    } else if (this.type === 'downloadCount') {
      downloadCount.value = Math.floor(this.count)
    } else if (this.type === 'monthVisitCount') {
      monthVisitCount.value = Math.floor(this.count)
    } else {
      visitPer.value = Math.floor(this.count)
    }

    // this.count 값이 최종 값보다 작을 때 setTimeout으로 1ms 후에 자기 자신을 호출한다 (이 부분 이해 안되면 재귀함수 검색해서 찾아볼 것)
    // this.count 가 최종 값보다 크거나 같다면 타이머를 해제하고 함수 종료
    if (this.count < this.target_count) {
      this.timer = setTimeout(() => {
        this.counter()
      }, 1)
    } else {
      if (this.timer) clearTimeout(this.timer)
    }
  }
}

// 1000ms = 1s 이여서 duration 전달 값에 2000을 줘야 2초로 지속되지만 실제 setTimeout 동작시 setTimeout의 호출이 중접될 경우 딜레이가 더 생길 수 있다
// 그래서 200으로 설정 해줘도 2초에 근접한 작동 시간이 걸린다
new NumberCounter(11000, 200, 'franchiseCount')
new NumberCounter(10000, 200, 'downloadCount')
new NumberCounter(50000, 200, 'monthVisitCount')
new NumberCounter(30, 200, 'visitPer')
</script>

<style lang="scss" scoped>
@import '@/scss/main';

#main-first {
  margin: 30px 0 80px 0;

  .title {
    font-size: 34px;
    font-weight: $semi;
    color: $fontMain;
    position: absolute;
    top: 140px;
    left: 50%;
    transform: translate(-50%, 0%);

    div {
      display: flex;
      justify-content: center;
      span {
        color: $mainColor;
      }
    }

    .title-padding {
      padding-bottom: 20px;
    }
  }

  .hand {
    padding-bottom: 80px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .value {
    display: flex;
    justify-content: center;
    gap: 30px;
    text-align: center;
    align-items: center;

    .box {
      width: 276px;
      height: 150px;
      border: 1px solid $sectionLine;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);

      .value-title {
        font-size: 16px;
        color: $fontSub;
        padding-bottom: 4px;
      }

      .value-number {
        font-size: 36px;
        color: $mainColor;
        font-weight: $bold;
      }
    }
  }
}

@include tablet {
  #main-first {
    margin: 80px 0;

    .title {
      position: static;
      transform: none;
    }

    .value {
      @include tablet-container();
      gap: 24px;

      .box {
        width: 100%;

        .value-title {
          padding-bottom: 12px;
        }

        .value-number {
          font-size: 30px;
        }
      }
    }
  }
}

@include mobile {
  #main-first {
    margin: 60px 0;

    .title {
      font-size: 24px;
      position: static;
      transform: none;
    }

    .hand {
      padding-bottom: 60px;
    }

    .value {
      width: 100%;
      padding: 0 16px;
      box-sizing: border-box;
      flex-wrap: wrap;
      gap: 8px;

      .box {
        width: 45%;

        .value-title {
          font-size: 14px;
          padding-bottom: 14px;
        }

        .value-number {
          font-size: 28px;
        }
      }
    }
  }
}
</style>
