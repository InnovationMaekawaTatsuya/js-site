// DOM構築が完了したら読み込み
// loadは、速度が遅くなる要因の為、不採用
$(document).ready(function() {
    // 変数 spinner に id=loading 部分の要素を格納
    const spinner = document.getElementById('loading');
    // 変数 spinner に loaded クラスを付与
    spinner.classList.add('loaded');
});