// DOM構築が完了したら読み込み
// loadは、速度が遅くなる要因の為、不採用
$(document).ready(function() {
    // .open-modalにmodalを付与
    $('.open-modal').modaal({
        // 特定の場所をクリックしないと閉じないようにロック
        is_locked: true,
    });
    // 各カテゴリをクリックしたら実行
    $('#summary, #blog, #book, #pay').click(() => {
        // モーダルを閉じる
        $('.open-modal').modaal('close');
    }) 
});