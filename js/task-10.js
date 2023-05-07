function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//  мабуть колись зроблю, слава богу не потрібно робити, голова репається