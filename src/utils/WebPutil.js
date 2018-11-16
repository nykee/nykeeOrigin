export function checkWebp() {
  try{
    return (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0);
  }catch(err) {
    return  false;
  }
}

