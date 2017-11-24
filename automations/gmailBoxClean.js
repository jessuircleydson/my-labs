const clearEmailBox = () => {
  let checkall = document.querySelector('span[aria-checked="false"]');
  setInterval(function(){  
    let btnexcluir = document.querySelector('div[aria-label="Excluir"]');
    checkall.click();
    console.info("all emails checked");
    btnexcluir.dispatchEvent(new MouseEvent("mousedown"));
    btnexcluir.dispatchEvent(new MouseEvent("mouseup"));
    console.info("deleting emails...");
  },3000);
}
