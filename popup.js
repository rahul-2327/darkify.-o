document.addEventListener("DOMContentLoaded", () => {
  let btn = document.querySelector('button')
  let value = false
  btn.addEventListener('click', () => {
    value = !value
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { btnOn: value });
    })
    if (btn.textContent === 'on') {
      btn.textContent = 'off';
    } else {
      btn.textContent = 'on';
    }
  })

  // links
  let linkedInUrl = 'https://www.linkedin.com/in/rahul-kumar-05b381245'
  document.querySelector('.linkedIn-btn').addEventListener('click', () => {
    chrome.tabs.create({ url: linkedInUrl })
  })

  document.querySelector('.github-btn').addEventListener('click', () => {
    chrome.tabs.create({ url: "https://github.com/rahul-2327" })
  })
})