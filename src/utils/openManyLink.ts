function openManyLink(linksToOpen: string[]): void {
  linksToOpen.forEach( link => {
    window.open(link, '_blank');
  });
};