const ligarDesligar = (status) => {
  status = status === 'ligado' ? 'desligado' : 'ligado';
  console.log(`O motor está ${status}`);
  return status;
};
