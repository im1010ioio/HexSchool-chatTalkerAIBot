# HexSchool-chatTalkerAIBot
六角學院 2022 公益程式體驗營，切版任務二 - chatTalker AI 機器人官網

---

## 助教回覆

### 問題
> 我是用 `input radio` 去控制畫面呈現，Click `label` 的同時想要取得現在已改變的 `value`，然後再依這個去做判斷。但是取到正確的值好像有一點點時間差，不知道是為什麼？目前用 `setTimeout` 去防止出錯，不曉得老師和助教這邊有沒有更好的方式？

這邊推測應該是因為 click `.btn-price` 的瞬間， `checked` 的狀態還是在上一個 `input` ，所以會造成取值時有誤
  
可以參考不同的取值方式，例如從 `click` 的 `button` 取文字 `$(this).text().split("位")[0];`

或是將 `$(".btn-price").click` 這個監聽改為抓 `input` 的改變，如 `$('input[name=plan]').change` 也可以呦

---

### 以下是給你的一些建議：

1. 建議將所有 SCSS 檔案都透過 `all.scss` 引入，不建議將檔案拆開，才不會有其它頁就又要引入其他 CSS，這樣會變成 20 頁就要分別引入 20 個 CSS，導致維護上的困難哦
2. JS 也建議可以統一寫在 `all.js` 就好，不用特別分開
3. `all.scss` 裡面的設定可以移到如 `_base.scss` ，讓 `all.scss` 當作主要引入檔，詳細可以參考[這篇文章](https://israynotarray.com/css/20200523/116058774/)呦
4. [這裡](https://github.com/im1010ioio/HexSchool-chatTalkerAIBot/blob/4bdd366bc21f88f15bc057a2d39530dfe06898f4/scss/index.scss#L324-L325)可以移除
5. 背景圓球的定位建議可以在更接近設計稿，如右邊的圓球設計，可以再多嘗試看看
![](https://s3-us-west-2.amazonaws.com/video-hexschool/teachable/IeSdP8g2vkWpIpx9bAhczEPL1FZ4vlC2iAWZSED5SFmUvfHRZ7Pd7ddOMASuH5NrtVLlHlev1YZSTpS4tkZWUhnPLD6w8iLgMpZO78RQR2DnsJ3RswKtiJ6sKuMn0GUD.png)

6. 手機板時可以調整一下 `price.html` 的 `margin` ，設計稿中是推 `60px` 哦

![](https://s3-us-west-2.amazonaws.com/video-hexschool/teachable/JaUgcyizaFRI1bA5hw7x4JSDzFyCWmYoZBICZyWcTFtoMu2DprFDO9kVb03cyhTJsf74tbY8TjzIMzQSTBaGpnpz3GVC3iYE5Rz42kOHohSReELBy89C9SQyTPCC4ttD.png)

7. 重複的樣式或是斷點的設計都可以試著使用 [mixin](https://awdr74100.github.io/2020-05-30-scss-mixin-include/) 來統整

