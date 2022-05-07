export const disableScroll = (shouldDisable: boolean) => {
  if (shouldDisable) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'initial';
  }
};
