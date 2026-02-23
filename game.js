// elements 
const $slots = document.querySelectorAll('.slot');
const $spinBtn = document.getElementById('spin-button');
const $stopBtn = document.getElementById('stop-button');
const $result = document.getElementById("result");

// slot에 나타낼 이모지
const emojis = ['🍎', '🍌', '🍒', '🍇', '🍉'];

// 슬롯 요소를 전달받아 랜덤한 이모지를 해당 요소에 넣는다
const randomEmoji = (slot) => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    slot.textContent = emojis[randomIndex];
}

// 돌리기 버튼 이벤트리스너 
// 각각 슬롯에 인터벌을 이용해서 계속해서 이모지를 변경해줌
$spinBtn.addEventListener('click', () => {
  $spinBtn.disabled = true; // 혹시 모를 중복 클릭 방지
  $spinBtn.classList.add('hidden');
  $stopBtn.classList.remove('hidden');
  $result.textContent = "";

  // 각각 슬롯의 타이머를 생성한다 
  spinTimer1 = setInterval(() => randomEmoji($slots[0]), 100);
  spinTimer2 = setInterval(() => randomEmoji($slots[1]), 100);
  spinTimer3 = setInterval(() => randomEmoji($slots[2]), 100);
});

$stopBtn.addEventListener('click', () => {
  // 1번 슬롯부터 1초 간격으로 타이머 종료
  setTimeout(() => {
    clearInterval(spinTimer1);
  }, 0);
  setTimeout(() => {
    clearInterval(spinTimer2);
  }, 1000);
  // 마지막 종료시에 초기화를 진행하며 결과를 출력한다
  setTimeout(() => {
    clearInterval(spinTimer3);
    $stopBtn.classList.add('hidden');
    $spinBtn.classList.remove('hidden');
    $spinBtn.disabled = false;
    const result = $slots[0].textContent === $slots[1].textContent && $slots[1].textContent === $slots[2].textContent ? '축하합니다! 모두 일치합니다!' : '아쉽지만 다시 시도해보세요!';

    $result.textContent = result;
  }, 2000);
});