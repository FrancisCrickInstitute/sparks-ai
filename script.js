const copyButton = document.querySelector('.copy-button');
const code = document.querySelector('#code');

copyButton.addEventListener('click', () => {
  const textArea = document.createElement('textarea');
  textArea.value = code.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  alert('Code copied to clipboard');
});
