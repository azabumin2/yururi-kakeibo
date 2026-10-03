// ★ ここだけ書き換えます ★
// Stripeで作成した「決済リンク（Payment Link）」のURLを、下の payUrl に貼り付けてください。
// 例）https://buy.stripe.com/xxxxxxxxxxxx
// 空のままだと、購入ボタンは「準備中」と表示され、押せません（誤って公開しても安全です）。
window.YK = {
  payUrl: "",
  freeUrl: "https://yururi-kakeibo.booth.pm/items/8917387",
  shopUrl: "https://yururi-kakeibo.booth.pm/"
};
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-pay]").forEach(function (a) {
    if (window.YK.payUrl) {
      a.href = window.YK.payUrl;
      a.removeAttribute("aria-disabled");
    } else {
      a.removeAttribute("href");
      a.setAttribute("aria-disabled", "true");
      a.textContent = "ただいま準備中です";
    }
  });
  document.querySelectorAll("[data-free]").forEach(function (a) { a.href = window.YK.freeUrl; });
});
